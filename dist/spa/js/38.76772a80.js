(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"440c":function(e,t,n){"use strict";var s=n("6f86"),i=n.n(s);i.a},"6f86":function(e,t,n){},7321:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-py-lg q-px-xl bg-grey-2 background-height"},[n("div",{staticClass:"row q-mb-xs"},[n("div",{staticClass:"title"},[e._v("RADIOS")]),"supervisor"!==e.user.type&&e.radios&&e.radios.length?n("InteractionOptions",{attrs:{selected:e.selected,createFunction:e.createNew,editFunction:e.editRow,deleteFunction:e.openDelete}}):e._e()],1),n("q-separator"),e.radios?e.radios&&e.radios.length?n("TableView",{key:e.reRenderTable,attrs:{information:e.radios,columns:e.columns,visibleColumns:e.visibleColumns},on:{selection:function(t){e.selected=t}}}):n("div",{staticClass:"text-center"},[n("div",{staticClass:"empty-state normal-section empty-radios"}),n("h3",{staticClass:"empty-copy"},[e._v(" No hay registros aún.. ")]),"supervisor"!==e.user.type?n("q-btn",{staticClass:"text-capitalize",staticStyle:{height:"min-content"},attrs:{color:"positive",label:"PRIMER REGISTRO"},on:{click:e.createNew}}):e._e()],1):n("div",[n("q-spinner-tail",{staticClass:"absolute-center text-default",attrs:{size:"5em"}})],1)],1)},i=[],a=n("c973"),r=n.n(a),o=n("a34a"),c=n.n(o),l=(n("a481"),n("7514"),n("333e")),u=n("e802"),d=n("b924"),p=n("e71c"),h=[{en:"id",es:"ID"},{en:"serial",es:"SERIAL"},{en:"mark",es:"MARCA"},{en:"state",es:"ESTADO"},{en:"signal",es:"SEÑAL"},{en:"type",es:"TIPO"},{en:"vehicle",es:"VEHICULO"}],f=["serial","state","signal","type","vehicle"],v={name:"Radios",components:{TableView:l["a"],InteractionOptions:d["a"]},data:function(){return{reRenderTable:0,loadingState:!0,selected:[],visibleColumns:f,loadingDelete:!1}},methods:{createNew:function(){this.$q.localStorage.set(p["k"],{created:!0}),this.$router.replace(p["p"].vehicles.alterRadios)},editRow:function(){this.$q.localStorage.set(p["k"],{created:!1,id:this.selected[0].id}),this.$router.replace(p["p"].vehicles.alterRadios)},organizerDataDelete:function(e){return e.reduce((function(e,t){return e.push({principal:t.serial,caption:t.employee,side:t.state}),e}),[])},openDelete:function(){var e=this;this.$q.dialog({component:u["a"],parent:this,dataShow:this.organizerDataDelete(this.selected),dataDelete:this.selected,deleteFunction:this.deleteRows}).onOk((function(){e.selected=[],e.reRenderTable+=1})).onCancel((function(){})).onDismiss((function(){e.getData()}))},deleteRows:function(e){var t=this;return r()(c.a.mark((function n(){return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("radios/remove",e);case 2:case"end":return n.stop()}}),n)})))()},getData:function(){this.$store.dispatch("radios/get")}},computed:{user:function(){return this.$q.localStorage.getItem(p["n"])},radios:function(){return this.$store.getters["radios/list"]},columns:function(){return Object(p["t"])(this.radios,h,f)}},beforeRouteEnter:function(e,t,n){n((function(t){if(t.user){var s=Object(p["v"])(t.user.type),i=s.find((function(t){return t===e.path}));i||n(s[0]),n()}else n("/")}))},created:function(){var e=this;return r()(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getData();case 1:case"end":return t.stop()}}),t)})))()}},m=v,g=(n("440c"),n("2877")),w=Object(g["a"])(m,s,i,!1,null,null,null);t["default"]=w.exports}}]);