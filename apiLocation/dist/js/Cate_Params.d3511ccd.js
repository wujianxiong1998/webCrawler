(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cate_Params"],{"1bfe":function(e,t,a){},"2f14":function(e,t,a){"use strict";var r=a("1bfe"),n=a.n(r);n.a},"3b0d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("商品管理")]),a("el-breadcrumb-item",[e._v("参数列表")])],1),a("el-card",[a("el-alert",{attrs:{title:"注意: 只允许为第三级分类设置相关参数！",type:"warning",closable:!1,"show-icon":""}}),a("el-row",{staticClass:"cat_opt"},[a("el-col",[a("span",[e._v("选择商品分类: ")]),a("el-cascader",{attrs:{"expand-trigger":"hover",options:e.catelist,props:e.cateProps},on:{change:e.handleChange},model:{value:e.selectedCateKeys,callback:function(t){e.selectedCateKeys=t},expression:"selectedCateKeys"}})],1)],1),a("el-row",[a("el-col",[a("el-tabs",{on:{"tab-click":e.handleTabClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"动态参数",name:"many"}},[a("el-button",{attrs:{type:"primary",size:"mini",disabled:e.isBtnDisabled},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加参数")]),a("el-table",{attrs:{data:e.manyTableData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row.attr_vals,(function(r,n){return a("el-tag",{key:n,attrs:{closable:""},on:{close:function(a){return e.handleClose(n,t.row)}}},[e._v(e._s(r))])})),t.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return e.handleInputConfirm(t.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.handleInputConfirm(t.row)}},model:{value:t.row.inputValue,callback:function(a){e.$set(t.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return e.showInput(t.row)}}},[e._v("+ New Tag")])]}}])}),a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{label:"参数名称",prop:"attr_name"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return e.showEditDialog(t.row.attr_id)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return e.removeParams(t.row.attr_id)}}},[e._v("删除")])]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"静态属性",name:"only"}},[a("el-button",{attrs:{type:"primary",size:"mini",disabled:e.isBtnDisabled},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加属性")]),a("el-table",{attrs:{data:e.onlyTableData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"expand"}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row.attr_vals,(function(r,n){return a("el-tag",{key:n,attrs:{closable:""},on:{close:function(a){return e.handleClose(n,t.row)}}},[e._v(e._s(r))])})),t.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return e.handleInputConfirm(t.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.handleInputConfirm(t.row)}},model:{value:t.row.inputValue,callback:function(a){e.$set(t.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return e.showInput(t.row)}}},[e._v("+ New Tag")])]}}])})],1),a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{label:"属性名称",prop:"attr_name"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return e.showEditDialog(t.row.attr_id)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return e.removeParams(t.row.attr_id)}}},[e._v("删除")])]}}])})],1)],1)],1)],1)],1)],1),a("el-dialog",{attrs:{title:"添加"+e.titleText,visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClosed}},[a("el-form",{ref:"addFormRef",attrs:{rules:e.addFormRules,model:e.addForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:e.titleText,prop:"attr_name"}},[a("el-input",{model:{value:e.addForm.attr_name,callback:function(t){e.$set(e.addForm,"attr_name",t)},expression:"addForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addParams}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"修改"+e.titleText,visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[a("el-form",{ref:"editFormRef",attrs:{rules:e.editFormRules,model:e.editForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:e.titleText,prop:"attr_name"}},[a("el-input",{model:{value:e.editForm.attr_name,callback:function(t){e.$set(e.editForm,"attr_name",t)},expression:"editForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.editParams}},[e._v("确 定")])],1)],1)],1)},n=[],s=(a("99af"),a("4160"),a("a15b"),a("a434"),a("d3b7"),a("ac1f"),a("1276"),a("498a"),a("159b"),a("96cf"),{data:function(){return{catelist:[],cateProps:{value:"cat_id",label:"cat_name",children:"children"},selectedCateKeys:[],activeName:"many",manyTableData:[],onlyTableData:[],addDialogVisible:!1,addForm:{},addFormRules:{attr_name:[{required:!0,message:"请输入参数名称",trigger:"blur"}]},editDialogVisible:!1,editForm:{},editFormRules:{attr_name:[{required:!0,message:"请输入参数名称",trigger:"blur"}]}}},created:function(){this.getCateList()},methods:{getCateList:function(){var e,t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(this.$http.get("categories"));case 2:if(e=a.sent,t=e.data,200===t.meta.status){a.next=6;break}return a.abrupt("return",this.$message.error("获取商品分类失败! "));case 6:this.catelist=t.data;case 7:case"end":return a.stop()}}),null,this)},handleChange:function(){this.getParamsData()},handleTabClick:function(){this.getParamsData()},getParamsData:function(){var e,t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:if(3===this.selectedCateKeys.length){a.next=5;break}return this.selectedCateKeys=[],this.manyTableData=[],this.onlyTableData=[],a.abrupt("return");case 5:return a.next=7,regeneratorRuntime.awrap(this.$http.get("categories/".concat(this.cateId,"/attributes"),{params:{sel:this.activeName}}));case 7:if(e=a.sent,t=e.data,200===t.meta.status){a.next=11;break}return a.abrupt("return",this.$message.error("获取参数列表失败！"));case 11:t.data.forEach((function(e){e.attr_vals=e.attr_vals?e.attr_vals.split(" "):[],e.inputVisible=!1,e.inputValue=""})),"many"===this.activeName?this.manyTableData=t.data:this.onlyTableData=t.data;case 13:case"end":return a.stop()}}),null,this)},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addParams:function(){var e=this;this.$refs.addFormRef.validate((function(t){var a,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,regeneratorRuntime.awrap(e.$http.post("categories/".concat(e.cateId,"/attributes"),{attr_name:e.addForm.attr_name,attr_sel:e.activeName}));case 4:if(a=n.sent,r=a.data,201===r.meta.status){n.next=8;break}return n.abrupt("return",e.$message.error("添加参数失败！"));case 8:e.$message.success("添加参数成功！"),e.addDialogVisible=!1,e.getParamsData();case 11:case"end":return n.stop()}}))}))},showEditDialog:function(e){var t,a;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(this.$http.get("categories/".concat(this.cateId,"/attributes/").concat(e),{params:{attr_sel:this.activeName}}));case 2:if(t=r.sent,a=t.data,200===a.meta.status){r.next=6;break}return r.abrupt("return",this.$message.error("获取参数信息失败！"));case 6:this.editForm=a.data,this.editDialogVisible=!0;case 8:case"end":return r.stop()}}),null,this)},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editParams:function(){var e=this;this.$refs.editFormRef.validate((function(t){var a,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,regeneratorRuntime.awrap(e.$http.put("categories/".concat(e.cateId,"/attributes/").concat(e.editForm.attr_id),{attr_name:e.editForm.attr_name,attr_sel:e.activeName}));case 4:if(a=n.sent,r=a.data,200===r.meta.status){n.next=8;break}return n.abrupt("return",e.$message.error("修改参数失败！"));case 8:e.$message.success("修改参数成功！"),e.getParamsData(),e.editDialogVisible=!1;case 11:case"end":return n.stop()}}))}))},removeParams:function(e){var t,a,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(this.$confirm("此操作将永久删除该参数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e})));case 2:if(t=n.sent,"confirm"===t){n.next=5;break}return n.abrupt("return",this.$message.info("已取消删除！"));case 5:return n.next=7,regeneratorRuntime.awrap(this.$http.delete("categories/".concat(this.cateId,"/attributes/").concat(e)));case 7:if(a=n.sent,r=a.data,200===r.meta.status){n.next=11;break}return n.abrupt("return",this.$message.error("删除参数失败！"));case 11:this.$message.success("删除参数成功！"),this.getParamsData();case 13:case"end":return n.stop()}}),null,this)},handleInputConfirm:function(e){if(0===e.inputValue.trim().length)return e.inputValue="",void(e.inputVisible=!1);e.attr_vals.push(e.inputValue.trim()),e.inputValue="",e.inputVisible=!1,this.saveAttrVals(e)},saveAttrVals:function(e){var t,a;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(this.$http.put("categories/".concat(this.cateId,"/attributes/").concat(e.attr_id),{attr_name:e.attr_name,attr_sel:e.attr_sel,attr_vals:e.attr_vals.join(" ")}));case 2:if(t=r.sent,a=t.data,200===a.meta.status){r.next=6;break}return r.abrupt("return",this.$message.error("添加参数项失败！"));case 6:return r.abrupt("return",this.$message.success("添加参数项成功！"));case 7:case"end":return r.stop()}}),null,this)},showInput:function(e){var t=this;e.inputVisible=!0,this.$nextTick((function(e){t.$refs.saveTagInput.$refs.input.focus()}))},handleClose:function(e,t){t.attr_vals.splice(e,1),this.saveAttrVals(t)}},computed:{isBtnDisabled:function(){return 3!==this.selectedCateKeys.length},cateId:function(){return 3===this.selectedCateKeys.length?this.selectedCateKeys[2]:null},titleText:function(){return"many"===this.activeName?"动态参数":"静态属性"}}}),i=s,o=(a("e80f"),a("2877")),l=Object(o["a"])(i,r,n,!1,null,"7dc9b92e",null);t["default"]=l.exports},"498a":function(e,t,a){"use strict";var r=a("23e7"),n=a("58a8").trim,s=a("e070");r({target:"String",proto:!0,forced:s("trim")},{trim:function(){return n(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var r=a("1d80"),n=a("5899"),s="["+n+"]",i=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),l=function(e){return function(t){var a=String(r(t));return 1&e&&(a=a.replace(i,"")),2&e&&(a=a.replace(o,"")),a}};e.exports={start:l(1),end:l(2),trim:l(3)}},"7f6a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("商品管理")]),a("el-breadcrumb-item",[e._v("商品分类")])],1),a("el-card",[a("el-row",[a("el-col",[a("el-button",{attrs:{type:"primary"},on:{click:e.showAddCateDialog}},[e._v("添加分类")])],1)],1),a("tree-table",{staticClass:"treeTable",attrs:{data:e.cateList,columns:e.columns,"selection-type":!1,"expand-type":!1,"show-index":"","index-text":"#",border:"","show-row-hover":!1},scopedSlots:e._u([{key:"isok",fn:function(e){return[!1===e.row.cat_deleted?a("i",{staticClass:"el-icon-success",staticStyle:{color:"lightgreen"}}):a("i",{staticClass:"el-icon-error"})]}},{key:"order",fn:function(t){return[0===t.row.cat_level?a("el-tag",{attrs:{size:"mini"}},[e._v("一级")]):1===t.row.cat_level?a("el-tag",{attrs:{type:"success",size:"mini"}},[e._v("二级")]):a("el-tag",{attrs:{type:"warning",size:"mini"}},[e._v("三级")])]}},{key:"opt",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return e.editCate(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return e.submitDel(t.row)}}},[e._v("删除")])]}}])}),a("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[3,5,10,15],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"添加分类",visible:e.addCateDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addCateDialogVisible=t},close:e.addCateDialogClosed}},[a("el-form",{ref:"addCateFormRef",attrs:{model:e.addCateForm,rules:e.addCateFormRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"分类名称: ",prop:"cat_name"}},[a("el-input",{model:{value:e.addCateForm.cat_name,callback:function(t){e.$set(e.addCateForm,"cat_name",t)},expression:"addCateForm.cat_name"}})],1),a("el-form-item",{attrs:{label:"父级分类: "}},[a("el-cascader",{attrs:{options:e.parentCateList,props:{expandTrigger:"hover",value:"cat_id",label:"cat_name",children:"children"},clearable:"","change-on-select":""},on:{change:e.parentCateChanged},model:{value:e.selectedKeys,callback:function(t){e.selectedKeys=t},expression:"selectedKeys"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addCateDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addCate}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"编辑商品分类信息",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t}}},[a("el-form",{attrs:{model:e.nowCate,"label-width":"70px"}},[a("el-form-item",{attrs:{label:"分类名称"}},[a("el-input",{model:{value:e.nowCate.cat_name,callback:function(t){e.$set(e.nowCate,"cat_name",t)},expression:"nowCate.cat_name"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitEdit}},[e._v("确 定")])],1)],1)],1)},n=[],s=(a("d3b7"),a("96cf"),{data:function(){return{cateList:[],queryInfo:{pagenum:1,pagesize:5},total:0,columns:[{label:"分类名称",prop:"cat_name"},{label:"是否有效",type:"template",template:"isok"},{label:"排序",type:"template",template:"order"},{label:"操作",type:"template",template:"opt"}],addCateDialogVisible:!1,addCateForm:{cat_name:"",cat_pid:0,cat_level:0},addCateFormRules:{cat_name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]},parentCateList:[],selectedKeys:[],editDialogVisible:!1,nowCate:{}}},created:function(){this.getCateList()},methods:{getCateList:function(){var e,t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(this.$http.get("categories",{params:this.queryInfo}));case 2:if(e=a.sent,t=e.data,200===t.meta.status){a.next=6;break}return a.abrupt("return",this.$messsage.error("获取商品分类失败！"));case 6:this.cateList=t.data.result,this.total=t.data.total;case 8:case"end":return a.stop()}}),null,this)},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getCateList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getCateList()},showAddCateDialog:function(){this.getParentCateList(),this.addCateDialogVisible=!0},getParentCateList:function(){var e,t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(this.$http.get("categories",{params:{type:2}}));case 2:if(e=a.sent,t=e.data,200===t.meta.status){a.next=6;break}return a.abrupt("return",this.$messsage.error("获取父级分类数据失败！"));case 6:this.parentCateList=t.data;case 7:case"end":return a.stop()}}),null,this)},parentCateChanged:function(){this.selectedKeys.length>0?(this.addCateForm.cat_pid=this.selectedKeys[this.selectedKeys.length-1],this.addCateForm.cat_level=this.selectedKeys.length):(this.addCateForm.cat_pid=0,this.addCateForm.cat_level=0)},addCate:function(){var e=this;this.$refs.addCateFormRef.validate((function(t){var a,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,regeneratorRuntime.awrap(e.$http.post("categories",e.addCateForm));case 4:if(a=n.sent,r=a.data,201===r.meta.status){n.next=8;break}return n.abrupt("return",e.$messsage.error("添加分类失败！"));case 8:e.$message.success("添加分类成功！"),e.getCateList(),e.addCateDialogVisible=!1;case 11:case"end":return n.stop()}}))}))},addCateDialogClosed:function(){this.$refs.addCateFormRef.resetFields(),this.selectedKeys=[],this.addCateForm.cat_level=0,this.addCateForm.cat_pid=0},editCate:function(e){this.editDialogVisible=!0,this.nowCate=e},submitEdit:function(){var e,t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(this.$http.put("categories/".concat(this.nowCate.cat_id),{cat_name:this.nowCate.cat_name}));case 2:if(e=a.sent,t=e.data,this.nowCate={},200===t.meta.status){a.next=7;break}return a.abrupt("return",this.$message.error("更新失败！"));case 7:this.$message.success("更新成功！"),this.getCateList(),this.editDialogVisible=!1;case 10:case"end":return a.stop()}}),null,this)},submitDel:function(e){var t,a,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e})));case 2:if(t=n.sent,"confirm"===t){n.next=5;break}return n.abrupt("return",this.$message.info("已取消删除！"));case 5:return n.next=7,regeneratorRuntime.awrap(this.$http.delete("categories/".concat(e.cat_id)));case 7:if(a=n.sent,r=a.data,200===r.meta.status){n.next=11;break}return n.abrupt("return",this.$message.error("删除用户失败！"));case 11:this.$message.success("删除用户成功！"),this.getCateList();case 13:case"end":return n.stop()}}),null,this)}}}),i=s,o=(a("2f14"),a("2877")),l=Object(o["a"])(i,r,n,!1,null,"133b5736",null);t["default"]=l.exports},e070:function(e,t,a){var r=a("d039"),n=a("5899"),s="​᠎";e.exports=function(e){return r((function(){return!!n[e]()||s[e]()!=s||n[e].name!==e}))}},e80f:function(e,t,a){"use strict";var r=a("ead4"),n=a.n(r);n.a},ead4:function(e,t,a){}}]);
//# sourceMappingURL=Cate_Params.d3511ccd.js.map