(this["webpackJsonpalpha-demo"]=this["webpackJsonpalpha-demo"]||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),i=n.n(c),s=n(33),o=n(52),l=n(46),d=n.n(l),u=n(55),j=n(96),b=n.n(j).a.create({baseURL:"https://dog.ceo/api/breeds/image/random",timeout:1e4}),f=function(){var e=arguments;return Object(u.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:50,t.prev=1,t.next=4,b.get("".concat(n));case 4:return a=t.sent,t.abrupt("return",a.data);case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},p=n(98),m=Object(s.b)("imagesSlice/fetchData",function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=Object(s.c)({name:"imagesSlice",initialState:{error:null,status:null,data:{}},reducers:{},extraReducers:function(e){e.addCase(m.pending,(function(e){e.status="pending"})).addCase(m.rejected,(function(e,t){var n=t.error;e.status="rejected",e.error=n.message||"Something went wrong :("})).addCase(m.fulfilled,(function(e,t){var n=t.payload;e.status="fulfilled",n.message.forEach((function(t){return e.data[Object(p.a)()]=t})),e.error=null}))}}).reducer,h=Object(s.c)({name:"appSlice",initialState:{onlyFavorites:!1,favorites:[],deleted:[]},reducers:{toggleFavorites:function(e){e.onlyFavorites=!e.onlyFavorites},toggleLike:function(e,t){var n=t.payload,a=e.favorites.indexOf(n);-1===a?e.favorites.push(n):(e.favorites.splice(a,1),e.favorites.length||(e.onlyFavorites=!1))},deleteItem:function(e,t){var n=e.favorites,a=e.deleted,r=t.payload;a.push(r),n=n.filter((function(e){return e!==r}))}}}),v=h.actions,O=v.deleteItem,x=v.toggleFavorites,k=v.toggleLike,C=h.reducer,y=Object(s.a)({reducer:{images:g,app:C}}),w=o.c,F=n(81),_=n(77),S=n.n(_),L=n(78),I=n.n(L),N=n(156),A=n(158),z=n(48),D=n(4),E=r.a.memo((function(e){var t=e.src,n=e.toggleLike,a=e.deleteItem,r=e.liked,c=e.id;return Object(D.jsxs)(N.a,{className:I.a.main,children:[Object(D.jsx)("img",{src:t,loading:"lazy",alt:"random dog",className:I.a.image}),Object(D.jsx)(N.a.Content,{children:Object(D.jsxs)(A.a.Group,{fluid:!0,children:[Object(D.jsxs)(A.a,{animated:"vertical",onClick:function(){return n(c)},color:r?"pink":"grey",children:[Object(D.jsx)(A.a.Content,{hidden:!0,children:"Like"}),Object(D.jsx)(A.a.Content,{visible:!0,children:Object(D.jsx)(z.a,{name:"like"})})]}),Object(D.jsxs)(A.a,{animated:"vertical",onClick:function(){return a(c)},children:[Object(D.jsx)(A.a.Content,{hidden:!0,children:"Delete"}),Object(D.jsx)(A.a.Content,{visible:!0,children:Object(D.jsx)(z.a,{name:"trash alternate"})})]})]})})]})})),G=n(157),J=n(154),M=n(155),R=function(){var e=Object(o.b)(),t=w((function(e){return e.images})),n=t.status,r=t.data,c=t.error,i=w((function(e){return e.app})),s=i.favorites,l=i.deleted,d=i.onlyFavorites,u=Object(a.useCallback)((function(t){return e(O(t))}),[e]),j=Object(a.useCallback)((function(t){return e(k(t))}),[e]),b=Object(a.useMemo)((function(){return Object.entries(r).filter((function(e){var t=Object(F.a)(e,1)[0];return!l.includes(t)&&(!d||s.includes(t))}))}),[r,s,l,d]);return Object(D.jsxs)("div",{className:S.a.main,children:["fulfilled"===n&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(A.a,{disabled:!s.length,className:S.a.button,color:d?"pink":"blue",onClick:function(){return e(x())},children:d?"Favorites":"All"}),Object(D.jsx)(N.a.Group,{stackable:!0,doubling:!0,centered:!0,children:b.map((function(e){var t=Object(F.a)(e,2),n=t[0],a=t[1];return Object(D.jsx)(E,{id:n,src:a,liked:s.includes(n),toggleLike:j,deleteItem:u},n)}))})]}),"pending"===n&&Object(D.jsx)(G.a,{inverted:!0,active:!0,children:Object(D.jsx)(J.a,{size:"large",children:"Loading..."})}),"rejected"===n&&Object(D.jsxs)(G.a,{inverted:!0,active:!0,children:[Object(D.jsx)(M.a,{textAlign:"center",as:"p",color:"black",text:!0,children:c}),Object(D.jsx)(A.a,{color:"red",onClick:function(){return e(m())},children:"Try again"})]})]})};n(140);y.dispatch(m()),i.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(o.a,{store:y,children:Object(D.jsx)(R,{})})}),document.getElementById("root"))},77:function(e,t,n){e.exports={main:"App_main__9tVZ8"}},78:function(e,t,n){e.exports={main:"Card_main__33rS4",image:"Card_image__r8xvI"}}},[[141,1,2]]]);
//# sourceMappingURL=main.ad749ab7.chunk.js.map