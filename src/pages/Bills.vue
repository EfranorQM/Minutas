<template>
  <div class="q-py-lg q-px-xl bg-grey-2 background-height">
    <div class="row q-mb-xs">
      <div class="title">MINUTAS</div>
      <InteractionOptions
        v-if="showInteractionOptions"
        :selected="selected"
        :createFunction="createNew"
        :editFunction="editRow"
        :deleteFunction="openDelete"
      />
    </div>
    <q-separator />
    <div v-if="loadingState">
      <q-spinner-tail class="absolute-center text-default" size="5em" />
    </div>
    <TableView
      v-else-if="hasBills"
      :key="reRenderTable"
      :information="bills"
      :columns="columns"
      :visibleColumns="visibleColumns"
      @selection="selected = $event"
    />
    <div v-else class="text-center">
      <div class="empty-state normal-section empty-bills"></div>
      <h3 class="empty-copy">No hay registros aún..</h3>
      <q-btn
        v-if="allowCreate"
        color="positive"
        class="text-capitalize"
        label="PRIMER REGISTRO"
        @click="createNew"
      />
    </div>
  </div>
</template>

<script>
import TableView from '../components/table-view/TableView';
import DeleteTemplate from '../components/delete-template/DeleteTemplate';
import InteractionOptions from '../components/interaction-options/InteractionOptions';
import {
  LS_USER_INFO,
  LS_CREATING_BILLS,
  getPossibleRoutes,
  getColumnsForTable,
  ROUTES,
} from '../commons/constants';
import { titles, staticColumns } from '../data/titlesBanks/bills';

export default {
  name: 'Bills',
  components: { TableView, InteractionOptions },
  data() {
    return {
      reRenderTable: 0,
      loadingState: true,
      selected: [],
      visibleColumns: staticColumns,
    };
  },
  computed: {
    user() {
      return this.$q.localStorage.getItem(LS_USER_INFO);
    },
    bills() {
      return this.$store.getters['bills/list'];
    },
    columns() {
      return getColumnsForTable(this.bills, titles, staticColumns);
    },
    hasBills() {
      return this.bills && this.bills.length;
    },
    allowCreate() {
      return this.user?.type !== 'supervisor';
    },
    showInteractionOptions() {
      return this.allowCreate && this.hasBills;
    },
  },
  methods: {
    // CRUD Actions
    createNew() {
      this.storeAndRedirect({ created: true });
    },
    editRow() {
      this.storeAndRedirect({ created: false, id: this.selected[0].id });
    },
    async deleteRows(infoDelete) {
      await this.$store.dispatch('bills/remove', infoDelete);
    },

    // Interactions
    openDelete() {
      this.$q
        .dialog({
          component: DeleteTemplate,
          parent: this,
          dataShow: this.organizeDataToDelete(this.selected),
          dataDelete: this.selected,
          deleteFunction: this.deleteRows,
        })
        .onOk(() => {
          this.resetTable();
        })
        .onDismiss(this.getData);
    },

    // Helpers
    storeAndRedirect(data) {
      this.$q.localStorage.set(LS_CREATING_BILLS, data);
      this.$router.replace(ROUTES.bills.alterBills);
    },
    organizeDataToDelete(info) {
      return info.map(({ issueType, date, userSession }) => ({
        principal: issueType,
        caption: date,
        side: userSession,
      }));
    },
    resetTable() {
      this.selected = [];
      this.reRenderTable += 1; // Sustitución del operador `++`.
    },
    getData() {
      this.$store.dispatch('bills/get').finally(() => {
        this.loadingState = false;
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!vm.user) {
        next('/');
      } else {
        const validRoutes = getPossibleRoutes(vm.user.type);
        if (!validRoutes.includes(to.path)) {
          next(validRoutes[0]);
        } else {
          next();
        }
      }
    });
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped lang="stylus">
@import '../css/app.styl';
</style>
