<template>
  <div class="q-pa-md q-gutter-sm bg-grey-2 background-height relative-position">
    <q-breadcrumbs>
      <q-breadcrumbs-el
        label="Minutas"
        icon="assignment"
        :to="ROUTES.bills.bills"
      />
      <q-breadcrumbs-el
        :label="action.created ? 'Crear' : 'Modificar'"
        :icon="action.created ? 'attach_file' : 'edit'"
      />
    </q-breadcrumbs>
    <div v-if="loadingState">
      <q-spinner-tail
        class="absolute-center text-default"
        size="5em"
      />
    </div>
    <q-list
      bordered class="rounded-borders"
      v-else-if="withIssueTypes && withEmployees"
    >
      <q-expansion-item
        expand-separator
        icon="account_circle"
        label="Datos"
        :default-opened="true"
        :caption="!action.created ? billData.employee : null"
      >
        <q-card>
          <q-card-section>
            <q-form
              @submit="onSubmit"
            >
              <div v-if="!action.created" class="q-mb-xs text-center text-bold q-py-xs note">
                Solo esta permitido modificar la descripción, si crees que es necesario
                puedes crear una nueva nota.
              </div>
              <div class="row q-mb-xs text-bold">
                Información principal:
              </div>
              <div class="row">
              <q-select
                filled
                v-model="billData.userSession"
                class="ControlForm col q-mr-md"
                label="Usuario en sesión"
                :options="employees"
                readonly
                option-value="id"
                option-label="person"
                stack-label
                lazy-rules
                :rules="[]"
              />
              <q-input
                filled
                v-model="billData.date"
                disable
                class="ControlForm col-2 q-mr-md"
                label="Fecha"
                stack-label
                readonly
                :rules="[ val => val && val.length > 0  || 'Por favor ingresa una fecha' ]"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="billData.date"
                        mask="DD/MM/YYYY"
                        :options="maxDateIsToday"
                        @input="() => $refs.qDateProxy.hide()"
                      />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input
                filled
                v-model="billData.hour"
                mask="time"
                disable
                class="ControlForm col-2 q-mr-md"
                label="Hora"
                stack-label
                readonly
                :rules="[ val => val && val.length > 0  || 'Por favor ingresa una hora' ]"
              >
                <template v-slot:append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-time v-model="billData.hour" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-select
                filled
                class="ControlForm col-3"
                :readonly="!action.created"
                v-model="billData.issueType"
                label="Asunto"
                :options="issueTypes"
                option-value="id"
                option-label="name"
                stack-label
                lazy-rules
                :rules="[]"
              />
              </div>
              <div class="row">
                <q-input
                  filled
                  autogrow
                  v-model="billData.description"
                  class="ControlForm col-5"
                  label="Descripción"
                  stack-label
                  lazy-rules
                  :rules="[]"
                />
              </div>
              <div v-if="billData.issueType
                && billData.issueType.name === 'Recepción de emergencia'">
                <div class="row q-mb-xs text-bold">
                  Información Emergencia:
                </div>
                <div class="row">
                  <q-select
                    filled
                    v-model="emergency.state"
                    class="ControlForm col-3 q-mr-md"
                    :options="['En seguimiento', 'Terminada', 'Falsa alarma']"
                    label="Estado"
                    stack-label
                    lazy-rules
                    :rules="[ val => val && val.length > 0 ||
                    'Por favor selecciona un estado']"
                  />
                  <SelectionInput
                    class="col q-mr-md"
                    v-model="emergency.event"
                    :readonly="!action.created"
                    :searchParent="emergency.event"
                    :optionsMenu="events"
                    optionValue="id"
                    optionLabel="name"
                    :filled="true"
                    label="Evento"
                    :hint="emergency.event ? ''
                      : 'Escribe por lo menos dos letras, ten en cuenta las tildes.'"
                    :rules="[ () => emergency.event || 'Por favor selecciona un evento']"
                  />
                </div>
                <div class="row">
                  <q-input
                    filled
                    v-model="emergency.address"
                    :readonly="!action.created"
                    class="ControlForm col-4 q-mr-md"
                    label="Dirección"
                    stack-label
                    lazy-rules
                    :rules="[ val => billData.issueType.name === 'Recepción de emergencia'
                      ? ( val && val.length > 0 ? true : 'Por favor ingrese una dirección' )
                        : true ]"
                  />
                  <q-input
                    filled
                    v-model="emergency.neighborhood"
                    :readonly="!action.created"
                    class="ControlForm col-4 q-mr-md"
                    label="Barrio"
                    stack-label
                    lazy-rules
                    :rules="[ val => billData.issueType.name === 'Recepción de emergencia'
                      ? ( val && val.length > 0 ? true : 'Por favor ingrese un barrio' )
                        : true ]"
                  />
                </div>
                <div class="row q-mb-xs text-bold">
                  Quien que reporta:
                </div>
                <div class="row">
                  <q-select
                    filled
                    v-model="emergency.report.type"
                    :readonly="!action.created"
                    class="ControlForm col"
                    label="Tipo"
                    :options="reportTypes"
                    option-value="id"
                    option-label="name"
                    stack-label
                    lazy-rules
                    :rules="[]"
                  />
                </div>
                <div class="row">
                  <q-input
                    filled
                    v-model="emergency.report.name"
                    :readonly="!action.created"
                    class="ControlForm col-4 q-mr-md"
                    label="Nombre"
                    stack-label
                    lazy-rules
                    :rules="[ val => billData.issueType.name === 'Recepción de emergencia'
                      ? ( val && val.length > 0 ? true : 'Por favor ingrese un nombre' )
                        : true ]"
                  />
                  <q-input
                    filled
                    v-model="emergency.report.document"
                    :readonly="!action.created"
                    class="ControlForm col-3 q-mr-md"
                    type="number"
                    :min="0"
                    label="Documento"
                    stack-label
                    lazy-rules
                    :rules="[ val => billData.issueType.name === 'Recepción de emergencia'
                      ? ( val && val.length > 0 ? ( val && val > 0 && val.length <= 10 ? true
                        : 'Numero Invalido' ) : 'Por favor ingrese un documento' ) : true ]"
                  />
                  <q-input
                    filled
                    v-model="emergency.report.phone"
                    :readonly="!action.created"
                    class="ControlForm col"
                    label="Telefono"
                    type="number"
                    :min="0"
                    stack-label
                    lazy-rules
                    :rules="[ val => billData.issueType.name === 'Recepción de emergencia'
                      ? ( val && val.length > 0 ? ( val && val > 0 && val.length <= 10 ? true
                        : 'Numero Invalido' ) : 'Por favor ingrese un telefono' ) : true ]"
                  />
                </div>
              </div>
              <div v-if="billData.issueType
                && billData.issueType.name === 'Entrada de personal' ||
                billData.issueType && billData.issueType.name === 'Salida de personal'">
                <div class="row q-mb-xs text-bold">
                  Información entrada/salida del personal:
                </div>
                  <q-select
                    filled
                    v-model="personal.employee"
                    :readonly="!action.created"
                    class="ControlForm col q-mr-md"
                    label="Empleado"
                    :options="employees"
                    option-value="id"
                    :option-label="(item) => item === null ? ''
                      : `${item.person} - ${item.code}`"
                    stack-label
                    lazy-rules
                    :rules="[]"
                  />
                  <div v-if="action.created">
                    <q-btn
                      :loading="loading"
                      color="blue"
                      class="full-width"
                      label="Registrar Mediante Huella"
                      @click="registrarConHuella"
                    />
                  </div>
              </div>
              <br>
              <div v-if="billData.issueType && (billData.issueType.name === 'Entrada visitante' || billData.issueType.name === 'Salida visitante')">
  <div class="row q-mb-xs text-bold">
    Información {{ billData.issueType.name === 'Entrada visitante' ? 'entrada' : 'salida' }} de visitante:
  </div>

  <!-- Selector para Salida de Visitantes -->
  <q-select
    v-if="billData.issueType.name === 'Salida visitante'"
    filled
    v-model="visitor.selected"
    class="ControlForm col-5 q-mr-md"
    label="Seleccionar visitante"
    :options="visitors"
    option-value="id"
    :option-label="(visitor) => `${visitor.name} - ${visitor.document}`"
    stack-label
    lazy-rules
    :rules="[ val => val || 'Por favor selecciona un visitante' ]"
  />

  <!-- Campos de datos para Entrada de Visitantes -->
  <div v-if="billData.issueType.name === 'Entrada visitante'" class="row">
    <q-input
      filled
      v-model="visitor.name"
      :readonly="!action.created"
      class="ControlForm col-5 q-mr-md"
      label="Nombre"
      stack-label
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Por favor ingrese un nombre' ]"
    />
    <q-input
      filled
      v-model="visitor.document"
      :readonly="!action.created"
      class="ControlForm col q-mr-md"
      label="Documento"
      type="number"
      :min="0"
      stack-label
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Por favor ingrese un documento válido' ]"
    />
    <q-input
      filled
      v-model="visitor.phone"
      :readonly="!action.created"
      class="ControlForm col"
      label="Teléfono"
      type="number"
      :min="0"
      stack-label
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Por favor ingrese un teléfono válido' ]"
    />
  </div>
