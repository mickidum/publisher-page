(function(e){function t(t){for(var n,s,o=t[0],c=t[1],d=t[2],l=0,p=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/wp-content/plugins/mic-wp-pageface/admin/adminjs/micapp/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"publisher-page-main"},[a("div",{staticClass:"packages"},[a("span",{staticClass:"badge"},[e._v("packages")]),a("draggable",{staticClass:"packages-items-wrap",attrs:{list:e.packagesList,group:{name:"item",pull:"clone",put:!1},clone:e.onClone,handle:".package"},on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1},change:e.log}},[a("transition-group",{staticClass:"packages-items",attrs:{type:"transition",name:e.drag?null:"flip-list"}},e._l(e.packagesList,(function(e,t){return a("package-header",{key:e.type,attrs:{item:e}})})),1)],1)],1),a("div",{staticClass:"publisher-page-wrapper"},[a("div",{staticClass:"publisher-page-workspace"},[a("span",{staticClass:"badge"},[e._v("workspace")]),a("div",{staticClass:"workspace"},[a("draggable",e._b({staticClass:"workspace-items",attrs:{draggable:".work-item",group:"item"},on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1},change:e.log},model:{value:e.workspaceList,callback:function(t){e.workspaceList=t},expression:"workspaceList"}},"draggable",e.dragOptions,!1),[a("transition-group",{staticClass:"workspace-items",attrs:{type:"transition",name:e.drag?null:"flip-list"}},e._l(e.workspaceList,(function(t,n){return a("work-item",{key:t.id,attrs:{item:t},model:{value:e.workspaceList,callback:function(t){e.workspaceList=t},expression:"workspaceList"}})})),1)],1)],1)]),a("div",{staticClass:"publisher-page-console"},[a("span",{staticClass:"badge"},[e._v("console")]),a("draggable",{staticClass:"console-items",attrs:{draggable:".post-item",group:"item"},on:{change:e.log},model:{value:e.consoleList,callback:function(t){e.consoleList=t},expression:"consoleList"}},e._l(e.consoleList,(function(t,n){return t.kind?e._e():a("post",{key:t.id,attrs:{post:t}})})),1)],1)])])},r=[],s=(a("d3b7"),a("25f0"),a("5530")),o=a("310e"),c=a.n(o),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["post-item","post-item-"+e.post.id,e.drag?"item-drag":""]},[a("div",{staticClass:"console-item-inner"},[e.post.featured_media&&e.getMedia(e.post)?a("div",{staticClass:"media"},[a("img",{attrs:{src:e.getMedia(e.post),alt:e.post.title.rendered}})]):a("div",{staticClass:"media no-image"},[a("span",[e._v("No image")])]),a("div",{staticClass:"headline",domProps:{innerHTML:e._s(e.post.title.rendered)}})])])},u=[],l={name:"Post",props:{drag:{required:!1,type:Boolean,default:!1},post:{required:!1,type:Object,default:null}},data:function(){return{}},computed:{},methods:{getMedia:function(e){if(e._embedded&&e._embedded["wp:featuredmedia"]&&e._embedded["wp:featuredmedia"][0]&&e._embedded["wp:featuredmedia"][0].media_details){var t=e._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;return t}return null}}},p=l,m=a("2877"),f=Object(m["a"])(p,d,u,!1,null,null,null),g=f.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["post-item workspace-item","post-item-"+e.post.id]},[a("div",{staticClass:"console-item-inner"},[e.post.featured_media&&e.getMedia(e.post)?a("div",{staticClass:"media"},[a("img",{attrs:{src:e.getMedia(e.post),alt:e.post.title.rendered}})]):a("div",{staticClass:"media no-image"},[a("span",[e._v("No image")])]),a("div",{staticClass:"headline",domProps:{innerHTML:e._s(e.post.title.rendered)}})])])},b=[],w={name:"WorkspaceItem",props:["post"],data:function(){return{}},computed:{},methods:{getMedia:function(e){if(e._embedded&&e._embedded["wp:featuredmedia"]&&e._embedded["wp:featuredmedia"][0]&&e._embedded["wp:featuredmedia"][0].media_details){var t=e._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;return t}return null}}},h=w,v=Object(m["a"])(h,k,b,!1,null,null,null),_=v.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["package","package-"+e.item.type,e.drag?"item-drag":""]},[a("div",{staticClass:"package-item-inner"},[e._v(" "+e._s(e.item.name)+" ")])])},C=[],O={name:"package",props:{drag:{required:!1,type:Boolean,default:!1},item:{required:!1,type:Object,default:null}},data:function(){return{}},computed:{},methods:{}},j=O,P=Object(m["a"])(j,y,C,!1,null,null,null),x=P.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("draggable",{class:["package","package-id"+e.uniqID,"package-"+e.item.type,e.item.items.length?"filled":""],attrs:{tag:"div",value:e.value,group:"item"},on:{input:e.emitter},model:{value:e.item.items,callback:function(t){e.$set(e.item,"items",t)},expression:"item.items"}},[a("div",{staticClass:"package-item-inner"},[e._v(" "+e._s(e.item.name)+" "),a("draggable",{attrs:{tag:"div",group:"item",handle:".post-item"},model:{value:e.item.items,callback:function(t){e.$set(e.item,"items",t)},expression:"item.items"}},[e._l(e.item.items,(function(t){return t.kind?e._e():[a("workspace-item",{key:t.id,class:t.id,attrs:{post:t}})]}))],2)],1)])},$=[],M={name:"package",props:{header:{required:!1,type:Boolean,default:!1},value:{required:!1,type:Array,default:null},item:{required:!1,type:Object,default:null}},components:{draggable:c.a,WorkspaceItem:_},computed:{dragOptions:function(){return{animation:0,group:"item",disabled:!1,ghostClass:"ghost"}},realValue:function(){return this.value?this.value:this.list},uniqID:function(){return"_"+Math.random().toString(36).substr(2,9)}},methods:{emitter:function(e){this.$emit("input",e)}}},S=M,I=Object(m["a"])(S,L,$,!1,null,null,null),W=I.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"work-item"},[e.item.kind?e._e():a("workspace-item",{attrs:{post:e.item}}),e.item.kind?a("package",{attrs:{item:e.item}}):e._e()],1)},D=[],E={name:"work-item",props:["item"],components:{WorkspaceItem:_,Package:W},data:function(){return{}},computed:{uniqID:function(){return"_"+Math.random().toString(36).substr(2,9)}},methods:{getMedia:function(e){if(e._embedded&&e._embedded["wp:featuredmedia"]&&e._embedded["wp:featuredmedia"][0]&&e._embedded["wp:featuredmedia"][0].media_details){var t=e._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;return t}return null}}},R=E,T=Object(m["a"])(R,q,D,!1,null,null,null),H=T.exports,J={name:"App",components:{WorkItem:H,Post:g,draggable:c.a,WorkspaceItem:_,Package:W,PackageHeader:x},data:function(){return{drag:!1}},computed:{dragOptions:function(){return{animation:200,group:"item",disabled:!1,ghostClass:"ghost"}},packagesList:{get:function(){return this.$store.state.packages},set:function(e){this.$store.commit("updateWorkspace",e)}},consoleList:{get:function(){return this.$store.state.console},set:function(e){this.$store.commit("updateConsole",e)}},workspaceList:{get:function(){return this.$store.state.workspace},set:function(e){this.$store.commit("updateWorkspace",e)}},isLoading:function(){return this.$store.state.loading}},mounted:function(){this.$store.dispatch("getPostsEmbed"),this.$store.dispatch("getWorkspace")},methods:{log:function(e){},uniqID:function(){return"_"+Math.random().toString(36).substr(2,9)},onAdd:function(e){},onClone:function(e){return e.id=this.uniqID(),Object(s["a"])({},e)}}},N=J,U=(a("5c0b"),Object(m["a"])(N,i,r,!1,null,null,null)),z=U.exports,A=(a("99af"),a("4de4"),a("96cf"),a("1da1")),B=a("2909"),V=a("2f62"),F=window.publisherPageStore?window.publisherPageStore.restUrl:"",G=window.publisherPageStore?window.publisherPageStore.currentID:178,K={devUrl:"http://news.dev.com/wp-json",prodUrl:F,currentID:G,workspace:[]},Q=a("fa6e"),X=a.n(Q),Y=K.prodUrl,Z=K.currentID,ee=window.publisherPageStore||{},te=new X.a({endpoint:Y});te.workspace=te.registerRoute("wp/v2","/mic_publisher_page/(?P<id>)"),n["a"].use(V["a"]);var ae=new V["a"].Store({state:{console:[],workspace:[],packages:[{id:null,name:"Hero",kind:"package",type:"special-one",items:[]},{id:null,kind:"package",name:"2 Cards",type:"two-cards",items:[]},{id:null,kind:"package",name:"3 Cards",type:"three-cards",items:[]},{id:null,kind:"package",name:"4 Cards",type:"four-cards",items:[]},{id:null,kind:"package",name:"5 Cards",type:"five-cards",items:[]}],loading:!1},mutations:{fillPosts:function(e,t){e.console=t},fillWorkspace:function(e,t){e.workspace=t},updateList:function(e,t){e.workspace=[].concat(Object(B["a"])(e.workspace),[t]),e.console=e.console.filter((function(e){return t.id!==e.id}))},updateConsole:function(e,t){var a=t.filter((function(e){return e&&!e.kind}));e.console=a},updateWorkspace:function(e,t){e.workspace=t},updateWorkspaceItem:function(e,t){e.workspace=[].concat(Object(B["a"])(e.workspace),[t])},updateConsoleItem:function(e,t){var a=e.console.filter((function(e){return t&&e.id!==t.id}));e.console=a},loading:function(e,t){t=t||!0,e.loading=t}},actions:{getPosts:function(e){return Object(A["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,te.posts().then((function(e){a("fillPosts",e)}));case 2:case"end":return t.stop()}}),t)})))()},getPostsEmbed:function(e){return Object(A["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,a("loading",!0),te.posts().embed().then((function(e){a("fillPosts",e),a("loading",!1)}));case 3:case"end":return t.stop()}}),t)})))()},getWorkspace:function(e){return Object(A["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,a("loading",!0),te.workspace().id(Z).then((function(e){console.log(e.mic_workspace_items)})),a("loading",!1);case 4:case"end":return t.stop()}}),t)})))()}},modules:{}}),ne=(ae.subscribe((function(e,t){"updateWorkspace"!==e.type&&"updateConsole"!==e.type||(ee.workspace=JSON.parse(JSON.stringify(t.workspace)))})),ae),ie=a("d8c5"),re=a.n(ie);a("a89b");n["a"].use(re.a),n["a"].config.productionTip=!1,new n["a"]({store:ne,render:function(e){return e(z)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},"9c0c":function(e,t,a){},a89b:function(e,t,a){}});
//# sourceMappingURL=app.js.map