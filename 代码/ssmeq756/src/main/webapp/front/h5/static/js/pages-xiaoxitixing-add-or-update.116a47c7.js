(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xiaoxitixing-add-or-update"],{2860:function(r,i,t){"use strict";t.r(i);var e=t("a8b5"),n=t.n(e);for(var a in e)"default"!==a&&function(r){t.d(i,r,(function(){return e[r]}))}(a);i["default"]=n.a},4141:function(r,i,t){"use strict";var e=t("e20d"),n=t.n(e);n.a},"64fc":function(r,i,t){"use strict";t.r(i);var e=t("e94b"),n=t("2860");for(var a in n)"default"!==a&&function(r){t.d(i,r,(function(){return n[r]}))}(a);t("4141");var o,d=t("f0c5"),s=Object(d["a"])(n["default"],e["b"],e["c"],!1,null,"527d2151",null,!1,e["a"],o);i["default"]=s.exports},"7fbb":function(r,i,t){var e=t("24fb");i=e(!1),i.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-527d2151]{padding:%?20?%}.content[data-v-527d2151]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220301/d67240b0559f478e8e8f98b806fde837.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-527d2151]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-527d2151]{width:%?180?%}.avator[data-v-527d2151]{width:%?150?%;height:%?60?%}.right-input[data-v-527d2151]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-527d2151]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-527d2151]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-527d2151]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-527d2151]{border:0}.cu-form-group uni-input[data-v-527d2151]{padding:0 %?30?%}.uni-input[data-v-527d2151]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-527d2151]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-527d2151]::after{line-height:%?60?%}.select .uni-input[data-v-527d2151]{line-height:%?60?%}.input .right-input[data-v-527d2151]{line-height:%?60?%}',""]),r.exports=i},a8b5:function(r,i,t){"use strict";var e=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("96cf");var n=e(t("3b8d")),a=e(t("e2b1")),o={data:function(){return{cross:"",ruleForm:{tixingbiaoti:"",jinqizhaopian:"",tixingneirong:"",yonghuming:"",tixingshijian:"",userid:""},user:{},ro:{tixingbiaoti:!1,jinqizhaopian:!1,tixingneirong:!1,yonghuming:!1,tixingshijian:!1,userid:!1}}},components:{wPicker:a.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(i){var t,e,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.ruleForm.tixingshijian=this.$utils.getCurDateTime(),t=uni.getStorageSync("nowTable"),r.next=4,this.$api.session(t);case 4:if(e=r.sent,this.user=e.data,this.ruleForm.yonghuming=this.user.yonghuming,this.ro.yonghuming=!0,this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){r.next=16;break}return this.ruleForm.id=i.id,r.next=14,this.$api.info("xiaoxitixing",this.ruleForm.id);case 14:e=r.sent,this.ruleForm=e.data;case 16:if(this.cross=i.cross,!i.cross){r.next=48;break}n=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(n);case 20:if((r.t1=r.t0()).done){r.next=48;break}if(a=r.t1.value,"tixingbiaoti"!=a){r.next=26;break}return this.ruleForm.tixingbiaoti=n[a],this.ro.tixingbiaoti=!0,r.abrupt("continue",20);case 26:if("jinqizhaopian"!=a){r.next=30;break}return this.ruleForm.jinqizhaopian=n[a],this.ro.jinqizhaopian=!0,r.abrupt("continue",20);case 30:if("tixingneirong"!=a){r.next=34;break}return this.ruleForm.tixingneirong=n[a],this.ro.tixingneirong=!0,r.abrupt("continue",20);case 34:if("yonghuming"!=a){r.next=38;break}return this.ruleForm.yonghuming=n[a],this.ro.yonghuming=!0,r.abrupt("continue",20);case 38:if("tixingshijian"!=a){r.next=42;break}return this.ruleForm.tixingshijian=n[a],this.ro.tixingshijian=!0,r.abrupt("continue",20);case 42:if("userid"!=a){r.next=46;break}return this.ruleForm.userid=n[a],this.ro.userid=!0,r.abrupt("continue",20);case 46:r.next=20;break;case 48:this.styleChange();case 49:case"end":return r.stop()}}),r,this)})));function i(i){return r.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tixingshijianConfirm:function(r){console.log(r),this.ruleForm.tixingshijian=r.result,this.$forceUpdate()},jinqizhaopianTap:function(){var r=this;this.$api.upload((function(i){r.ruleForm.jinqizhaopian="upload/"+i.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(){var i,t,e,n,a,o,d,s,u,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.cross){r.next=16;break}if(n=uni.getStorageSync("statusColumnName"),a=uni.getStorageSync("statusColumnValue"),""==n){r.next=16;break}if(o=uni.getStorageSync("crossObj"),n.startsWith("[")){r.next=12;break}for(d in o)d==n&&(o[d]=a);return s=uni.getStorageSync("crossTable"),r.next=10,this.$api.update("".concat(s),o);case 10:r.next=16;break;case 12:i=Number(uni.getStorageSync("userid")),t=o["id"],e=uni.getStorageSync("statusColumnName"),e=e.replace(/\[/,"").replace(/\]/,"");case 16:if(!t||!i){r.next=38;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=t,u={page:1,limit:10,crossuserid:i,crossrefid:t},r.next=22,this.$api.list("xiaoxitixing",u);case 22:if(c=r.sent,!(c.data.total>=e)){r.next=28;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 28:if(!this.ruleForm.id){r.next=33;break}return r.next=31,this.$api.update("xiaoxitixing",this.ruleForm);case 31:r.next=35;break;case 33:return r.next=35,this.$api.add("xiaoxitixing",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:r.next=46;break;case 38:if(!this.ruleForm.id){r.next=43;break}return r.next=41,this.$api.update("xiaoxitixing",this.ruleForm);case 41:r.next=45;break;case 43:return r.next=45,this.$api.add("xiaoxitixing",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return r.stop()}}),r,this)})));function i(){return r.apply(this,arguments)}return i}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var i=new Date,t=i.getFullYear(),e=i.getMonth()+1,n=i.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),e=e>9?e:"0"+e,n=n>9?n:"0"+n,"".concat(t,"-").concat(e,"-").concat(n)},toggleTab:function(r){this.$refs[r].show()}}};i.default=o},e20d:function(r,i,t){var e=t("7fbb");"string"===typeof e&&(e=[[r.i,e,""]]),e.locals&&(r.exports=e.locals);var n=t("4f06").default;n("e90d0408",e,!0,{sourceMap:!1,shadowMode:!1})},e94b:function(r,i,t){"use strict";var e={"w-picker":t("e2b1").default},n=function(){var r=this,i=r.$createElement,t=r._self._c||i;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("提醒标题")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(31, 165, 216, 1)",backgroundColor:"rgba(120, 218, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 0",borderWidth:"0 10rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.tixingbiaoti,placeholder:"提醒标题"},model:{value:r.ruleForm.tixingbiaoti,callback:function(i){r.$set(r.ruleForm,"tixingbiaoti",i)},expression:"ruleForm.tixingbiaoti"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(i){arguments[0]=i=r.$handleEvent(i),r.jinqizhaopianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("近期照片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.jinqizhaopian?t("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.jinqizhaopian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("用户名")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(31, 165, 216, 1)",backgroundColor:"rgba(120, 218, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 0",borderWidth:"0 10rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.yonghuming,placeholder:"用户名"},model:{value:r.ruleForm.yonghuming,callback:function(i){r.$set(r.ruleForm,"yonghuming",i)},expression:"ruleForm.yonghuming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("提醒时间")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(31, 165, 216, 1)",backgroundColor:"rgba(120, 218, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 0",borderWidth:"0 10rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"},attrs:{placeholder:"提醒时间"},on:{click:function(i){arguments[0]=i=r.$handleEvent(i),r.toggleTab("tixingshijian")}},model:{value:r.ruleForm.tixingshijian,callback:function(i){r.$set(r.ruleForm,"tixingshijian",i)},expression:"ruleForm.tixingshijian"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"12rpx 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("提醒内容")]),t("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(120, 218, 255, 1)",borderColor:"rgba(31, 165, 216, 1)",borderRadius:"20rpx 0",color:"rgba(0, 0, 0, 1)",borderWidth:"0 10rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"240rpx"},attrs:{placeholder:"提醒内容"},model:{value:r.ruleForm.tixingneirong,callback:function(i){r.$set(r.ruleForm,"tixingneirong",i)},expression:"ruleForm.tixingneirong"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"20rpx auto",backgroundColor:"rgba(120, 218, 255, 1)",borderColor:"#409EFF",borderRadius:"20rpx 0",color:"#fff",borderWidth:"0",width:"60%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(i){arguments[0]=i=r.$handleEvent(i),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1),t("w-picker",{ref:"tixingshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=r.$handleEvent(i),r.tixingshijianConfirm.apply(void 0,arguments)}}})],1)},a=[];t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return e}))}}]);