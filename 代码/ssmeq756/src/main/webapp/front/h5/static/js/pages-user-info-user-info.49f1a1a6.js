(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-info-user-info"],{3114:function(r,e,o){"use strict";var i,a=function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"box",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},["jiashu"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("用户名")]),o("v-uni-input",{staticStyle:{padding:"0 30upx"},style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"},attrs:{disabled:"true",placeholder:"用户名"},model:{value:r.ruleForm.yonghuming,callback:function(e){r.$set(r.ruleForm,"yonghuming",e)},expression:"ruleForm.yonghuming"}})],1):r._e(),"jiashu"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("密码")]),o("v-uni-input",{staticStyle:{padding:"0 30upx"},style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"},attrs:{type:"password",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"jiashu"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("姓名")]),o("v-uni-input",{staticStyle:{padding:"0 30upx"},style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"},attrs:{placeholder:"姓名"},model:{value:r.ruleForm.xingming,callback:function(e){r.$set(r.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1):r._e(),"jiashu"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("性别")]),o("v-uni-picker",{attrs:{value:r.jiashuxingbieIndex,range:r.jiashuxingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.jiashuxingbieChange.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"uni-input picker-select-input",staticStyle:{padding:"0 30upx"},style:{padding:"0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(31, 165, 216, 1)",backgroundColor:"rgba(120, 218, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 0",borderWidth:"0 10rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1):r._e(),"jiashu"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.jiashutouxiangTap.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("头像")]),o("v-uni-view",{staticStyle:{flex:"1"}},[r.ruleForm.touxiang?o("v-uni-image",{staticClass:"avator",staticStyle:{margin:"0"},style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"12rpx 0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.touxiang,mode:""}}):o("v-uni-image",{staticClass:"avator",staticStyle:{margin:"0"},style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"12rpx 0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/center/face.jpeg",mode:""}})],1)],1):r._e(),"jiashu"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("手机")]),o("v-uni-input",{staticStyle:{padding:"0 30upx"},style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"},attrs:{placeholder:"手机"},model:{value:r.ruleForm.shouji,callback:function(e){r.$set(r.ruleForm,"shouji",e)},expression:"ruleForm.shouji"}})],1):r._e(),"jiashu"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("身份证")]),o("v-uni-input",{staticStyle:{padding:"0 30upx"},style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"},attrs:{placeholder:"身份证"},model:{value:r.ruleForm.shenfenzheng,callback:function(e){r.$set(r.ruleForm,"shenfenzheng",e)},expression:"ruleForm.shenfenzheng"}})],1):r._e(),"zhiyuanzhe"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("账号")]),o("v-uni-input",{staticStyle:{padding:"0 30upx"},style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"},attrs:{disabled:"true",placeholder:"账号"},model:{value:r.ruleForm.zhanghao,callback:function(e){r.$set(r.ruleForm,"zhanghao",e)},expression:"ruleForm.zhanghao"}})],1):r._e(),"zhiyuanzhe"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("密码")]),o("v-uni-input",{staticStyle:{padding:"0 30upx"},style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"},attrs:{type:"password",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"zhiyuanzhe"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("姓名")]),o("v-uni-input",{staticStyle:{padding:"0 30upx"},style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"},attrs:{placeholder:"姓名"},model:{value:r.ruleForm.xingming,callback:function(e){r.$set(r.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1):r._e(),"zhiyuanzhe"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.zhiyuanzhetouxiangTap.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("头像")]),o("v-uni-view",{staticStyle:{flex:"1"}},[r.ruleForm.touxiang?o("v-uni-image",{staticClass:"avator",staticStyle:{margin:"0"},style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"12rpx 0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.touxiang,mode:""}}):o("v-uni-image",{staticClass:"avator",staticStyle:{margin:"0"},style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"12rpx 0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/center/face.jpeg",mode:""}})],1)],1):r._e(),"zhiyuanzhe"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("性别")]),o("v-uni-picker",{attrs:{value:r.zhiyuanzhexingbieIndex,range:r.zhiyuanzhexingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.zhiyuanzhexingbieChange.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"uni-input picker-select-input",staticStyle:{padding:"0 30upx"},style:{padding:"0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(31, 165, 216, 1)",backgroundColor:"rgba(120, 218, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 0",borderWidth:"0 10rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1):r._e(),"zhiyuanzhe"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("手机")]),o("v-uni-input",{staticStyle:{padding:"0 30upx"},style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"},attrs:{placeholder:"手机"},model:{value:r.ruleForm.shouji,callback:function(e){r.$set(r.ruleForm,"shouji",e)},expression:"ruleForm.shouji"}})],1):r._e(),"gonganbumen"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("部门账号")]),o("v-uni-input",{staticStyle:{padding:"0 30upx"},style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"},attrs:{disabled:"true",placeholder:"部门账号"},model:{value:r.ruleForm.bumenzhanghao,callback:function(e){r.$set(r.ruleForm,"bumenzhanghao",e)},expression:"ruleForm.bumenzhanghao"}})],1):r._e(),"gonganbumen"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("密码")]),o("v-uni-input",{staticStyle:{padding:"0 30upx"},style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"},attrs:{type:"password",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"gonganbumen"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("负责人")]),o("v-uni-input",{staticStyle:{padding:"0 30upx"},style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"},attrs:{placeholder:"负责人"},model:{value:r.ruleForm.fuzeren,callback:function(e){r.$set(r.ruleForm,"fuzeren",e)},expression:"ruleForm.fuzeren"}})],1):r._e(),"gonganbumen"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.gonganbumenzhaopianTap.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("照片")]),o("v-uni-view",{staticStyle:{flex:"1"}},[r.ruleForm.zhaopian?o("v-uni-image",{staticClass:"avator",staticStyle:{margin:"0"},style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"12rpx 0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.zhaopian,mode:""}}):o("v-uni-image",{staticClass:"avator",staticStyle:{margin:"0"},style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"12rpx 0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/center/face.jpeg",mode:""}})],1)],1):r._e(),"gonganbumen"==r.tableName?o("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("联系电话")]),o("v-uni-input",{staticStyle:{padding:"0 30upx"},style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid"},attrs:{placeholder:"联系电话"},model:{value:r.ruleForm.lianxidianhua,callback:function(e){r.$set(r.ruleForm,"lianxidianhua",e)},expression:"ruleForm.lianxidianhua"}})],1):r._e(),o("v-uni-view",{staticClass:"btn"},[o("v-uni-button",{staticClass:"cu-btn lg",style:{padding:"0 30rpx",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"20rpx auto",backgroundColor:"rgba(120, 218, 255, 1)",borderColor:"#409EFF",borderRadius:"20rpx 0",color:"#fff",borderWidth:"0",width:"60%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.update()}}},[r._v("保存")]),o("v-uni-button",{staticClass:"cu-btn lg",style:{padding:"0 30rpx",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0",backgroundColor:"rgba(230, 230, 230, 1)",borderColor:"#E6A23C",borderRadius:"20rpx 0",color:"rgba(174, 174, 174, 1)",borderWidth:"0",width:"60%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.logout()}}},[r._v("退出登录")])],1)],1)],1)},t=[];o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return t})),o.d(e,"a",(function(){return i}))},"67f3":function(r,e,o){var i=o("fc4a");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var a=o("4f06").default;a("296beb52",i,!0,{sourceMap:!1,shadowMode:!1})},"6c66":function(r,e,o){"use strict";o.r(e);var i=o("ad7c"),a=o.n(i);for(var t in i)"default"!==t&&function(r){o.d(e,r,(function(){return i[r]}))}(t);e["default"]=a.a},"6cd3":function(r,e,o){"use strict";var i=o("67f3"),a=o.n(i);a.a},"8d8f":function(r,e,o){"use strict";o.r(e);var i=o("3114"),a=o("6c66");for(var t in a)"default"!==t&&function(r){o.d(e,r,(function(){return a[r]}))}(t);o("6cd3");var n,d=o("f0c5"),l=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"49a16896",null,!1,i["a"],n);e["default"]=l.exports},ad7c:function(r,e,o){"use strict";var i=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("ac6a"),o("28a5"),o("96cf");var a=i(o("3b8d")),t={data:function(){return{ruleForm:{},tableName:"",jiashuxingbieOptions:[],jiashuxingbieIndex:0,zhiyuanzhexingbieOptions:[],zhiyuanzhexingbieIndex:0}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var e,o,i=this;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(e);case 3:o=r.sent,this.ruleForm=o.data,this.tableName=e,"jiashu"==this.tableName&&(this.jiashuxingbieOptions="男,女".split(","),this.jiashuxingbieOptions.forEach((function(r,e){r==i.ruleForm.xingbie&&(i.jiashuxingbieIndex=e)}))),"zhiyuanzhe"==this.tableName&&(this.zhiyuanzhexingbieOptions="男,女".split(","),this.zhiyuanzhexingbieOptions.forEach((function(r,e){r==i.ruleForm.xingbie&&(i.zhiyuanzhexingbieIndex=e)}))),this.styleChange();case 9:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),methods:{jiashuxingbieChange:function(r){this.jiashuxingbieIndex=r.target.value,this.ruleForm.xingbie=this.jiashuxingbieOptions[this.jiashuxingbieIndex]},zhiyuanzhexingbieChange:function(r){this.zhiyuanzhexingbieIndex=r.target.value,this.ruleForm.xingbie=this.zhiyuanzhexingbieOptions[this.zhiyuanzhexingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},logout:function(){uni.setStorageSync("token",""),this.$utils.jump("../login/login")},update:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.yonghuming||"jiashu"!=this.tableName){r.next=3;break}return this.$utils.msg("用户名不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima||"jiashu"!=this.tableName){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if(this.ruleForm.xingming||"jiashu"!=this.tableName){r.next=9;break}return this.$utils.msg("姓名不能为空"),r.abrupt("return");case 9:if("jiashu"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){r.next=12;break}return this.$utils.msg("手机应输入手机格式"),r.abrupt("return");case 12:if("jiashu"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){r.next=15;break}return this.$utils.msg("身份证应输入身份证格式"),r.abrupt("return");case 15:if(this.ruleForm.zhanghao||"zhiyuanzhe"!=this.tableName){r.next=18;break}return this.$utils.msg("账号不能为空"),r.abrupt("return");case 18:if(this.ruleForm.mima||"zhiyuanzhe"!=this.tableName){r.next=21;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 21:if("zhiyuanzhe"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){r.next=24;break}return this.$utils.msg("手机应输入手机格式"),r.abrupt("return");case 24:if(this.ruleForm.bumenzhanghao||"gonganbumen"!=this.tableName){r.next=27;break}return this.$utils.msg("部门账号不能为空"),r.abrupt("return");case 27:if(this.ruleForm.mima||"gonganbumen"!=this.tableName){r.next=30;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 30:return e=uni.getStorageSync("nowTable"),r.next=33,this.$api.update(e,this.ruleForm);case 33:this.$utils.msgBack("修改成功");case 35:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),jiashutouxiangTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.touxiang="upload/"+e.file,r.$forceUpdate()}))},zhiyuanzhetouxiangTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.touxiang="upload/"+e.file,r.$forceUpdate()}))},gonganbumenzhaopianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.zhaopian="upload/"+e.file,r.$forceUpdate()}))}}};e.default=t},fc4a:function(r,e,o){var i=o("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-49a16896]{background-color:#fff}.content[data-v-49a16896]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220301/fed56a2aa6254b58bd8390f68fde698e.png);background-attachment:fixed;background-size:cover;background-position:50%}.avator[data-v-49a16896]{width:%?110?%;height:%?110?%;border-radius:50%;margin-left:%?30?%}.cu-form-group.active[data-v-49a16896]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.cu-btn[data-v-49a16896]{width:100%}.cu-form-group .title[data-v-49a16896]{height:auto}.right-input[data-v-49a16896]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;line-height:%?60?%}.btn[data-v-49a16896]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.box[data-v-49a16896]{width:auto;padding:0 %?10?%;box-sizing:border-box;margin-bottom:%?20?%}.picker-select-input[data-v-49a16896]{line-height:%?60?%}body.?%PAGE?%[data-v-49a16896]{background-color:#fff}',""]),r.exports=e}}]);