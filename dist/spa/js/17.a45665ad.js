(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{6793:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-py-lg q-px-xl bg-grey-2 background-height"},[n("div",{staticClass:"row q-mb-xs"},[n("div",{staticClass:"title"},[e._v("NOMBRAMIENTOS")]),"supervisor"!==e.user.type&&e.appointments&&e.appointments.length?n("InteractionOptions",{attrs:{selected:e.selected,createFunction:e.createNew,editFunction:e.editRow,deleteFunction:e.openDelete}}):e._e()],1),n("q-separator"),e.appointments?e.appointments&&e.appointments.length?n("TableView",{key:e.reRenderTable,attrs:{information:e.appointments,columns:e.columns,visibleColumns:e.visibleColumns},on:{selection:function(t){e.selected=t}}}):n("div",{staticClass:"text-center"},[n("div",{staticClass:"empty-state normal-section empty-appointments"}),n("h3",{staticClass:"empty-copy"},[e._v(" No hay registros aún.. ")]),"supervisor"!==e.user.type?n("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"PRIMER REGISTRO"},on:{click:e.createNew}}):e._e()],1):n("div",[n("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1)],1)},i=[],a=n("c973"),o=n.n(a),r=n("a34a"),c=n.n(r),l=(n("a481"),n("7514"),n("333e")),p=n("e802"),u=n("b924"),d=n("e71c"),m=[{en:"id",es:"ID"},{en:"date",es:"FECHA INICIO"},{en:"active",es:"ACTIVO"},{en:"dateOut",es:"FECHA FIN"},{en:"article",es:"ARTICULO"},{en:"order",es:"ORDEN"},{en:"description",es:"DESCRIPCION"},{en:"employee",es:"EMPLEADO"},{en:"position",es:"CARGO"}],h=["date","active","dateOut","employee","position"],f={name:"Appointments",components:{TableView:l["a"],InteractionOptions:u["a"]},data:function(){return{reRenderTable:0,loadingState:!0,selected:[],visibleColumns:h,loadingDelete:!1}},methods:{createNew:function(){this.$q.localStorage.set(d["c"],{created:!0}),this.$router.replace(d["p"].personal.alterAppointments)},editRow:function(){this.$q.localStorage.set(d["c"],{created:!1,id:this.selected[0].id}),this.$router.replace(d["p"].personal.alterAppointments)},organizerDataDelete:function(e){return e.reduce((function(e,t){return e.push({principal:t.employee,caption:t.position,side:t.date}),e}),[])},openDelete:function(){var e=this;this.$q.dialog({component:p["a"],parent:this,dataShow:this.organizerDataDelete(this.selected),dataDelete:this.selected,deleteFunction:this.deleteRows}).onOk((function(){e.selected=[],e.reRenderTable+=1})).onCancel((function(){})).onDismiss((function(){e.getData()}))},deleteRows:function(e){var t=this;return o()(c.a.mark((function n(){return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("appointments/remove",e);case 2:case"end":return n.stop()}}),n)})))()},getData:function(){this.$store.dispatch("appointments/get")}},computed:{user:function(){return this.$q.localStorage.getItem(d["n"])},appointments:function(){return this.$store.getters["appointments/list"]},columns:function(){return Object(d["t"])(this.appointments,m,h)}},beforeRouteEnter:function(e,t,n){n((function(t){if(t.user){var s=Object(d["v"])(t.user.type),i=s.find((function(t){return t===e.path}));i||n(s[0]),n()}else n("/")}))},created:function(){var e=this;return o()(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getData();case 1:case"end":return t.stop()}}),t)})))()}},v=f,b=(n("abfb"),n("2877")),g=Object(b["a"])(v,s,i,!1,null,null,null);t["default"]=g.exports},abfb:function(e,t,n){"use strict";var s=n("c2d4"),i=n.n(s);i.a},c2d4:function(e,t,n){}}]);