</div>


<div v-if="billData.issueType && (billData.issueType.name === 'Entrada de máquina' || billData.issueType.name === 'Salida de máquina')">
  <div class="row q-mb-xs text-bold">
    Información entrada/salida de máquina:
  </div>

  <div class="row">
    <q-select
      filled
      v-model="machine.employee"
      :readonly="!action.created"
      class="ControlForm col q-mr-md"
      label="Empleado que reporta"
      :options="employees"
      option-value="id"
      :option-label="(item) => item === null ? '' : `${item.person} - ${item.code}`"
      stack-label
      lazy-rules
      :rules="[]"
    />
    <q-select
      filled
      v-model="machine.vehicle"
      :readonly="!action.created"
      class="ControlForm col-2 q-mr-md"
      label="Vehículo"
      :options="vehicles"
      option-value="id"
      option-label="name"
      stack-label
      lazy-rules
      @input="updateElements"
      :rules="[]"
    />
    <q-select
      filled
      v-model="machine.crewmans"
      :readonly="!action.created"
      use-chips
      multiple
      class="ControlForm col"
      label="Tripulantes"
      :options="employees"
      option-value="id"
      option-label="person"
      stack-label
      lazy-rules
      :rules="[]"
    />
  </div>

  <!-- Descripción y Emergencia solo en Salida de máquina -->
  <div class="row" v-if="billData.issueType && billData.issueType.name === 'Salida de máquina'">
    <q-select
      v-model="machine.selectedEmergency"
      :readonly="!action.created"
      class="ControlForm col q-mr-md"
      filled
      label="Seleccionar Emergencia (Opcional)"
      :options="emergencies"
      option-value="id"
      option-label="descripcion"
      stack-label
      lazy-rules
      @focus="loadEmergencies"
    />
  </div>

  <div class="row">
    <q-select
      v-model="machine.newElements"
      :readonly="!action.created"
      class="ControlForm col"
      filled
      use-chips
      multiple
      :loading="loadChangeVehicle"
      :options="elements"
      option-value="id"
      :option-label="(item) => item === null ? '' : `${item.name} - ${item.inventoryCode}`"
      label="Elementos"
      stack-label
      lazy-rules
      :hint="elements && elements.length ? 'Selecciona los elementos que poseerá el vehículo' : 'No hay elementos disponibles'"
      :rules="[]"
    />
  </div>
