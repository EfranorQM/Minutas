(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"8d4c":function(e,t,a){"use strict";var n=a("e4c5"),r=a.n(n);r.a},d000:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-py-lg q-px-xl bg-grey-2 background-height"},[a("div",{staticClass:"row q-mb-xs"},[a("div",{staticClass:"title"},[e._v("CLIENTES")]),"supervisor"!==e.user.type&&e.customers&&e.customers.length?a("InteractionOptions",{attrs:{selected:e.selected,createFunction:e.openCreateNew,editFunction:e.openUpdate,deleteFunction:e.openDelete}}):e._e()],1),a("q-separator"),e.loadingState?a("div",[a("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1):e.customers&&e.customers.length?a("TableView",{key:e.reRenderTable,attrs:{information:e.customers,columns:e.columns,visibleColumns:e.visibleColumns},on:{selection:function(t){e.selected=t}}}):a("div",{staticClass:"text-center"},[a("div",{staticClass:"empty-state normal-section empty-customers"}),a("h3",{staticClass:"empty-copy"},[e._v(" No hay registros aún.. ")]),"supervisor"!==e.user.type?a("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"PRIMER REGISTRO"},on:{click:e.openCreateNew}}):e._e()],1),a("q-dialog",{model:{value:e.alterCustomers,callback:function(t){e.alterCustomers=t},expression:"alterCustomers"}},[a("q-card",{staticStyle:{width:"480px","max-width":"80vw"}},[e.gettingInfo?a("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"3em"}}):e._e(),a("q-card-section",[a("div",{staticClass:"text-h6 text-bold"},[e._v("Cliente")])]),a("q-card-section",[a("q-form",{on:{submit:e.alterRow,reset:e.reset}},[a("div",{staticClass:"row q-mb-xs text-bold"},[e._v("\n            Información principal:\n          ")]),a("q-input",{staticClass:"ControlForm",attrs:{filled:"",disable:e.gettingInfo,label:"Nombre","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingrese un nombre"},function(e){return e&&e.length<=80||"Longitud maxima de 80 carácteres"}]},model:{value:e.customerData.name,callback:function(t){e.$set(e.customerData,"name",t)},expression:"customerData.name"}}),a("div",{staticClass:"row"},[a("q-input",{staticClass:"ControlForm col q-mr-md",attrs:{filled:"",label:"Documento",type:"number",min:0,"stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa el documento"},function(e){return e&&e>0&&e.length<=10||"Documento invalido"}]},model:{value:e.customerData.document,callback:function(t){e.$set(e.customerData,"document",t)},expression:"customerData.document"}}),a("q-input",{staticClass:"ControlForm col",attrs:{filled:"",label:"Telefono",type:"number",min:0,"stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingresa un telefono"},function(e){return e&&e>0&&e.length<=10||"Numero invalido"}]},model:{value:e.customerData.phone,callback:function(t){e.$set(e.customerData,"phone",t)},expression:"customerData.phone"}})],1),a("q-input",{staticClass:"ControlForm",attrs:{filled:"",disable:e.gettingInfo,label:"Dirección","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingrese una dirección"},function(e){return e&&e.length<=100||"Longitud maxima de 100 carácteres"}]},model:{value:e.customerData.address,callback:function(t){e.$set(e.customerData,"address",t)},expression:"customerData.address"}}),a("q-input",{staticClass:"ControlForm col-2",attrs:{filled:"",label:"Fecha","stack-label":"",readonly:"",rules:[function(e){return e&&e.length>0||"Por favor ingresa una fecha"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"DD/MM/YYYY",options:e.maxDateIsToday},on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.customerData.date,callback:function(t){e.$set(e.customerData,"date",t)},expression:"customerData.date"}})],1)],1)]},proxy:!0}]),model:{value:e.customerData.date,callback:function(t){e.$set(e.customerData,"date",t)},expression:"customerData.date"}}),a("q-separator",{staticClass:"q-mb-sm"}),a("div",{attrs:{align:"center"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"negative",type:"reset",flat:"",label:"Cancelar",disable:e.loadingAlter}}),a("q-btn",{attrs:{color:"positive",type:"submit",flat:"",label:"Guardar",disable:e.gettingInfo,loading:e.loadingAlter}})],1)],1)],1)],1)],1)],1)},r=[],s=(a("456d"),a("8a81"),a("d25f"),a("9986"),a("8e6e"),a("9523")),o=a.n(s),i=a("c973"),c=a.n(i),l=(a("7f7f"),a("7514"),a("a34a")),u=a.n(l),d=a("bd4c"),m=a("333e"),p=a("e802"),f=a("b924"),g=a("e71c"),b=a("234a"),h=a("f64f"),v=a("2fa3"),D=[{en:"id",es:"ID"},{en:"name",es:"NOMBRE"},{en:"document",es:"DOCUMENTO"},{en:"address",es:"DIRECCION"},{en:"phone",es:"TELEFONO"},{en:"date",es:"FECHA"}],C=["name","document","address","phone"];function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=d["b"].formatDate,q=Date.now(),O={name:"Customers",components:{TableView:m["a"],InteractionOptions:f["a"]},data:function(){return{loadingState:!0,alterCustomers:!1,reRenderTable:0,selected:[],visibleColumns:C,loadingDelete:!1,isCreate:null,gettingInfo:!1,loadingAlter:!1,customerData:{name:null,document:null,address:null,phone:null,date:y(q,"DD/MM/YYYY")}}},mixins:[b["a"]],methods:{openCreateNew:function(){this.isCreate=!0,this.reset(),this.alterCustomers=!0},openUpdate:function(){var e=this;return c()(u.a.mark((function t(){var a;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isCreate=!1,e.reset(),e.alterCustomers=!0,e.gettingInfo=!0,t.next=6,e.$store.dispatch("customers/getForId",e.selected[0].id);case 6:a=t.sent,e.customerData=a,e.gettingInfo=!1;case 9:case"end":return t.stop()}}),t)})))()},alterRow:function(){var e=this;return c()(u.a.mark((function t(){var a,n,r,s,o,i;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loadingAlter=!0,!e.isCreate){t.next=22;break}return t.prev=2,t.next=5,h["a"].getApiFormat(e.customerData);case 5:return a=t.sent,t.next=8,e.$store.dispatch("customers/store",a);case 8:n="Registro exitoso",e.getData(),e.alterCustomers=!1,e.loadingAlter=!1,e.createNotification(w({message:n,timeout:3e3},g["q"])),t.next=20;break;case 15:t.prev=15,t.t0=t["catch"](2),r=Object(v["d"])(t.t0),e.createNotification(w({message:r,timeout:5e3},g["b"])),e.loadingAlter=!1;case 20:t.next=40;break;case 22:return t.prev=22,t.next=25,h["a"].getApiFormat(e.customerData);case 25:return s=t.sent,t.next=28,e.$store.dispatch("customers/update",s);case 28:o="Actualizacion exitosa",e.getData(),e.alterCustomers=!1,e.loadingAlter=!1,e.createNotification(w({message:o,timeout:3e3},g["q"])),t.next=40;break;case 35:t.prev=35,t.t1=t["catch"](22),i=Object(v["d"])(t.t1),e.createNotification(w({message:i,timeout:5e3},g["b"])),e.loadingAlter=!1;case 40:case"end":return t.stop()}}),t,null,[[2,15],[22,35]])})))()},organizerDataDelete:function(e){return e.reduce((function(e,t){return e.push({principal:t.name,caption:t.document,side:t.phone}),e}),[])},openDelete:function(){var e=this;this.$q.dialog({component:p["a"],parent:this,dataShow:this.organizerDataDelete(this.selected),dataDelete:this.selected,deleteFunction:this.deleteRows}).onOk((function(){e.selected=[],e.reRenderTable+=1})).onCancel((function(){})).onDismiss((function(){e.getData()}))},deleteRows:function(e){var t=this;return c()(u.a.mark((function a(){return u.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$store.dispatch("customers/remove",e);case 2:case"end":return a.stop()}}),a)})))()},reset:function(){this.customerData={name:null,document:null,address:null,phone:null,date:y(q,"DD/MM/YYYY")}},maxDateIsToday:function(e){return e<=y(q,"YYYY/MM/DD")},getData:function(){var e=this;return c()(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("customers/get");case 2:e.loadingState=!1;case 3:case"end":return t.stop()}}),t)})))()}},computed:{user:function(){return this.$q.localStorage.getItem(g["n"])},customers:function(){return this.$store.getters["customers/list"]},columns:function(){return Object(g["t"])(this.customers,D,C)}},beforeRouteEnter:function(e,t,a){a((function(t){if(t.user){var n=Object(g["v"])(t.user.type),r=n.find((function(t){return t===e.path}));r||a(n[0]),a()}else a("/")}))},created:function(){var e=this;return c()(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getData();case 2:case"end":return t.stop()}}),t)})))()}},k=O,I=(a("8d4c"),a("2877")),j=Object(I["a"])(k,n,r,!1,null,null,null);t["default"]=j.exports},e4c5:function(e,t,a){}}]);