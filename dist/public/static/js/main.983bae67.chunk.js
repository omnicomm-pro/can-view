(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(e,t,a){e.exports=a(448)},233:function(e,t,a){},409:function(e,t,a){},448:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(13),c=a.n(i),r=a(175),s=a.n(r),o=a(14),u=a(18),m=a(19),h=a(5),f=function(){function e(){var t=this;Object(u.a)(this,e),this.show=!1,this.showCarModal=!1,this.vehicaleName="Unknow Vehicale",fetch("/api/vehicleName").then(function(e){return e.json()}).then(function(e){t.setVehicaleName(e.name)})}return Object(m.a)(e,[{key:"changeVehicaleName",value:function(){var e=this;fetch("/api/changeName",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({name:this.vehicaleName})}).then(function(t){"ok"!==t&&e.loadVehicalName()})}},{key:"loadVehicalName",value:function(){var e=this;fetch("/api/vehicleName").then(function(e){return e.json()}).then(function(t){e.setVehicaleName(t.name)})}},{key:"setVehicaleName",value:function(e){this.vehicaleName=e}},{key:"toggleLeftPanel",value:function(){this.show=!this.show}},{key:"toggleCarModal",value:function(){this.showCarModal=!this.showCarModal}},{key:"isOpenLeftPanel",get:function(){return this.show}},{key:"isShowCarModal",get:function(){return this.showCarModal}},{key:"getVehicalName",get:function(){return this.vehicaleName}}]),e}();Object(h.h)(f,{show:h.m,showCarModal:h.m,vehicaleName:h.m,isOpenLeftPanel:h.e,isShowCarModal:h.e,getVehicalName:h.e,loadVehicalName:h.d,toggleLeftPanel:h.d,toggleCarModal:h.d,setVehicaleName:h.d});var d=new f,p=function(){function e(){var t=this;Object(u.a)(this,e),this.show=!1,this.filesCount=0,fetch("/api/fileCount").then(function(e){return e.json()}).then(function(e){t.setFilesCount(e.count)})}return Object(m.a)(e,[{key:"setFilesCount",value:function(e){this.filesCount=e}},{key:"openFileModal",value:function(){this.show=!0}},{key:"closeFileModal",value:function(){this.show=!1}},{key:"hideFileModal",value:function(){this.show=!1}},{key:"appendFiles",value:function(e){this.filesCount+=e}},{key:"clearFiles",value:function(){this.filesCount=0}},{key:"isOpenModal",get:function(){return this.show}}]),e}();Object(h.h)(p,{show:h.m,filesCount:h.m,isOpenModal:h.e,openFileModal:h.d,closeFileModal:h.d,hideFileModal:h.d,appendFiles:h.d,clearFiles:h.d});var g=new p,v=function(){function e(){var t=this;Object(u.a)(this,e),this.filter="",this.list=[],fetch("/api/pgnlist").then(function(e){return e.json()}).then(function(e){t.setList(e)})}return Object(m.a)(e,[{key:"setList",value:function(e){this.list=e}},{key:"checkList",value:function(e){this.list=this.list.map(function(t){return t.name===e?(t.checked=!t.checked,t):t})}},{key:"setfilter",value:function(e){this.filter=e}},{key:"clearList",value:function(){var e=this;fetch("/api/pgnclear").then(function(t){e.filter="",e.list=[]})}},{key:"updateList",value:function(){var e=this;fetch("/api/pgnlist").then(function(e){return e.json()}).then(function(t){e.setList(t)})}},{key:"getList",get:function(){var e=this;return this.list.filter(function(t){return t.name.toLowerCase().indexOf(e.filter.toLowerCase())>-1})}},{key:"checkedList",get:function(){return this.list.filter(function(e){return!0===e.checked})}}]),e}();Object(h.h)(v,{filter:h.m,list:h.m,getList:h.e,checkedList:h.e,setfilter:h.d,clearList:h.d,updateList:h.d,checkList:h.d});var E=new v,b=Object(o.a)(function(){return l.a.createElement("header",{className:"main-header"},l.a.createElement("a",{href:"index2.html",className:"logo"},l.a.createElement("b",null,"CAN"),"View"),l.a.createElement(s.a,{className:"navbar navbar-static-top",role:"navigation"},l.a.createElement("a",{href:"index.html",onClick:function(e){e.preventDefault(),d.toggleLeftPanel()},className:"sidebar-toggle"},l.a.createElement("span",{className:"sr-only"},"Toggle navigation")),l.a.createElement("div",{className:"navbar-custom-menu"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("li",{className:"dropdown messages-menu"},l.a.createElement("a",{href:"index.html",onClick:function(e){e.preventDefault(),g.clearFiles(),E.clearList()},className:"dropdown-toggle"},l.a.createElement("i",{className:"fa fa-eraser"}))),l.a.createElement("li",{className:"dropdown messages-menu"},l.a.createElement("a",{href:"index.html",onClick:function(e){e.preventDefault(),g.openFileModal()},className:"dropdown-toggle"},l.a.createElement("i",{className:"fa fa-folder-o"}),l.a.createElement("span",{className:"label label-success"},g.filesCount))),l.a.createElement("li",{className:"dropdown user user-menu"},l.a.createElement("a",{href:"index.html",className:"dropdown-toggle",onClick:function(e){e.preventDefault(),d.toggleCarModal()}},l.a.createElement("img",{src:"/img/car_view.png",className:"user-image",alt:"Car View"}),l.a.createElement("span",{className:"hidden-xs"},d.vehicaleName)))))))}),N=Object(o.a)(function(){return l.a.createElement("div",{className:"user-panel",onClick:function(){d.toggleCarModal()}},l.a.createElement("div",{className:"pull-left image"},l.a.createElement("img",{src:"/img/car_view.png",className:"img-circle",alt:"Car View"})),l.a.createElement("div",{className:"pull-left info"},l.a.createElement("p",null,d.vehicaleName),l.a.createElement("a",{href:"index.html",onClick:function(e){e.preventDefault(),d.toggleCarModal()}},l.a.createElement("i",{className:"fa fa-circle text-success"})," Online")))});var y=function(){return l.a.createElement("form",{action:"#",method:"get",className:"sidebar-form"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{onChange:function(e){return E.setfilter(e.target.value)},type:"text",name:"q",className:"form-control",placeholder:"Search..."}),l.a.createElement("span",{className:"input-group-btn"},l.a.createElement("button",{type:"submit",name:"search",id:"search-btn",className:"btn btn-flat"},l.a.createElement("i",{className:"fa fa-search"})))))},w=a(2),k=a.n(w),O=(a(233),Object(o.a)(function(){return l.a.createElement("ul",{className:"sidebar-menu"},l.a.createElement("li",{className:"header"},"Parameter Group Label"),E.getList.map(function(e,t){return l.a.createElement("li",{key:t,className:"treeview"},l.a.createElement("a",{href:"index.html",onClick:function(t){t.preventDefault(),E.checkList(e.name)},className:k()({"check-menu":!!e.checked})},l.a.createElement("i",{className:"fa fa-files-o"}),l.a.createElement("span",null,e.name),l.a.createElement("span",{className:"label label-primary pull-right"},e.count)))}))}));var C=function(){return l.a.createElement("aside",{className:"main-sidebar"},l.a.createElement("section",{className:"sidebar"},l.a.createElement(N,null),l.a.createElement(y,null),l.a.createElement(O,null)))};var j=function(){return l.a.createElement("section",{className:"content-header"},l.a.createElement("h1",null,"Dashboard",l.a.createElement("small",null,"Version 0.01")))},L=a(72),x=a(67),M=a(51),D=a(71),F=a(27),V=(a(409),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(L.a)(this,Object(x.a)(t).call(this,e))).state={leftBtn:!0,rightBtn:!1,shift:0,limit:200,data:null,unit:""},a.shiftLeft=a.shiftLeft.bind(Object(M.a)(a)),a.shiftRight=a.shiftRight.bind(Object(M.a)(a)),a}return Object(D.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.renderMyData()}},{key:"shiftLeft",value:function(){this.setState(function(e,t){var a=e.shift+10;return{shift:a,rightBtn:0!==a,leftBtn:a+e.limit<t.count}}),this.renderMyData()}},{key:"shiftRight",value:function(){this.setState(function(e,t){var a=e.shift>10?e.shift-10:0;return{shift:a,rightBtn:0!==a,leftBtn:a+e.limit<t.count}}),this.renderMyData()}},{key:"renderMyData",value:function(){var e=this,t=this.props.pgn||"",a=new URL("/api/loadpgn",window.location.protocol+"//"+window.location.host),n={pgn:t,offset:this.state.shift,limit:this.state.limit};a.search=new URLSearchParams(n),fetch(a).then(function(e){return e.json()}).then(function(t){e.setState({data:t,unit:t[0].pgnUnit})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"box box-info"},l.a.createElement("div",{className:"box-header ui-sortable-handle"},l.a.createElement("i",{className:"fa fa-car"}),l.a.createElement("h3",{className:"box-title"},this.props.pgn),l.a.createElement("div",{className:"pull-right box-tools"},l.a.createElement("button",{onClick:this.shiftLeft,className:"btn btn-info btn-sm btn-arrow",title:"","data-original-title":"Left",disabled:!this.state.leftBtn},l.a.createElement("i",{className:"fa fa-angle-left"})),l.a.createElement("button",{onClick:this.shiftRight,className:"btn btn-info btn-sm btn-arrow",title:"","data-original-title":"Right",disabled:!this.state.rightBtn},l.a.createElement("i",{className:"fa fa-angle-right"})),l.a.createElement("button",{onClick:function(){E.checkList(e.props.pgn)},className:"btn btn-info btn-sm",title:"","data-original-title":"Remove"},l.a.createElement("i",{className:"fa fa-times"})))),l.a.createElement("div",{className:"charts-container"},l.a.createElement(F.e,null,l.a.createElement(F.d,{data:this.state.data,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(F.a,{strokeDasharray:"3 3"}),l.a.createElement(F.g,{dataKey:"time"}),l.a.createElement(F.h,{label:{value:this.state.unit,dx:-20}}),l.a.createElement(F.f,null),l.a.createElement(F.b,null),l.a.createElement(F.c,{name:this.props.pgn,type:"monotone",dataKey:"pgnData",stroke:"#8884d8",activeDot:{r:8}})))))}}]),t}(n.PureComponent)),S=Object(o.a)(function(){return l.a.createElement("section",{className:"content"},E.checkedList.map(function(e,t){return l.a.createElement("div",{key:t,className:"row"},l.a.createElement(V,{pgn:e.name,count:e.count,key:e.name}))}))}),R=a(16),P=a.n(R),B=a(46),U=a.n(B),I=a(45),A=a.n(I),T=a(185),G=a(70),_=a(26),H={files:[],pending:[],next:null,uploading:!1,uploaded:{},status:"idle"},J=function(e,t){switch(t.type){case"load":return Object(_.a)({},e,{files:t.files,status:"LOADED"});case"submit":return Object(_.a)({},e,{uploading:!0,pending:e.files,status:"INIT"});case"next":return Object(_.a)({},e,{next:t.next,status:"PENDING"});case"file-uploaded":return Object(_.a)({},e,{next:null,pending:t.pending,uploaded:Object(_.a)({},e.uploaded,Object(G.a)({},t.prev.id,t.prev.file))});case"files-uploaded":return Object(_.a)({},e,{uploading:!1,status:"FILES_UPLOADED"});case"set-upload-error":return Object(_.a)({},e,{uploadError:t.error,status:"UPLOAD_ERROR"});case"clear":return H;default:return e}},K=function(e){var t=new FormData;return t.append("file",e.file),fetch("/api/upload",{method:"POST",body:t})},W=function(){var e=Object(n.useReducer)(J,H),t=Object(T.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)(function(){if(a.pending.length&&null==a.next){var e=a.pending[0];l({type:"next",next:e})}},[a.next,a.pending]);var i=Object(n.useRef)(0);Object(n.useEffect)(function(){if(a.pending.length&&a.next){var e=a.next;K(e).then(function(){var t=e;!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"green",a="%cUploaded ".concat(e," files."),n="color:".concat(t,";font-weight:bold;");console.log(a,n)}(++i.current);var n=a.pending.slice(1);l({type:"file-uploaded",prev:t,pending:n})}).catch(function(e){console.error(e),l({type:"set-upload-error",error:e})})}},[a]),Object(n.useEffect)(function(){!a.pending.length&&a.uploading&&l({type:"files-uploaded"})},[a.pending.length,a.uploading]);var c=Object(n.useCallback)(function(e){e.preventDefault(),a.files.length?l({type:"submit"}):window.alert("You don't have any files loaded.")},[a.files.length]);return Object(_.a)({},a,{onSubmit:c,onChange:function(e){if(e.target.files.length){var t=Array.from(e.target.files).map(function(e,t){return{file:e,id:t,src:window.URL.createObjectURL(e)}});l({type:"load",files:t})}},onInitialState:function(){l({type:"clear"})}})},Y=function(e){return l.a.createElement("input",Object.assign({type:"file",name:"file-input",multiple:!0},e))},q=Object(o.a)(function(){var e=W(),t=e.files,a=e.uploaded,n=e.status,i=e.onSubmit,c=e.onChange,r=e.onInitialState,s=function(){g.appendFiles(t.length),r(),g.hideFileModal(),E.updateList()};return l.a.createElement(P.a,{show:g.show,onHide:s,animation:!1},l.a.createElement(P.a.Header,{closeButton:!0},l.a.createElement(P.a.Title,null,"Send files")),l.a.createElement(A.a,{className:"form",onSubmit:i},l.a.createElement(P.a.Body,null,"FILES_UPLOADED"===n&&l.a.createElement("div",{className:"success-container"},l.a.createElement("div",null,l.a.createElement("small",null,"You uploaded your files. Get some rest."))),l.a.createElement(A.a.Group,null,l.a.createElement(Y,{onChange:c})),l.a.createElement(A.a.Group,null,t.map(function(e,t){var n=e.file,i=(e.src,e.id);return l.a.createElement("div",{style:{opacity:a[i]?.2:1},key:"thumb".concat(t),className:"thumbnail-wrapper"},l.a.createElement("div",{className:"thumbnail-caption"},a[i]?"Loaded "+n.name:n.name))}))),l.a.createElement(P.a.Footer,null,l.a.createElement(U.a,{variant:"secondary",onClick:s},"Close"),l.a.createElement(U.a,{variant:"primary",type:"submit"},"Send files"))))}),z=function(e){function t(){return Object(u.a)(this,t),Object(L.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(m.a)(t,[{key:"closeForm",value:function(){d.toggleCarModal(),d.loadVehicalName()}},{key:"changeName",value:function(e){d.setVehicaleName(e)}},{key:"updateName",value:function(){d.toggleCarModal(),d.changeVehicaleName()}},{key:"render",value:function(){var e=this;return l.a.createElement(P.a,{show:d.showCarModal,onHide:this.closeForm,animation:!1},l.a.createElement(P.a.Header,{closeButton:!0},l.a.createElement(P.a.Title,null,"Change Vehicle Name")),l.a.createElement(P.a.Body,null,l.a.createElement(A.a.Control,{size:"lg",type:"text",placeholder:"Vehicle Name",value:d.vehicaleName,onChange:function(t){e.changeName(t.target.value)}})),l.a.createElement(P.a.Footer,null,l.a.createElement(U.a,{variant:"secondary",onClick:this.closeForm},"Close"),l.a.createElement(U.a,{variant:"primary",type:"submit",onClick:function(){return e.updateName()}},"Change")))}}]),t}(n.PureComponent),$=Object(o.a)(z);var Q=function(){return l.a.createElement("div",{className:"content-wrapper"},l.a.createElement(j,null),l.a.createElement(q,null),l.a.createElement($,null),l.a.createElement(S,null))};var X=function(){return l.a.createElement("footer",{className:"main-footer"},l.a.createElement("div",{className:"pull-right hidden-xs"},l.a.createElement("b",null,"Version")," 0.01"),l.a.createElement("strong",null,"Copyright \xa9 2019 ",l.a.createElement("a",{href:"index.html"},"Roman Korchagin"),".")," All rights reserved.")},Z=Object(o.a)(function(){return l.a.createElement("div",{className:k()("skin-blue",{"sidebar-collapse":d.show},{"sidebar-open":d.show})},l.a.createElement("div",{className:"wrapper"},l.a.createElement(b,null),l.a.createElement(C,null),l.a.createElement(Q,null),l.a.createElement(X,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[211,1,2]]]);
//# sourceMappingURL=main.983bae67.chunk.js.map