(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={nav:"Navbar_nav__2NA6Q",item:"Navbar_item__11QTf",activelink:"Navbar_activelink__2RrTM",friends:"Navbar_friends__2X08y",friendsName:"Navbar_friendsName__OnK5R",avatar:"Navbar_avatar__37PBJ"}},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(43),a=n(5),s="SEND-MESSAGE",c={dialogs:[{id:1,name:"Ilia",avatar:"https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"},{id:2,name:"Stepa",avatar:"https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"},{id:3,name:"Den",avatar:"https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"},{id:4,name:"Veta",avatar:"https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"},{id:5,name:"Nastya",avatar:"https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"}],messages:[{id:1,message:"Hi"},{id:2,message:"Hov are you"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;if(t.type===s){var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])})}return e}},130:function(e,t,n){},133:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__2284p",selectedPage:"Users_selectedPage__2OlLk",pages:"Users_pages__1HBwn"}},16:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(134),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"a51074dc-dc6a-4251-a2c5-f8bb44563881"}}),s={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})}},c={getProfile:function(e){return console.warn("Obsolete method. Please ProfileAPI object."),s.getProfile(e)},getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))}},i={me:function(){return a.get("auth/me")},loginPost:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logOut:function(){return a.delete("auth/login")}}},165:function(e,t,n){},169:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},301:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=(n(165),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,306)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))}),c=n(67),i=n.n(c),o=n(34),u=n(35),l=n(38),d=n(37),j=(n(169),n(12)),p=n.n(j),b=n(13),f=n(1),h=function(){return Object(f.jsxs)("div",{className:p.a.friends,children:[Object(f.jsx)(b.b,{to:"/friends",activeClassName:p.a.activelink,className:p.a.friendsName,children:"Friends"}),Object(f.jsxs)("div",{className:p.a.avatar,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:"https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"}),Object(f.jsx)("b",{children:"Ilia"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:"https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"}),Object(f.jsx)("b",{children:"Stepa"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:"https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"}),Object(f.jsx)("b",{children:"Den"})]})]})]})},O=function(){return Object(f.jsxs)("nav",{className:p.a.nav,children:[Object(f.jsx)("div",{className:p.a.item,children:Object(f.jsx)(b.b,{to:"/profile",activeClassName:p.a.activelink,children:"Profile"})}),Object(f.jsx)("div",{className:p.a.item,children:Object(f.jsx)(b.b,{to:"/dialogs",activeClassName:p.a.activelink,children:"Messages"})}),Object(f.jsx)("div",{className:p.a.item,children:Object(f.jsx)(b.b,{to:"/users",activeClassName:p.a.activelink,children:"Users"})}),Object(f.jsx)("div",{className:p.a.item,children:Object(f.jsx)(b.b,{to:"/news",activeClassName:p.a.activelink,children:"News"})}),Object(f.jsx)("div",{className:p.a.item,children:Object(f.jsx)(b.b,{to:"/music",activeClassName:p.a.activelink,children:"Music"})}),Object(f.jsx)("div",{className:p.a.item,children:Object(f.jsx)(b.b,{to:"/settings",activeClassName:p.a.activelink,children:"Settings"})}),Object(f.jsx)("div",{children:Object(f.jsx)(h,{})})]})},g=n(11),v=(n(178),function(){return Object(f.jsx)("div",{children:"News"})}),m=(n(179),function(){return Object(f.jsx)("div",{children:"Music"})}),x=(n(180),function(){return Object(f.jsx)("div",{children:"Setting"})}),_=n(130),w=n.n(_),y=function(e){return Object(f.jsx)("div",{className:w.a.friends,children:"'Friends'"})},P=n(19),k=n(44),C=n(69),S=n(127),N=n(72),I=n.n(N),E=n(132),T=n.n(E),U=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanget,c=e.portionSize,i=void 0===c?10:c,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/i),j=Object(r.useState)(1),p=Object(S.a)(j,2),b=p[0],h=p[1],O=(b-1)*i+1,g=b*i;return Object(f.jsxs)("div",{className:I.a.paginator,children:[b>1&&Object(f.jsx)("button",{onClick:function(){h(b-1)},children:"Prew"}),u.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(f.jsx)("span",{className:T()(Object(C.a)({},I.a.selectedPage,a===e),I.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),d>b&&Object(f.jsx)("button",{onClick:function(){h(b+1)},children:"Next"})]})},F=n(133),A=n.n(F),L=n.p+"static/media/user.4df56501.png",z=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:Object(f.jsx)("div",{children:Object(f.jsx)(b.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:null!=t.photos.small?t.photos.small:L,className:A.a.userPhoto})})})}),Object(f.jsx)("span",{children:Object(f.jsx)("div",{children:t.followed?Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})}),Object(f.jsxs)("span",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:t.name}),Object(f.jsx)("div",{children:t.status})]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:"user.location.country"}),Object(f.jsx)("div",{children:"user.location.sity"})]})]})]})},M=["totalUsersCount","pageSize","currentPage","onPageChanget","users"],D=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanget,s=e.users,c=Object(k.a)(e,M);return Object(f.jsxs)("div",{children:[Object(f.jsx)(U,{totalItemsCount:t,pageSize:n,currentPage:r,onPageChanget:a}),s.map((function(e){return Object(f.jsx)(z,{user:e,followingInProgress:c.followingInProgress,follow:c.follow,unfollow:c.unfollow},e.id)}))]})},R=n(9),B=n.n(R),G=n(21),H=n(43),q=n(5),Y=n(16),J=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(q.a)(Object(q.a)({},e),r):e}))},K="FOLLOW",Q="UNFOLLOW",W="SET-USERS",X="SET-CURRENT-PAGE",Z="SET-USERS-TOTAL-COUNT",V="TOGGLE-IS-FETCHING",$="TOGGLE-IS-FOLLOWING-PROGRESS",ee={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},te=function(e){return{type:K,userId:e}},ne=function(e){return{type:Q,userId:e}},re=function(e){return{type:X,currentPage:e}},ae=function(e){return{type:V,isFetching:e}},se=function(e,t){return{type:$,isFetching:e,userId:t}},ce=function(){var e=Object(G.a)(B.a.mark((function e(t,n,r,a){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(se(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(se(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(q.a)(Object(q.a)({},e),{},{users:J(e.users,t.userId,"id",{followed:!0})});case Q:return Object(q.a)(Object(q.a)({},e),{},{users:J(e.users,t.userId,"id",{followed:!1})});case W:return Object(q.a)(Object(q.a)({},e),{},{users:t.users});case X:return Object(q.a)(Object(q.a)({},e),{},{currentPage:t.currentPage});case Z:return Object(q.a)(Object(q.a)({},e),{},{totalUsersCount:t.count});case V:return Object(q.a)(Object(q.a)({},e),{},{isFetching:t.isFetching});case $:return Object(q.a)(Object(q.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(H.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},oe=n(39),ue=n(10),le=n(138),de=Object(le.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),je=function(e){return e.usersPage.pageSize},pe=function(e){return e.usersPage.totalUsersCount},be=function(e){return e.usersPage.currentPage},fe=function(e){return e.usersPage.isFetching},he=function(e){return e.usersPage.followingInProgress},Oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanget=function(t){var n=e.props.setCurrentPage;e.props.requestUsers(t,n(t))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(oe.a,{}):null,Object(f.jsx)(D,{currentPage:this.props.currentPage,onPageChanget:this.onPageChanget,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),ge=Object(ue.d)(Object(P.b)((function(e){return{users:de(e),pageSize:je(e),totalUsersCount:pe(e),currentPage:be(e),isFetching:fe(e),followingInProgress:he(e)}}),{follow:function(e){return function(){var t=Object(G.a)(B.a.mark((function t(n){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ce(n,e,Y.c.follow.bind(Y.c),te);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(G.a)(B.a.mark((function t(n){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ce(n,e,Y.c.unfollow.bind(Y.c),ne);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:re,toggleFollowingProgress:se,requestUsers:function(e,t){return function(){var n=Object(G.a)(B.a.mark((function n(r){var a;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ae(!0)),r(re(e)),n.next=4,Y.c.getUsers(e,t);case 4:a=n.sent,r(ae(!1)),r((c=a.items,{type:W,users:c})),r((s=a.totalCount,{type:Z,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Oe),ve=n(73),me=n.n(ve),xe=function(e){return Object(f.jsxs)("header",{className:me.a.header,children:[Object(f.jsx)("img",{src:"https://freepikpsd.com/wp-content/uploads/2019/10/design-logo-png-7-Transparent-Images.png"}),Object(f.jsx)("div",{className:me.a.loginBlock,children:e.isAuth?Object(f.jsxs)("div",{children:[" ",e.login," - ",Object(f.jsx)("button",{onClick:e.logOut,children:"Log out"})," "]}):Object(f.jsx)(b.b,{to:"/login",activeClassName:me.a.activelink,children:"Login"})})]})},_e=n(45),we="SET-USER-DATA",ye={userId:null,email:null,login:null,isAuth:!1},Pe=function(e,t,n,r){return{type:we,payload:{userId:e,login:t,email:n,isAuth:r}}},ke=function(){return function(){var e=Object(G.a)(B.a.mark((function e(t){var n,r,a,s,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,c=r.email,t(Pe(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;return t.type===we?Object(q.a)(Object(q.a)({},e),t.payload):e},Se=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(xe,Object(q.a)({},this.props))}}]),n}(a.a.Component),Ne=Object(P.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logOut:function(){return function(){var e=Object(G.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.logOut();case 2:0===e.sent.data.resultCode&&t(ke());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Se),Ie=n(126),Ee=n(33),Te=n(49),Ue=n(54),Fe=n.n(Ue),Ae=Object(Te.a)(20),Le=Object(Te.a)(15),ze=Object(Ie.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(f.jsxs)("form",{onSubmit:t,children:[Object(Ee.c)("Email","email",Ee.a,[Te.b,Ae]),Object(Ee.c)("Password","password",Ee.a,[Te.b,Le],{type:"password"}),Object(Ee.c)(null,"rememberMy",Ee.a,null,{type:"checkbox"},"remember my"),n&&Object(f.jsx)("div",{className:Fe.a.formSummaryError,children:n}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Login"})})]})})),Me=Object(P.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(G.a)(B.a.mark((function r(a){var s,c;return B.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Y.a.loginPost(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(ke()):(c=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(_e.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(f.jsx)(g.a,{to:"/profile"}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"LOGIN"}),Object(f.jsx)(ze,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMy)}})]})})),De="SET-INITIALIZED-SUCCESS",Re={initialized:!1},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;return t.type===De?Object(q.a)(Object(q.a)({},e),{},{initialized:!0}):e},Ge=n(95),He=n(125),qe=n(137),Ye=n(128),Je=Object(ue.c)({app:Be,profilePage:Ge.b,dialogsPage:He.a,usersPage:ie,auth:Ce,form:Ye.a}),Ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.d,Qe=Object(ue.e)(Je,Ke(Object(ue.a)(qe.a)));window.__store__=Qe;var We=Qe,Xe=function(e){return function(t){return Object(f.jsx)(a.a.Suspense,{fallback:Object(f.jsx)("div",{children:Object(f.jsx)(oe.a,{})}),children:Object(f.jsx)(e,Object(q.a)({},t))})}},Ze=a.a.lazy((function(){return n.e(3).then(n.bind(null,307))})),Ve=a.a.lazy((function(){return n.e(4).then(n.bind(null,308))})),$e=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(f.jsxs)("div",{className:"app-wrapper",children:[Object(f.jsx)(Ne,{}),". ",Object(f.jsx)(O,{}),Object(f.jsxs)("div",{className:"app-wrapper-content",children:[Object(f.jsx)(g.b,{path:"/users",render:function(){return Object(f.jsx)(ge,{})}}),Object(f.jsx)(g.b,{path:"/login",render:function(){return Object(f.jsx)(Me,{})}}),Object(f.jsx)(g.b,{path:"/news",component:v}),Object(f.jsx)(g.b,{path:"/music",component:m}),Object(f.jsx)(g.b,{path:"/settings",component:x}),Object(f.jsx)(g.b,{path:"/friends",component:y}),Object(f.jsx)(g.b,{path:"/dialogs",render:Xe(Ve)}),Object(f.jsx)(g.b,{path:"/profile/:userId?",render:Xe(Ze)})]})]}):Object(f.jsx)(oe.a,{})}}]),n}(a.a.Component),et=Object(P.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ke());Promise.all([t]).then((function(){e({type:De})}))}}})($e),tt=function(e){return Object(f.jsx)(b.a,{children:Object(f.jsx)(P.a,{store:We,children:Object(f.jsx)(et,{})})})};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(tt,{})}),document.getElementById("root")),s()},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return f}));var r=n(5),a=n(44),s=(n(0),n(54)),c=n.n(s),i=n(91),o=n(1),u=["input","meta","children"],l=["input","meta","child"],d=["input","meta","child"],j=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,s=e.children,i=(Object(a.a)(e,u),n&&r);return Object(o.jsxs)("div",{className:c.a.formControl+" "+(i?c.a.error:" "),children:[Object(o.jsx)("div",{children:s}),i&&Object(o.jsx)("span",{children:r})]})},p=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(o.jsxs)(j,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))," "]}))},b=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,d));return Object(o.jsxs)(j,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))," "]}))},f=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,Object(r.a)({placeholder:e,name:t,component:n,validate:a},s)),c]})}},39:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.cf0ed456.svg",a=n(1);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},49:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},54:function(e,t,n){e.exports={formControl:"FormControl_formControl__3qKfi",error:"FormControl_error__12BMZ",formSummaryError:"FormControl_formSummaryError__1ba74"}},72:function(e,t,n){e.exports={paginator:"Paginator_paginator__232_B",pageNumber:"Paginator_pageNumber__1LdAq",selectedPage:"Paginator_selectedPage__12ZQ7"}},73:function(e,t,n){e.exports={header:"Header_header__17EA_",loginBlock:"Header_loginBlock__SN7xN",activelink:"Header_activelink__1_Gd8"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(9),a=n.n(r),s=n(21),c=n(43),i=n(5),o=n(16),u="ADD-POST",l="SET-USER-PROFILE",d="SET-STATUS",j="DELETE_POST",p={posts:[{id:1,message:"Hi, have are you?",likeCount:5},{id:2,message:"It's my first post!",likeCount:45}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},f=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:3,message:t.newPostText,likeCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}}}},[[301,1,2]]]);
//# sourceMappingURL=main.5933690a.chunk.js.map