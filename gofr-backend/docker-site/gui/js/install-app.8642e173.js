(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["install-app"],{"23a7":function(t,e,n){"use strict";var a=n("2909"),i=n("5530"),s=n("53ca"),l=(n("a9e3"),n("caad"),n("d81d"),n("b0c0"),n("99af"),n("a434"),n("159b"),n("fb6a"),n("5803"),n("2677")),r=n("cc20"),o=n("80d2"),c=n("d9bd"),u=n("d9f7");e["a"]=l["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(o["I"])(t).every((function(t){return null!=t&&"object"===Object(s["a"])(t)}))}}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},l["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size,a=void 0===n?0:n;return t+a}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(o["x"])(e,1024===this.base))},internalArrayValue:function(){return Object(o["I"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var n=e.name,a=void 0===n?"":n,i=e.size,s=void 0===i?0:i,l=t.truncateText(a);return t.showSize?"".concat(l," (").concat(Object(o["x"])(s,1024===t.base),")"):l})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(c["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(o["k"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,n){return t.$createElement(r["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(n,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=l["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(u["d"])(t.data.style,{display:"none"})),t},genInput:function(){var t=l["a"].options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,a){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[a],file:n,index:a}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=l["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(i["a"])(Object(i["a"])({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(a["a"])(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,n){"use strict";var a=n("8654");e["a"]=a["a"]},5803:function(t,e,n){},d29c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("center",[n("v-card",{attrs:{width:"500"}},[n("v-card-text",[n("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.$t("App.hardcoded-texts.Install New GOFR App"))+" ")]),n("v-card-text",[n("v-file-input",{ref:"file",attrs:{"show-size":"",label:"Select",accept:".zip"},model:{value:t.app,callback:function(e){t.app=e},expression:"app"}})],1),n("v-card-actions",[n("v-row",[n("v-col",{attrs:{cols:"5"}},[t.displayProgress?n("v-progress-linear",{attrs:{height:"25"},model:{value:t.percentUpload,callback:function(e){t.percentUpload=e},expression:"percentUpload"}},[n("strong",[t._v(t._s(Math.ceil(t.percentUpload))+"%")])]):t._e()],1),n("v-spacer"),n("v-col",[n("v-btn",{attrs:{small:"",color:"primary",disabled:!t.app},on:{click:t.doUpload}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-file-upload")]),t._v(" "+t._s(t.$t("App.hardcoded-texts.Install"))+" ")],1)],1)],1)],1)],1)],1)],1)},i=[],s=n("bc3a"),l=n.n(s),r={data:function(){return{app:"",percentUpload:0,displayProgress:!1}},methods:{doUpload:function(){var t=this,e=new FormData;e.append("app",this.app),l.a.request({method:"post",url:"/apps/install",data:e,onUploadProgress:function(e){t.displayProgress=!0,t.percentUpload=100*e.loaded/e.total}}).then((function(){t.app="",t.$store.state.message.active=!0,t.$store.state.message.type="success",t.$store.state.message.text="App Installed Successfully"})).catch((function(e){e.response&&e.response.data?t.$store.state.message.text=e.response.data:t.$store.state.message.text="OOps, something went wrong, App Failed to Install",t.$store.state.message.active=!0,t.$store.state.message.type="red accent-2"}))}}},o=r,c=n("2877"),u=n("6544"),p=n.n(u),h=n("8336"),d=n("b0af"),f=n("99d9"),v=n("62ad"),g=n("23a7"),m=n("132d"),y=n("8e36"),b=n("0fd9"),S=n("2fa4"),V=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=V.exports;p()(V,{VBtn:h["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:v["a"],VFileInput:g["a"],VIcon:m["a"],VProgressLinear:y["a"],VRow:b["a"],VSpacer:S["a"]})}}]);
//# sourceMappingURL=install-app.8642e173.js.map