(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1f62":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md q-gutter-sm bg-grey-2 background-height relative-position"},[a("q-breadcrumbs",[a("q-breadcrumbs-el",{attrs:{label:"Empresas",icon:"warning",to:e.ROUTES.preventionAndSecurity.companies}}),a("q-breadcrumbs-el",{attrs:{label:e.action.created?"Crear":"Modificar",icon:e.action.created?"attach_file":"edit"}})],1),e.loadingState?a("div",[a("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1):e.withInspectors&&e.withCompanyTypes?a("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[a("q-expansion-item",{attrs:{"expand-separator":"",icon:"account_circle",label:"Datos","default-opened":!0,caption:e.action.created?null:e.companyData.name}},[a("q-card",[a("q-card-section",[a("q-form",{on:{submit:e.onSubmit}},[a("div",{staticClass:"row q-mb-xs text-bold"},[e._v("\n              Información principal:\n            ")]),a("div",{staticClass:"row"},[a("q-input",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",label:"Nombre","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa un nombre"},function(e){return e&&e.length<=120||"Longitud maxima de 120 carácteres"}]},model:{value:e.companyData.name,callback:function(t){e.$set(e.companyData,"name",t)},expression:"companyData.name"}}),a("q-input",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",label:"Dirección","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa una dirección"},function(e){return e&&e.length<=100||"Longitud maxima de 100 carácteres"}]},model:{value:e.companyData.address,callback:function(t){e.$set(e.companyData,"address",t)},expression:"companyData.address"}}),a("q-input",{staticClass:"ControlForm col",attrs:{filled:"",label:"Barrio","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa un barrio"},function(e){return e&&e.length<=50||"Longitud maxima de 50 carácteres"}]},model:{value:e.companyData.neighborhood,callback:function(t){e.$set(e.companyData,"neighborhood",t)},expression:"companyData.neighborhood"}})],1),a("div",{staticClass:"row"},[a("q-input",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",type:"number",min:0,label:"Telefono","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingrese un telefono"},function(e){return e&&e.length<11||"Numero incorrecto"}]},model:{value:e.companyData.phone,callback:function(t){e.$set(e.companyData,"phone",t)},expression:"companyData.phone"}}),a("q-input",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",label:"Fecha de Registro","stack-label":"",readonly:"",rules:[function(e){return e&&e.length>0||"Por favor ingresa una fecha"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"DD/MM/YYYY",options:e.maxDateIsToday},on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.companyData.registerDate,callback:function(t){e.$set(e.companyData,"registerDate",t)},expression:"companyData.registerDate"}})],1)],1)]},proxy:!0}]),model:{value:e.companyData.registerDate,callback:function(t){e.$set(e.companyData,"registerDate",t)},expression:"companyData.registerDate"}}),a("q-input",{staticClass:"ControlForm col",attrs:{filled:"",label:"Nombre Representante","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa un nombre"},function(e){return e&&e.length<=80||"Longitud maxima de 80 carácteres"}]},model:{value:e.companyData.representative,callback:function(t){e.$set(e.companyData,"representative",t)},expression:"companyData.representative"}})],1),a("div",{staticClass:"row"},[a("q-select",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",label:"Supervisor",options:e.supervisors,"option-value":"id","option-label":"person","stack-label":"","lazy-rules":"",rules:[]},model:{value:e.companyData.supervisor,callback:function(t){e.$set(e.companyData,"supervisor",t)},expression:"companyData.supervisor"}}),a("q-select",{staticClass:"ControlForm col",attrs:{filled:"",label:"Tipo de empresa",options:e.companyTypes,"option-value":"id","option-label":"name","stack-label":"","lazy-rules":"",rules:[]},model:{value:e.companyData.companyType,callback:function(t){e.$set(e.companyData,"companyType",t)},expression:"companyData.companyType"}})],1),a("div",{staticClass:"row q-mb-xs text-bold"},[e._v("\n              Información adicional (Representante):\n            ")]),a("div",{staticClass:"row"},[a("q-input",{staticClass:"ControlForm col-3 q-mr-md",attrs:{filled:"",type:"number",min:0,label:"Celular","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e>0&&10===e.length||"Numero incorrecto")}]},model:{value:e.companyData.mobile,callback:function(t){e.$set(e.companyData,"mobile",t)},expression:"companyData.mobile"}}),a("q-input",{staticClass:"ControlForm col-3",attrs:{filled:"",label:"Cedula",type:"number",min:0,"stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e>0&&10===e.length||"Numero incorrecto")}]},model:{value:e.companyData.identificationCard,callback:function(t){e.$set(e.companyData,"identificationCard",t)},expression:"companyData.identificationCard"}})],1),a("div",{staticClass:"row q-mb-xs text-bold"},[e._v("\n              Información adicional:\n            ")]),a("div",{staticClass:"row"},[a("q-input",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",label:"Camara de comercio","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e.length<=30||"Longitud maxima de 30 carácteres")}]},model:{value:e.companyData.cameraRegistration,callback:function(t){e.$set(e.companyData,"cameraRegistration",t)},expression:"companyData.cameraRegistration"}}),a("q-input",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",label:"Categoria","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e.length<=30||"Longitud maxima de 30 carácteres")}]},model:{value:e.companyData.category,callback:function(t){e.$set(e.companyData,"category",t)},expression:"companyData.category"}}),a("q-input",{staticClass:"ControlForm col-2 q-mr-md",attrs:{filled:"",type:"number",min:0,label:"NIT","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e>0?e.length<=20||"Longitud maxima de 20 carácteres":"Numero incorrecto")}]},model:{value:e.companyData.nit,callback:function(t){e.$set(e.companyData,"nit",t)},expression:"companyData.nit"}}),a("q-input",{staticClass:"ControlForm col-2",attrs:{filled:"",type:"number",min:0,label:"SN","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e>0?e.length<=10||"Longitud maxima de 10 carácteres":"Numero incorrecto")}]},model:{value:e.companyData.sn,callback:function(t){e.$set(e.companyData,"sn",t)},expression:"companyData.sn"}})],1),a("div",{staticClass:"row"},[a("q-input",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",min:0,type:"number",label:"Cantidad","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e>0?e.length<=20||"Longitud maxima de 20 carácteres":"Numero incorrecto")}]},model:{value:e.companyData.quantity,callback:function(t){e.$set(e.companyData,"quantity",t)},expression:"companyData.quantity"}}),a("q-input",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",label:"Área","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e.length<=20||"Longitud maxima de 30 carácteres")}]},model:{value:e.companyData.area,callback:function(t){e.$set(e.companyData,"area",t)},expression:"companyData.area"}}),a("q-input",{staticClass:"ControlForm col",attrs:{filled:"",label:"Nivel","stack-label":"","lazy-rules":"",rules:[function(e){return!e||(e.length<=30||"Longitud maxima de 30 carácteres")}]},model:{value:e.companyData.level,callback:function(t){e.$set(e.companyData,"level",t)},expression:"companyData.level"}})],1),a("div",{staticClass:"row"},[a("q-input",{staticClass:"ControlForm col-6",attrs:{filled:"",autogrow:"",label:"Observación","stack-label":"","lazy-rules":"",rules:[]},model:{value:e.companyData.observation,callback:function(t){e.$set(e.companyData,"observation",t)},expression:"companyData.observation"}})],1),a("q-btn",{staticClass:"full-width",attrs:{label:e.action.created?"GUARDAR":"ACTUALIZAR DATOS",loading:e.loading,type:"submit",color:"positive"}})],1)],1)],1)],1)],1):e.withInspectors?e.withCompanyTypes?e._e():a("div",{staticClass:"text-center"},[a("div",{staticClass:"empty-state normal-section empty-companyTypes"}),a("h4",{staticClass:"empty-copy"},[e._v(" No hay tipos de empresas disponibles ")]),"supervisor"===e.user.type||"prevencion-y-seguridad"!==e.user.type&&"administrador-general"!==e.user.type?e._e():a("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"LISTAR TIPOS DE EMPRESAS",to:e.ROUTES.preventionAndSecurity.companiesTypes}})],1):a("div",{staticClass:"text-center"},[a("div",{staticClass:"empty-state normal-section empty-curriculums"}),a("h4",{staticClass:"empty-copy"},[e._v(" No hay empleados/inspectores disponibles ")]),"supervisor"===e.user.type||"personal"!==e.user.type&&"administrador-general"!==e.user.type?e._e():a("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"LISTAR EMPLEADOS",to:e.ROUTES.personal.curriculum}})],1)],1)},r=[],o=(a("456d"),a("8a81"),a("d25f"),a("9986"),a("8e6e"),a("9523")),s=a.n(o),l=a("c973"),i=a.n(l),c=a("a34a"),u=a.n(c),p=(a("a481"),a("5df3"),a("06db"),a("cadf"),a("ac6a"),a("551c"),a("7514"),a("bd4c")),m=a("e71c"),d=a("234a"),y=a("7543"),b=a("2fa3");function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=p["b"].formatDate,D=Date.now(),h={name:"AlterCompanies",mixins:[d["a"]],data:function(){return{loadingState:!0,companyData:{name:null,address:null,neighborhood:null,cameraRegistration:null,phone:null,registerDate:g(D,"DD/MM/YYYY"),representative:null,mobile:null,identificationCard:null,nit:null,observation:null,sn:null,quantity:null,area:null,category:null,level:null,supervisor:null,companyType:null},loading:!1,today:D,ROUTES:m["p"],withInspectors:!0,withCompanyTypes:!0,supervisors:[],companyTypes:[]}},methods:{onSubmit:function(){var e=this;return i()(u.a.mark((function t(){var a,n,r,o,s,l;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loading=!0,!e.action.created){t.next=21;break}return t.prev=2,t.next=5,y["a"].getApiFormat(e.companyData);case 5:return a=t.sent,t.next=8,e.$store.dispatch("companies/store",a);case 8:n="Registro exitoso",e.createNotification(v({message:n,timeout:3e3},m["q"])),e.loading=!1,e.$router.replace(m["p"].preventionAndSecurity.companies),t.next=19;break;case 14:t.prev=14,t.t0=t["catch"](2),r=Object(b["d"])(t.t0),e.createNotification(v({message:r,timeout:5e3},m["b"])),e.loading=!1;case 19:t.next=38;break;case 21:return t.prev=21,t.next=24,y["a"].getApiFormat(e.companyData);case 24:return o=t.sent,t.next=27,e.$store.dispatch("companies/update",o);case 27:s="Actualizacion satisfactoria",e.createNotification(v({message:s,timeout:3e3},m["q"])),e.loading=!1,e.$router.replace(m["p"].preventionAndSecurity.companies),t.next=38;break;case 33:t.prev=33,t.t1=t["catch"](21),l=Object(b["d"])(t.t1),e.createNotification(v({message:l,timeout:5e3},m["b"])),e.loading=!1;case 38:case"end":return t.stop()}}),t,null,[[2,14],[21,33]])})))()},maxDateIsToday:function(e){return e<=g(D,"YYYY/MM/DD")},minDateIsToday:function(e){return e>=g(D,"YYYY/MM/DD")}},computed:{user:function(){return this.$q.localStorage.getItem(m["n"])},action:function(){return this.$q.localStorage.getItem(m["f"])}},created:function(){var e=this;return i()(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=Promise,t.next=3,e.$store.dispatch("employees/getInspectors");case 3:return t.t1=e.supervisors=t.sent,t.next=6,e.$store.dispatch("companyTypes/get");case 6:return t.t2=e.companyTypes=t.sent,t.t3=[t.t1,t.t2],t.next=10,t.t0.all.call(t.t0,t.t3);case 10:if(e.withInspectors=e.supervisors.length>0,e.withCompanyTypes=e.companyTypes.length>0,!e.withInspectors||!e.withCompanyTypes){t.next=23;break}if(!e.action.created){t.next=18;break}e.companyData.companyType=e.companyTypes?e.companyTypes[0]:{},e.companyData.supervisor=e.supervisors?e.supervisors[0]:{},t.next=23;break;case 18:return a=e.action.id,t.next=21,e.$store.dispatch("companies/getForId",a);case 21:n=t.sent,e.companyData=n;case 23:e.loadingState=!1;case 24:case"end":return t.stop()}}),t)})))()},beforeRouteEnter:function(e,t,a){a((function(t){if(t.user){var n=Object(m["v"])(t.user.type),r=n.find((function(t){return t===e.path}));r||a(n[0]),a()}else a("/")}))}},C=h,x=(a("5862"),a("2877")),q=Object(x["a"])(C,n,r,!1,null,null,null);t["default"]=q.exports},5862:function(e,t,a){"use strict";var n=a("a47e"),r=a.n(n);r.a},a47e:function(e,t,a){}}]);