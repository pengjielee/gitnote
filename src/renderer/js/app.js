(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0253":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".note-list{font-size:16px}.note-list .item{padding:15px 0;cursor:pointer;position:relative}.note-list .title{font-size:16px;font-weight:700}.note-list .content{padding:5px 100px 5px 0}.note-list .date{font-size:14px;color:#666}.note-list .action{font-size:14px;margin:5px 0;position:absolute;top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.note-list .action a{margin-right:10px;color:#00f}.note-list .load-more{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0 0 15px}.note-list .load-more .btn{width:300px;height:40px;font-size:14px}.note-list .load-more .info{font-size:12px;color:#666;margin:10px 0}.note-list .page-header{border-bottom:1px solid #ddd;display:-webkit-box;display:-ms-flexbox;display:flex}.note-list .page-header .btn{width:100px;height:35px;border-radius:0;font-size:14px;margin-top:0}.note-detail .title{margin-bottom:5px}.note-detail .content{font-size:16px;padding:15px;word-break:break-all;background:#eff1f5;margin:10px 0;overflow:scroll}.note-detail .date{font-size:14px}.note-header{margin-bottom:15px}.note-edit{font-size:16px}.note-edit .btn{width:100%;padding:10px 0}.note-tags .tags .tag{padding:5px 10px;margin:0 15px 15px 0;cursor:pointer}.note-images .media-left{width:150px}.note-images .media-object{padding-top:15px}.note-images .size{margin:5px 0}.note-images .action{font-size:12px}.note-images .action a{margin-right:10px;color:#00f;cursor:pointer}.note-upload .uploader{width:100%;height:80px;border:1px dashed #d9d9d9;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:40px;color:#ddd;margin-bottom:10px}.note-upload .uploader input[type=file]{display:none}",""]),e.exports=t},"1f46":function(e,t,n){var a=n("d03d");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("499e").default;r("076c487e",a,!0,{sourceMap:!1,shadowMode:!1})},"3aff":function(e,t,n){var a=n("e991");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("499e").default;r("f91eae76",a,!0,{sourceMap:!1,shadowMode:!1})},"53a2":function(e,t,n){"use strict";var a=n("1f46"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("router-view")],1)},i=[],o=n("2877"),s={},c=Object(o["a"])(s,r,i,!1,null,null,null),l=c.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page page-home"},[n("Welcome")],1)},p=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome"},[n("h1",{staticClass:"title"},[e._v("欢迎使用GitNote!")]),n("p",{staticClass:"des"},[e._v(" GitNote是基于Github API的笔记应用。 ")]),n("p",{staticClass:"action",on:{click:e.handleJump}},[n("a",{staticClass:"link"},[e._v("点击进入")])])])},m=[],g={name:"Welcome",props:{msg:String},methods:{handleJump:function(){this.$router.push("/note/list")}}},h=g,b=(n("60bb"),Object(o["a"])(h,f,m,!1,null,"021e020a",null)),v=b.exports,x={name:"home",components:{Welcome:v}},k=x,w=Object(o["a"])(k,d,p,!1,null,null,null),y=w.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-body"},[n("div",{staticClass:"sidebar"},[n("ul",{staticClass:"nav"},[n("li",[n("router-link",{attrs:{to:"/note/list"}},[e._v("笔记列表")])],1),n("li",[n("router-link",{attrs:{to:"/note/tags"}},[e._v("笔记标签")])],1),n("li",[n("router-link",{attrs:{to:"/note/images"}},[e._v("图片列表")])],1),n("li",[n("router-link",{attrs:{to:"/note/setting"}},[e._v("设置")])],1)])]),n("div",{staticClass:"main"},[n("router-view")],1)])},_=[],A={},z=Object(o["a"])(A,C,_,!1,null,null,null),O=z.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page page-setting"},[n("div",{staticClass:"form-group"},[e._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.repo,expression:"config.repo"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-input",attrs:{type:"text",placeholder:"格式：username/repo",name:"repo"},domProps:{value:e.config.repo},on:{input:function(t){t.target.composing||e.$set(e.config,"repo",t.target.value)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("repo"),expression:"errors.has('repo')"}],staticClass:"form-error"},[e._v(" "+e._s(e.errors.first("repo"))+" ")])]),n("div",{staticClass:"form-group"},[e._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.token,expression:"config.token"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-input",attrs:{type:"password",placeholder:"token",name:"token"},domProps:{value:e.config.token},on:{input:function(t){t.target.composing||e.$set(e.config,"token",t.target.value)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("token"),expression:"errors.has('token')"}],staticClass:"form-error"},[e._v(" "+e._s(e.errors.first("token"))+" ")])]),n("div",{staticClass:"form-group"},[e._m(2),n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.size,expression:"config.size"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-input",attrs:{type:"number",name:"size"},domProps:{value:e.config.size},on:{input:function(t){t.target.composing||e.$set(e.config,"size",t.target.value)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("size"),expression:"errors.has('size')"}],staticClass:"form-error"},[e._v(" "+e._s(e.errors.first("size"))+" ")])]),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary",on:{click:e.handleSave}},[e._v("保存")])])])},$=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-label"},[n("span",{staticClass:"required"},[e._v("*")]),n("label",[e._v("仓库名")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-label"},[n("span",{staticClass:"required"},[e._v("*")]),n("label",[e._v("token")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-label"},[n("label",[e._v("每页显示几条")])])}],S=(n("96cf"),n("1da1")),L=n("1940"),j=n.n(L),E={name:"Setting",created:function(){var e=this;window.localForage.getItem("config",(function(t,n){t||n&&(e.$data.config=n)}))},methods:{handleSave:function(){var e=this,t=this;this.$validator.validate().then(function(){var n=Object(S["a"])(regeneratorRuntime.mark((function n(a){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a){n.next=2;break}return n.abrupt("return",!1);case 2:window.localForage.setItem("config",e.config,(function(e){e?j()("保存失败","","error"):j()("保存成功","","success").then((function(){t.$router.push("/note/list")}))}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}},data:function(){return{config:{repo:"",token:"",size:30}}}},M=E,R=Object(o["a"])(M,N,$,!1,null,null,null),T=R.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page note-list"},[n("div",{staticClass:"page-header"},[n("button",{staticClass:"btn btn-new",on:{click:e.handleNew}},[e._v(" 新建笔记 ")]),n("button",{staticClass:"btn btn-sort",on:{click:e.handleSort}},[e._v(" "+e._s(e.directionName)+"排列 ")])]),n("div",{staticClass:"list"},[n("ul",e._l(e.notes,(function(t){return n("li",{key:t.id,staticClass:"item"},[n("p",{staticClass:"title",on:{click:function(n){return e.handleLook(t.number)}}},[e._v(" "+e._s(t.title)+" ")]),n("div",{staticClass:"content"},[e._v(e._s(t.body))]),n("div",{staticClass:"tags"},e._l(t.labels,(function(t){return n("span",{key:t.id,staticClass:"tag"},[e._v(e._s(t.name))])})),0),n("div",{staticClass:"date"},[e._v(e._s(t.created_at))]),n("div",{staticClass:"action"},[n("a",{on:{click:function(n){return e.handleEdit(t.number)}}},[e._v("编辑")])])])})),0),e.isShowLoading?[n("Loading")]:e._e(),n("div",{staticClass:"load-more"},[e.isLoadOver?n("p",{staticClass:"info"},[e._v("没有更多了")]):n("button",{staticClass:"btn",on:{click:e.handleLoad}},[e._v(" 加载更多 ")])])],2)])},I=[],q=(n("99af"),n("d81d"),n("fb6a"),n("ac1f"),n("5319"),n("841c"),n("d3b7"),n("bc3a")),P=n.n(q),F={getConfig:function(){return new Promise((function(e,t){window.localForage.getItem("config",(function(n,a){n?t(n):e(a)}))}))},getList:function(e,t,n,a,r){return P.a.get("https://api.github.com/repos/".concat(r.repo,"/issues?page=").concat(e,"&per_page=").concat(t,"&direction=").concat(n,"&labels=").concat(a),{headers:{Authorization:"token ".concat(r.token)}})},getDetail:function(e,t){return P.a.get("https://api.github.com/repos/".concat(t.repo,"/issues/").concat(e),{headers:{Authorization:"token ".concat(t.token)}})},addNote:function(e,t){return P.a.post("https://api.github.com/repos/".concat(t.repo,"/issues"),e,{headers:{Authorization:"token ".concat(t.token)}})},editNote:function(e,t,n){return P.a.patch("https://api.github.com/repos/".concat(n.repo,"/issues/").concat(e),t,{headers:{Authorization:"token ".concat(n.token)}})},getTags:function(e){return P.a.get("https://api.github.com/repos/".concat(e.repo,"/labels"),{headers:{Authorization:"token ".concat(e.token)}})},getImages:function(e){return P.a.get("https://api.github.com/repos/".concat(e.repo,"/contents/images"),{headers:{Authorization:"token ".concat(e.token)}})},upload:function(e,t,n){return P.a.put("https://api.github.com/repos/".concat(n.repo,"/contents/images/").concat(e),t,{headers:{Authorization:"token ".concat(n.token)}})}},Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loading",style:{height:e.height+"px"}},[a("img",{staticClass:"img",attrs:{src:n("b104")}}),a("p",{staticClass:"info"},[e._v("努力加载中")])])},D=[],J={name:"Loading",props:{height:{type:String,default:"60"}}},Z=J,H=(n("53a2"),Object(o["a"])(Z,Q,D,!1,null,null,null)),K=H.exports,U={components:{Loading:K},data:function(){return{isShowLoading:!1}}},V={name:"NoteList",mixins:[U],created:function(){var e=this.$route.params&&this.$route.params.tag;e&&(this.search.labels=e),this.getNotes()},computed:{directionName:function(){return"asc"===this.search.direction?"降序":"升序"}},methods:{handleSort:function(){var e="";e="asc"===this.search.direction?"desc":"asc",this.search.direction=e,this.notes=[],this.search.page=1,this.isLoadOver=!1,this.getNotes()},handleNew:function(){this.$router.push("/note/add")},handleEdit:function(e){this.$router.push("/note/edit/".concat(e))},handleLook:function(e){this.$router.push("/note/detail/".concat(e))},handleLoad:function(){this.search.page=this.search.page+1,this.getNotes()},getNotes:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,i,o,s,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isShowLoading=!0,t=this.search,n=t.page,a=t.direction,r=t.labels,e.next=4,F.getConfig();case 4:if(i=e.sent,i){e.next=8;break}return this.$router.replace("/note/setting"),e.abrupt("return");case 8:return o=i.size?i.size:20,e.prev=9,e.next=12,F.getList(n,o,a,r,i);case 12:s=e.sent,c=s.data.map((function(e){return e.body.length>100&&(e.body=e.body.slice(0,100)),e})),l=this.notes,c.length<=0&&(this.isLoadOver=!0),this.isShowLoading=!1,this.notes=l.concat(c),e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](9),j()("出错了",e.t0.message,"error");case 23:case"end":return e.stop()}}),e,this,[[9,20]])})));function t(){return e.apply(this,arguments)}return t}()},data:function(){return{notes:[],search:{page:1,direction:"desc",labels:""},isLoadOver:!1}}},W=V,Y=Object(o["a"])(W,B,I,!1,null,null,null),G=Y.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"note-edit"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.note.title,expression:"note.title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-input",attrs:{type:"text",placeholder:"请输入标题",name:"title"},domProps:{value:e.note.title},on:{input:function(t){t.target.composing||e.$set(e.note,"title",t.target.value)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("title"),expression:"errors.has('title')"}],staticClass:"form-error"},[e._v(" "+e._s(e.errors.first("title"))+" ")])]),n("div",{staticClass:"form-group"},[n("input-tag",{attrs:{placeholder:"请输入标签",limit:e.limit},model:{value:e.note.labels,callback:function(t){e.$set(e.note,"labels",t)},expression:"note.labels"}})],1),n("div",{staticClass:"form-group form-area"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.note.body,expression:"note.body"}],staticClass:"textarea",attrs:{placeholder:"请输入内容"},domProps:{value:e.note.body},on:{input:function(t){t.target.composing||e.$set(e.note,"body",t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary",on:{click:e.handleSave}},[e._v("保存")]),n("button",{staticClass:"btn",on:{click:e.handleBack}},[e._v("返回")])])])},ee=[],te={name:"NoteAdd",methods:{handleSave:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$validator.validate();case 2:if(t=e.sent,t){e.next=5;break}return e.abrupt("return",!1);case 5:return e.next=7,F.getConfig();case 7:if(n=e.sent,n){e.next=11;break}return this.$router.replace("/note/setting"),e.abrupt("return");case 11:return a=this.note,e.prev=12,e.next=15,F.addNote(a,n);case 15:r=e.sent,201===r.status&&j()("添加成功","","success"),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](12),j()("出错了",e.t0.message,"error");case 22:case"end":return e.stop()}}),e,this,[[12,19]])})));function t(){return e.apply(this,arguments)}return t}(),handleBack:function(){this.$router.back()}},data:function(){return{note:{title:"",body:"",labels:[]},limit:10}}},ne=te,ae=Object(o["a"])(ne,X,ee,!1,null,null,null),re=ae.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page note-edit"},[e.isShowLoading?[n("Loading",{attrs:{height:"300"}})]:[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.note.title,expression:"note.title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-input",attrs:{type:"text",name:"title"},domProps:{value:e.note.title},on:{input:function(t){t.target.composing||e.$set(e.note,"title",t.target.value)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("title"),expression:"errors.has('title')"}],staticClass:"form-error"},[e._v(" "+e._s(e.errors.first("title"))+" ")])]),n("div",{staticClass:"form-group"},[n("input-tag",{attrs:{placeholder:"请输入标签",limit:e.limit},model:{value:e.note.labels,callback:function(t){e.$set(e.note,"labels",t)},expression:"note.labels"}})],1),n("div",{staticClass:"form-group form-area"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.note.body,expression:"note.body"}],staticClass:"textarea",domProps:{value:e.note.body},on:{input:function(t){t.target.composing||e.$set(e.note,"body",t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary",on:{click:e.handleSave}},[e._v("保存")]),n("button",{staticClass:"btn",on:{click:e.handleBack}},[e._v("返回")])])]],2)},oe=[],se=(n("b0c0"),{name:"NoteEdit",mixins:[U],created:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F.getConfig();case 2:if(t=e.sent,t){e.next=6;break}return this.$router.replace("/note/setting"),e.abrupt("return");case 6:return n=this.$route.params.number,this.number=n,this.isShowLoading=!0,e.prev=9,e.next=12,F.getDetail(n,t);case 12:a=e.sent,r=a.data,i=r.labels.map((function(e){return e.name})),this.note={title:r.title,body:r.body,labels:i},this.isShowLoading=!1,e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](9),j()("出错了",e.t0.message,"error");case 22:case"end":return e.stop()}}),e,this,[[9,19]])})));function t(){return e.apply(this,arguments)}return t}(),methods:{handleSave:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$validator.validate();case 2:if(t=e.sent,t){e.next=5;break}return e.abrupt("return",!1);case 5:return e.next=7,F.getConfig();case 7:if(n=e.sent,n){e.next=11;break}return this.$router.replace("/note/setting"),e.abrupt("return");case 11:return a=this.note,r=this.number,e.prev=13,e.next=16,F.editNote(r,a,n);case 16:i=e.sent,200===i.status&&j()("保存成功","","success"),e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](13),j()("出错了",e.t0.message,"error");case 23:case"end":return e.stop()}}),e,this,[[13,20]])})));function t(){return e.apply(this,arguments)}return t}(),handleBack:function(){this.$router.back()}},data:function(){return{note:{title:"",body:"",labels:[]},limit:10}}}),ce=se,le=Object(o["a"])(ce,ie,oe,!1,null,null,null),ue=le.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"note-detail"},[n("div",{staticClass:"note-header"},[n("a",{staticClass:"back",on:{click:e.handleBack}},[e._v("返回")])]),e.isShowLoading?[n("Loading",{attrs:{height:"300"}})]:[n("h3",{staticClass:"title"},[e._v(e._s(e.note.title))]),n("p",{staticClass:"date"},[e._v(e._s(e.note.created_at))]),e.note.tags?n("div",{staticClass:"tags"},e._l(e.note.tags,(function(t){return n("span",{key:t.id,staticClass:"tag",style:{background:"#"+t.color},on:{click:function(n){return e.handleTag(t.name)}}},[e._v(" "+e._s(t.name)+" ")])})),0):e._e(),n("div",{staticClass:"content"},[n("pre",[e._v(e._s(e.note.body))])])]],2)},pe=[],fe={name:"NoteDetail",mixins:[U],created:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F.getConfig();case 2:if(t=e.sent,t){e.next=6;break}return this.$router.replace("/note/setting"),e.abrupt("return");case 6:return n=this.$route.params.number,e.prev=7,e.next=10,F.getDetail(n,t);case 10:a=e.sent,this.note=a.data,e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](7),j()("出错了",e.t0.message,"error");case 17:case"end":return e.stop()}}),e,this,[[7,14]])})));function t(){return e.apply(this,arguments)}return t}(),methods:{handleTag:function(e){this.$router.push("/note/list/".concat(e))},handleBack:function(){this.$router.back()}},data:function(){return{note:{title:"",created_at:"",body:""}}}},me=fe,ge=Object(o["a"])(me,de,pe,!1,null,null,null),he=ge.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"note-tags"},[e.isShowLoading?[n("Loading",{attrs:{height:"300"}})]:[e.tags.length>0?n("div",{staticClass:"tags"},e._l(e.tags,(function(t){return n("span",{key:t.id,staticClass:"tag",style:{background:"#"+t.color},on:{click:function(n){return e.handleTag(t.name)}}},[e._v(" "+e._s(t.name)+" ")])})),0):n("div",{staticClass:"empty"},[e._v("什么也没有")])]],2)},ve=[],xe=(n("4160"),n("c975"),n("159b"),{name:"NoteTags",mixins:[U],created:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isShowLoading=!0,e.next=3,F.getConfig();case 3:if(t=e.sent,t){e.next=7;break}return this.$router.replace("/note/setting"),e.abrupt("return");case 7:return e.prev=7,e.next=10,F.getTags(t);case 10:n=e.sent,a=[],n.data.forEach((function(e){r.systemTags.indexOf(e.name)<0&&a.push(e)})),this.tags=a,this.isShowLoading=!1,e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](7),j()("出错了",e.t0.message,"error");case 20:case"end":return e.stop()}}),e,this,[[7,17]])})));function t(){return e.apply(this,arguments)}return t}(),methods:{handleTag:function(e){this.$router.push("/note/list/".concat(e))}},data:function(){return{tags:[],systemTags:["bug","documentation","duplicate","enhancement","good first issue","help wanted","invalid","question","wontfix"]}}}),ke=xe,we=Object(o["a"])(ke,be,ve,!1,null,null,null),ye=we.exports,Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("note-upload",{on:{uploadSuccess:e.onUploadSuccess}}),n("div",{staticClass:"note-images"},[e.isShowLoading?[n("Loading",{attrs:{height:"300"}})]:e._e(),n("ul",{staticClass:"list"},e._l(e.images,(function(t){return n("li",{key:t.sha,staticClass:"item"},[n("dl",{staticClass:"media"},[n("dt",{staticClass:"media-left"},[n("img",{attrs:{src:t.download_url,width:"100px"}})]),n("dd",{staticClass:"media-object"},[n("p",{staticClass:"title"},[e._v(e._s(t.name))]),n("p",{staticClass:"size"},[e._v(e._s(t.size))]),n("p",{staticClass:"action"},[n("a",{on:{click:function(n){return e.handleCopy(t,"http")}}},[e._v("复制为HTTP")]),n("a",{on:{click:function(n){return e.handleCopy(t,"md")}}},[e._v("复制为MARKDOWN")])])])])])})),0)],2)],1)},_e=[],Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"note-upload"},[n("div",{staticClass:"uploader",on:{click:e.handleUpload}},[n("input",{ref:"input",attrs:{type:"file",accept:e.accept,multiple:e.multiple},on:{change:e.handleChange}}),n("span",{staticClass:"plus"},[e._v("+")])])])},ze=[],Oe=function(e){return new Promise((function(t,n){var a=new FileReader;a.onload=function(e){t(e.target.result)},a.onerror=function(){n(!1)},a.readAsDataURL(e)}))},Ne={name:"NoteUpload",methods:{handleChange:function(e){var t=this,n=e.target.files[0];Oe(n).then(function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(a){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=a.slice(a.indexOf(",")+1),e.next=3,F.getConfig();case 3:if(r=e.sent,r){e.next=7;break}return this.$router.replace("/note/setting"),e.abrupt("return");case 7:return e.prev=7,e.next=10,F.upload(n.name,{message:"upload image",content:a},r);case 10:i=e.sent,201===i.status&&(j()("上传成功","","success"),t.$emit("uploadSuccess")),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](7),j()("出错了",e.t0.message,"error");case 17:case"end":return e.stop()}}),e,this,[[7,14]])})));return function(t){return e.apply(this,arguments)}}())},handleUpload:function(){this.$refs.input.value=null,this.$refs.input.click()}},data:function(){return{accept:".jpg, .jpeg, .png",multiple:!1}}},$e=Ne,Se=Object(o["a"])($e,Ae,ze,!1,null,null,null),Le=Se.exports,je={name:"NoteImages",mixins:[U],components:{NoteUpload:Le},created:function(){this.getImages()},methods:{onUploadSuccess:function(){this.getImages()},getImages:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isShowLoading=!0,e.next=3,F.getConfig();case 3:if(t=e.sent,t){e.next=7;break}return this.$router.replace("/note/setting"),e.abrupt("return");case 7:return e.prev=7,e.next=10,F.getImages(t);case 10:n=e.sent,a=n.data,a.map((function(e){return e.size=parseInt(e.size/1e3)+"KB",e})),this.images=a,this.isShowLoading=!1,e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](7),j()("出错了",e.t0.message,"error"),this.isShowLoading=!1;case 21:case"end":return e.stop()}}),e,this,[[7,17]])})));function t(){return e.apply(this,arguments)}return t}(),handleCopy:function(e,t){var n=e.download_url;"md"===t&&(n="![](".concat(n,")")),this.$copyText(n).then((function(){j()("复制成功","已复制到剪贴板","success")}),(function(){j()("复制失败","","error")}))}},data:function(){return{images:[]}}},Ee=je,Me=Object(o["a"])(Ee,Ce,_e,!1,null,null,null),Re=Me.exports;a["a"].use(u["a"]);var Te=[{path:"/",name:"home",component:y,meta:{title:"GitNote"}},{path:"/note",name:"noteIndex",component:O,children:[{path:"list/:tag?",name:"noteList",component:G,meta:{title:"笔记列表"}},{path:"tags",name:"noteTags",component:ye,meta:{title:"笔记标签"}},{path:"images",name:"noteImages",component:Re,meta:{title:"图片列表"}},{path:"detail/:number",name:"noteDetail",component:he,meta:{title:"笔记详情"}},{path:"add",name:"noteAdd",component:re,meta:{title:"添加笔记"}},{path:"edit/:number",name:"noteEdit",component:ue,meta:{title:"编辑笔记"}},{path:"setting",name:"noteSetting",component:T,meta:{title:"设置"}}]}],Be=new u["a"]({routes:Te});Be.afterEach((function(e){e.meta.title&&(document.title=e.meta.title)}));var Ie=Be,qe=n("7bb1"),Pe=n("fd7a"),Fe=n.n(Pe),Qe={cn:{messages:{required:function(e){return"请填写"+e}},attributes:{title:"标题",repo:"仓库名",token:"token",size:"条数"}}};a["a"].use(qe["b"],{fieldsBagName:"vee-fields"}),qe["a"].localize("cn",Fe.a),qe["a"].localize(Qe),qe["a"].extend("mobile",{getMessage:function(){return"请输入正确的手机号"},validate:function(e){var t=/^1\d{10}$/;return t.test(e)}}),qe["a"].extend("name_en",{getMessage:function(){return"只能输入英文字符"},validate:function(e){var t=/^[a-zA-Z\s]+$/;return t.test(e)}}),qe["a"].extend("name_cn",{getMessage:function(){return"只能输入中文字符"},validate:function(e){var t=/^[\u4E00-\u9FA5|\u9FA6-\u9FEF|\u3400-\u4DB5]+$/;return t.test(e)}}),qe["a"].extend("number_int",{getMessage:function(){return"必须是数字"},validate:function(e){var t=/^[1-9]\d*$/;return t.test(e)}}),qe["a"].extend("address",{getMessage:function(){return"请填写正确现居住地(4-100个字符)"},validate:function(e){var t=!0;return e=e.replace(/\s+/g,""),t=!(e.length<4||e.length>100),t}});var De=n("74bf"),Je=n.n(De);a["a"].component("input-tag",Je.a);var Ze=n("4eb5"),He=n.n(Ze);a["a"].use(He.a);n("3aff"),n("8422");a["a"].config.productionTip=!1,window.localForage=n("a002"),new a["a"]({router:Ie,render:function(e){return e(l)}}).$mount("#app")},"59d2":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".welcome[data-v-021e020a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:200px 0}.welcome .des[data-v-021e020a],.welcome .title[data-v-021e020a]{margin-bottom:10px}.welcome .link[data-v-021e020a]{color:#00f;font-size:14px;cursor:pointer}",""]),e.exports=t},"60bb":function(e,t,n){"use strict";var a=n("7b80"),r=n.n(a);r.a},"7b80":function(e,t,n){var a=n("59d2");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("499e").default;r("9bd962e0",a,!0,{sourceMap:!1,shadowMode:!1})},8422:function(e,t,n){var a=n("0253");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("499e").default;r("5f96fa47",a,!0,{sourceMap:!1,shadowMode:!1})},b104:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADtElEQVRYR8VXXWgdRRQ+ZzYYQlBQIQT6ZqmF3gdBRFDh3j2zpanBWhDaB1sVrKIPCq0glBb09sE+KrQ+qFDBn9Zf0MQQFdmZSRB80gcxovbnrRoC7YMoIZHMKeeye5ksubvbrZp5mpk958y3Z87PNwgNx+zs7PDIyMiCqI+Nje1otVqrTUxhEyXRSdN0n1LqY5l77/cnSfJJE1ulANI0vV8p9Zb3/tMkSbrhAVUArLVvAMABZj6otZ4aBK4KQFcp9XKmTETkckNlAIwxjyPiO5ns60T0fCMA1tqHAOALUUbE6TiO99YB4Jy7yMx3ZLIPEtFXjQCIknNumpn3ZAYeI6L3ZR6CA4A9RDST7ctV9byGiOfiOD5QFhuVQTgzM3Pr6Ojo1czI90R0T27QGHNM5lrrk8HeFUS8TdZKqTs7nc75WgAk4ABgFyJ+p7X+uhBw3SiKnmbmc0T0YplB59xHzLwfALpEdCKUNcZMIOIziPhBHMe9rOl7wFr7EwC0MoUzURS92m63fw7u/O4kSX6ok2ppmm5JkuRyLjs/P79jbW3tBQA4lF3N73Ecb1kHIE3TMOKBmf9k5teK6VcHQNF7iHgEEW/J9733J3K762LAWhuLMDM/LMLMfFVrffv1HhrEw3ZE/CVfSybJT4XpvGEQWmsPAsBRAPiGiI40BSB6xphTiHgvAEg96GVQOCqz4EYOr6O7+QAWFhZuWlxc7Fe4LH+X88JS5y/qyEjh8t6PhLIrKyvTaK29AABbi0aY+XhYYOocMkhGChYivrLB94ubD0CIxfDwcC/t8qGU+l+uYHx8fGrzg/BG7vbf0C0rRIcB4BIRSWNpPKQ5ee93IuJpIlrHqsRoaSkWgSiK7mq32z82QWCtHQKAf4JSfEn6gNb63f5ePvmvmpG1VshJ8c/fJKJn13mgqh1fjweMMdu11r/mOnNzc9uYucvMj2Z7fxHRzUUAMQA8wcwfFgmJc+4lZhZy0Uc+CJC1Vqj6vrDl5rLW2t2I+CQzT+eNqTINBb33/rcicllvRMmstd8CwAPCJ4aGhu4LSc1GoCsBOOfO5q6TXq61FmZTRkqllb+XHXaGiJ4qu75SAOIyAPgyM/DH6urqtomJib9lXfYucM5NBaRmd/FKQ0BVAE4DwHOioJQ61Ol03g6yZuDTTJiVOCmT/YyIHhnkhVIAxpi9iPg5M5/VWotr+6PqaSZpLUwaAA7nDLhRDAxCXgWgbtpWBuEgQ0JklpaWerR9eXm5NTk5uVL30FDuGngA5xDa2Z0+AAAAAElFTkSuQmCC"},d03d:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loading{margin:30px 0 0;font-size:12px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.loading .info{margin:8px 0}.loading img{-webkit-animation:rotate 3s linear infinite;animation:rotate 3s linear infinite}",""]),e.exports=t},e991:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"*{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}ul li{list-style-type:none}.container,body,html{height:100%}.btn,body{font-size:16px}.btn{display:inline-block;background:#ededed;cursor:pointer;border-radius:5px;color:#666;padding:0 15px;margin:20px 0;border:none;text-align:center;outline:none}.btn.disabled,.btn:disabled{opacity:.7;background:#cecece;color:#333}.btn.disabled{pointer-events:none}.btn.rounded{border-radius:.5rem}.btn-primary{background:-webkit-gradient(linear,left top,right top,from(#ff7d27),to(#fd5925));background:linear-gradient(90deg,#ff7d27,#fd5925);color:#fff}.btn-secondary{background:#ebecef;color:#333}.btn-third{background:#1b64dc;color:#fff}.btn-block{width:100%}.btn-group{display:-webkit-box;display:-ms-flexbox;display:flex}.btn-group .btn{-webkit-box-flex:1;-ms-flex:1 1 50%;flex:1 1 50%;font-size:.32rem}.btn-group .btn:first-child{margin-right:.1rem}.btn-group .btn:last-child{margin-left:.1rem}.btn-new{background:#42b983;color:#fff}.btn-sort{background:#2185d0;color:#fff}.media{display:table;width:100%}.media .media-body,.media .media-left{display:table-cell;vertical-align:top}.textarea{width:100%;background:#eff1f5;border:none;border-radius:5px;padding:10px;min-height:300px;height:100%}.form-group{margin-bottom:20px}.form-group .btn{margin:0;margin-bottom:10px}.list .item{border-bottom:1px solid #ddd;padding:20px 0}.page{height:100%}.tags{margin-bottom:5px}.tag{display:inline-block;padding:0 5px;border-radius:.3rem;margin:0 5px 5px 0;color:#6e7687;background-color:#e9ecef;font-size:14px}.tag-rounded{border-radius:1rem}.tag-red{background:#cd201f;color:#fff}.tag-green{background:#5eba00;color:#fff}.tag-blue{background:#467fcf;color:#fff}.tag-purple{background:#a55eea;color:#fff}.tag-pink{background:#f66d9b;color:#fff}.tag-orange{background:#fd9644;color:#fff}.tag-yellow{background:#f1c40f;color:#fff}.tag-gray{background:#868e96;color:#fff}.tag-black{background:#343a40;color:#fff}#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}#app .app-header{margin-bottom:20px}#app .app-body{display:-webkit-box;display:-ms-flexbox;display:flex}#app .main{-webkit-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%;padding:30px}#app .sidebar{width:230px;min-width:200px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:#f5f5f5;color:#333;padding:0 10px;min-height:1000px}.nav{margin-bottom:20px;width:200px;position:fixed;top:0;left:0}.nav li{padding:15px;border-bottom:1px solid #ddd}.nav a{font-weight:700;color:#333;text-decoration:none}.nav a.router-link-exact-active{color:#42b983}.form-group input,.form-group textarea{width:100%;padding:8px;outline:none;font-size:14px;resize:vertical}.form-group .form-error{color:red;font-size:12px;padding-top:5px}.form-group .btn{width:100%;padding:10px 0}.form-group .form-label{font-size:14px;padding:5px 0;color:#666;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.form-group .form-label .required{color:red;margin-right:3px}.page-home{text-align:center}.swal-footer{text-align:center}.swal-footer .swal-button{background:-webkit-gradient(linear,left top,right top,from(#ff7d27),to(#fd5925));background:linear-gradient(90deg,#ff7d27,#fd5925);color:#fff;outline:none}.swal-button:focus{-webkit-box-shadow:none;box-shadow:none}.swal-button:not([disabled]):hover{background:#fd5925}.vue-input-tag-wrapper{padding:4px 0 0 5px;font-size:14px}.vue-input-tag-wrapper .new-tag{width:auto}.vue-input-tag-wrapper .input-tag{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border:none;background:#eee;color:#333;padding:3px 5px;margin-right:5px}.vue-input-tag-wrapper .input-tag .remove{margin-left:5px}.back{color:#00f;cursor:pointer}.empty{margin:100px 0;text-align:center}",""]),e.exports=t}});
//# sourceMappingURL=app.js.map