</div>

              <div v-if="billData.issueType && billData.issueType.name === 'Entrada extintor(es)' ||
                billData.issueType && billData.issueType.name === 'Salida extintor(es)'">
                <div class="row q-mb-xs text-bold">
                  Información entrada/salida de Extintor(es):
                </div>
                <div class="row">
                  <q-select
                    filled
                    v-model="extinguisher.extinguisherType"
                    :readonly="!action.created"
                    class="ControlForm col-3 q-mr-md"
                    label="Tipo"
                    :options="extinguisherTypes"
                    option-value="id"
                    option-label="name"
                    stack-label
                    lazy-rules
                    :rules="[]"
                  />
                  <q-input
                    filled
                    v-model="extinguisher.capacity"
                    :readonly="!action.created"
                    class="ControlForm col-3"
                    label="Capacidad"
                    mask="# lb"
                    fill-mask="0"
                    reverse-fill-mask
                    :min="0"
                    stack-label
                    lazy-rules
                    :rules="[ val => billData.issueType.name === 'Entrada extintor(es)' ||
                      billData.issueType.name === 'Salida extintor(es)' ? ( val && val.length > 0
                      ? ( val && val.length <= 20 ? true : 'Longitud maxima de 20 carácteres' )
                        : 'Por favor ingrese una capacidad' ) : true ]"
                  />
                </div>
                <div class="row q-mb-xs text-bold">
                  Propietario:
                </div>
                <div class="row">
                  <q-input
                    filled
                    v-model="extinguisher.owner.name"
                    :readonly="!action.created"
                    class="ControlForm col-5 q-mr-md"
                    label="Nombre"
                    stack-label
                    lazy-rules
                    :rules="[ val => billData.issueType.name === 'Entrada extintor(es)' ||
                      billData.issueType.name === 'Salida extintor(es)' ? ( val && val.length > 0
                        ? true : 'Por favor ingrese un nombre' ) : true ]"
                  />
                  <q-input
                    filled
                    v-model="extinguisher.owner.document"
                    :readonly="!action.created"
                    class="ControlForm col q-mr-md"
                    label="Documento"
                    type="number"
                    :min="0"
                    stack-label
                    lazy-rules
                    :rules="[ val => billData.issueType.name === 'Entrada extintor(es)' ||
                      billData.issueType.name === 'Salida extintor(es)' ? ( val && val.length > 0
                        ? ( val && val > 0 && val.length <= 10 ? true : 'Numero Invalido' )
                          : 'Por favor ingrese un documento' ) : true ]"
                  />
                  <q-input
                    filled
                    v-model="extinguisher.owner.phone"
                    :readonly="!action.created"
                    class="ControlForm col"
                    label="Telefono"
                    type="number"
                    :min="0"
                    stack-label
                    lazy-rules
                    :rules="[ val => billData.issueType.name === 'Entrada extintor(es)' ||
                      billData.issueType.name === 'Salida extintor(es)' ? ( val && val.length > 0
                        ? ( val && val > 0 && val.length <= 10 ? true : 'Numero Invalido' )
                          : 'Por favor ingrese un telefono' ) : true ]"
                  />
                </div>
                <div class="row">
                  <q-select
                    filled
                    v-model="extinguisher.reason"
                    :readonly="!action.created"
                    class="ControlForm col-3 q-mr-md"
                    :options="['Nota de servicio', 'Prestamo']"
                    label="Razon"
                    stack-label
                    lazy-rules
                    :rules="[ val => val && val.length > 0 ||
                    'Por favor selecciona una razon']"
                  />
                  <q-input
                    filled
                    autogrow
                    v-model="extinguisher.descriptionReason"
                    :readonly="!action.created"
                    class="ControlForm col-5"
                    :label="extinguisher.reason"
                    stack-label
                    lazy-rules
                    :rules="[]"
                  />
                </div>
              </div>
              <div v-if="billData.issueType && billData.issueType.name === 'Relevo'">
                <div class="row q-mb-xs text-bold">
                  Información Relevo
                </div>
                <div class="row">
                  <q-select
                    filled
                    v-model="relief.employeeDelivery"
                    :readonly="!action.created"
                    class="ControlForm col q-mr-md"
                    label="Entrega"
                    :options="employees"
                    option-value="id"
                    option-label="person"
                    stack-label
                    lazy-rules
                    :rules="[ val => val && val.id
                      || 'Es necesario especificar el empleado que entrega el turno']"
                  />
                  <q-select
                    filled
                    v-model="relief.employeeReceives"
                    :readonly="!action.created"
                    class="ControlForm col q-mr-md"
                    label="Recibe"
                    :options="employees"
                    option-value="id"
                    option-label="person"
                    stack-label
                    lazy-rules
                    :rules="[ val => val && val.id
                      || 'Es necesario especificar el empleado que recibe el turno']"
                  />
                </div>
                <div class="row">
                  <q-input
                    filled
                    autogrow
                    v-model="relief.tasksExecuted"
                    :readonly="!action.created"
                    class="ControlForm col q-mr-md"
                    label="Tareas ejecutadas"
                    stack-label
                    lazy-rules
                    :rules="[]"
                  />
                  <q-input
                    filled
                    autogrow
                    v-model="relief.slogans"
                    :readonly="!action.created"
                    class="ControlForm col q-mr-md"
                    label="Consignas"
                    stack-label
                    lazy-rules
                    :rules="[]"
                  />
                  <q-input
                    filled
                    autogrow
                    v-model="relief.news"
                    :readonly="!action.created"
                    class="ControlForm col"
                    label="Novedades"
                    stack-label
                    lazy-rules
                    :rules="[]"
                  />
                </div>
              </div>
              <div v-if="billData.issueType && billData.issueType.name === 'Novedades en máquinas'">
                <div class="row q-mb-xs text-bold">
                  Información Novedades de máquinas
                </div>
                <div class="row">
                  <q-select
                    filled
                    v-model="noveltyMachine.employeeReport"
                    :readonly="!action.created"
                    class="ControlForm col q-mr-md"
                    label="Empleado que reporta"
                    :options="employees"
                    option-value="id"
                    :option-label="(item) => item === null ? ''
                      : `${item.person} - ${item.position}`"
                    stack-label
                    lazy-rules
                    :rules="[]"
                  />
                  <q-select
                    filled
                    v-model="noveltyMachine.vehicle"
                    :readonly="!action.created"
                    class="ControlForm col q-mr-md"
                    label="Vehiculo"
                    :options="vehicles"
                    option-value="id"
                    option-label="name"
                    stack-label
                    lazy-rules
                    :rules="[]"
                  />
                  <q-select
                    filled
                    v-model="noveltyMachine.novelthyType"
                    :readonly="!action.created"
                    class="ControlForm col q-mr-md"
                    label="Tipo de novedad"
                    :options="novelthyTypes"
                    option-value="id"
                    option-label="name"
                    stack-label
                    lazy-rules
                    :rules="[]"
                  />
                </div>
                <div class="row">
                  <q-input
                    filled
                    autogrow
                    v-model="noveltyMachine.novelthyDescription"
                    :readonly="!action.created"
                    class="ControlForm col-5"
                    label="Descripción de novedad"
                    stack-label
                    lazy-rules
                    :rules="[]"
                  />
                </div>
              </div>
              <div v-if="billData.issueType && billData.issueType.name === 'Nota'">
                <div class="row q-mb-xs text-bold">
                  Información de la Nota:
                </div>
                <div class="row">
                  <q-input
                    filled
                    v-model="notes.name"
                    :readonly="!action.created"
                    class="ControlForm col-5 q-mr-md"
                    label="Nombre"
                    stack-label
                    lazy-rules
                    :rules="[ val => billData.issueType.name === 'Nota' ? ( val && val.length > 0
                        ? true : 'Por favor ingrese un nombre' ) : true ]"
                  />
                  <q-input
                    filled
                    v-model="notes.document"
                    :readonly="!action.created"
                    class="ControlForm col q-mr-md"
                    label="Documento"
                    type="number"
                    :min="0"
                    stack-label
                    lazy-rules
                    :rules="[ val => billData.issueType.name === 'Nota' ? ( val && val.length > 0
                      ? ( val && val > 0 && val.length <= 10 ? true : 'Numero Invalido' )
                        : 'Por favor ingrese un documento' ) : true ]"
                  />
                  <q-input
                    filled
                    v-model="notes.phone"
                    :readonly="!action.created"
                    class="ControlForm col"
                    label="Telefono"
                    type="number"
                    :min="0"
                    stack-label
                    lazy-rules
                    :rules="[ val => billData.issueType.name === 'Nota' ? ( val && val.length > 0
                      ? ( val && val > 0 && val.length <= 10 ? true : 'Numero Invalido' )
                        : 'Por favor ingrese un telefono' ) : true ]"
                  />
                </div>
              </div>
              <q-btn
                :label="action.created ? 'GUARDAR' : 'ACTUALIZAR DATOS'"
                :loading="loading"
                class="full-width"
                type="submit"
                color="positive"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <div v-else-if="!withIssueTypes" class="text-center">
      <div class="empty-state normal-section empty-issueTypes"></div>
      <h4 class="empty-copy"> No hay asuntos disponibles </h4>
      <q-btn
        v-if="user.type !== 'supervisor' && (user.type === 'minuta'
          || user.type === 'administrador-general')"
        color="positive"
        style="height:min-content"
        class="text-capitalize"
        label="LISTAR ASUNTOS"
        :to="ROUTES.bills.issueTypes"
      />
    </div>
    <div v-else-if="!withEmployees" class="text-center">
      <div class="empty-state normal-section empty-curriculum"></div>
      <h4 class="empty-copy"> No hay empleados disponibles </h4>
      <q-btn
        v-if="user.type !== 'supervisor' && (user.type === 'personal'
          || user.type === 'administrador-general')"
        color="positive"
        style="height:min-content"
        class="text-capitalize"
        label="LISTAR HOJAS DE VIDA"
        :to="ROUTES.personal.curriculum"
      />
    </div>
  </div>
