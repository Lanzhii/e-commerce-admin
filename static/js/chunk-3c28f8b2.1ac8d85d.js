(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c28f8b2"],{b283:function(e,t,l){"use strict";l("d5c9")},d5c9:function(e,t,l){},e3d4:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[l("el-form-item",{attrs:{label:"商品名称"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),l("el-form-item",{attrs:{label:"商品"}},[l("el-select",{attrs:{placeholder:"选择发货单"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"Zone one",value:"shanghai"}}),l("el-option",{attrs:{label:"Zone two",value:"beijing"}})],1)],1),l("el-form-item",{attrs:{label:"日期选择"}},[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择时间"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),l("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),l("el-col",{attrs:{span:11}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),l("el-form-item",{attrs:{label:"在线配送"}},[l("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),l("el-form-item",{attrs:{label:"商品类别"}},[l("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[l("el-checkbox",{attrs:{label:"家具家电",name:"type"}}),l("el-checkbox",{attrs:{label:"服饰衣帽",name:"type"}}),l("el-checkbox",{attrs:{label:"电脑及配件",name:"type"}}),l("el-checkbox",{attrs:{label:"手机及配件",name:"type"}})],1)],1),l("el-form-item",{attrs:{label:"商品来源"}},[l("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[l("el-radio",{attrs:{label:"Sponsor"}}),l("el-radio",{attrs:{label:"Venue"}})],1)],1),l("el-form-item",{attrs:{label:"商品备注"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Create")]),l("el-button",{on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)],1)},o=[],r={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){this.$message("submit!")},onCancel:function(){this.$message({message:"cancel!",type:"warning"})}}},n=r,s=(l("b283"),l("2877")),c=Object(s["a"])(n,a,o,!1,null,"3853add4",null);t["default"]=c.exports}}]);