(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58ec08a2"],{"91dd":function(e,t,r){"use strict";function s(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,n){t=t||"&",r=r||"=";var a={};if("string"!==typeof e||0===e.length)return a;var o=/\+/g;e=e.split(t);var c=1e3;n&&"number"===typeof n.maxKeys&&(c=n.maxKeys);var l=e.length;c>0&&l>c&&(l=c);for(var u=0;u<l;++u){var d,h,p,f,v=e[u].replace(o,"%20"),m=v.indexOf(r);m>=0?(d=v.substr(0,m),h=v.substr(m+1)):(d=v,h=""),p=decodeURIComponent(d),f=decodeURIComponent(h),s(a,p)?i(a[p])?a[p].push(f):a[p]=[a[p],f]:a[p]=f}return a};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},"99fa":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("gofr-element",{attrs:{edit:e.edit,loading:e.loading},scopedSlots:e._u([{key:"form",fn:function(){return["tree"==e.displayType?r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px","max-height":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[r("v-text-field",e._g({attrs:{label:e.$t("App.fhir-resources-texts."+e.display),readonly:"",outlined:"","hide-details":"auto",rules:e.rules,"error-messages":e.errors,loading:e.loading,dense:""},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(" "+e._s(e.$t("App.fhir-resources-texts."+e.display))+" "),e.required?r("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}],null,!0),model:{value:e.displayValue,callback:function(t){e.displayValue=t},expression:"displayValue"}},s))]}}],null,!1,4050376482),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e.disabled||e.preset&&"ResourceAdd"===e.$route.name?e._e():r("v-card",[r("v-treeview",{attrs:{active:e.active,items:e.items,"load-children":e.fetchChildren,open:e.open,"item-disabled":"locked",activatable:"","multiple-active":!1,"selection-type":"independent",loading:e.loading},on:{"update:active":function(t){e.active=t},"update:open":function(t){e.open=t}}})],1)],1):r("v-autocomplete",{attrs:{loading:e.loading,items:e.items,"search-input":e.search,"cache-items":"",flat:"","hide-no-data":"","hide-details":"",label:e.$t("App.fhir-resources-texts."+e.display),outlined:"",dense:"",placeholder:"Start typing for selection",rules:e.rules,disabled:e.disabled||e.preset&&"resource_add"===e.$route.name,"error-messages":e.errors},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},change:function(t){e.errors=[]}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.$t("App.fhir-resources-texts."+e.display))+" "),e.required?r("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}]),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})]},proxy:!0},{key:"header",fn:function(){return[e._v(" "+e._s(e.$t("App.fhir-resources-texts."+e.display))+" ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" "+e._s(e.displayValue)+" ")]},proxy:!0}])})},i=[],n=r("b85c"),a=r("1da1"),o=(r("96cf"),r("ac1f"),r("841c"),r("5319"),r("d3b7"),r("caad"),r("2532"),r("b0c0"),r("9911"),r("7db0"),r("8a79"),r("bc3a")),c=r.n(o),l=r("d79a"),u=r("b383"),d="http://hl7.org/fhir/StructureDefinition/",h={name:"fhir-reference",props:["field","label","targetProfile","targetResource","min","slotProps","path","edit","readOnlyIfSet","displayType","initialValue","overrideValue"],components:{GofrElement:l["a"]},data:function(){return{source:{path:"",data:{}},value:{reference:""},qField:"valueReference",loading:!1,search:"",menu:!1,items:[],select:"",resource:"",awaitingSearch:!1,displayValue:"",preset:!1,disabled:!1,errors:[],lockWatch:!1,active:[],open:[],treeLookup:{},allAllowed:!0}},created:function(){this.setupData()},watch:{slotProps:{handler:function(){this.lockWatch||this.setupData()},deep:!0},search:function(e){var t=this;this.awaitingSearch||setTimeout((function(){e&&e.length>1&&t.querySelections(t.search),t.awaitingSearch=!1}),500),this.awaitingSearch=!0},select:function(e){this.value.reference=e,this.getDisplay()},active:function(){this.active.length?(this.select=this.active[0],this.displayValue=this.treeLookup[this.select]):(this.select=void 0,this.displayValue=""),this.menu=!1}},methods:{setupData:function(){if(this.targetProfile&&this.targetResource&&(this.targetProfile.replace(d,"")===this.targetResource?this.allAllowed=!0:this.allAllowed=!1,this.resource=this.targetResource),"tree"===this.displayType&&this.setupTreeItems(),this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data;else{var e=this.$fhirutils.pathFieldExpression(this.field),t=this.$fhirpath.evaluate(this.slotProps.source.data,e);this.source.data=t[0]}this.source.data&&(this.preset=!0,this.select=this.source.data.reference,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&this.preset},setupTreeItems:function(){var e=this.initialValue;this.overrideValue&&(e=this.overrideValue),this.loading=!0;var t={};t=e?{partof:e}:{"partof:missing":!0},t._count=200;var r="/fhir/"+this.$store.state.config.userConfig.FRDatasource+"/"+this.resource+"?"+u.stringify(t);this.items=[],this.addItems(r,this.items)},checkChildren:function(e){var t={partof:e.id,_summary:"count"},r="/fhir/"+this.$store.state.config.userConfig.FRDatasource+"/"+this.resource+"?"+u.stringify(t);return new Promise((function(t){c.a.get(r).then((function(r){var s=r.data;s.total&&s.total>0&&(e.children=[]),t()})).catch((function(e){console.log("failed to check children for",r,e),t()}))}))},addItems:function(e,t){var r=this;c.a.get(e).then(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(s){var i,a,o,c,l,u,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=s.data,!(i.entry&&i.entry.length>0)){e.next=23;break}a=Object(n["a"])(i.entry),e.prev=3,a.s();case 5:if((o=a.n()).done){e.next=15;break}return c=o.value,l=!r.allAllowed&&(!c.resource.meta.profile||!c.resource.meta.profile.includes(r.targetProfile)),u={id:c.resource.resourceType+"/"+c.resource.id,name:c.resource.name,locked:l},e.next=11,r.checkChildren(u);case 11:r.treeLookup[u.id]=u.name,t.push(u);case 13:e.next=5;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](3),a.e(e.t0);case 20:return e.prev=20,a.f(),e.finish(20);case 23:i.link?(d=i.link.find((function(e){return"next"===e.relation})),d?r.addItems(d.url,t):r.loading=!1):r.loading=!1;case 24:case"end":return e.stop()}}),e,null,[[3,17,20,23]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log("Failed to add items for",e,t),r.loading=!1}))},fetchChildren:function(e){var t=this,r={};r={partof:e.id,_count:500};var s="/fhir/"+this.$store.state.config.userConfig.FRDatasource+"/"+this.resource+"?"+u.stringify(r);return this.loading=!0,this.addItems(s,e.children),new Promise((function(e){var r=0,s=function s(){!t.loading||r++>100?e():setTimeout(s,200)};s()}))},querySelections:function(e){var t=this;this.loading=!0;var r={"name:contains":e};this.targetProfile.endsWith(this.resource)||(r._profile=this.targetProfile);var s="/fhir/"+this.$store.state.config.userConfig.FRDatasource+"/"+this.resource+"?"+u.stringify(r);c.a.get(s).then(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(r){var s,i,a,o,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=r.data,t.items=[],!s.entry||!s.entry.length){e.next=24;break}i=Object(n["a"])(s.entry),e.prev=4,i.s();case 6:if((a=i.n()).done){e.next=16;break}return o=a.value,c=o.resource.resourceType+"/"+o.resource.id,l={value:c},e.next=12,t.$fhirutils.resourceLookup(c);case 12:l.text=e.sent,t.items.push(l);case 14:e.next=6;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](4),i.e(e.t0);case 21:return e.prev=21,i.f(),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[4,18,21,24]])})));return function(t){return e.apply(this,arguments)}}())},getDisplay:function(){var e=this;(!this.edit||this.preset)&&this.value&&this.value.reference&&(this.loading=!0,this.$fhirutils.resourceLookup(this.value.reference).then((function(t){e.displayValue=t,"tree"!==e.displayType&&e.items.push({text:t,value:e.value.reference}),e.loading=!1})))}},computed:{index:function(){return this.slotProps?this.slotProps.input:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){var e=this;return this.required?[function(t){return!!t||e.display+" is required"}]:[]}}},p=h,f=r("2877"),v=r("6544"),m=r.n(v),g=r("c6a6"),y=r("b0af"),b=r("e449"),x=r("8654"),k=r("eb2a"),w=Object(f["a"])(p,s,i,!1,null,null,null);t["default"]=w.exports;m()(w,{VAutocomplete:g["a"],VCard:y["a"],VMenu:b["a"],VTextField:x["a"],VTreeview:k["a"]})},b383:function(e,t,r){"use strict";t.decode=t.parse=r("91dd"),t.encode=t.stringify=r("e099")},d79a:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.edit?r("v-container",[e._t("form")],2):r("div",[r("v-row",{attrs:{dense:""}},[r("v-col",{staticClass:"font-weight-bold",attrs:{cols:e.$store.state.cols.header}},[e._t("header")],2),e.loading?r("v-col",{attrs:{cols:e.$store.state.cols.content}},[r("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}})],1):r("v-col",{attrs:{cols:e.$store.state.cols.content}},[e._t("value")],2)],1),r("v-divider")],1)],1)},i=[],n={name:"gofr-element",props:["edit","loading"]},a=n,o=r("2877"),c=r("6544"),l=r.n(c),u=r("62ad"),d=r("a523"),h=r("ce7e"),p=r("8e36"),f=r("0fd9"),v=Object(o["a"])(a,s,i,!1,null,null,null);t["a"]=v.exports;l()(v,{VCol:u["a"],VContainer:d["a"],VDivider:h["a"],VProgressLinear:p["a"],VRow:f["a"]})},e099:function(e,t,r){"use strict";var s=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,o){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"===typeof e?n(a(e),(function(a){var o=encodeURIComponent(s(a))+r;return i(e[a])?n(e[a],(function(e){return o+encodeURIComponent(s(e))})).join(t):o+encodeURIComponent(s(e[a]))})).join(t):o?encodeURIComponent(s(o))+r+encodeURIComponent(s(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function n(e,t){if(e.map)return e.map(t);for(var r=[],s=0;s<e.length;s++)r.push(t(e[s],s));return r}var a=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}}}]);
//# sourceMappingURL=chunk-58ec08a2.e9476a1c.js.map