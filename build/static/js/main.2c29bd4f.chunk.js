(this.webpackJsonprekrut=this.webpackJsonprekrut||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s(1),a=s.n(i),n=s(6),j=s.n(n),l=(s(13),s(2)),p=(s(14),s(7)),m=s(17),r=function(e){var t=e.inputText,s=e.setInputText,i=e.setItems,a=e.items,n=e.setActivePopUp;return Object(c.jsx)("div",{className:"popup",children:Object(c.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),i([].concat(Object(p.a)(a),[{text:t,id:Object(m.a)()}])),s(""),n(!1)},children:[Object(c.jsx)("input",{value:t,type:"text",onChange:function(e){s(e.target.value)}}),Object(c.jsx)("button",{children:"add"})]})})},b=function(e){var t=e.text,s=e.id,i=e.setItems,a=e.items,n=e.special;return Object(c.jsxs)("div",{className:n?"special":"classicItem",children:[Object(c.jsx)("div",{className:"line"}),Object(c.jsx)("span",{children:t}),Object(c.jsx)("button",{className:"negativeButton",onClick:function(){i(a.filter((function(e){return e.id!==s})))},children:Object(c.jsx)("div",{className:"minus"})})]})},d=function(e){var t=e.specialItems,s=e.setSpecialItems;return Object(c.jsx)("div",{className:"ethList",children:t.map((function(e){return Object(c.jsx)(b,{items:t,setItems:s,text:e.text,id:e.id,special:!0},e.id)}))})},u=function(e){var t=e.text,s=e.id,i=e.setItems,a=e.items,n=e.specialItems,j=e.setSpecialItems,l=e.setActivePopUp,p=e.setSpecialPopUp;return Object(c.jsxs)("div",{className:"specialItem",children:[Object(c.jsx)("div",{className:"line"}),Object(c.jsxs)("div",{className:"category",children:[Object(c.jsx)("span",{className:"text",children:t}),Object(c.jsx)("button",{className:"negativeButton",onClick:function(){i(a.filter((function(e){return e.id!==s}))),j([])},children:Object(c.jsx)("div",{className:"minus"})})]}),Object(c.jsx)(d,{specialItems:n,setSpecialItems:j}),Object(c.jsxs)("button",{className:"positiveButton",onClick:function(){l(!0),p(!0)},children:[Object(c.jsx)("div",{className:"minus"}),Object(c.jsx)("div",{className:"plus"})]})]})},o=function(e){var t=e.items,s=e.setItems,i=e.specialItems,a=e.setSpecialItems,n=e.setActivePopUp,j=e.setSpecialPopUp;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return"Sweets"!==e.text?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(b,{text:e.text,id:e.id,items:t,setItems:s},e.id)}):Object(c.jsx)(u,{text:e.text,id:e.id,items:t,setItems:s,specialItems:i,setSpecialItems:a,setSpecialPopUp:j,setActivePopUp:n},e.id)}))})};var x=function(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),s=t[0],a=t[1],n=Object(i.useState)([{text:"Milk",id:"1fdffa8f-4867-490a-b63a-0c81e2b54762"},{text:"Sweets",id:"1fdffa8f-4867-490a-b63a-0c81e2b54987"},{text:"Bread",id:"1fdffa8f-4867-490a-b63a-0c81e2b54997"}]),j=Object(l.a)(n,2),p=j[0],m=j[1],b=Object(i.useState)([{text:"Chocolate",id:"1fdffa8f-4867-490a-b63a-0c81e2b54762"},{text:"Cookies",id:"1fdffa8f-4867-490a-b63a-0c81e2b54987"}]),d=Object(l.a)(b,2),u=d[0],x=d[1],O=Object(i.useState)(!1),f=Object(l.a)(O,2),v=f[0],I=f[1],h=Object(i.useState)(!0),N=Object(l.a)(h,2),S=N[0],P=N[1];return Object(c.jsx)(c.Fragment,{children:v?Object(c.jsx)(c.Fragment,{children:S?Object(c.jsx)(r,{items:u,setItems:x,inputText:s,setInputText:a,setActivePopUp:I}):Object(c.jsx)(r,{items:p,setItems:m,inputText:s,setInputText:a,setActivePopUp:I})}):Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"shadow"}),Object(c.jsx)("p",{className:"title",children:"People"}),Object(c.jsx)(o,{items:p,setItems:m,specialItems:u,setSpecialItems:x,setActivePopUp:I,setSpecialPopUp:P}),Object(c.jsxs)("button",{className:"positiveButton",onClick:function(){I(!0),P(!1)},children:[Object(c.jsx)("div",{className:"minus"}),Object(c.jsx)("div",{className:"plus"})]})]})})};j.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2c29bd4f.chunk.js.map