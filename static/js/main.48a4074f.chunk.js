(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),r=c(1);c(10);function l(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var s=c(2),o=c.n(s),j=c(0),d=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(a/c),r=l(1,i);return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:"page-item ".concat(o()({disabled:1===t})),onClickCapture:function(){1!==t&&n(t-1)},children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#".concat(t),"aria-disabled":1===t,children:"\xab"})}),r.map((function(e){return Object(j.jsx)("li",{className:"page-item ".concat(o()({active:t===e})),onClickCapture:function(){return function(e){e!==t&&n(e)}(e)},children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),children:e})},"page-item-".concat(e))})),Object(j.jsx)("li",{className:"page-item ".concat(o()({disabled:t===i})),onClickCapture:function(){t!==i&&n(t+1)},children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#".concat(t),"aria-disabled":t===i,children:"\xbb"})})]})},u=[3,5,10,20],p=l(1,42).map((function(e){return"Item ".concat(e)})),m=function(){var e=Object(r.useState)(5),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],o=l[1],m=(s-1)*c,b=s*c>42?42:s*c,h=p.slice(m,b);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(m+1," - ").concat(b," ")+"of ".concat(42,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){var a=e.target.value;+a!==c&&(o(1),t(+a))},children:u.map((function(e){return Object(j.jsx)("option",{value:e,selected:e===c,children:e})}))})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:42,perPage:c,currentPage:s,onPageChange:o}),Object(j.jsx)("ul",{children:h.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e.replaceAll(" ","-"))}))})]})};n.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.48a4074f.chunk.js.map