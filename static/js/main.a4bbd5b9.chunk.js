(this["webpackJsonpshopping-list-react-app-demo"]=this["webpackJsonpshopping-list-react-app-demo"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),l=a.n(r),i=(a(94),a(75)),s=a(28),c=a(29),m=a(20),d=a(34),p=a(33),u=(a(95),a(136)),h=a(153),g=a(155),f=[{name:"Apple",count:0},{name:"Apples",count:10},{name:"Banana",count:0},{name:"Bananas",count:10},{name:"Oatmeal",count:10},{name:"Clementines",count:0},{name:"Blueberries",count:0},{name:"Oranges",count:0},{name:"Hummus",count:10},{name:"Black Beans",count:0},{name:"Chocolate Chips",count:10},{name:"Cliff Bars",count:0},{name:"Cereal Bars",count:0},{name:"Almonds",count:10},{name:"Coffee",count:10},{name:"Orange Juice",count:10},{name:"Flax Seed",count:5},{name:"Grapes",count:5}],v=f,E=Object(u.a)((function(e){return{input:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingBottom:e.spacing(.75)},textField:{marginTop:e.spacing(.25)}}})),b=function(e){var t=e.formChange,a=e.formSubmit,r=e.formField,l=e.changeAutocomplete,i=e.closeAutocomplete,s=e.autocompleteIsOpen,c=e.checkFormField,m=E();return o.a.createElement(n.Fragment,null,o.a.createElement("form",{noValidate:!0,onSubmit:a},o.a.createElement(g.a,{id:"autocomplete-selector",freeSolo:!0,autoComplete:!0,autoHighlight:!0,clearOnEscape:!0,autoSelect:!0,variant:"outlined",className:m.input,inputValue:r,open:s,onOpen:c,onClose:i,onChange:l,options:f.map((function(e){return e.name})),renderInput:function(e){return o.a.createElement(h.a,Object.assign({},e,{onChange:t,freeSolo:!0,value:r,label:"Add item",fullWidth:!0,autoFocus:!0,margin:"normal",id:"searchfield",className:m.textField}))}})))},y=a(105),C=a(143),I=a(50),w=a(144),O=a(104),k=a(78),x=a(156),S=a(145),N=a(106),F=Object(u.a)((function(e){return{listItem:{padding:0},listItemText:{marginTop:0,marginBottom:0,height:e.spacing(8),display:"flex",flexDirection:"column",paddingLeft:e.spacing(2),justifyContent:"center"},listItemTextPrimary:{fontSize:e.spacing(1.85),color:e.palette.text.primary},listItemTextSecondary:{fontSize:e.spacing(1.6),color:e.palette.text.secondary},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,borderRadius:e.spacing(.5),boxShadow:e.shadows[5],padding:e.spacing(2),width:"100%",maxWidth:500}}})),j=function(e){var t=e.index,a=e.item,n=e.modalClose,r=e.modalItemName,l=e.modalOpen,i=e.deleteItem,s=e.completeItem,c=e.modalIsOpen,m=e.itemNotes,d=e.onAddNote,p=F();return o.a.createElement(y.a,{className:p.listItem,button:!0,key:t},o.a.createElement(C.a,{disableTypography:!0,onClick:l.bind(void 0,a),className:p.listItemText},o.a.createElement(I.a,{className:p.listItemTextPrimary},a.name),o.a.createElement(I.a,{className:p.listItemTextSecondary},a.note)),o.a.createElement(w.a,{onClick:i.bind(void 0,a,"items")},o.a.createElement(O.a,{"aria-label":"trash"},o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))),o.a.createElement(w.a,{onClick:s.bind(void 0,a,"items")},o.a.createElement(O.a,{"aria-label":"done"},o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.a.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}))))),o.a.createElement(x.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:p.modal,open:c,onClose:n,closeAfterTransition:!0,BackdropComponent:S.a,BackdropProps:{timeout:500}},o.a.createElement(N.a,{in:c},o.a.createElement("div",{className:p.paper},o.a.createElement(I.a,{variant:"h5",paragraph:!0,color:"textPrimary"},r),o.a.createElement("form",null,o.a.createElement(h.a,{id:"standard-adornment-weight",multiline:!0,type:"text",variant:"filled",rows:"2",fullWidth:!0,value:m,placeholder:"Enter note",onChange:d,"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"add note"}}))))))},z=a(142),A=Object(u.a)((function(e){return{list:{paddingTop:0,paddingBottom:0}}})),T=function(e){var t=e.modalClose,a=e.modalItemName,n=e.modalOpen,r=e.deleteItem,l=e.completeItem,i=e.modalIsOpen,s=e.itemNotes,c=e.onAddNote,m=e.groceryItems,d=e.category,p=A(),u=function(e,t){var a=e.name.toUpperCase(),n=t.name.toUpperCase(),o=0;return a>n?o=1:a<n&&(o=-1),o},h=function(){var e=m.map((function(e){return e}));return"Order Entered"===d?e:"Alphabetical"===d?e.sort(u):void 0}().map((function(e,m){return o.a.createElement(j,{key:m,item:e,modalClose:t,modalItemName:a,modalOpen:n,deleteItem:r,completeItem:l,modalIsOpen:i,itemNotes:s,onAddNote:c})}));return o.a.createElement(z.a,{component:"li","aria-label":"grocery list category",className:p.list},h)},L=a(73),M={stores:[{storeName:"Alphabetical"},{storeName:"Order Entered"},{storeName:"Fresh Thyme",storeCategories:[{storeOrder:1,category:"Produce",items:["Apple","Apples","Banana","Bananas","Grapes","Clementines","Orange","Oranges"]},{storeOrder:2,category:"Bulk Foods",items:["Oatmeal","Almonds"]},{storeOrder:3,category:"Fridge",items:["Orange Juice","Milk","Almond Milk","Sausages","Tofu"]},{storeOrder:4,category:"Uncategorized Items",items:[]}]},{storeName:"Kroger Frandor",storeCategories:[{storeOrder:1,category:"Produce",items:["Apple","Apples","Banana","Bananas","Grapes"]},{storeOrder:2,category:"Uncategorized Items",items:[]}]}]},B=Object(u.a)((function(e){return{categoryTitle:{borderTop:"1px solid #dadce0",lineHeight:"2em",marginLeft:e.spacing(2),marginRight:e.spacing(2),paddingTop:e.spacing(2.25),paddingBottom:e.spacing(2.2),textAlign:"left",fontWeight:"700",fontSize:e.spacing(1.8125),textTransform:"uppercase",color:e.palette.text.secondary},list:{paddingTop:0,paddingBottom:0},"@global":{"li > p:nth-of-type(1)":{borderTop:"0px"}}}})),H=function(e){var t=e.category,a=e.modalItemName,r=e.itemNotes,l=e.groceryItems,i=e.completeItem,s=e.deleteItem,c=e.onAddNote,m=e.modalClose,d=e.modalOpen,p=e.modalIsOpen,u=B(),h=function(e,t){var a,n=Object(L.a)(e);try{for(n.s();!(a=n.n()).done;)for(var o=a.value,r=0;r<o.items.length;r++)if(o.items[r]&&t&&o.items[r].toLowerCase()===t.name.toLowerCase()){var l=[];return l.push({storeOrder:o.storeOrder,category:o.category,name:t.name}),l}}catch(i){n.e(i)}finally{n.f()}},g=function(e,t){for(var a=e[0].storeOrder,n=0;n<t.length;n++)if(t[n].storeOrder===a)return t[n].storeOrder},f=function(){var e=M.stores.findIndex((function(e,a){return e.storeName===t})),a=M.stores[e],n=l.map((function(e){return e})),o=function e(t){var a,n,o;if("object"!==typeof t||null===t)return t;for(o in a=Array.isArray(t)?[]:{},t)n=t[o],a[o]="items"===o?a[o]=[]:"object"===typeof n&&null!==n&&"items"!==o?e(n):n;return a}(a);for(var r in n){var i=h(a.storeCategories,n[r]);if(void 0!==i){var s=g(i,a.storeCategories);for(var c in o.storeCategories)o.storeCategories[c].storeOrder===s&&o.storeCategories[c].items.push(n[r])}else{var m=o.storeCategories.find((function(e){return"Uncategorized Items"===e.category}));n[r].activatedSnackbarOnce=!0,m.items.push(n[r])}}return o}().storeCategories.map((function(e,t){return o.a.createElement(n.Fragment,{key:t},e.items.length>0?o.a.createElement(I.a,{key:t,className:u.categoryTitle},e.category):null,e.items.map((function(e,t){return o.a.createElement(j,{key:t,item:e,modalClose:m,modalItemName:a,modalOpen:d,deleteItem:s,completeItem:i,modalIsOpen:p,itemNotes:r,onAddNote:c})})))}));return o.a.createElement(z.a,{component:"li","aria-label":"grocery list category",className:u.list},f)},D=a(26),R=a(146),W=a(158);function P(e){return o.a.createElement(R.a,Object.assign({},e,{direction:"up"}))}var V=function(){var e,t=o.a.useState(!0),a=Object(D.a)(t,2),n=a[0],r=a[1],l=o.a.useState(void 0),i=Object(D.a)(l,2),s=i[0],c=i[1];return o.a.createElement("div",null,o.a.createElement(W.a,{open:n,onEnter:(e=P,function(){c((function(){return e})),r(n)}),onClose:function(e,t){if("clickaway"===t)return r(!1);r(!1)},TransitionComponent:s,autoHideDuration:4e3,message:"Added item is uncategorized."}))},U=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).fireUncategorizedSnackbar=function(){n.setState({snackbarIsOpen:!0}),setTimeout((function(){n.setState({snackbarIsOpen:!1})}),4500)},n.state={snackbarIsOpen:!1},n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.items[this.props.items.length-1];e.modalIsOpen===this.props.modalIsOpen&&e.items!==this.props.items&&!0===a.activatedSnackbarOnce&&(console.log(e.itemNotes),this.fireUncategorizedSnackbar())}},{key:"render",value:function(){var e=Object.assign({},this.props),t=this.props,a=t.category,r=t.groceryItems,l=this.state.snackbarIsOpen;return o.a.createElement(n.Fragment,null,r.length>0?"Order Entered"===a||"Alphabetical"===a?o.a.createElement(T,e):o.a.createElement(H,e):null,l?o.a.createElement(V,null):null)}}]),a}(n.Component),G=(a(100),a(147)),J=a(76),q=a(148),K=Object(u.a)((function(e){return{delOrRecoverMenu:{marginRight:e.spacing(-1)},menuItem:{color:e.palette.text.secondary,display:"flex",paddingTop:e.spacing(1.5),paddingBottom:e.spacing(1.5),fontSize:e.spacing(1.75)}}})),Y=function(e){var t=e.deleteallcompleted,a=e.recoverallcompleted,r=K(),l=o.a.useState(null),i=Object(D.a)(l,2),s=i[0],c=i[1],m=function(){c(null)};return o.a.createElement(n.Fragment,null,o.a.createElement(G.a,{"aria-label":"Menu",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:o.a.createElement(O.a,{disableFocusRipple:!0,size:"medium",color:"default","aria-haspopup":"true","aria-controls":"simple-menu",onClick:function(e){c(e.currentTarget)},className:r.delOrRecoverMenu},o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -1 19 21",width:"19px",height:"19px"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))))}),o.a.createElement(J.a,{id:"simple-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:m},o.a.createElement(q.a,{className:r.menuItem,onClick:function(){m(),a()}},"Uncheck all items"),o.a.createElement(q.a,{className:r.menuItem,onClick:function(){m(),t()}},"Delete all checked items")))},$=a(159),Q=a(154),X=a(149),Z=a(150),_=Object(u.a)((function(e){return{root:{width:"100%"},panel:{boxShadow:"none",backgroundColor:"#fafafa"},boxDisplay:{display:"flex",height:e.spacing(8)},summary:{padding:"0 16px 0 0",flexGrow:1},details:{padding:"0",textDecoration:"line-through",textDecorationColor:e.palette.text.secondary,width:"100%"},heading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,marginLeft:e.spacing(3)},list:{width:"100%"},listItem:{paddingRight:"0"}}})),ee=function(e){var t,a=e.completedItems,n=e.deleteItem,r=e.recoverItem,l=e.deleteallcompleted,i=e.recoverallcompleted,s=_(),c=o.a.useState(!1),m=Object(D.a)(c,2),d=m[0],p=m[1],u=a.map((function(e,t){return o.a.createElement(y.a,{button:!0,key:t,className:s.listItem},o.a.createElement(C.a,{secondary:e.name}),o.a.createElement(w.a,{onClick:n.bind(void 0,e,"completedItems")},o.a.createElement(O.a,{"aria-label":"trash"},o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))),o.a.createElement(w.a,{onClick:r.bind(void 0,e,"completedItems")},o.a.createElement(O.a,{"area-label":"recover"},o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}))))))}));return 0===a.length?null:o.a.createElement("div",{className:s.root},o.a.createElement($.a,{className:s.panel,expanded:"panel1"===d,onChange:(t="panel1",function(e,a){p(!!a&&t)})},o.a.createElement(Q.a,{className:s.boxDisplay},o.a.createElement(X.a,{expandIcon:o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),"aria-controls":"panel1bh-content",id:"panel1bh-header",className:s.summary},o.a.createElement(I.a,{className:s.heading},a.length," checked off")),o.a.createElement(Y,{deleteallcompleted:l,recoverallcompleted:i})),o.a.createElement(Z.a,{className:s.details},o.a.createElement(z.a,{component:"li","aria-label":"completed items",className:s.list},u))))},te=Object(u.a)((function(e){return{icon:{color:e.palette.primary.main,backgroundColor:e.palette.primary.light,borderRadius:100,padding:e.spacing(5.5),fontSize:e.spacing(10)},textDark:{display:"block",marginTop:e.spacing(4),color:e.palette.text.primary,maxWidth:e.spacing(35),fontSize:e.spacing(2),fontWeight:600},textLight:{display:"block",color:e.palette.text.secondary,maxWidth:e.spacing(35),fontSize:e.spacing(1.7)}}})),ae=function(){var e=te();return o.a.createElement(n.Fragment,null,o.a.createElement(Q.a,{p:6,display:"flex",flexDirection:"column",alignItems:"center"},o.a.createElement(k.a,{className:e.icon},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),o.a.createElement(I.a,null,o.a.createElement("span",{className:e.textDark},"Your list is empty"),o.a.createElement("br",null),o.a.createElement("span",{className:e.textLight},"Start adding things you need to make sure nothing is left. ","Pick your store to modify the layout of categories."))))},ne=a(139),oe=a(151),re=function(e){return o.a.createElement(n.Fragment,null,o.a.createElement(ne.a,{elevation:4,square:!0},o.a.createElement(oe.a,{maxWidth:"sm"},o.a.createElement(Q.a,{display:"flex",alignItems:"center",height:64},e.children))))},le=function(){return o.a.createElement(Q.a,{fontSize:20,flexGrow:1,textAlign:"left",color:"text.primary"},o.a.createElement("h1",null,"My Shopping List"))},ie=Object(u.a)((function(e){return{menuItem:{color:e.palette.text.secondary,display:"flex",paddingTop:e.spacing(1.5),paddingBottom:e.spacing(1.5)},menuSVG:{flexBasis:"20%",paddingRight:e.spacing(1.5),color:e.palette.text.secondary},menuTypography:{fontSize:e.spacing(1.75)}}})),se=function(e){var t=e.handleClose,a=e.category,r=e.onCategoryChange,l=ie(),i=M.stores.map((function(e,n){return o.a.createElement(q.a,{className:l.menuItem,key:n,onClick:function(){r(e.storeName),t()}},o.a.createElement(k.a,{className:l.menuSVG,fontSize:"small"},a===e.storeName?o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"false",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})):o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",style:{display:"none"},height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}))),o.a.createElement(I.a,{className:l.menuTypography},e.storeName))}));return o.a.createElement(n.Fragment,null,i)},ce=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleClick=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},n.state={anchorEl:null},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.category,t=this.props.onCategoryChange,a=this.state.anchorEl;return o.a.createElement(n.Fragment,null,o.a.createElement(O.a,{disableFocusRipple:!0,size:"medium","aria-label":"pick category","aria-haspopup":"true","aria-controls":"simple-menu",onClick:this.handleClick,color:"primary"},o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))),o.a.createElement(J.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:this.handleClose,value:e},o.a.createElement(Q.a,{width:200},o.a.createElement(se,{onCategoryChange:t,category:e,handleClose:this.handleClose}))))}}]),a}(n.Component),me=a(157),de=(a(101),Object(u.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,borderRadius:e.spacing(.5),boxShadow:e.shadows[5],padding:e.spacing(2),width:"100%",maxWidth:375},modalTitle:{marginTop:0},listItem:{height:e.spacing(5.5)}}}))),pe=function(e){var t=e.items,a=e.faveCheckChildElement,r=e.favoriteItems,l=de(),i=o.a.useState(!1),s=Object(D.a)(i,2),c=s[0],m=s[1],d=r.map((function(e,t){return o.a.createElement(y.a,{dense:!0,divider:!0,key:t,className:l.listItem},o.a.createElement(C.a,{primary:e.name}),o.a.createElement(w.a,null,o.a.createElement(me.a,{checked:e.isChecked,key:e.id,value:e.name,onClick:a,inputProps:{"aria-label":"uncontrolled-checkbox"}})))}));return o.a.createElement(n.Fragment,null,o.a.createElement(n.Fragment,null,o.a.createElement(O.a,{disableFocusRipple:!0,size:"medium",color:"default","aria-label":"select favorite items",onClick:function(e){var a=new Set(t.map((function(e){return e.name.toLowerCase()})));r.forEach((function(e){return e.isChecked&&!a.has(e.name.toLowerCase())?e.isChecked=!1:!e.isChecked&&a.has(e.name.toLowerCase())?e.isChecked=!0:void 0})),m(!0)}},o.a.createElement(k.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))),o.a.createElement(n.Fragment,null,o.a.createElement(x.a,{"aria-labelledby":"favorite items","aria-describedby":"pick your top favorite items",className:l.modal,open:c,onClose:function(e,t){if("backdropClick"===t)return m(!1);m(!1)},closeAfterTransition:!0,BackdropComponent:S.a,BackdropProps:{timeout:500}},o.a.createElement(N.a,{in:c},o.a.createElement("div",{className:l.paper+" Modal-dimensions"},o.a.createElement("h2",{id:"transition-modal-title",className:l.modalTitle},"Top 10 Favorite Items"),o.a.createElement(z.a,{dense:!0,disablePadding:!0},d))))))},ue=function(e){return o.a.createElement("div",{style:{left:"0",position:"fixed",width:"100vw",top:"0",zIndex:"100"}},e.children)},he=a(5),ge=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(c.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.props.classes;return this.state.hasError?o.a.createElement(n.Fragment,null,o.a.createElement(Q.a,{className:e.background,height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},o.a.createElement(k.a,{className:e.icon},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})),"            "),o.a.createElement(I.a,{variant:"h1",className:e.textDark},"Ooops, something broke in the app!"))):this.props.children}}]),a}(n.Component),fe=Object(he.a)((function(e){return{background:{background:e.palette.primary.dark},icon:{color:e.palette.secondary.main,fontSize:e.spacing(25)},textDark:{marginTop:e.spacing(3),color:e.palette.primary.contrastText,fontSize:e.spacing(3),fontWeight:600}}}))(ge),ve=a(74),Ee=a(152),be=Object(ve.a)({typography:{fontFamily:["'Telex'","sans-serif"].join(",")},palette:{primary:{main:"#0040cb",light:"#e7e9fa",dark:"#002bb3",contrastText:"#fff"},secondary:{main:"#cb0040",light:"#fce2e7",dark:"#a3003c",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.70)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"}},spacing:8}),ye=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).addToList=function(t){e.setState({items:e.state.items.concat(t)})},e.searchForItemInList=function(t,a){if("items"===a)var n=e.state.items;else n=e.state.completedItems;for(var o=0;o<n.length;o++)if(n[o].name===t.name)return n.indexOf(n[o])},e.removeFromList=function(t,a){"items"===t?(e.state.items.splice(a,1),e.setState({items:e.state.items})):(e.state.completedItems.splice(a,1),e.setState({completedItems:e.state.completedItems}))},e.onFormChange=function(t){e.setState({formField:t.target.value})},e.onChangeAutocomplete=function(t,a,n){if("blur"===n)return e.setState({formField:""}),void e.setState({autocompleteIsOpen:!1});if(null!==a){var o={name:a,note:"",id:Math.random().toString(36).substr(2,9)};e.addToList(o),e.setState({formField:""})}},e.onCloseAutocomplete=function(t,a){"escape"!==a&&"select-option"!==a||e.setState({autocompleteIsOpen:!1})},e.autocompleteCheckFormField=function(t){""===e.state.formField?e.setState({autocompleteIsOpen:!1}):e.setState({autocompleteIsOpen:!0})},e.onAddNote=function(t){e.setState({itemNotes:t.target.value})},e.onFormSubmit=function(t){if(t.preventDefault(),""!==e.state.formField){var a={name:e.state.formField.charAt(0).toUpperCase(0)+e.state.formField.slice(1),note:"",id:Math.random().toString(36).substr(2,9)};e.addToList(a),e.setState({formField:""})}},e.faveCheckChildElement=function(t){var a=e.state.favoriteItems,n=e.state.items,o=new Set(n.map((function(e){return e.name.toLowerCase()})));a.forEach((function(e){e.name===t.target.value&&(e.isChecked=t.target.checked)})),a.forEach((function(t){var a=t.name.toLowerCase();if(t.isChecked&&!o.has(a)){var n={name:t.name,note:"",id:Math.random().toString(36).substr(2,9)};e.addToList(n)}else if(!t.isChecked&&o.has(a))for(var r=0;r<e.state.items.length;r++)if(e.state.items[r].name.toLowerCase()===a){var l=Object.assign({},e.state);l.items[r]=Object.assign({},l.items[r]),e.removeFromList("items",r)}}))},e.onCompleteItem=function(t,a){e.removeFromList(a,e.searchForItemInList(t,a)),e.setState({completedItems:e.state.completedItems.concat(t)}),v.map((function(e,a){return e.name===t.name&&e.count++,v}))},e.onDeleteItem=function(t,a){e.removeFromList(a,e.searchForItemInList(t,a))},e.onRecoverItem=function(t,a){e.removeFromList(a,e.searchForItemInList(t,a)),e.addToList(t)},e.onDeleteAllCompleted=function(){e.setState({completedItems:[]})},e.onRecoverAllCompleted=function(){var t=e.state.completedItems,a=Object(i.a)(e.state.items);a=a.concat(t),e.setState({items:a}),e.setState({completedItems:[]})},e.modalOpen=function(t,a){for(var n=0;n<e.state.items.length;n++)if(e.state.items[n].name===t.name){var o=Object.assign({},e.state);o.items[n]=Object.assign({},o.items[n]),o.items[n].note=e.state.items[n].note,e.setState(o),e.setState({modalItemName:o.items[n].name}),e.setState({itemNotes:o.items[n].note})}e.setState({modalIsOpen:!0})},e.modalClose=function(){for(var t=0;t<e.state.items.length;t++)if(e.state.items[t].name===e.state.modalItemName){var a=Object.assign({},e.state);a.items=a.items.slice(),a.items[t]=Object.assign({},a.items[t]),a.items[t].note=e.state.itemNotes,e.setState(a),e.setState({itemNotes:""})}e.setState({modalIsOpen:!1})},e.onCategoryChange=function(t){e.setState({category:t})},e.state={formField:"",items:[],completedItems:[],category:"Fresh Thyme",favoriteItems:[],modalIsOpen:!1,modalItemName:"",itemNotes:"",autocompleteIsOpen:!1},e.onCompleteItem=e.onCompleteItem.bind(Object(m.a)(e)),e.onDeleteItem=e.onDeleteItem.bind(Object(m.a)(e)),e.onRecoverItem=e.onRecoverItem.bind(Object(m.a)(e)),e.addToList=e.addToList.bind(Object(m.a)(e)),e.removeFromList=e.removeFromList.bind(Object(m.a)(e)),e.modalClose=e.modalClose.bind(Object(m.a)(e)),e.modalOpen=e.modalOpen.bind(Object(m.a)(e)),e.onCloseAutocomplete=e.onCloseAutocomplete.bind(Object(m.a)(e)),e.autocompleteCheckFormField=e.autocompleteCheckFormField.bind(Object(m.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=v.sort((function(e,t){var a=e.count,n=t.count,o=0;return a<n?o=1:a>n&&(o=-1),o})).slice(0,10),t=[];for(var a in e)t.push({name:e[a].name,isChecked:!1});this.setState({favoriteItems:t})}},{key:"render",value:function(){var e=this.state,t=e.autocompleteIsOpen,a=e.category,n=e.modalItemName,r=e.favoriteItems,l=e.formField,i=e.items,s=e.completedItems,c=e.itemNotes,m=e.modalIsOpen;return o.a.createElement("div",{className:"App"},o.a.createElement(fe,null,o.a.createElement(Ee.a,{theme:be},o.a.createElement(ue,null,o.a.createElement(re,null,o.a.createElement(le,null),o.a.createElement(ce,{category:a,onCategoryChange:this.onCategoryChange}),o.a.createElement(pe,{items:i,favoriteItems:r,faveCheckChildElement:this.faveCheckChildElement}))),o.a.createElement(Q.a,{className:"Padding-box"},o.a.createElement(Q.a,{className:"Groceries-container"},o.a.createElement(b,{formChange:this.onFormChange,formSubmit:this.onFormSubmit,formField:l,autocompleteSelectValue:this.onAutocompleteSelectValue,closeAutocomplete:this.onCloseAutocomplete,checkFormField:this.autocompleteCheckFormField,autocompleteIsOpen:t,changeAutocomplete:this.onChangeAutocomplete}),o.a.createElement(U,{category:a,itemNotes:c,modalIsOpen:m,modalItemName:n,modalClose:this.modalClose,modalOpen:this.modalOpen,onAddNote:this.onAddNote,groceryItems:i,completeItem:this.onCompleteItem,deleteItem:this.onDeleteItem,items:i})),o.a.createElement(Q.a,{className:"Completed-container"},0===i.length&&0===s.length&&o.a.createElement(ae,null),o.a.createElement(ee,{completedItems:s,deleteItem:this.onDeleteItem,recoverItem:this.onRecoverItem,deleteallcompleted:this.onDeleteAllCompleted,recoverallcompleted:this.onRecoverAllCompleted}))))))}}]),a}(n.Component),Ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ye,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/shopping-list-react-app-demo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/shopping-list-react-app-demo","/service-worker.js");Ce?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ie(t,e)}))}}()},89:function(e,t,a){e.exports=a(102)},94:function(e,t,a){},95:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.a4bbd5b9.chunk.js.map