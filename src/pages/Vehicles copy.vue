<template>
  <div class="q-py-lg q-px-xl bg-grey-2 background-height">
    <!-- Primera Tabla: Vehículos Disponibles -->
    <div class="row q-mb-xs">
      <div class="title">VEHÍCULOS DISPONIBLES</div>
    </div>
    <q-separator />
    <div v-if="loading">
      <q-spinner-tail class="absolute-center text-default" size="5em" />
    </div>
    <TableView
      v-else-if="vehicles && vehicles.length"
      :key="`vehicles-${reRenderTable}`"
      :information="vehicles"
      :columns="columns"
      :visibleColumns="visibleColumns"
    />
    <div v-else class="text-center">
      <div class="empty-state normal-section empty-vehicles"></div>
      <h3 class="empty-copy">No hay vehículos disponibles.</h3>
    </div>

    <!-- Separador entre tablas -->
    <q-separator class="q-my-md" />

    <!-- Segunda Tabla: Empleados Disponibles -->
    <div class="row q-mb-xs">
      <div class="title">EMPLEADOS DISPONIBLES</div>
    </div>
    <q-separator />
    <div v-if="loadingEmployees">
      <q-spinner-tail class="absolute-center text-default" size="5em" />
    </div>
    <TableView
      v-else-if="employees && employees.length"
      :key="`employees-${reRenderTable}`"
      :information="employees"
      :columns="employeeColumns"
      :visibleColumns="visibleEmployeeColumns"
    />
    <div v-else class="text-center">
      <div class="empty-state normal-section empty-employees"></div>
      <h3 class="empty-copy">No hay empleados disponibles.</h3>
    </div>
  </div>
</template>

<script>
import TableView from '../components/table-view/TableView';
import { LS_USER_INFO, getColumnsForTable } from '../commons/constants';
import vehicles from '../commons/api/vehicles';
import employees from '../commons/api/employees';
import { titles as vehicleTitles, staticColumns as vehicleStaticColumns } from '../data/titlesBanks/vehicles';
import { titles as employeeTitles, staticColumns as employeeStaticColumns } from '../data/titlesBanks/employees';

export default {
  name: 'VehiclesAndEmployees',
  components: {
    TableView,
  },
  data() {
    return {
      reRenderTable: 0,
      loading: true,
      loadingEmployees: true,
      vehicles: [],
      employees: [],
      visibleColumns: vehicleStaticColumns,
      visibleEmployeeColumns: employeeStaticColumns,
    };
  },
  computed: {
    user() {
      return this.$q.localStorage.getItem(LS_USER_INFO);
    },
    columns() {
      // Columnas dinámicas para vehículos
      return getColumnsForTable(this.vehicles, vehicleTitles, vehicleStaticColumns);
    },
    employeeColumns() {
      // Columnas dinámicas para empleados
      return getColumnsForTable(this.employees, employeeTitles, employeeStaticColumns);
    },
  },
  methods: {
    async fetchVehicles() {
      try {
        this.loading = true;
        const response = await vehicles.getAvailable();
        this.vehicles = response.data;
      } catch (error) {
        console.error('Error al obtener los vehículos disponibles:', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchEmployees() {
      try {
        this.loadingEmployees = true;
        const response = await employees.getAvailable();
        this.employees = response.data;
        console.log('Datos de empleados disponibles:', this.employees);
      } catch (error) {
        console.error('Error al obtener los empleados disponibles:', error);
      } finally {
        this.loadingEmployees = false;
      }
    },
  },
  async created() {
    this.fetchVehicles();
    this.fetchEmployees();
  },
};
</script>
