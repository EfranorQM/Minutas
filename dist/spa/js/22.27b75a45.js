(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{1667:function(e,t,n){"use strict";var s=n("3a13"),i=n.n(s);i.a},"3a13":function(e,t,n){},9887:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-py-lg q-px-xl bg-grey-2 background-height"},[n("div",{staticClass:"row q-mb-xs"},[n("div",{staticClass:"title"},[e._v("EMPRESAS")]),"supervisor"!==e.user.type&&e.companies&&e.companies.length?n("InteractionOptions",{attrs:{selected:e.selected,createFunction:e.createNew,editFunction:e.editRow,deleteFunction:e.openDelete}}):e._e()],1),n("q-separator"),e.companies?e.companies&&e.companies.length?n("TableView",{key:e.reRenderTable,attrs:{information:e.companies,columns:e.columns,visibleColumns:e.visibleColumns},on:{selection:function(t){e.selected=t}}}):n("div",{staticClass:"text-center"},[n("div",{staticClass:"empty-state normal-section empty-companies"}),n("h3",{staticClass:"empty-copy"},[e._v(" No hay registros aún.. ")]),"supervisor"!==e.user.type?n("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"PRIMER REGISTRO"},on:{click:e.createNew}}):e._e()],1):n("div",[n("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1)],1)},i=[],a=n("c973"),r=n.n(a),o=n("a34a"),c=n.n(o),l=(n("a481"),n("7f7f"),n("7514"),n("333e")),u=n("e802"),p=n("b924"),d=n("e71c"),m=[{en:"id",es:"ID"},{en:"name",es:"NOMBRE"},{en:"address",es:"DIRECCION"},{en:"neighborhood",es:"BARRIO"},{en:"cameraRegistration",es:"REGISTRO CAMARA"},{en:"phone",es:"TELEFONO"},{en:"registerDate",es:"FECHA DE REGISTRO"},{en:"representative",es:"REPRESENTANTE"},{en:"mobile",es:"CELULAR"},{en:"identificationCard",es:"CEDULA"},{en:"nit",es:"NIT"},{en:"observation",es:"OBSERVACION"},{en:"sn",es:"SN"},{en:"quantity",es:"CANTIDAD"},{en:"area",es:"AREA"},{en:"category",es:"CATEGORIA"},{en:"level",es:"NIVEL"},{en:"supervisor",es:"INSPECTOR"},{en:"companyType",es:"TIPO EMPRESA"}],h=["name","representative","registerDate","companyType"],f={name:"Companies",components:{TableView:l["a"],InteractionOptions:p["a"]},data:function(){return{reRenderTable:0,loadingState:!0,selected:[],visibleColumns:h,loadingDelete:!1}},methods:{createNew:function(){this.$q.localStorage.set(d["f"],{created:!0}),this.$router.replace(d["p"].preventionAndSecurity.alterCompanies)},editRow:function(){this.$q.localStorage.set(d["f"],{created:!1,id:this.selected[0].id}),this.$router.replace(d["p"].preventionAndSecurity.alterCompanies)},organizerDataDelete:function(e){return e.reduce((function(e,t){return e.push({principal:t.name,caption:t.representative,side:t.companyType}),e}),[])},openDelete:function(){var e=this;this.$q.dialog({component:u["a"],parent:this,dataShow:this.organizerDataDelete(this.selected),dataDelete:this.selected,deleteFunction:this.deleteRows}).onOk((function(){e.selected=[],e.reRenderTable+=1})).onCancel((function(){})).onDismiss((function(){e.getData()}))},deleteRows:function(e){var t=this;return r()(c.a.mark((function n(){return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("companies/remove",e);case 2:case"end":return n.stop()}}),n)})))()},getData:function(){this.$store.dispatch("companies/get")}},computed:{user:function(){return this.$q.localStorage.getItem(d["n"])},companies:function(){return this.$store.getters["companies/list"]},columns:function(){return Object(d["t"])(this.companies,m,h)}},beforeRouteEnter:function(e,t,n){n((function(t){if(t.user){var s=Object(d["v"])(t.user.type),i=s.find((function(t){return t===e.path}));i||n(s[0]),n()}else n("/")}))},created:function(){var e=this;return r()(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getData();case 1:case"end":return t.stop()}}),t)})))()}},v=f,R=(n("1667"),n("2877")),g=Object(R["a"])(v,s,i,!1,null,null,null);t["default"]=g.exports}}]);