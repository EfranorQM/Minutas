(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"27dd":function(e,t,a){"use strict";var r=a("b947"),s=a.n(r);s.a},3933:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md q-gutter-sm bg-grey-2 background-height relative-position"},[a("q-breadcrumbs",[a("q-breadcrumbs-el",{attrs:{label:"Condecoraciones",icon:"person",to:e.ROUTES.personal.awards}}),a("q-breadcrumbs-el",{attrs:{label:e.action.created?"Crear":"Modificar",icon:e.action.created?"attach_file":"edit"}})],1),e.loadingState?a("div",[a("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1):e.withEmployees&&e.withAwardTypes?a("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[a("q-expansion-item",{attrs:{"expand-separator":"",icon:"account_circle",label:"Datos","default-opened":!0,caption:e.action.created?null:e.awardData.codeMinutes}},[a("q-card",[a("q-card-section",[a("q-form",{on:{submit:e.onSubmit}},[a("div",{staticClass:"row q-mb-xs text-bold"},[e._v("\n              Información principal:\n            ")]),a("div",{staticClass:"row"},[a("q-input",{staticClass:"ControlForm col-3 q-mr-md",attrs:{filled:"",label:"Codigo Acta","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa un codigo"},function(e){return e&&e.length<=40||"Longitud maxima de 40 carácteres"}]},model:{value:e.awardData.codeMinutes,callback:function(t){e.$set(e.awardData,"codeMinutes",t)},expression:"awardData.codeMinutes"}}),a("q-input",{staticClass:"ControlForm col-2 q-mr-md",attrs:{filled:"",label:"Fecha Acta","stack-label":"",readonly:"",rules:[function(e){return e&&e.length>0||"Por favor ingresa una fecha"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"DD/MM/YYYY",options:e.maxDateIsToday},on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.awardData.dateMinutes,callback:function(t){e.$set(e.awardData,"dateMinutes",t)},expression:"awardData.dateMinutes"}})],1)],1)]},proxy:!0}]),model:{value:e.awardData.dateMinutes,callback:function(t){e.$set(e.awardData,"dateMinutes",t)},expression:"awardData.dateMinutes"}}),a("q-input",{staticClass:"ControlForm col-3 q-mr-md",attrs:{filled:"",label:"Codigo Resolución","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa un codigo"},function(e){return e&&e.length<=40||"Longitud maxima de 40 carácteres"}]},model:{value:e.awardData.codeResolution,callback:function(t){e.$set(e.awardData,"codeResolution",t)},expression:"awardData.codeResolution"}}),a("q-input",{staticClass:"ControlForm col",attrs:{filled:"",label:"Fecha Resolución","stack-label":"",readonly:"",rules:[function(e){return e&&e.length>0||"Por favor ingresa una fecha"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"DD/MM/YYYY",options:e.maxDateIsToday},on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.awardData.dateResolution,callback:function(t){e.$set(e.awardData,"dateResolution",t)},expression:"awardData.dateResolution"}})],1)],1)]},proxy:!0}]),model:{value:e.awardData.dateResolution,callback:function(t){e.$set(e.awardData,"dateResolution",t)},expression:"awardData.dateResolution"}})],1),a("div",{staticClass:"row"},[a("q-select",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",label:"Empleado",options:e.employees,"option-value":"id","option-label":function(e){return null===e?"":e.person+" - "+e.position},"stack-label":"","lazy-rules":"",rules:[]},model:{value:e.awardData.employee,callback:function(t){e.$set(e.awardData,"employee",t)},expression:"awardData.employee"}}),a("q-select",{staticClass:"ControlForm col",attrs:{filled:"",label:"Tipo Condecoración",options:e.awardTypes,"option-value":"id","option-label":"name","stack-label":"","lazy-rules":"",rules:[]},model:{value:e.awardData.awardType,callback:function(t){e.$set(e.awardData,"awardType",t)},expression:"awardData.awardType"}})],1),a("div",{staticClass:"row q-mb-xs text-bold"},[e._v("\n              Información adicional:\n            ")]),a("div",{staticClass:"row"},[a("q-input",{staticClass:"ControlForm col-5 q-mr-md",attrs:{filled:"",autogrow:"",label:"Descripción","stack-label":"","lazy-rules":"",rules:[]},model:{value:e.awardData.description,callback:function(t){e.$set(e.awardData,"description",t)},expression:"awardData.description"}})],1),a("q-btn",{staticClass:"full-width",attrs:{label:e.action.created?"GUARDAR":"ACTUALIZAR DATOS",loading:e.loading,type:"submit",color:"positive"}})],1)],1)],1)],1)],1):e.withEmployees?e.withAwardTypes?e._e():a("div",{staticClass:"text-center"},[a("div",{staticClass:"empty-state normal-section empty-awardTypes"}),a("h4",{staticClass:"empty-copy"},[e._v(" No hay tipos de condecoraciones disponibles ")]),"supervisor"===e.user.type||"personal"!==e.user.type&&"administrador-general"!==e.user.type?e._e():a("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"LISTAR TIPOS CONDECORACIONES",to:e.ROUTES.personal.awardTypes}})],1):a("div",{staticClass:"text-center"},[a("div",{staticClass:"empty-state normal-section empty-curriculums"}),a("h4",{staticClass:"empty-copy"},[e._v(" No hay empleados disponibles ")]),"supervisor"===e.user.type||"personal"!==e.user.type&&"administrador-general"!==e.user.type?e._e():a("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"LISTAR EMPLEADOS",to:e.ROUTES.personal.curriculum}})],1)],1)},s=[],o=(a("456d"),a("8a81"),a("d25f"),a("9986"),a("8e6e"),a("9523")),n=a.n(o),i=a("c973"),l=a.n(i),c=a("a34a"),d=a.n(c),u=(a("a481"),a("5df3"),a("06db"),a("cadf"),a("ac6a"),a("551c"),a("7514"),a("bd4c")),p=a("e71c"),m=a("234a"),w=a("ba82"),f=a("2fa3");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=u["b"].formatDate,h=Date.now(),g={name:"AlterPromotions",mixins:[m["a"]],data:function(){return{loadingState:!0,awardData:{dateMinutes:D(h,"DD/MM/YYYY"),dateResolution:D(h,"DD/MM/YYYY"),codeMinutes:null,codeResolution:null,description:null,employee:null,awardType:null},loading:!1,today:h,ROUTES:p["p"],withEmployees:!0,withAwardTypes:!0,employees:[],awardTypes:[]}},methods:{onSubmit:function(){var e=this;return l()(d.a.mark((function t(){var a,r,s,o,n,i;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loading=!0,!e.action.created){t.next=21;break}return t.prev=2,t.next=5,w["a"].getApiFormat(e.awardData);case 5:return a=t.sent,t.next=8,e.$store.dispatch("awards/store",a);case 8:r="Registro exitoso",e.createNotification(y({message:r,timeout:3e3},p["q"])),e.loading=!1,e.$router.replace(p["p"].personal.awards),t.next=19;break;case 14:t.prev=14,t.t0=t["catch"](2),s=Object(f["d"])(t.t0),e.createNotification(y({message:s,timeout:5e3},p["b"])),e.loading=!1;case 19:t.next=38;break;case 21:return t.prev=21,t.next=24,w["a"].getApiFormat(e.awardData);case 24:return o=t.sent,t.next=27,e.$store.dispatch("awards/update",o);case 27:n="Actualizacion satisfactoria",e.createNotification(y({message:n,timeout:3e3},p["q"])),e.loading=!1,e.$router.replace(p["p"].personal.awards),t.next=38;break;case 33:t.prev=33,t.t1=t["catch"](21),i=Object(f["d"])(t.t1),e.createNotification(y({message:i,timeout:5e3},p["b"])),e.loading=!1;case 38:case"end":return t.stop()}}),t,null,[[2,14],[21,33]])})))()},maxDateIsToday:function(e){return e<=D(h,"YYYY/MM/DD")},minDateIsToday:function(e){return e>=D(h,"YYYY/MM/DD")}},computed:{user:function(){return this.$q.localStorage.getItem(p["n"])},action:function(){return this.$q.localStorage.getItem(p["d"])}},created:function(){var e=this;return l()(d.a.mark((function t(){var a,r;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=Promise,t.next=3,e.$store.dispatch("employees/get");case 3:return t.t1=e.employees=t.sent,t.next=6,e.$store.dispatch("awardTypes/get");case 6:return t.t2=e.awardTypes=t.sent,t.t3=[t.t1,t.t2],t.next=10,t.t0.all.call(t.t0,t.t3);case 10:if(e.withEmployees=e.employees.length>0,e.withAwardTypes=e.awardTypes.length>0,!e.withEmployees||!e.withAwardTypes){t.next=23;break}if(!e.action.created){t.next=18;break}e.awardData.awardType=e.awardTypes?e.awardTypes[0]:{},e.awardData.employee=e.employees?e.employees[0]:{},t.next=23;break;case 18:return a=e.action.id,t.next=21,e.$store.dispatch("awards/getForId",a);case 21:r=t.sent,e.awardData=r;case 23:e.loadingState=!1;case 24:case"end":return t.stop()}}),t)})))()},beforeRouteEnter:function(e,t,a){a((function(t){if(t.user){var r=Object(p["v"])(t.user.type),s=r.find((function(t){return t===e.path}));s||a(r[0]),a()}else a("/")}))}},v=g,x=(a("27dd"),a("2877")),q=Object(x["a"])(v,r,s,!1,null,null,null);t["default"]=q.exports},b947:function(e,t,a){}}]);