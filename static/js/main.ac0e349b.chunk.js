(this["webpackJsonpshopping-list-react-app-demo"]=this["webpackJsonpshopping-list-react-app-demo"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),l=a.n(r),i=(a(93),a(75)),c=a(28),s=a(29),m=a(21),d=a(34),p=a(33),u=(a(94),a(139)),h=a(157),g=a(159),f=[{name:"Apple",count:0},{name:"Apples",count:10},{name:"Banana",count:0},{name:"Bananas",count:10},{name:"Oatmeal",count:10},{name:"Clementines",count:0},{name:"Blueberries",count:0},{name:"Oranges",count:0},{name:"Hummus",count:10},{name:"Black Beans",count:0},{name:"Chocolate Chips",count:10},{name:"Cliff Bars",count:0},{name:"Cereal Bars",count:0},{name:"Almonds",count:10},{name:"Coffee",count:10},{name:"Orange Juice",count:10},{name:"Flax Seed",count:5},{name:"Grapes",count:5}],v=f,E=Object(u.a)((function(e){return{input:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingBottom:e.spacing(.75)},textField:{marginTop:e.spacing(.25)}}})),b=function(e){var t=e.formChange,a=e.formSubmit,r=e.formField,l=e.changeAutocomplete,i=e.closeAutocomplete,c=e.autocompleteIsOpen,s=e.checkFormField,m=E();return o.a.createElement(n.Fragment,null,o.a.createElement("form",{noValidate:!0,onSubmit:a},o.a.createElement(g.a,{id:"autocomplete-selector",freeSolo:!0,autoComplete:!0,autoHighlight:!0,clearOnEscape:!0,autoSelect:!0,variant:"outlined",className:m.input,inputValue:r,open:c,onOpen:s,onClose:i,onChange:l,options:f.map((function(e){return e.name})),renderInput:function(e){return o.a.createElement(h.a,Object.assign({},e,{onChange:t,freeSolo:!0,value:r,label:"Add item",fullWidth:!0,autoFocus:!0,margin:"normal",id:"searchfield",className:m.textField}))}})))},y=a(106),C=a(146),w=a(50),I=a(147),k=a(105),O=a(78),x=a(160),S=a(148),N=a(107),j=Object(u.a)((function(e){return{listItem:{padding:0},listItemText:{marginTop:0,marginBottom:0,height:e.spacing(8),display:"flex",flexDirection:"column",paddingLeft:e.spacing(2),justifyContent:"center"},listItemTextPrimary:{fontSize:e.spacing(1.85),color:e.palette.text.primary},listItemTextSecondary:{fontSize:e.spacing(1.6),color:e.palette.text.secondary},modal:{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:e.spacing(2),marginRight:e.spacing(2)},paper:{backgroundColor:e.palette.background.paper,borderRadius:e.spacing(.5),boxShadow:e.shadows[5],padding:e.spacing(2),width:"100%",maxWidth:500}}})),F=function(e){var t=e.index,a=e.item,n=e.modalClose,r=e.modalItemName,l=e.modalOpen,i=e.deleteItem,c=e.completeItem,s=e.modalIsOpen,m=e.itemNotes,d=e.onAddNote,p=j();return o.a.createElement(y.a,{component:"li",className:p.listItem,button:!0,key:t},o.a.createElement(C.a,{disableTypography:!0,onClick:l.bind(void 0,a),className:p.listItemText},o.a.createElement(w.a,{className:p.listItemTextPrimary},a.name),o.a.createElement(w.a,{className:p.listItemTextSecondary},a.note)),o.a.createElement(I.a,{onClick:i.bind(void 0,a,"items")},o.a.createElement(k.a,{"aria-label":"trash"},o.a.createElement(O.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))),o.a.createElement(I.a,{onClick:c.bind(void 0,a,"items")},o.a.createElement(k.a,{"aria-label":"done"},o.a.createElement(O.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.a.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}))))),o.a.createElement(x.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:p.modal,open:s,onClose:n,closeAfterTransition:!0,BackdropComponent:S.a,BackdropProps:{timeout:500}},o.a.createElement(N.a,{in:s},o.a.createElement("div",{className:p.paper},o.a.createElement(w.a,{variant:"h5",paragraph:!0,color:"textPrimary"},r),o.a.createElement("form",null,o.a.createElement(h.a,{id:"standard-adornment-weight",multiline:!0,type:"text",variant:"filled",rows:"2",fullWidth:!0,value:m,placeholder:"Enter note",onChange:d,"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"add note"}}))))))},z=a(145),T=Object(u.a)((function(e){return{list:{paddingTop:0,paddingBottom:0}}})),L=function(e){var t=e.modalClose,a=e.modalItemName,n=e.modalOpen,r=e.deleteItem,l=e.completeItem,i=e.modalIsOpen,c=e.itemNotes,s=e.onAddNote,m=e.groceryItems,d=e.category,p=T(),u=function(e,t){var a=e.name.toUpperCase(),n=t.name.toUpperCase(),o=0;return a>n?o=1:a<n&&(o=-1),o},h=function(){var e=m.map((function(e){return e}));return"Order Entered"===d?e:"Alphabetical"===d?e.sort(u):void 0}().map((function(e,m){return o.a.createElement(F,{key:m,item:e,modalClose:t,modalItemName:a,modalOpen:n,deleteItem:r,completeItem:l,modalIsOpen:i,itemNotes:c,onAddNote:s})}));return o.a.createElement(z.a,{"aria-label":"grocery list category",className:p.list},h)},A=a(73),M={stores:[{storeName:"Alphabetical"},{storeName:"Order Entered"},{storeName:"Fresh Thyme",storeCategories:[{storeOrder:1,category:"Produce",items:["Apple","Apples","Banana","Bananas","Grapes","Clementines","Orange","Oranges"]},{storeOrder:2,category:"Bulk Foods",items:["Oatmeal","Almonds"]},{storeOrder:3,category:"Fridge",items:["Orange Juice","Milk","Almond Milk","Sausages","Tofu"]},{storeOrder:4,category:"Uncategorized Items",items:[]}]},{storeName:"Kroger Frandor",storeCategories:[{storeOrder:1,category:"Produce",items:["Apple","Apples","Banana","Bananas","Grapes"]},{storeOrder:2,category:"Uncategorized Items",items:[]}]}]},B=Object(u.a)((function(e){return{categoryTitle:{borderTop:"1px solid #dadce0",lineHeight:"2em",marginLeft:e.spacing(2),marginRight:e.spacing(2),paddingTop:e.spacing(2.25),paddingBottom:e.spacing(2.2),textAlign:"left",fontWeight:"700",fontSize:e.spacing(1.8125),textTransform:"uppercase",color:e.palette.text.secondary},list:{paddingTop:0,paddingBottom:0},"@global":{"li > p:nth-of-type(1)":{borderTop:"0px"}}}})),H=function(e){var t=e.category,a=e.modalItemName,r=e.itemNotes,l=e.groceryItems,i=e.completeItem,c=e.deleteItem,s=e.onAddNote,m=e.modalClose,d=e.modalOpen,p=e.modalIsOpen,u=B(),h=function(e,t){var a,n=Object(A.a)(e);try{for(n.s();!(a=n.n()).done;)for(var o=a.value,r=0;r<o.items.length;r++)if(o.items[r]&&t&&o.items[r].toLowerCase()===t.name.toLowerCase()){var l=[];return l.push({storeOrder:o.storeOrder,category:o.category,name:t.name}),l}}catch(i){n.e(i)}finally{n.f()}},g=function(e,t){for(var a=e[0].storeOrder,n=0;n<t.length;n++)if(t[n].storeOrder===a)return t[n].storeOrder},f=function(){var e=M.stores.findIndex((function(e,a){return e.storeName===t})),a=M.stores[e],n=l.map((function(e){return e})),o=function e(t){var a,n,o;if("object"!==typeof t||null===t)return t;for(o in a=Array.isArray(t)?[]:{},t)n=t[o],a[o]="items"===o?a[o]=[]:"object"===typeof n&&null!==n&&"items"!==o?e(n):n;return a}(a);for(var r in n){var i=h(a.storeCategories,n[r]);if(void 0!==i){var c=g(i,a.storeCategories);for(var s in o.storeCategories)o.storeCategories[s].storeOrder===c&&o.storeCategories[s].items.push(n[r])}else{var m=o.storeCategories.find((function(e){return"Uncategorized Items"===e.category}));n[r].activatedSnackbarOnce=!0,m.items.push(n[r])}}return o}().storeCategories.map((function(e,t){return o.a.createElement(n.Fragment,{key:t},e.items.length>0?o.a.createElement(w.a,{key:t,className:u.categoryTitle},e.category):null,e.items.map((function(e,t){return o.a.createElement(F,{key:t,item:e,modalClose:m,modalItemName:a,modalOpen:d,deleteItem:c,completeItem:i,modalIsOpen:p,itemNotes:r,onAddNote:s})})))}));return o.a.createElement(z.a,{"aria-label":"grocery list category",className:u.list},f)},R=a(18),D=a(149),W=a(162);function V(e){return o.a.createElement(D.a,Object.assign({},e,{direction:"up"}))}var P=function(){var e,t=o.a.useState(!0),a=Object(R.a)(t,2),n=a[0],r=a[1],l=o.a.useState(void 0),i=Object(R.a)(l,2),c=i[0],s=i[1];return o.a.createElement("div",null,o.a.createElement(W.a,{open:n,onEnter:(e=V,function(){s((function(){return e})),r(n)}),onClose:function(e,t){if("clickaway"===t)return r(!1);r(!1)},TransitionComponent:c,autoHideDuration:4e3,message:"Added item is uncategorized."}))},U=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).fireUncategorizedSnackbar=function(){n.setState({snackbarIsOpen:!0}),setTimeout((function(){n.setState({snackbarIsOpen:!1})}),4500)},n.state={snackbarIsOpen:!1},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.items[this.props.items.length-1];e.modalIsOpen===this.props.modalIsOpen&&e.items!==this.props.items&&!0===a.activatedSnackbarOnce&&(console.log(e.itemNotes),this.fireUncategorizedSnackbar())}},{key:"render",value:function(){var e=Object.assign({},this.props),t=this.props,a=t.category,r=t.groceryItems,l=this.state.snackbarIsOpen;return o.a.createElement(n.Fragment,null,r.length>0?"Order Entered"===a||"Alphabetical"===a?o.a.createElement(L,e):o.a.createElement(H,e):null,l?o.a.createElement(P,null):null)}}]),a}(n.Component),G=(a(99),a(150)),J=a(76),q=a(151),K=Object(u.a)((function(e){return{delOrRecoverMenu:{marginRight:e.spacing(-1)},menuItem:{color:e.palette.text.secondary,display:"flex",paddingTop:e.spacing(1.5),paddingBottom:e.spacing(1.5),fontSize:e.spacing(1.75)}}})),Y=function(e){var t=e.deleteallcompleted,a=e.recoverallcompleted,r=K(),l=o.a.useState(null),i=Object(R.a)(l,2),c=i[0],s=i[1],m=function(){s(null)};return o.a.createElement(n.Fragment,null,o.a.createElement(G.a,{"aria-label":"Menu",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:o.a.createElement(k.a,{disableFocusRipple:!0,size:"medium",color:"default","aria-haspopup":"true","aria-controls":"delete-recover-menu","aria-label":"menu to delete or recover all items",onClick:function(e){s(e.currentTarget)},className:r.delOrRecoverMenu},o.a.createElement(O.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -1 19 21",width:"19px",height:"19px"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))))}),o.a.createElement(J.a,{id:"delete-recover-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:m},o.a.createElement(q.a,{className:r.menuItem,onClick:function(){m(),a()}},"Uncheck all items"),o.a.createElement(q.a,{className:r.menuItem,onClick:function(){m(),t()}},"Delete all checked items")))},$=a(163),Q=a(158),X=a(152),Z=a(153),_=Object(u.a)((function(e){return{root:{width:"100%"},panel:{boxShadow:"none",background:e.palette.background.default},boxDisplay:{display:"flex",height:e.spacing(8)},summary:{padding:"0 16px 0 0",flexGrow:1},details:{padding:"0",textDecoration:"line-through",textDecorationColor:e.palette.text.secondary,width:"100%"},heading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,marginLeft:e.spacing(3)},list:{width:"100%"},listItem:{paddingRight:"0"}}})),ee=function(e){var t,a=e.completedItems,n=e.deleteItem,r=e.recoverItem,l=e.deleteallcompleted,i=e.recoverallcompleted,c=_(),s=o.a.useState(!1),m=Object(R.a)(s,2),d=m[0],p=m[1],u=a.map((function(e,t){return o.a.createElement(y.a,{component:"li",button:!0,key:t,className:c.listItem},o.a.createElement(C.a,{secondary:e.name}),o.a.createElement(I.a,{onClick:n.bind(void 0,e,"completedItems")},o.a.createElement(k.a,{"aria-label":"trash"},o.a.createElement(O.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))),o.a.createElement(I.a,{onClick:r.bind(void 0,e,"completedItems")},o.a.createElement(k.a,{"area-label":"recover"},o.a.createElement(O.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}))))))}));return 0===a.length?null:o.a.createElement("div",{className:c.root},o.a.createElement($.a,{className:c.panel,expanded:"panel1"===d,onChange:(t="panel1",function(e,a){p(!!a&&t)})},o.a.createElement(Q.a,{className:c.boxDisplay},o.a.createElement(X.a,{expandIcon:o.a.createElement(O.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),"aria-controls":"panel1bh-content",id:"panel1bh-header",className:c.summary},o.a.createElement(w.a,{className:c.heading},a.length," checked off")),o.a.createElement(Y,{deleteallcompleted:l,recoverallcompleted:i})),o.a.createElement(Z.a,{className:c.details},o.a.createElement(z.a,{"aria-label":"completed items",className:c.list},u))))},te=Object(u.a)((function(e){return{icon:{color:e.palette.primary.dark,backgroundColor:e.palette.primary.light,borderRadius:100,padding:e.spacing(5.5),fontSize:e.spacing(18)},textDark:{display:"block",marginTop:e.spacing(4),color:e.palette.text.primary,maxWidth:e.spacing(35),fontSize:e.spacing(2),fontWeight:600},textLight:{display:"block",color:e.palette.text.secondary,maxWidth:e.spacing(35),fontSize:e.spacing(1.7)}}})),ae=function(){var e=te();return o.a.createElement(n.Fragment,null,o.a.createElement(Q.a,{p:6,display:"flex",flexDirection:"column",alignItems:"center"},o.a.createElement(O.a,{className:e.icon},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),o.a.createElement(w.a,null,o.a.createElement("span",{className:e.textDark},"Your list is empty"),o.a.createElement("br",null),o.a.createElement("span",{className:e.textLight},"Start adding things you need to make sure nothing is left. ","Pick your store to modify the layout of categories."))))},ne=a(142),oe=a(154),re=function(e){return o.a.createElement(n.Fragment,null,o.a.createElement(ne.a,{elevation:4,square:!0},o.a.createElement(oe.a,{maxWidth:"sm"},o.a.createElement(Q.a,{display:"flex",alignItems:"center",height:64},e.children))))},le=(a(100),function(){return o.a.createElement(Q.a,{fontSize:20,flexGrow:1,textAlign:"left",color:"text.primary"},o.a.createElement("h1",{class:"App-title"},"My Shopping List"))}),ie=Object(u.a)((function(e){return{menuItem:{color:e.palette.text.secondary,display:"flex",paddingTop:e.spacing(1.5),paddingBottom:e.spacing(1.5)},menuSVG:{flexBasis:"20%",paddingRight:e.spacing(1.5),color:e.palette.text.secondary},menuTypography:{fontSize:e.spacing(1.75)}}})),ce=function(e){var t=e.handleClose,a=e.category,r=e.onCategoryChange,l=ie(),i=M.stores.map((function(e,n){return o.a.createElement(q.a,{className:l.menuItem,key:n,onClick:function(){r(e.storeName),t()}},o.a.createElement(O.a,{className:l.menuSVG,fontSize:"small"},a===e.storeName?o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"false",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})):o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",style:{display:"none"},height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}))),o.a.createElement(w.a,{className:l.menuTypography},e.storeName))}));return o.a.createElement(n.Fragment,null,i)},se=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},n.state={anchorEl:null},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.category,t=this.props.onCategoryChange,a=this.state.anchorEl;return o.a.createElement(n.Fragment,null,o.a.createElement(k.a,{disableFocusRipple:!0,size:"medium","aria-label":"pick category","aria-haspopup":"true","aria-controls":"category-menu",onClick:this.handleClick,color:"primary"},o.a.createElement(O.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))),o.a.createElement(J.a,{id:"category-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:this.handleClose,value:e},o.a.createElement(Q.a,{width:200},o.a.createElement(ce,{onCategoryChange:t,category:e,handleClose:this.handleClose}))))}}]),a}(n.Component),me=a(155),de=a(74);var pe={lightTheme:Object(de.a)({typography:{fontFamily:["'Telex'","sans-serif"].join(",")},palette:{type:"light",primary:{main:"#0040cb",light:"#e7e9fa",dark:"#002bb3",contrastText:"#fff"},secondary:{main:"#cb0040",light:"#fce2e7",dark:"#a3003c",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.70)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},background:{default:"#fafafa"}},spacing:8}),darkTheme:Object(de.a)({typography:{fontFamily:["'Telex'","sans-serif"].join(",")},palette:{type:"dark",primary:{main:"#c3c8f3",light:"#e6e8fa",dark:"#8a94d4",contrastText:"#fff"},secondary:{main:"#f7b6c3",light:"#fce2e7",dark:"#f1879c"},background:{paper:"#1C2A35",default:"#17242C"}},spacing:8})},ue=o.a.createContext((function(e){})),he=function(e){var t=Object(n.useState)(window.localStorage.getItem("theme")||"lightTheme"),a=Object(R.a)(t,2),r=a[0],l=a[1];Object(n.useEffect)((function(){window.localStorage.setItem("theme",r)}),[r]);var i=function(e){return pe[e]}(r);return o.a.createElement(ue.Provider,{value:l},o.a.createElement(me.a,{theme:Object(de.a)(i)},e.children))},ge=function(){var e=Object(n.useState)(localStorage.getItem("theme")||"LightTheme"),t=Object(R.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(ue),i=function(){r("lightTheme"===a?"darkTheme":"lightTheme")};return o.a.useEffect((function(){l(a)})),o.a.createElement(ue.Consumer,null,(function(){return o.a.createElement(k.a,{disableFocusRipple:!0,size:"medium",color:"primary.main","aria-label":"toggle between dark and light modes",onClick:i},o.a.createElement(O.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"}))))}))},fe=a(161),ve=(a(101),Object(u.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,borderRadius:e.spacing(.5),boxShadow:e.shadows[5],padding:e.spacing(2),width:"100%",maxWidth:375},modalTitle:{marginTop:0},listItem:{height:e.spacing(5.5)}}}))),Ee=function(e){var t=e.items,a=e.faveCheckChildElement,r=e.favoriteItems,l=ve(),i=o.a.useState(!1),c=Object(R.a)(i,2),s=c[0],m=c[1],d=r.map((function(e,t){return o.a.createElement(y.a,{dense:!0,divider:!0,key:t,className:l.listItem},o.a.createElement(C.a,{primary:e.name}),o.a.createElement(I.a,null,o.a.createElement(fe.a,{checked:e.isChecked,key:e.id,value:e.name,onClick:a,inputProps:{"aria-label":"uncontrolled-checkbox"}})))}));return o.a.createElement(n.Fragment,null,o.a.createElement(n.Fragment,null,o.a.createElement(k.a,{disableFocusRipple:!0,size:"medium",color:"default","aria-label":"select favorite items",onClick:function(e){var a=new Set(t.map((function(e){return e.name.toLowerCase()})));r.forEach((function(e){return e.isChecked&&!a.has(e.name.toLowerCase())?e.isChecked=!1:!e.isChecked&&a.has(e.name.toLowerCase())?e.isChecked=!0:void 0})),m(!0)}},o.a.createElement(O.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))),o.a.createElement(n.Fragment,null,o.a.createElement(x.a,{"aria-labelledby":"favorite items","aria-describedby":"pick your top favorite items",className:l.modal,open:s,onClose:function(e,t){if("backdropClick"===t)return m(!1);m(!1)},closeAfterTransition:!0,BackdropComponent:S.a,BackdropProps:{timeout:500}},o.a.createElement(N.a,{in:s},o.a.createElement("div",{className:l.paper+" Modal-dimensions"},o.a.createElement("h2",{id:"transition-modal-title",className:l.modalTitle},"Top 10 Favorite Items"),o.a.createElement(z.a,{dense:!0,disablePadding:!0},d))))))},be=function(e){return o.a.createElement("div",{style:{left:"0",position:"fixed",width:"100vw",top:"0",zIndex:"100"}},e.children)},ye=a(5),Ce=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(s.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.props.classes;return this.state.hasError?o.a.createElement(n.Fragment,null,o.a.createElement(Q.a,{className:e.background,height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},o.a.createElement(O.a,{className:e.icon},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})),"            "),o.a.createElement(w.a,{variant:"h1",className:e.textDark},"Ooops, something broke in the app!"))):this.props.children}}]),a}(n.Component),we=Object(ye.a)((function(e){return{background:{background:e.palette.primary.dark},icon:{color:e.palette.secondary.main,fontSize:e.spacing(25)},textDark:{marginTop:e.spacing(3),color:e.palette.primary.contrastText,fontSize:e.spacing(3),fontWeight:600}}}))(Ce),Ie=(a(102),Object(u.a)((function(e){return{background:{width:"100%",height:"100%",background:e.palette.primary.dark,position:"absolute"}}}))),ke=function(){var e=Ie();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.background},o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"bear"},o.a.createElement("div",{class:"head"},o.a.createElement("div",{class:"head-copy"}),o.a.createElement("div",{class:"left-ear"},o.a.createElement("div",{class:"inner-ear"})),o.a.createElement("div",{class:"right-ear"},o.a.createElement("div",{class:"inner-ear"})),o.a.createElement("div",{class:"left-eye"},o.a.createElement("div",{class:"left-pupil"})),o.a.createElement("div",{class:"right-eye"},o.a.createElement("div",{class:"right-pupil"})),o.a.createElement("div",{class:"snout"},o.a.createElement("div",{class:"nose"}),o.a.createElement("div",{class:"upper-lip"}),o.a.createElement("div",{class:"lip-left"}),o.a.createElement("div",{class:"lip-right"}))),o.a.createElement("div",{class:"torso"},o.a.createElement("div",{class:"right-arm"},o.a.createElement("div",{class:"claws"})),o.a.createElement("div",{class:"left-arm"},o.a.createElement("div",{class:"claws"}))),o.a.createElement("div",{class:"legs"},o.a.createElement("div",{class:"right-leg"},o.a.createElement("div",{class:"toes"})),o.a.createElement("div",{class:"left-leg"},o.a.createElement("div",{class:"toes"})))),o.a.createElement("div",{class:"plumes"},o.a.createElement("div",{class:"plume-1"}),o.a.createElement("div",{class:"plume-2"}),o.a.createElement("div",{class:"plume-3"}),o.a.createElement("div",{class:"plume-4"}),o.a.createElement("div",{class:"plume-5"})),o.a.createElement("div",{class:"shopping-cart"},o.a.createElement("div",{class:"handle"}),o.a.createElement("div",{class:"back"}),o.a.createElement("div",{class:"body-top"}),o.a.createElement("div",{class:"body-front"}),o.a.createElement("div",{class:"body-bottom"}),o.a.createElement("div",{class:"body-vertical-stripes"}),o.a.createElement("div",{class:"body-horizontal-stripes"}),o.a.createElement("div",{class:"body-to-base"}),o.a.createElement("div",{class:"base-curve"}),o.a.createElement("div",{class:"base-bottom"}),o.a.createElement("div",{class:"wheels"},o.a.createElement("div",{class:"back-wheel"},o.a.createElement("div",{class:"wheel-inner"})),o.a.createElement("div",{class:"front-wheel"},o.a.createElement("div",{class:"wheel-inner"})))),o.a.createElement("div",{class:"fumes"},o.a.createElement("div",{class:"fume-1"}),o.a.createElement("div",{class:"fume-2"}),o.a.createElement("div",{class:"fume-3"}),o.a.createElement("div",{class:"fume-4"}),o.a.createElement("div",{class:"fume-5"}),o.a.createElement("div",{class:"fume-6"})),o.a.createElement("div",{class:"text"},"Get ready to zoom along while I fetch your lists!"))))},Oe=Object(u.a)((function(e){return{message:{color:e.palette.text.secondary,fontSize:e.spacing(2),marginTop:e.spacing(8)}}})),xe=function(){var e=Oe();return o.a.createElement("h1",{className:e.message},"Reloading lists...")},Se=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).addToList=function(t){e.setState({items:e.state.items.concat(t)})},e.searchForItemInList=function(t,a){if("items"===a)var n=e.state.items;else n=e.state.completedItems;for(var o=0;o<n.length;o++)if(n[o].name===t.name)return n.indexOf(n[o])},e.removeFromList=function(t,a){"items"===t?(e.state.items.splice(a,1),e.setState({items:e.state.items})):(e.state.completedItems.splice(a,1),e.setState({completedItems:e.state.completedItems}))},e.onFormChange=function(t){e.setState({formField:t.target.value})},e.onChangeAutocomplete=function(t,a,n){if("blur"===n)return e.setState({formField:""}),void e.setState({autocompleteIsOpen:!1});if(null!==a){var o={name:a,note:"",id:Math.random().toString(36).substr(2,9)};e.addToList(o),e.setState({formField:""})}},e.onCloseAutocomplete=function(t,a){"escape"!==a&&"select-option"!==a||e.setState({autocompleteIsOpen:!1})},e.autocompleteCheckFormField=function(t){""===e.state.formField?e.setState({autocompleteIsOpen:!1}):e.setState({autocompleteIsOpen:!0})},e.onAddNote=function(t){e.setState({itemNotes:t.target.value})},e.onFormSubmit=function(t){if(t.preventDefault(),""!==e.state.formField){var a={name:e.state.formField.charAt(0).toUpperCase(0)+e.state.formField.slice(1),note:"",id:Math.random().toString(36).substr(2,9)};e.addToList(a),e.setState({formField:""})}},e.faveCheckChildElement=function(t){var a=e.state.favoriteItems,n=e.state.items,o=new Set(n.map((function(e){return e.name.toLowerCase()})));a.forEach((function(e){e.name===t.target.value&&(e.isChecked=t.target.checked)})),a.forEach((function(t){var a=t.name.toLowerCase();if(t.isChecked&&!o.has(a)){var n={name:t.name,note:"",id:Math.random().toString(36).substr(2,9)};e.addToList(n)}else if(!t.isChecked&&o.has(a))for(var r=0;r<e.state.items.length;r++)if(e.state.items[r].name.toLowerCase()===a){var l=Object.assign({},e.state);l.items[r]=Object.assign({},l.items[r]),e.removeFromList("items",r)}}))},e.onCompleteItem=function(t,a){e.removeFromList(a,e.searchForItemInList(t,a)),e.setState({completedItems:e.state.completedItems.concat(t)}),v.map((function(e,a){return e.name===t.name&&e.count++,v}))},e.onDeleteItem=function(t,a){e.removeFromList(a,e.searchForItemInList(t,a))},e.onRecoverItem=function(t,a){e.removeFromList(a,e.searchForItemInList(t,a)),e.addToList(t)},e.onDeleteAllCompleted=function(){e.setState({completedItems:[]})},e.onRecoverAllCompleted=function(){var t=e.state.completedItems,a=Object(i.a)(e.state.items);a=a.concat(t),e.setState({items:a}),e.setState({completedItems:[]})},e.modalOpen=function(t,a){for(var n=0;n<e.state.items.length;n++)if(e.state.items[n].name===t.name){var o=Object.assign({},e.state);o.items[n]=Object.assign({},o.items[n]),o.items[n].note=e.state.items[n].note,e.setState(o),e.setState({modalItemName:o.items[n].name}),e.setState({itemNotes:o.items[n].note})}e.setState({modalIsOpen:!0})},e.modalClose=function(){for(var t=0;t<e.state.items.length;t++)if(e.state.items[t].name===e.state.modalItemName){var a=Object.assign({},e.state);a.items=a.items.slice(),a.items[t]=Object.assign({},a.items[t]),a.items[t].note=e.state.itemNotes,e.setState(a),e.setState({itemNotes:""})}e.setState({modalIsOpen:!1})},e.onCategoryChange=function(t){e.setState({category:t})},e.state={appIsLoading:window.sessionStorage.getItem("loadStatus")||"first load",formField:"",items:[],completedItems:[],category:"Fresh Thyme",favoriteItems:[],modalIsOpen:!1,modalItemName:"",itemNotes:"",autocompleteIsOpen:!1},e.onCompleteItem=e.onCompleteItem.bind(Object(m.a)(e)),e.onDeleteItem=e.onDeleteItem.bind(Object(m.a)(e)),e.onRecoverItem=e.onRecoverItem.bind(Object(m.a)(e)),e.addToList=e.addToList.bind(Object(m.a)(e)),e.removeFromList=e.removeFromList.bind(Object(m.a)(e)),e.modalClose=e.modalClose.bind(Object(m.a)(e)),e.modalOpen=e.modalOpen.bind(Object(m.a)(e)),e.onCloseAutocomplete=e.onCloseAutocomplete.bind(Object(m.a)(e)),e.autocompleteCheckFormField=e.autocompleteCheckFormField.bind(Object(m.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=v.sort((function(e,t){var a=e.count,n=t.count,o=0;return a<n?o=1:a>n&&(o=-1),o})).slice(0,10),a=[];for(var n in t)a.push({name:t[n].name,isChecked:!1});"first load"===this.state.appIsLoading?setTimeout((function(){e.setState({favoriteItems:a,appIsLoading:null})}),4e3):"reloading"===this.state.appIsLoading&&setTimeout((function(){e.setState({favoriteItems:a,appIsLoading:null})}),500),window.sessionStorage.setItem("loadStatus","reloading")}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.autocompleteIsOpen,n=t.category,r=t.modalItemName,l=t.favoriteItems,i=t.formField,c=t.items,s=t.completedItems,m=t.itemNotes,d=t.modalIsOpen,p=t.appIsLoading;return o.a.createElement("div",{className:e.app},o.a.createElement(we,null,"first load"===p?o.a.createElement(ke,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(be,null,o.a.createElement(re,null,o.a.createElement(le,null),o.a.createElement(ge,null),o.a.createElement(se,{category:n,onCategoryChange:this.onCategoryChange}),o.a.createElement(Ee,{items:c,favoriteItems:l,faveCheckChildElement:this.faveCheckChildElement}))),o.a.createElement(Q.a,{className:"Padding-box"},o.a.createElement(Q.a,{className:"".concat(e.groceriesContainer," Groceries-container")},o.a.createElement(b,{formChange:this.onFormChange,formSubmit:this.onFormSubmit,formField:i,autocompleteSelectValue:this.onAutocompleteSelectValue,closeAutocomplete:this.onCloseAutocomplete,checkFormField:this.autocompleteCheckFormField,autocompleteIsOpen:a,changeAutocomplete:this.onChangeAutocomplete}),o.a.createElement(U,{category:n,itemNotes:m,modalIsOpen:d,modalItemName:r,modalClose:this.modalClose,modalOpen:this.modalOpen,onAddNote:this.onAddNote,groceryItems:c,completeItem:this.onCompleteItem,deleteItem:this.onDeleteItem,items:c})),o.a.createElement(Q.a,{className:"Completed-container"},0===c.length&&0===s.length&&"reloading"!==p&&o.a.createElement(ae,null),"reloading"===p&&o.a.createElement(xe,null),o.a.createElement(ee,{completedItems:s,deleteItem:this.onDeleteItem,recoverItem:this.onRecoverItem,deleteallcompleted:this.onDeleteAllCompleted,recoverallcompleted:this.onRecoverAllCompleted}))))))}}]),a}(n.Component),Ne=Object(ye.a)((function(e){return{app:{background:e.palette.background.default,textAlign:"center",height:"100%"},groceriesContainer:{background:e.palette.background.paper,borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:e.palette.divider}}}))(Se),je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Fe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ze=a(156);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(he,null,o.a.createElement(ze.a,null),o.a.createElement(Ne,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/shopping-list-react-app-demo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/shopping-list-react-app-demo","/service-worker.js");je?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Fe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Fe(t,e)}))}}()},88:function(e,t,a){e.exports=a(103)},93:function(e,t,a){},94:function(e,t,a){},99:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.ac0e349b.chunk.js.map