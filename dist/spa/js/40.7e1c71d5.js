(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{1945:function(e,t,n){},"3f6c":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-py-lg q-px-xl bg-grey-2 background-height"},[n("div",{staticClass:"row q-mb-xs"},[n("div",{staticClass:"title"},[e._v("SANCIONES")]),"supervisor"!==e.user.type&&e.sanctions&&e.sanctions.length?n("InteractionOptions",{attrs:{selected:e.selected,createFunction:e.createNew,editFunction:e.editRow,deleteFunction:e.openDelete}}):e._e()],1),n("q-separator"),e.sanctions?e.sanctions&&e.sanctions.length?n("TableView",{key:e.reRenderTable,attrs:{information:e.sanctions,columns:e.columns,visibleColumns:e.visibleColumns},on:{selection:function(t){e.selected=t}}}):n("div",{staticClass:"text-center"},[n("div",{staticClass:"empty-state normal-section empty-sanctions"}),n("h3",{staticClass:"empty-copy"},[e._v(" No hay registros aún.. ")]),"supervisor"!==e.user.type?n("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"PRIMER REGISTRO"},on:{click:e.createNew}}):e._e()],1):n("div",[n("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1)],1)},i=[],a=n("c973"),o=n.n(a),c=n("a34a"),r=n.n(c),l=(n("a481"),n("7514"),n("333e")),u=n("e802"),d=n("b924"),p=n("e71c"),h=[{en:"id",es:"ID"},{en:"date",es:"FECHA"},{en:"sanctionType",es:"TIPO SANCION"},{en:"order",es:"ORDEN"},{en:"description",es:"DESCRIPCION"},{en:"employee",es:"EMPLEADO"}],f=["sanctionType","order","employee"],m={name:"Sanctions",components:{TableView:l["a"],InteractionOptions:d["a"]},data:function(){return{reRenderTable:0,loadingState:!0,selected:[],visibleColumns:f,loadingDelete:!1}},methods:{createNew:function(){this.$q.localStorage.set(p["l"],{created:!0}),this.$router.replace(p["p"].personal.alterSanctions)},editRow:function(){this.$q.localStorage.set(p["l"],{created:!1,id:this.selected[0].id}),this.$router.replace(p["p"].personal.alterSanctions)},organizerDataDelete:function(e){return e.reduce((function(e,t){return e.push({principal:t.order,caption:t.sanctionType,side:t.employee}),e}),[])},openDelete:function(){var e=this;this.$q.dialog({component:u["a"],parent:this,dataShow:this.organizerDataDelete(this.selected),dataDelete:this.selected,deleteFunction:this.deleteRows}).onOk((function(){e.selected=[],e.reRenderTable+=1})).onCancel((function(){})).onDismiss((function(){e.getData()}))},deleteRows:function(e){var t=this;return o()(r.a.mark((function n(){return r.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("sanctions/remove",e);case 2:case"end":return n.stop()}}),n)})))()},getData:function(){this.$store.dispatch("sanctions/get")}},computed:{user:function(){return this.$q.localStorage.getItem(p["n"])},sanctions:function(){return this.$store.getters["sanctions/list"]},columns:function(){return Object(p["t"])(this.sanctions,h,f)}},beforeRouteEnter:function(e,t,n){n((function(t){if(t.user){var s=Object(p["v"])(t.user.type),i=s.find((function(t){return t===e.path}));i||n(s[0]),n()}else n("/")}))},created:function(){var e=this;return o()(r.a.mark((function t(){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getData();case 1:case"end":return t.stop()}}),t)})))()}},v=m,g=(n("92a6"),n("2877")),w=Object(g["a"])(v,s,i,!1,null,null,null);t["default"]=w.exports},"92a6":function(e,t,n){"use strict";var s=n("1945"),i=n.n(s);i.a}}]);