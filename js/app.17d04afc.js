(function(t){function e(e){for(var o,u,s=e[0],c=e[1],i=e[2],p=0,f=[];p<s.length;p++)u=s[p],n[u]&&f.push(n[u][0]),n[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=r[0]))}return t}var o={},n={app:0},a=[];function u(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=o,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(r,o,function(e){return t[e]}.bind(null,o));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"01de":function(t,e,r){},"034f":function(t,e,r){"use strict";var o=r("64a9"),n=r.n(o);n.a},"0bd9":function(t,e,r){"use strict";var o=r("eb0e"),n=r.n(o);n.a},"2e08":function(t,e,r){"use strict";var o=r("f721"),n=r.n(o);n.a},4568:function(t,e,r){"use strict";var o=r("f350"),n=r.n(o);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("TheHeader"),r("main",{attrs:{id:"main"}},[r("router-view")],1),r("TheFooter")],1)},a=[],u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("nav",[o("router-link",{staticClass:"logo",attrs:{to:"/"}},[o("img",{attrs:{src:r("b9aa"),alt:"Ranek"}})]),o("router-link",{staticClass:"btn",attrs:{to:"/login"}},[t._v("Vender / Login")])],1)])},s=[],c={name:"TheHeader",components:{}},i=c,l=(r("d416"),r("2877")),p=Object(l["a"])(i,u,s,!1,null,"1b989eee",null),f=p.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("p",[t._v("Ranek - Alguns direitos reservados.")])])}],h={name:"TheFooter"},m=h,b=(r("f32c"),Object(l["a"])(m,d,v,!1,null,"a0c7f0b6",null)),g=b.exports,_={name:"App",components:{TheHeader:f,TheFooter:g}},P=_,y=(r("034f"),Object(l["a"])(P,n,a,!1,null,null,null)),T=y.exports,x=r("8c4f"),O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h1",[t._v("Compre ou Venda")]),r("ProdutoBuscar"),r("ProdutoLista")],1)},j=[],w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"produtosContainer"},[t.produtos?r("div",{staticClass:"produtos"},[t._l(t.produtos,function(e,o){return r("div",{key:o,staticClass:"produto"},[r("router-link",{attrs:{to:"/"}},[e.fotos?r("img",{attrs:{src:e.fotos[0].src,alt:e.fotos[0].titulo}}):t._e(),r("p",{staticClass:"preco"},[t._v(t._s(e.preco))]),r("h2",{staticClass:"titulo"},[t._v(t._s(e.nome))]),r("p",[t._v(t._s(e.descricao))])])],1)}),r("ProdutosPaginar",{attrs:{produtosTotal:t.produtoTotal,produtosPorPagina:t.produtosPorPagina}})],2):t.produtos?t._e():r("div",{staticClass:"semResultados"},[t._v("\n    Busca sem resultados. Tente buscar outro termo.\n  ")])])},k=[],$=(r("c5f6"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.paginasTotal>1?r("ul",t._l(t.paginasTotal,function(e){return r("li",{key:e},[r("router-link",{attrs:{to:{query:t.query(e)}}},[t._v(t._s(e))])],1)}),0):t._e()}),C=[],q=r("cebc"),E={props:{produtosTotal:{type:Number,default:1},produtosPorPagina:{type:Number,default:1}},methods:{query:function(t){return Object(q["a"])({},this.$route.query,{_page:t})}},computed:{paginas:function(){for(var t=Number(this.$route.query._page),e=9,r=Math.ceil(e/2),o=this.paginasTotal,n=[],a=1;a<o;a++)n.push(a);n.splice(0,t-r),n.splice(e,o)},paginasTotal:function(){var t=this.produtosTotal/this.produtosPorPagina;return t!==1/0?Math.ceil(t):0}}},B=E,M=(r("0bd9"),Object(l["a"])(B,$,C,!1,null,null,null)),S=M.exports,L=r("bc3a"),N=r.n(L),R=N.a.create({baseURL:"http://localhost:3000"}),F={get:function(t){return R.get(t)}};function H(t){var e="";for(var r in t)e+="&".concat(r,"=").concat(t[r]);return e}var A={name:"ProdutoLista",components:{ProdutosPaginar:S},data:function(){return{produtos:null,produtosPorPagina:9,produtosTotal:0}},methods:{getProdutos:function(){var t=this;F.get(this.url).then(function(e){t.produtoTotal=Number(e.headers["x-total-count"]),t.produtos=e.data})}},computed:{url:function(){var t=H(this.$route.query);return"/produto?_limit=".concat(this.produtosPorPagina).concat(t)}},created:function(){this.getProdutos()},watch:{url:function(){this.getProdutos()}}},J=A,V=(r("2e08"),Object(l["a"])(J,w,k,!1,null,"8441a974",null)),D=V.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.busca,expression:"busca"}],attrs:{name:"busca",id:"busca",type:"text",placeholder:"Buscar..."},domProps:{value:t.busca},on:{input:function(e){e.target.composing||(t.busca=e.target.value)}}}),r("input",{attrs:{type:"submit",id:"lupa",value:"Buscar"},on:{click:function(e){return e.preventDefault(),t.buscarProduto(e)}}})])},z=[],G={name:"ProdutoBuscar",data:function(){return{busca:""}},methods:{buscarProduto:function(){this.$router.push({query:{q:this.busca}})}}},I=G,K=(r("b012"),Object(l["a"])(I,U,z,!1,null,"3d3d1052",null)),Q=K.exports,W={name:"home",components:{ProdutoLista:D,ProdutoBuscar:Q}},X=W,Y=(r("4568"),Object(l["a"])(X,O,j,!1,null,"19c3d8b6",null)),Z=Y.exports;o["a"].use(x["a"]);var tt=new x["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Z}]}),et=r("2f62");o["a"].use(et["a"]);var rt=new et["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:tt,store:rt,render:function(t){return t(T)}}).$mount("#app")},"5a30":function(t,e,r){},"64a9":function(t,e,r){},b012:function(t,e,r){"use strict";var o=r("f3c3"),n=r.n(o);n.a},b9aa:function(t,e,r){t.exports=r.p+"img/ranek.e7a4871b.svg"},d416:function(t,e,r){"use strict";var o=r("01de"),n=r.n(o);n.a},eb0e:function(t,e,r){},f32c:function(t,e,r){"use strict";var o=r("5a30"),n=r.n(o);n.a},f350:function(t,e,r){},f3c3:function(t,e,r){},f721:function(t,e,r){}});
//# sourceMappingURL=app.17d04afc.js.map