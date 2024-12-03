(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"7dae":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md q-gutter-sm bg-grey-2 background-height relative-position"},[a("q-breadcrumbs",[a("q-breadcrumbs-el",{attrs:{label:"Nombramientos",icon:"person",to:t.ROUTES.personal.appointments}}),a("q-breadcrumbs-el",{attrs:{label:t.action.created?"Crear":"Modificar",icon:t.action.created?"attach_file":"edit"}})],1),t.loadingState?a("div",[a("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1):t.withEmployees&&t.withPositions?a("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[a("q-expansion-item",{attrs:{"expand-separator":"",icon:"account_circle",label:"Datos","default-opened":!0,caption:t.action.created?null:t.appointmentData.employee.person}},[a("q-card",[a("q-card-section",[a("q-form",{on:{submit:t.onSubmit}},[t.action.created?t._e():a("div",{staticClass:"q-mb-xs text-center text-bold q-py-xs note"},[t._v("\n              Solo esta permitido modificar la descripción o desnombrar al empleado.\n            ")]),a("div",{staticClass:"row q-mb-xs text-bold"},[t._v("\n              Información principal:\n            ")]),a("div",{staticClass:"row"},[t.action.created?t._e():a("q-btn",{staticClass:"text-capitalize q-mb-md q-mt-sm",staticStyle:{height:"min-content"},attrs:{disable:!t.appointmentData.active,color:"warning",label:"Desnombrar"},on:{click:function(e){t.appointmentData.active=!1}}}),t.appointmentData.active?t._e():a("q-input",{staticClass:"ControlForm col-3 q-ml-auto",attrs:{filled:"",disable:!t.action.created,label:"Fecha desnombramiento","stack-label":"",readonly:"",rules:[function(t){return t&&t.length>0||"Por favor ingresa una fecha"}]},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"DD/MM/YYYY",options:t.maxDateIsToday},on:{input:function(){return t.$refs.qDateProxy.hide()}},model:{value:t.appointmentData.dateOut,callback:function(e){t.$set(t.appointmentData,"dateOut",e)},expression:"appointmentData.dateOut"}})],1)],1)]},proxy:!0}],null,!1,421687395),model:{value:t.appointmentData.dateOut,callback:function(e){t.$set(t.appointmentData,"dateOut",e)},expression:"appointmentData.dateOut"}})],1),a("div",{staticClass:"row"},[a("q-input",{staticClass:"ControlForm col-3 q-mr-md",attrs:{filled:"",disable:!t.action.created,label:"Fecha","stack-label":"",readonly:"",rules:[function(t){return t&&t.length>0||"Por favor ingresa una fecha"}]},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"DD/MM/YYYY",options:t.maxDateIsToday},on:{input:function(){return t.$refs.qDateProxy.hide()}},model:{value:t.appointmentData.date,callback:function(e){t.$set(t.appointmentData,"date",e)},expression:"appointmentData.date"}})],1)],1)]},proxy:!0}]),model:{value:t.appointmentData.date,callback:function(e){t.$set(t.appointmentData,"date",e)},expression:"appointmentData.date"}}),a("q-input",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",readonly:!t.action.created,label:"Articulo","stack-label":"","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Por favor ingresa un articulo"},function(t){return t&&t.length<=80||"Longitud maxima de 80 carácteres"}]},model:{value:t.appointmentData.article,callback:function(e){t.$set(t.appointmentData,"article",e)},expression:"appointmentData.article"}}),a("q-input",{staticClass:"ControlForm col",attrs:{filled:"",readonly:!t.action.created,label:"Orden","stack-label":"","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Por favor ingresa una orden"},function(t){return t&&t.length<=30||"Longitud maxima de 30 carácteres"}]},model:{value:t.appointmentData.order,callback:function(e){t.$set(t.appointmentData,"order",e)},expression:"appointmentData.order"}})],1),a("div",{staticClass:"row"},[a("q-select",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",readonly:!t.action.created,label:"Empleado",options:t.employees,"option-value":"id","option-label":function(t){return null===t?"":t.person+" - "+t.position},"stack-label":"","lazy-rules":"",rules:[]},on:{input:t.updatePositions},model:{value:t.appointmentData.employee,callback:function(e){t.$set(t.appointmentData,"employee",e)},expression:"appointmentData.employee"}}),a("q-select",{staticClass:"ControlForm col",attrs:{readonly:!t.action.created,filled:"",loading:t.loadChangePositions,options:t.positions,"option-value":"id","option-label":"name",label:"Cargo","stack-label":"","lazy-rules":"",rules:[]},model:{value:t.appointmentData.position,callback:function(e){t.$set(t.appointmentData,"position",e)},expression:"appointmentData.position"}})],1),a("div",{staticClass:"row q-mb-xs text-bold"},[t._v("\n              Información adicional:\n            ")]),a("div",{staticClass:"row"},[a("q-input",{staticClass:"ControlForm col-5 q-mr-md",attrs:{filled:"",autogrow:"",label:"Descripción","stack-label":"","lazy-rules":"",rules:[]},model:{value:t.appointmentData.description,callback:function(e){t.$set(t.appointmentData,"description",e)},expression:"appointmentData.description"}})],1),a("q-btn",{staticClass:"full-width",attrs:{label:t.action.created?"GUARDAR":"ACTUALIZAR DATOS",loading:t.loading,type:"submit",color:"positive"}})],1)],1)],1)],1)],1):t.withEmployees?t.withPositions?t._e():a("div",{staticClass:"text-center"},[a("div",{staticClass:"empty-state normal-section empty-positions"}),a("h4",{staticClass:"empty-copy"},[t._v(" No hay posiciones disponibles ")]),"inspector"===t.user.type||"personal"!==t.user.type&&"administrador-general"!==t.user.type?t._e():a("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"LISTAR POSICIONES",to:t.ROUTES.personal.positions}})],1):a("div",{staticClass:"text-center"},[a("div",{staticClass:"empty-state normal-section empty-curriculums"}),a("h4",{staticClass:"empty-copy"},[t._v(" No hay empleados disponible ")]),"inspector"===t.user.type||"personal"!==t.user.type&&"administrador-general"!==t.user.type?t._e():a("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"LISTAR EMPLEADOS",to:t.ROUTES.personal.curriculum}})],1)],1)},o=[],i=(a("456d"),a("8a81"),a("d25f"),a("9986"),a("8e6e"),a("9523")),s=a.n(i),r=a("c973"),l=a.n(r),c=a("a34a"),p=a.n(c),u=(a("a481"),a("5df3"),a("06db"),a("cadf"),a("ac6a"),a("551c"),a("7514"),a("bd4c")),d=a("e71c"),m=a("234a"),b=a("6355"),f=a("2fa3");function y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function D(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?y(Object(a),!0).forEach((function(e){s()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h=u["b"].formatDate,v=Date.now(),g={name:"AlterPromotions",mixins:[m["a"]],data:function(){return{loadingState:!0,appointmentData:{date:h(v,"DD/MM/YYYY"),article:null,order:null,active:!0,dateOut:h(v,"DD/MM/YYYY"),description:null,employee:null,position:null},loading:!1,loadChangePositions:!1,today:v,ROUTES:d["p"],withEmployees:!0,withPositions:!0,employees:[],positions:[]}},methods:{onSubmit:function(){var t=this;return l()(p.a.mark((function e(){var a,n,o,i,s,r,l;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.loading=!0,a=JSON.parse(JSON.stringify(t.appointmentData)),a.dateOut=t.appointmentData.active?null:t.appointmentData.dateOut,!t.action.created){e.next=23;break}return e.prev=4,e.next=7,b["a"].getApiFormat(a);case 7:return n=e.sent,e.next=10,t.$store.dispatch("appointments/store",n);case 10:o="Registro exitoso",t.createNotification(D({message:o,timeout:3e3},d["q"])),t.loading=!1,t.$router.replace(d["p"].personal.appointments),e.next=21;break;case 16:e.prev=16,e.t0=e["catch"](4),i=Object(f["d"])(e.t0),t.createNotification(D({message:i,timeout:5e3},d["b"])),t.loading=!1;case 21:e.next=40;break;case 23:return e.prev=23,e.next=26,b["a"].getApiFormat(a);case 26:return s=e.sent,e.next=29,t.$store.dispatch("appointments/update",s);case 29:r="Actualizacion satisfactoria",t.createNotification(D({message:r,timeout:3e3},d["q"])),t.loading=!1,t.$router.replace(d["p"].personal.appointments),e.next=40;break;case 35:e.prev=35,e.t1=e["catch"](23),l=Object(f["d"])(e.t1),t.createNotification(D({message:l,timeout:5e3},d["b"])),t.loading=!1;case 40:case"end":return e.stop()}}),e,null,[[4,16],[23,35]])})))()},updatePositions:function(){var t=this;return l()(p.a.mark((function e(){var a;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loadChangePositions=!0,t.positions=[],e.next=4,t.$store.dispatch("positions/getPositionsAvailable",t.appointmentData.employee.id);case 4:a=e.sent,t.positions=a,t.loadChangePositions=!1;case 7:case"end":return e.stop()}}),e)})))()},maxDateIsToday:function(t){return t<=h(v,"YYYY/MM/DD")},minDateIsToday:function(t){return t>=h(v,"YYYY/MM/DD")}},computed:{user:function(){return this.$q.localStorage.getItem(d["n"])},action:function(){return this.$q.localStorage.getItem(d["c"])}},created:function(){var t=this;return l()(p.a.mark((function e(){var a,n;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=Promise,e.next=3,t.$store.dispatch("employees/get");case 3:return e.t1=t.employees=e.sent,e.next=6,t.$store.dispatch("positions/get");case 6:return e.t2=t.positions=e.sent,e.t3=[e.t1,e.t2],e.next=10,e.t0.all.call(e.t0,e.t3);case 10:if(!t.action.created){e.next=20;break}if(t.withEmployees=t.employees.length>0,t.withPositions=t.positions.length>0,!t.withEmployees||!t.withPositions){e.next=18;break}return t.appointmentData.employee=t.employees?t.employees[0]:{},e.next=17,t.updatePositions();case 17:t.appointmentData.position=t.positions?t.positions[0]:{};case 18:e.next=26;break;case 20:return a=t.action.id,e.next=23,t.$store.dispatch("appointments/getForId",a);case 23:n=e.sent,t.appointmentData=n,t.appointmentData.dateOut=h(v,"DD/MM/YYYY");case 26:t.loadingState=!1;case 27:case"end":return e.stop()}}),e)})))()},beforeRouteEnter:function(t,e,a){a((function(e){if(e.user){var n=Object(d["v"])(e.user.type),o=n.find((function(e){return e===t.path}));o||a(n[0]),a()}else a("/")}))}},x=g,q=(a("875e"),a("2877")),C=Object(q["a"])(x,n,o,!1,null,null,null);e["default"]=C.exports},"875e":function(t,e,a){"use strict";var n=a("b4e7"),o=a.n(n);o.a},b4e7:function(t,e,a){}}]);