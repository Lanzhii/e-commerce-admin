(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ac93be9"],{"02b0":function(t,e,n){"use strict";n("94f5")},"1b62":function(t,e,n){},"314a":function(t,e,n){"use strict";n("1b62")},5311:function(t,e,n){"use strict";n("5f51")},"5f51":function(t,e,n){},"62da":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Search",{attrs:{data:t.search}}),n("AllEidt",t._l(t.contentData,(function(e,a){return n("el-button",{key:a,attrs:{type:e.type,icon:e.icon,plain:""},on:{click:function(n){return t.eidt(e)}}},[t._v(t._s(e.name))])})),1),n("AddProduct",{attrs:{visible:t.visible},on:{del:t.hide}}),n("el-row",{staticClass:"mt",attrs:{gutter:10}},[n("el-col",{attrs:{span:4}},[n("ProductSort",{attrs:{title:"产品类型列表",data:t.sortList,height:65}})],1),n("el-col",{attrs:{span:20}},[n("Tables",{attrs:{"tab-data":t.tabData,height:"60"}},[n("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(1==e.row.status?"已启用":"未启用")+" ")]}}])}),n("el-table-column",{attrs:{label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.edit(e.row)}}},[t._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.Delete(e.row)}}},[t._v("删除")]),n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.enable(e.row)}}},[t._v(" "+t._s(1==e.row.status?"禁用":"启用")+" ")])]}}])})],1)],1)],1)],1)},s=[],i=(n("d3b7"),n("3ca3"),n("ddb0"),n("944c")),r=n("7896"),o=n("cdb5"),c=n("ea18"),l=n("c4c8"),u={components:{Tables:r["a"],ProductSort:o["a"],Search:i["a"],AllEidt:c["a"],AddProduct:function(){return n.e("chunk-521f19e8").then(n.bind(null,"b295"))}},data:function(){return{advance:!0,visible:!1,contentData:[{type:"info",icon:"el-icon-plus",name:"上架商品",status:2},{type:"warning",icon:"el-icon-plus",name:"新建分类",status:0}],sortTitle:"产品类型列表",sortList:[],search:[{name:"商品名称：",tip:"输入商品名称",input:""},{name:"添加时间：",tip:"输入日期",input:""},{name:"商品类别：",tip:"输入商品类别",input:""}],tabData:{tabHeader:[{pros:"account",labels:"商品编号"},{pros:"name",labels:"商品名称"},{pros:"category",labels:"商品类别"},{pros:"maximum",labels:"最高"},{pros:"image",labels:"图片"},{pros:"repertory",labels:"库存"},{pros:"minPrice",labels:"进货价"},{pros:"date",labels:"加入时间"},{pros:"status",labels:"状态"}],persons:[]}}},computed:{setPersons:function(){return this.tabData.persons}},created:function(){var t=this;this.getPersonList(),Object(l["b"])().then((function(e){t.sortList=e.list}))},methods:{eidt:function(t){var e=t.status;2===e?this.visible=!0:0===e&&this.$router.push("/account/classify")},hide:function(){this.visible=!1},getPersonList:function(){var t=this;Object(l["a"])().then((function(e){t.tabData.persons=e.data.list}))}}},d=u,p=n("2877"),f=Object(p["a"])(d,a,s,!1,null,"d63a48d4",null);e["default"]=f.exports},7896:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"mt",attrs:{"body-style":{height:t.height+"vh"}}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tabData.persons,"max-height":t.height+"vh",fixed:""},on:{"selection-change":t.selectChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("vuescroll",{attrs:{ops:t.ops}},[t._l(t.tabData.tabHeader,(function(t,e){return n("el-table-column",{key:e,attrs:{prop:t.pros,label:t.labels}})})),t._t("default")],2)],1)],1),n("el-row",{staticClass:"pages mb",attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("el-col",{attrs:{span:24}},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.sizeChange,"current-change":t.currentChange}})],1)],1)],1)},s=[],i=n("5530"),r=(n("b0c0"),n("d3b7"),n("25f0"),n("d81d"),n("77a0")),o=n.n(r),c=n("2f62"),l={components:{vuescroll:o.a},props:{tabData:{type:Object,required:!0},height:{required:!0,type:String}},data:function(){return{dialogVisible:!1,title:"",currentPage:1,selectList:[],ops:{vuescroll:{},scrollPanel:{},rail:{size:"1px",background:"#fff"},bar:{background:"#cecece"}}}},methods:Object(i["a"])(Object(i["a"])({},Object(c["c"])(["setRowData"])),{},{edit:function(t){this.title="编辑",this.dialogVisible=!0,this.setRowData(t)},Delete:function(t){t.name=t.length>1?t.map((function(t){return t.name})).toString():t.name,this.$alert("确认要删除".concat(t.name,"的人员信息吗？"),"提示",{confirmButtonText:"确定",beforeClose:function(t,e,n){console.log("调用axios请求删除数据"),n()}})},enable:function(t){if(t.length>1)if(t=t.map((function(t){return t.status})),t.every((function(t){return 1===t})))t.status;else{if(!t.every((function(t){return 2===t})))return void this.$alert("选中的启用或禁用不一致，请重新选中","提示",{confirmButtonText:"确定"});t.status}this.$alert("确认要".concat(1===t.status?"禁用":"启用","吗？"),"提示",{confirmButtonText:"确定",beforeClose:function(t,e,n){console.log("调用axios请求处理数据"),n()}})},selectChange:function(t){this.advance=!t.length,this.selectList=t.length?t:[]},visible:function(){this.title="创建",this.dialogVisible=!0,this.setRowData({})},sizeChange:function(t){console.log("每页 ".concat(t," 条"))},currentChange:function(t){console.log("当前页: ".concat(t))},hide:function(){this.dialogVisible=!1},freeze:function(t){t.name=t.length>1?t.map((function(t){return t.name})).toString():t.name,this.$alert("确认要冻结".concat(t.name,"的人员信息吗？"),"提示",{confirmButtonText:"确定",beforeClose:function(t,e,n){console.log("调用axios请求冻结数据"),n()}})}})},u=l,d=(n("02b0"),n("2877")),p=Object(d["a"])(u,a,s,!1,null,"09e079ea",null);e["a"]=p.exports},"944c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"lookfor"},[n("el-row",{attrs:{type:"flex",justify:"space-between"}},[t._l(t.data,(function(e,a){return n("el-col",{key:a,attrs:{span:t.spans}},[t._v(" "+t._s(e.name)+" "),n("el-input",{attrs:{placeholder:e.tip,size:"mini"},model:{value:e.input,callback:function(n){t.$set(e,"input",n)},expression:"item.input"}})],1)})),n("el-col",{attrs:{span:t.spans}},[n("el-button",{attrs:{type:"primary",round:"",icon:"el-icon-search",size:"mini",plain:""}},[t._v("搜索")])],1)],2)],1)],1)},s=[],i={props:{data:{require:!0,type:Array}},computed:{spans:function(){return 24/(this.data.length+1)}}},r=i,o=(n("5311"),n("2877")),c=Object(o["a"])(r,a,s,!1,null,"57c08784",null);e["a"]=c.exports},"94f5":function(t,e,n){},c4c8:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return i}));var a=n("b775");function s(t){return Object(a["a"])({url:"e-commerce-admin/product/list",method:"get",data:t})}function i(t){return Object(a["a"])({url:"e-commerce-admin/product/all",method:"get",data:t})}},cdb5:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"product-sort"}},[n("el-card",{ref:"productclass",staticClass:"product-class",style:{height:t.height+"vh"}},[n("h1",[t._v(t._s(t.title))]),n("el-tree",{attrs:{data:t.data,"show-checkbox":"","node-key":"id",props:t.defaultProps}})],1)],1)},s=[],i=(n("b0c0"),{props:{title:{require:!0,type:String},data:{require:!0,type:Array},height:{required:!0,type:String}},data:function(){return{defaultProps:{children:"children",label:"label"},count:1}},methods:{handleCheckChange:function(t,e,n){console.log(t,e,n)},handleNodeClick:function(t){console.log(t)},loadNode:function(t,e){var n,a=this;return 0===t.level?e([{name:"region11"},{name:"region22"}]):t.level>3?e([]):(n="region1"===t.data.name||"region2"!==t.data.name&&Math.random()>.5,void setTimeout((function(){var t;t=n?[{name:"zone"+a.count++},{name:"zone"+a.count++}]:[],e(t)}),500))}}}),r=i,o=(n("314a"),n("2877")),c=Object(o["a"])(r,a,s,!1,null,"3b3dbb58",null);e["a"]=c.exports},ea18:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"mt"},[t._t("default"),n("el-button",{attrs:{type:"danger",icon:"el-icon-minus",plain:"",disabled:""},on:{click:function(e){return t.clearAll(t.item)}}},[t._v("批量删除")])],2)],1)},s=[],i=n("5530"),r=n("2f62"),o={data:function(){return{}},methods:Object(i["a"])(Object(i["a"])({},Object(r["c"])(["setOpenDialog"])),{},{eidt:function(t){var e=t.status;2===e&&this.setOpenDialog(!0)}})},c=o,l=n("2877"),u=Object(l["a"])(c,a,s,!1,null,"28ca366a",null);e["a"]=u.exports}}]);