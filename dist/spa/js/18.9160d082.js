(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{c36a:function(e,t,a){},de26:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-py-lg q-px-xl bg-grey-2 background-height"},[a("div",{staticClass:"row q-mb-xs"},[a("div",{staticClass:"title"},[e._v("TIPOS DE CONDECORACIONES")]),"supervisor"!==e.user.type&&e.awardTypes&&e.awardTypes.length?a("InteractionOptions",{attrs:{selected:e.selected,createFunction:e.openCreateNew,editFunction:e.openUpdate,deleteFunction:e.openDelete}}):e._e()],1),a("q-separator"),e.loadingState?a("div",[a("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1):e.awardTypes&&e.awardTypes.length?a("TableView",{key:e.reRenderTable,attrs:{information:e.awardTypes,columns:e.columns,visibleColumns:e.visibleColumns},on:{selection:function(t){e.selected=t}}}):a("div",{staticClass:"text-center"},[a("div",{staticClass:"empty-state normal-section empty-awardTypes"}),a("h3",{staticClass:"empty-copy"},[e._v(" No hay registros aún.. ")]),"supervisor"!==e.user.type?a("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"PRIMER REGISTRO"},on:{click:e.openCreateNew}}):e._e()],1),a("q-dialog",{model:{value:e.alterAwardType,callback:function(t){e.alterAwardType=t},expression:"alterAwardType"}},[a("q-card",{staticStyle:{width:"480px","max-width":"80vw"}},[e.gettingInfo?a("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"3em"}}):e._e(),a("q-card-section",[a("div",{staticClass:"text-h6 text-bold"},[e._v("Condecoración")])]),a("q-card-section",[a("q-form",{on:{submit:e.alterRow,reset:e.reset}},[a("q-input",{staticClass:"ControlForm",attrs:{filled:"",disable:e.gettingInfo,label:"Nombre de condecoración","stack-label":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingrese un nombre"},function(e){return e&&e.length<=80||"Longitud maxima de 80 carácteres"}]},model:{value:e.awardTypeData.name,callback:function(t){e.$set(e.awardTypeData,"name",t)},expression:"awardTypeData.name"}}),a("q-separator",{staticClass:"q-mb-sm"}),a("div",{attrs:{align:"center"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"negative",type:"reset",flat:"",label:"Cancelar",disable:e.loadingAlter}}),a("q-btn",{attrs:{color:"positive",type:"submit",flat:"",label:"Guardar",disable:e.gettingInfo,loading:e.loadingAlter}})],1)],1)],1)],1)],1)],1)},r=[],s=(a("456d"),a("8a81"),a("d25f"),a("9986"),a("8e6e"),a("9523")),i=a.n(s),o=a("c973"),c=a.n(o),l=(a("7f7f"),a("7514"),a("a34a")),u=a.n(l),d=a("333e"),p=a("e802"),f=a("b924"),w=a("e71c"),g=a("234a"),m=a("a634"),b=a("2fa3"),h=[{en:"id",es:"ID"},{en:"name",es:"NOMBRE"}],y=["id","name"];function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x={name:"AwardTypes",components:{TableView:d["a"],InteractionOptions:f["a"]},data:function(){return{loadingState:!0,alterAwardType:!1,reRenderTable:0,selected:[],visibleColumns:y,loadingDelete:!1,isCreate:null,gettingInfo:!1,loadingAlter:!1,awardTypeData:{name:null}}},mixins:[g["a"]],methods:{openCreateNew:function(){this.isCreate=!0,this.reset(),this.alterAwardType=!0},openUpdate:function(){var e=this;return c()(u.a.mark((function t(){var a;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isCreate=!1,e.reset(),e.alterAwardType=!0,e.gettingInfo=!0,t.next=6,e.$store.dispatch("awardTypes/getForId",e.selected[0].id);case 6:a=t.sent,e.awardTypeData=a,e.gettingInfo=!1;case 9:case"end":return t.stop()}}),t)})))()},alterRow:function(){var e=this;return c()(u.a.mark((function t(){var a,n,r,s,i,o;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loadingAlter=!0,!e.isCreate){t.next=22;break}return t.prev=2,t.next=5,m["a"].getApiFormat(e.awardTypeData);case 5:return a=t.sent,t.next=8,e.$store.dispatch("awardTypes/store",a);case 8:n="Registro exitoso",e.getData(),e.alterAwardType=!1,e.loadingAlter=!1,e.createNotification(T({message:n,timeout:3e3},w["q"])),t.next=20;break;case 15:t.prev=15,t.t0=t["catch"](2),r=Object(b["d"])(t.t0),e.createNotification(T({message:r,timeout:5e3},w["b"])),e.loadingAlter=!1;case 20:t.next=40;break;case 22:return t.prev=22,t.next=25,m["a"].getApiFormat(e.awardTypeData);case 25:return s=t.sent,t.next=28,e.$store.dispatch("awardTypes/update",s);case 28:i="Actualizacion exitosa",e.getData(),e.alterAwardType=!1,e.loadingAlter=!1,e.createNotification(T({message:i,timeout:3e3},w["q"])),t.next=40;break;case 35:t.prev=35,t.t1=t["catch"](22),o=Object(b["d"])(t.t1),e.createNotification(T({message:o,timeout:5e3},w["b"])),e.loadingAlter=!1;case 40:case"end":return t.stop()}}),t,null,[[2,15],[22,35]])})))()},organizerDataDelete:function(e){return e.reduce((function(e,t){return e.push({principal:t.name,caption:null,side:"id: ".concat(t.id," ")}),e}),[])},openDelete:function(){var e=this;this.$q.dialog({component:p["a"],parent:this,dataShow:this.organizerDataDelete(this.selected),dataDelete:this.selected,deleteFunction:this.deleteRows}).onOk((function(){e.selected=[],e.reRenderTable+=1})).onCancel((function(){})).onDismiss((function(){e.getData()}))},deleteRows:function(e){var t=this;return c()(u.a.mark((function a(){return u.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$store.dispatch("awardTypes/remove",e);case 2:case"end":return a.stop()}}),a)})))()},reset:function(){this.awardTypeData={name:null}},getData:function(){var e=this;return c()(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("awardTypes/get");case 2:e.loadingState=!1;case 3:case"end":return t.stop()}}),t)})))()}},computed:{user:function(){return this.$q.localStorage.getItem(w["n"])},awardTypes:function(){return this.$store.getters["awardTypes/list"]},columns:function(){return Object(w["t"])(this.awardTypes,h,y)}},beforeRouteEnter:function(e,t,a){a((function(t){if(t.user){var n=Object(w["v"])(t.user.type),r=n.find((function(t){return t===e.path}));r||a(n[0]),a()}else a("/")}))},created:function(){var e=this;return c()(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getData();case 2:case"end":return t.stop()}}),t)})))()}},O=x,C=(a("e7c7"),a("2877")),D=Object(C["a"])(O,n,r,!1,null,null,null);t["default"]=D.exports},e7c7:function(e,t,a){"use strict";var n=a("c36a"),r=a.n(n);r.a}}]);