(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b70fc30e"],{"06d0":function(e,t,r){"use strict";var a=r("91c9"),n=r.n(a);n.a},"1c60":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"category-page app-container"},[r("div",{staticClass:"el-child-head"},[r("div",{staticClass:"operate"},[r("el-button",{attrs:{size:"mini",icon:"el-icon-circle-plus-outline",type:"primary"},on:{click:function(t){return e.openAddDialog()}}},[e._v("新增广告")]),e._v(" "),r("el-button",{attrs:{size:"mini",icon:"el-icon-delete",type:"danger"},on:{click:function(t){return e.batchDel()}}},[e._v("批量删除")])],1)]),e._v(" "),r("div",{staticClass:"el-table-box"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.adImg,border:""}},[r("el-table-column",{attrs:{prop:"id",label:"ID",width:"60px",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"type",label:"类型",formatter:e.typeText,width:"120px",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"is_href",label:"是否支持跳转",formatter:e.isHrefText,width:"160px",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"url",label:"URL地址",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"href_url",label:"跳转地址",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"status",label:"状态",align:"center",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{value:Boolean(t.row.status),"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(r){return e.handleSwithStatus(t.$index,t.row)}}})]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini"},on:{click:function(r){return e.openEditDialog(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),r("ad-img",{attrs:{other:e.adImgData,from:e.adImgForm},on:{update:e.watchUpdate}})],1)},n=[],i=(r("96cf"),r("3b8d")),l=r("5f87"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.setTitle,visible:e.other.isShow,center:""},on:{"update:visible":function(t){return e.$set(e.other,"isShow",t)}}},[r("el-form",{attrs:{model:e.from,"label-width":"120px","label-position":"left",size:"medium"}},[r("el-form-item",{attrs:{label:"广告类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择广告类型"},model:{value:e.from.type,callback:function(t){e.$set(e.from,"type",t)},expression:"from.type"}},[r("el-option",{attrs:{label:"开屏广告",value:1}}),e._v(" "),r("el-option",{attrs:{label:"轮播广告",value:2}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"图片地址",prop:"url"}},[r("el-input",{model:{value:e.from.url,callback:function(t){e.$set(e.from,"url",t)},expression:"from.url"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"广告图"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"null","show-file-list":!1,"on-change":e.handleAdimgChange,"on-remove":e.handleAdimgRemove,multiple:!1,"auto-upload":!1}},[e.from.url?r("img",{staticClass:"avatar",attrs:{src:e.from.url}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),r("el-form-item",{attrs:{label:"跳转",prop:"resource"}},[r("el-radio-group",{model:{value:e.from.is_href,callback:function(t){e.$set(e.from,"is_href",t)},expression:"from.is_href"}},[r("el-radio",{attrs:{label:1}},[e._v("允许跳转")]),e._v(" "),r("el-radio",{attrs:{label:0}},[e._v("禁止跳转")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"跳转地址",prop:"href_url"}},[r("el-input",{model:{value:e.from.href_url,callback:function(t){e.$set(e.from,"href_url",t)},expression:"from.href_url"}})],1),e._v(" "),null!=e.category?r("el-form-item",{attrs:{label:"广告类别"}},[r("el-select",{attrs:{placeholder:"请选择广告类别"},model:{value:e.from.categoryId,callback:function(t){e.$set(e.from,"categoryId",t)},expression:"from.categoryId"}},e._l(e.category,(function(e,t){return r("el-option",{key:t,attrs:{label:e.zh_name,value:e.id}})})),1)],1):e._e(),e._v(" "),r("el-form-item",["add"===e.other.type?r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleAddAdimg()}}},[e._v("立刻新增")]):r("el-button",{on:{click:function(t){return e.handleEditAdimg()}}},[e._v("提交修改")])],1)],1)],1)},s=[],u=(r("28a5"),r("ed08")),c={name:"AdTemp",props:{other:{type:Object,default:function(){return{}}},from:{type:Object,default:function(){return{}}}},data:function(){return{category:null,upload:{adimg:null}}},computed:{setTitle:function(){return"add"===this.other.type?"新增广告":"编辑广告"}},created:function(){this.getCategory()},methods:{handleAdimgChange:function(e,t){var r=524288,a=e.raw.type.split("/")[0].toLowerCase();e.size>r?(this.$message({message:"文件大小超过限制，文件最大为500KB!",type:"warning"}),this.handleAdimgRemove(e,t,"warn")):"image"!==a?(this.$message({message:"请选择图片!",type:"warning"}),this.handleAdimgRemove(e,t,"warn")):(this.upload.adimg=new FormData,this.upload.adimg.append("adimg",e.raw),this.from.url=Object(u["a"])(e.raw),this.handleAdimgRemove(e,t))},handleAdimgRemove:function(e,t,r){r?t=t.filter((function(r,a){return r.uid===e.uid&&t.splice(a,1),r.uid!==e.uid})):t.length>1&&t.splice(0,1)},getCategory:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.bookmanage.category();case 2:t=e.sent,r=t.result,this.category=r;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleAddAdimg:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.app.updateAdimg(this.upload.adimg);case 2:return t=e.sent,r=t.adimgUrl,this.from.url=r,e.next=7,this.$api.app.createAdimg(this.from);case 7:this.other.isShow=!1,this.$emit("update");case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleEditAdimg:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.upload.adimg.has("adimg")){e.next=6;break}return e.next=3,this.$api.app.updateAdimg(this.upload.adimg);case 3:t=e.sent,r=t.adimgUrl,this.from.url=r;case 6:return e.next=8,this.$api.app.editAdimg(this.from.id,this.from);case 8:this.other.isShow=!1,this.$emit("update");case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},d=c,m=(r("06d0"),r("2877")),p=Object(m["a"])(d,o,s,!1,null,"375f22b7",null),h=p.exports,f={components:{adImg:h},data:function(){return{adImg:[],adImgForm:{type:null,url:null,is_href:null,href_url:null,categoryId:null},adImgData:{isShow:!1,type:"add"}}},created:function(){this.getAllAdimg()},methods:{handleSwithStatus:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.status=1===r.status?0:1,e.next=3,this.$api.app.editAdimg(r.id,r);case 3:this.getAllAdimg();case 4:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),handleDelete:function(e,t){var r=this;this.$confirm("此操作将永久删除该广告, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.id,e.next=3,r.$api.app.removeAdimg(a);case 3:r.getAllAdimg(),r.$message({type:"success",message:"删除成功!"});case 5:case"end":return e.stop()}}),e)})))).catch((function(){r.$message({type:"info",message:"已取消删除"})}))},watchUpdate:function(){this.getAllAdimg()},openAddDialog:function(){this.adImgForm=Object(l["c"])(this.adImgForm),this.adImgData.type="add",this.adImgData.isShow=!0},openEditDialog:function(e,t){t.typeText=1===t.type?"开屏广告":"轮播广告",this.adImgForm=Object(l["c"])(this.adImgForm,t),this.adImgData.type="edit",this.adImgData.isShow=!0},getAllAdimg:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.app.findAdimg();case 2:t=e.sent,r=t.result,this.adImg=r;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),typeText:function(e){return 1===e.type?"开屏广告":2===e.type?"轮播广告":void 0},isHrefText:function(e){return 0===e.is_href?"禁止跳转":1===e.is_href?"允许跳转":void 0}}},g=f,v=Object(m["a"])(g,a,n,!1,null,null,null);t["default"]=v.exports},"91c9":function(e,t,r){}}]);