</template>

<style lang="stylus">
@import '../css/app.styl';

.q-field--filled.q-field--readonly .q-field__control:before {
  border-bottom-style: hidden;
}

.note {
  border-radius: 20px;
  background: $primary;
  color: white;
}
</style>

<script>
import { date } from 'quasar';
import {
  ROUTES,
  ERROR_NOTIFICATION,
  SUCCESS_NOTIFICATION,
  LS_CREATING_BILLS,
  LS_USER_INFO,
  getPossibleRoutes,
} from '../commons/constants';
import NotificationMixin from '../mixins/notifications';
import billModel from '../commons/models/bill';
import SelectionInput from '../components/selection-input/SelectionInput';
import { getError } from '../utils/helpers';

const { formatDate } = date;
const today = Date.now();

export default {
  name: 'AlterBills',
  components: {
    SelectionInput,
  },
  mixins: [
    NotificationMixin,
  ],
  data() {
  const today = Date.now(); // Define `today` localmente para evitar problemas
  return {
    emergencies: [], // Emergencias en seguimiento
    loadingState: true,
    billData: {
      date: date.formatDate(today, 'DD/MM/YYYY'), // Accede directamente a `date.formatDate`
      hour: date.formatDate(today, 'HH:mm'),
      description: null,
      userSession: null,
      issueType: null,
      attributes: null,
    },
    visitors: [], // Lista reactiva para visitantes
    emergency: {
      event: null,
      state: 'En seguimiento',
      address: null,
      neighborhood: null,
      report: {
        name: null,
        document: null,
        phone: null,
        type: null,
      },
    },
    personal: { employee: null },
    visitor: { name: null, document: null, phone: null },
    machine: {
      employee: null,
      vehicle: null,
      crewmans: [],
      newElements: null,
      selectedEmergency: null,
    },
    extinguisher: {
      extinguisherType: null,
      capacity: null,
      owner: {
        name: null,
        document: null,
        phone: null,
      },
      reason: 'Nota de servicio',
      descriptionReason: null,
    },
    relief: {
      employeeDelivery: null,
      tasksExecuted: null,
      employeeReceives: null,
      slogans: null,
      news: null,
    },
    noveltyMachine: {
      employeeReport: null,
      vehicle: null,
      novelthyType: null,
      novelthyDescription: null,
    },
    notes: {
      name: null,
      document: null,
      phone: null,
    },
    elements: [], // Elementos relacionados a máquinas
    employee: null, // Usuario actual
    loading: false,
    today, // Fecha actual
    ROUTES, // Constantes de rutas
    withIssueTypes: true,
    withEmployees: true,
    issueTypes: [], // Tipos de asunto
    employees: [], // Lista de empleados
    events: [], // Lista de eventos
    loadChangeVehicle: false,
    vehicles: [], // Lista de vehículos
    extinguisherTypes: [], // Tipos de extintores
    novelthyTypes: [], // Tipos de novedades
  };
},
  methods: {

    async loadEmergencies() {
  try {
    const baseURL = process.env.VUE_APP_API_URL || 'http://localhost:8000';
    const response = await fetch(`${baseURL}/api/emergency/status?status=en%20seguimiento`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      const emergencies = await response.json();
      console.log('Emergencias cargadas:', emergencies);
      this.emergencies = emergencies; // Asignar los datos a la propiedad reactiva
    } else {
      console.error('Error al cargar emergencias:', response.statusText);
    }
  } catch (error) {
    console.error('Error al cargar emergencias:', error);
  }
}
,
    initializeBillData() {
    return {
      date: formatDate(today, 'DD/MM/YYYY'),
      hour: formatDate(Date.now(), 'HH:mm'),
      description: null,
      userSession: null,
      issueType: null,
      attributes: null,
    };
  },
  initializeEmergencyData() {
    return {
      event: null,
      state: 'En seguimiento',
      address: null,
      neighborhood: null,
      report: {
        name: null,
        document: null,
        phone: null,
        type: null,
      },
    };
  },
  initializeMachineData() {
    return {
      employee: null,
      vehicle: null,
      crewmans: [],
      newElements: null,
    };
  },
  initializeExtinguisherData() {
    return {
      extinguisherType: null,
      capacity: null,
      owner: {
        name: null,
        document: null,
        phone: null,
      },
      reason: 'Nota de servicio',
      descriptionReason: null,
    };
  },
  initializeReliefData() {
    return {
      employeeDelivery: null,
      tasksExecuted: null,
      employeeReceives: null,
      slogans: null,
      news: null,
    };
  },
  initializeNoveltyMachineData() {
    return {
      employeeReport: null,
      vehicle: null,
      novelthyType: null,
      novelthyDescription: null,
    };
  },
  initializeNotesData() {
    return {
      name: null,
      document: null,
      phone: null,
    };
  },
    async fetchVisitors() {
  try {
    const baseURL = process.env.VUE_APP_API_URL || 'http://localhost:8000';

    const response = await fetch(`${baseURL}/api/bitacora/visitors`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Error al obtener los visitantes');
    }

    const visitorsData = await response.json();

    this.visitors = visitorsData.map((visitor) => {
      const attributes = JSON.parse(visitor.atributos || '{}');
      return {
        id: visitor.id,
        name: attributes.name,
        document: attributes.document,
        phone: attributes.phone,
      };
    });
  } catch (error) {
    console.error('Error al obtener visitantes:', error);
    this.createNotification({
      message: 'No fue posible obtener la lista de visitantes.',
      timeout: 5000,
      ...ERROR_NOTIFICATION,
    });
  }
},
    async registrarConHuella() {
      try {
        this.loading = true;
        // const fecha2 = this.billData.userSession.id;
        const letra = this.billData.userSession.id;
        const asunto = this.billData.issueType.id;
        const desc = this.billData.description;
        const dataFormat = await billModel.eh(this.billData.date, letra, asunto, desc);
        await this.$store.dispatch('bills/store', dataFormat);
        const msg = 'Registro exitoso';
        this.createNotification({ message: msg, timeout: 3000, ...SUCCESS_NOTIFICATION });
        this.$router.replace(ROUTES.bills.bills);
      } catch (e) {
        // console.log(e);
        const msg = getError(e);
        this.createNotification({ message: msg, timeout: 5000, ...ERROR_NOTIFICATION });
        this.loading = false;
      }
    },
    async onSubmit() {
  console.log('Datos iniciales:', this.machine);

  // Validar si el asunto es relevo
  if (this.isInvalidRelief()) {
    this.createNotification({
      message: 'No es posible seleccionar al mismo empleado para entregar y recibir.',
      timeout: 3000,
      ...ERROR_NOTIFICATION,
    });
    return;
  }

  this.loading = true;

  try {
    // Validaciones según el tipo de asunto
    const isValid = await this.validateByIssueType();
    if (!isValid) {
      this.loading = false;
      return;
    }

    // Construcción de los atributos según el tipo de asunto
    const attributes = this.buildAttributes();

    // Construir los datos para el backend
    const dataFormat = await billModel.getApiFormat({
      ...this.billData,
      attributes,
    });

    console.log('Datos enviados al backend:', dataFormat);

    // Guardar o actualizar los datos
    await this.saveOrUpdate(dataFormat);

    this.loading = false;
    this.$router.replace(ROUTES.bills.bills);
  } catch (error) {
    this.handleError(error);
  }
},
isInvalidRelief() {
  return (
    this.billData.issueType.name === 'Relevo' &&
    this.relief.employeeDelivery.id === this.relief.employeeReceives.id
  );
},
async validateByIssueType() {
  const baseURL = process.env.VUE_APP_API_URL || 'http://localhost:8000';

  if (
    this.billData.issueType.name === 'Entrada de personal' ||
    this.billData.issueType.name === 'Salida de personal'
  ) {
    if (!this.personal.employee || !this.personal.employee.id) {
      this.createNotification({
        message: 'El empleado seleccionado no es válido.',
        timeout: 5000,
        ...ERROR_NOTIFICATION,
      });
      return false;
    }

    // Validar entrada/salida con la API
    const response = await fetch(
      `${baseURL}/api/bitacora/validate?idEmpleado=${this.personal.employee.id}&idAsunto=${this.billData.issueType.id}`,
      { method: 'GET', headers: { Accept: 'application/json' } },
    );

    const result = await response.json();
    if (!response.ok) {
      this.createNotification({
        message: result.error || 'Error en la validación.',
        timeout: 5000,
        ...ERROR_NOTIFICATION,
      });
      return false;
    }
  }

  if (
  this.billData.issueType.name === 'Entrada de máquina' ||
  this.billData.issueType.name === 'Salida de máquina'
) {
  if (!this.machine.vehicle || !this.machine.vehicle.id) {
    this.createNotification({
      message: 'Por favor selecciona un vehículo válido.',
      timeout: 3000,
      ...ERROR_NOTIFICATION,
    });
    return false;
  }

  if (!this.machine.newElements || this.machine.newElements.length === 0) {
    this.createNotification({
      message: 'Por favor selecciona al menos un elemento para el vehículo.',
      timeout: 3000,
      ...ERROR_NOTIFICATION,
    });
    return false;
  }

  // Validar entrada/salida de máquina con la API
  const response = await fetch(
    `${baseURL}/api/bitacora/validate-machine?idVehiculo=${this.machine.vehicle.id}&idAsunto=${this.billData.issueType.id}`,
    { method: 'GET', headers: { Accept: 'application/json' } },
  );

  const result = await response.json();
  if (!response.ok) {
    this.createNotification({
      message: result.error || 'Error en la validación de máquinas.',
      timeout: 5000,
      ...ERROR_NOTIFICATION,
    });
    return false;
  }

  // Lógica adicional para salida de máquina
  if (this.billData.issueType.name === 'Salida de máquina' && this.machine.selectedEmergency) {
    try {
      // Llamada al endpoint para asignar la emergencia
      const emergencyId = this.machine.selectedEmergency.id;
      const vehicleId = this.machine.vehicle.id;

      const assignResponse = await fetch(`${baseURL}/api/vehiculo/emergency/${emergencyId}/assign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vehicle_ids: [vehicleId] }),
      });

      if (!assignResponse.ok) {
        const assignResult = await assignResponse.json();
        throw new Error(assignResult.error || 'Error al asignar la emergencia al vehículo.');
      }
    } catch (error) {
      this.createNotification({
        message: `No se pudo asignar la emergencia: ${error.message}`,
        timeout: 5000,
        ...ERROR_NOTIFICATION,
      });
      return false;
    }
  }
}

  return true;
},
buildAttributes() {
  if (
    this.billData.issueType.name === 'Entrada de personal' ||
    this.billData.issueType.name === 'Salida de personal'
  ) {
    return this.personal;
  }

  if (
    this.billData.issueType.name === 'Entrada de máquina' ||
    this.billData.issueType.name === 'Salida de máquina'
  ) {
    const attributes = {
      vehicle: this.machine.vehicle,
      newElements: this.machine.newElements,
    };

    // Añadir la emergencia seleccionada solo si existe
    if (this.billData.issueType.name === 'Salida de máquina' && this.machine.selectedEmergency) {
      attributes.selectedEmergency = this.machine.selectedEmergency.id;
    }

    return attributes;
  }

  if (this.billData.issueType.name === 'Entrada visitante') {
    // Solo devuelve los datos ingresados manualmente
    return {
      name: this.visitor.name,
      document: this.visitor.document,
      phone: this.visitor.phone,
    };
  }

  if (this.billData.issueType.name === 'Salida visitante') {
    // Usa el visitante seleccionado para salida
    return {
      id: this.visitor.selected.id, // ID del visitante seleccionado
      name: this.visitor.selected.name,
      document: this.visitor.selected.document,
      phone: this.visitor.selected.phone,
    };
  }

  if (this.billData.issueType.name === 'Recepción de emergencia') {
    // Declarar attributes antes de usarlo
    const attributes = {
      event: this.emergency.event,
      state: this.emergency.state,
      address: this.emergency.address,
      neighborhood: this.emergency.neighborhood,
      report: {
        name: this.emergency.report.name,
        document: this.emergency.report.document,
        phone: this.emergency.report.phone,
        type: this.emergency.report.type,
      },
    };
    return attributes; // Retornar el objeto attributes
  }

  // Por defecto, devuelve los atributos existentes en billData si no se cumple ninguna condición
  const { attributes: billAttributes } = this.billData;
  return billAttributes;
},
async saveOrUpdate(dataFormat) {
  if (this.action.created) {
    await this.$store.dispatch('bills/store', dataFormat);
    this.createNotification({
      message: 'Registro exitoso',
      timeout: 3000,
      ...SUCCESS_NOTIFICATION,
    });
  } else {
    await this.$store.dispatch('bills/update', dataFormat);
    this.createNotification({
      message: 'Actualización satisfactoria',
      timeout: 3000,
      ...SUCCESS_NOTIFICATION,
    });
  }
},
handleError(error) {
  const msg = error.message || 'Error al procesar la solicitud.';
  this.createNotification({ message: msg, timeout: 5000, ...ERROR_NOTIFICATION });
  console.error('Error:', error);
  this.loading = false;
},

    maxDateIsToday(dates) {
      return dates <= formatDate(today, 'YYYY/MM/DD');
    },
    minDateIsToday(dates) {
      return dates >= formatDate(today, 'YYYY/MM/DD');
    },
    async updateElements() {
      this.loadChangeVehicle = true;
      this.elements = [];
      const elementsAvailable = await this.$store.dispatch('elements/getElementsWithoutVehicle');
      const vehicle = await this.$store.dispatch('vehicles/getForId', this.machine.vehicle.id);
      if (vehicle.elements) {
        this.machine.newElements = [...vehicle.elements];
        elementsAvailable.unshift(...vehicle.elements);
      }
      this.elements = elementsAvailable;
      this.loadChangeVehicle = false;
    },
  },
  computed: {
    user() {
      return this.$q.localStorage.getItem(LS_USER_INFO);
    },
    action() {
      return this.$q.localStorage.getItem(LS_CREATING_BILLS);
    },
  },
  async created() {
    await Promise.all([
      this.issueTypes = await this.$store.dispatch('issueTypes/get'),
      this.employees = await this.$store.dispatch('employees/get'),
      this.fetchVisitors(),
    ]);
    
    this.withIssueTypes = this.issueTypes.length > 0;
    this.withEmployees = this.employees.length > 0;
    if (this.withIssueTypes && this.withEmployees) {
      await Promise.all([
        this.events = await this.$store.dispatch('ui/getEvents'),
        this.vehicles = await this.$store.dispatch('vehicles/get'),
        this.reportTypes = await this.$store.dispatch('ui/getReportTypes'),
        this.novelthyTypes = await this.$store.dispatch('ui/getNoveltyTypes'),
        this.vehicles = await this.$store.dispatch('vehicles/get'),
        this.extinguisherTypes = await this.$store.dispatch('extinguisherTypes/get'),
      ]);
      if (this.action.created) {
        this.billData.userSession = { id: this.user.id, person: this.user.name };
        this.billData.issueType = this.issueTypes ? this.issueTypes[0] : {};
        // this.emergency.event = this.events ? this.events[0] : {};
        this.emergency.report.type = this.reportTypes ? this.reportTypes[0] : {};
        this.personal.employee = this.employees ? this.employees[0] : {};
        this.machine.employee = this.employees ? this.employees[0] : {};
        // this.machine.crewman = this.employees ? this.employees[0] : {};
        this.noveltyMachine.employeeReport = this.employees ? this.employees[0] : {};
        this.machine.vehicle = this.vehicles ? this.vehicles[0] : {};
        this.noveltyMachine.vehicle = this.vehicles ? this.vehicles[0] : {};
        await this.updateElements();
        this.extinguisher.extinguisherType = this.extinguisherTypes
          ? this.extinguisherTypes[0] : {};
        this.noveltyMachine.novelthyType = this.novelthyTypes ? this.novelthyTypes[0] : {};
        this.extinguisher.owner.job = this.professions ? this.professions[0] : {};
        this.relief.employeeDelivery = this.employees ? this.employees[0] : {};
        this.relief.employeeReceives = this.employees && this.employees.length > 1
          ? this.employees[1] : {};
      } else {
        const idToEdit = this.action.id;
        const bill = await this.$store.dispatch('bills/getForId', idToEdit);
        if (bill.issueType.name === 'Recepción de emergencia') {
  console.log('Datos de la emergencia antes de asignar:', bill.attributes);
  this.emergency = {
    event: bill.attributes.event || null,
    state: bill.attributes.state || 'En seguimiento',
    address: bill.attributes.address || null,
    neighborhood: bill.attributes.neighborhood || null,
    report: {
      name: bill.attributes.report?.name || null,
      document: bill.attributes.report?.document || null,
      phone: bill.attributes.report?.phone || null,
      type: bill.attributes.report?.type || null, // Asegura que 'type' esté inicializado
    },
  };
}
 else if (bill.issueType.name === 'Entrada de personal'
          || bill.issueType.name === 'Salida de personal') {
          this.personal = bill.attributes;
        } else if (bill.issueType.name === 'Entrada de máquina'
          || bill.issueType.name === 'Salida de máquina') {
          this.machine = bill.attributes;
          this.updateElements();
        } else if (bill.issueType.name === 'Entrada visitante'
          || bill.issueType.name === 'Salida visitante') {
          this.visitor = bill.attributes;
        } else if (bill.issueType.name === 'Entrada extintor(es)'
          || bill.issueType.name === 'Salida extintor(es)') {
          this.extinguisher = bill.attributes;
        } else if (bill.issueType.name === 'Relevo') {
          this.relief = bill.attributes;
        } else if (bill.issueType.name === 'Novedades en máquinas') {
          this.noveltyMachine = bill.attributes;
        } else if (bill.issueType.name === 'Nota') {
          this.notes = bill.attributes;
        }
        this.billData = bill;
      }
    }
    this.loadingState = false;
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!vm.user) {
        next('/');
      } else {
        const validRoutes = getPossibleRoutes(vm.user.type);
        const valid = validRoutes.find(element => element === to.path);
        if (!valid) {
          next(validRoutes[0]);
        }
        next();
      }
    });
  },
};
</script>
