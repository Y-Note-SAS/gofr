(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afa68"],{"0eda":function(e,n,t){"use strict";t.r(n);var r,o,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("gofr-template",[e._v(" Loading... ")])},i=[],a=(t("d3b7"),t("3ca3"),t("ddb0"),t("a026")),c=t("bc3a"),f=t.n(c),d={name:"fhir-page",data:function(){return{}},created:function(){this.getTemplate()},methods:{getTemplate:function(){var e=this;f.a.get("/config/questionnaire/"+r).then((function(n){var r=n.data;"OperationOutcome"===r.resourceType?a["a"].component("gofr-template",{name:"gofr-template",data:function(){return{issues:r.issue}},components:{"gofr-outcome":function(){return Promise.resolve().then(t.bind(null,"5a61"))}},template:'<div><gofr-outcome :issues="issues"></gofr-outcome></div>'}):a["a"].component("gofr-template",{name:"gofr-template",data:function(){return{viewPage:o,isEdit:!0,sectionMenu:r.data.sectionMenu,hidden:r.data.hidden,constraints:r.data.constraints}},components:{"gofr-questionnaire":function(){return t.e("chunk-bd545746").then(t.bind(null,"b15a"))},"gofr-page-title":function(){return t.e("chunk-2d21a3c6").then(t.bind(null,"bb3c"))},"gofr-questionnaire-section":function(){return t.e("chunk-2d0e6654").then(t.bind(null,"9920"))},"gofr-questionnaire-group":function(){return t.e("chunk-2d0efc9d").then(t.bind(null,"9a32"))},"gofr-hidden":function(){return t.e("chunk-2d0b9df2").then(t.bind(null,"3593"))},"gofr-array":function(){return t.e("chunk-2d0af298").then(t.bind(null,"0cc2"))},"fhir-reference":function(){return t.e("chunk-58ec08a2").then(t.bind(null,"99fa"))},"fhir-string":function(){return t.e("chunk-1b3d2af8").then(t.bind(null,"b78c"))},"fhir-text":function(){return t.e("chunk-d3e34a68").then(t.bind(null,"b813"))},"fhir-date":function(){return Promise.all([t.e("chunk-72162224"),t.e("chunk-2d0e2c53")]).then(t.bind(null,"7fb0"))},"fhir-date-time":function(){return Promise.all([t.e("chunk-72162224"),t.e("chunk-2d0c17b7")]).then(t.bind(null,"45dd"))},"fhir-time":function(){return t.e("chunk-32294727").then(t.bind(null,"1286"))},"fhir-boolean":function(){return t.e("chunk-5cafeba1").then(t.bind(null,"ff03"))},"fhir-integer":function(){return t.e("chunk-5369b150").then(t.bind(null,"eaae"))},"fhir-choice":function(){return t.e("chunk-2d0c2116").then(t.bind(null,"4972"))},"fhir-attachment":function(){return t.e("chunk-7da34f76").then(t.bind(null,"ca33"))}},template:r.template}),e.$forceUpdate()})).catch((function(n){n.response&&"OperationOutcome"===n.response.data.resourceType?a["a"].component("gofr-template",{name:"gofr-template",data:function(){return{issues:n.response.data.issue}},components:{"gofr-outcome":function(){return Promise.resolve().then(t.bind(null,"5a61"))}},template:'<div><gofr-outcome :issues="issues"></gofr-outcome></div>'}):a["a"].component("gofr-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this page</p>.</div>"}),console.log(n),e.$forceUpdate()}))}},beforeCreate:function(){r=this.$route.params.questionnaire,o=this.$route.params.page,a["a"].component("gofr-template",{template:"<div>Loading...</div>"})}},l=d,s=t("2877"),h=Object(s["a"])(l,u,i,!1,null,null,null);n["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0afa68.e57b1ae3.js.map