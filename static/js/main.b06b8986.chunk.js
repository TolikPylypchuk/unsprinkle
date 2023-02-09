(this.webpackJsonpunsprinkle=this.webpackJsonpunsprinkle||[]).push([[0],{27:function(e,t,n){"use strict";n.r(t);var i,r=n(1),a=n.n(r),o=n(9),s=n.n(o),c=n(2),l=n(10),d=Object(c.a)(i||(i=Object(l.a)(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n* {\n  box-sizing: border-box;\n  font-family: 'Inter', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-synthesis: none;\n}\n\nhtml {\n  --gray-hue: 225deg;\n  --color-gray-100: hsl(var(--gray-hue) 25% 95%);\n  --color-gray-200: hsl(var(--gray-hue) 16% 90%);\n  --color-gray-300: hsl(var(--gray-hue) 8% 80%);\n  --color-gray-400: hsl(var(--gray-hue) 8% 70%);\n  --color-gray-500: hsl(var(--gray-hue) 7% 60%);\n  --color-gray-600: hsl(var(--gray-hue) 15% 50%);\n  --color-gray-700: hsl(var(--gray-hue) 12% 40%);\n  --color-gray-800: hsl(var(--gray-hue) 20% 30%);\n  --color-gray-900: hsl(var(--gray-hue) 25% 20%);\n  --color-gray-1000: hsl(var(--gray-hue) 15% 15%);\n  --color-primary: hsl(245deg 100% 60%);\n  --color-secondary: hsl(333deg 100% 45%);\n  --color-text: var(--color-gray-1000);\n  --color-background: white;\n}\n"]))),p=c.b.div.withConfig({displayName:"MaxWidthWrapper",componentId:"sc-1pv5cb6-0"})(["max-width:calc(1200 / 16 * 1rem);padding:0 32px;margin:0 auto;"]),g=n(0),h=c.b.a.withConfig({displayName:"Logo__Wrapper",componentId:"sc-738upc-0"})(["font-size:1.25rem;font-weight:750;color:inherit;text-decoration:none;"]),b=function(){return Object(g.jsx)(h,{href:"/",children:"Unsprinkle"})},m=n(3),u=n(29),f=n(14),j=n(15),x=["children"],y=c.b.div.withConfig({displayName:"VisuallyHidden__Wrapper",componentId:"sc-1aztm1b-0"})(["position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;"]),w=function(e){var t=e.children,n=Object(j.a)(e,x),i=a.a.useState(!1),r=Object(f.a)(i,2),o=r[0];r[1];return a.a.useEffect((function(){}),[]),o?t:Object(g.jsx)(y,Object(m.a)(Object(m.a)({},n),{},{children:t}))},O=c.b.div.withConfig({displayName:"SearchInput__Wrapper",componentId:"sc-gxgi9m-0"})(["position:relative;min-width:300px;height:2em;"]),v=c.b.input.withConfig({displayName:"SearchInput__Input",componentId:"sc-gxgi9m-1"})(["position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:var(--color-gray-100);border-radius:1000px;border:none;padding:0 16px;outline-offset:4px;font-size:1rem;&:focus{background:var(--color-gray-200);}"]),k=c.b.button.withConfig({displayName:"SearchInput__SubmitButton",componentId:"sc-gxgi9m-2"})(["position:absolute;top:0;right:0px;bottom:0;display:flex;justify-content:center;align-items:center;border:none;padding-right:8px;background:transparent;outline-offset:4px;cursor:pointer;"]),_=function(e){return Object(g.jsxs)(O,Object(m.a)(Object(m.a)({},e),{},{children:[Object(g.jsx)("label",{htmlFor:"header-search",children:Object(g.jsx)(w,{children:"Search"})}),Object(g.jsx)(v,{id:"header-search",placeholder:"Search\u2026"}),Object(g.jsxs)(k,{children:[Object(g.jsx)(w,{children:"Submit"}),Object(g.jsx)(u.a,{size:16})]})]}))},I=c.b.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-185sf0o-0"})(["background-color:var(--color-background);"]),C=Object(c.b)(p).withConfig({displayName:"Header__InnerWrapper",componentId:"sc-185sf0o-1"})(["display:flex;align-items:center;gap:48px;padding:16px 32px;"]),N=c.b.nav.withConfig({displayName:"Header__DesktopNav",componentId:"sc-185sf0o-2"})(["display:none;margin-left:auto;@media (min-width:60rem){display:revert;}"]),z=Object(c.b)(_).withConfig({displayName:"Header__GrowingSearchInput",componentId:"sc-185sf0o-3"})(["flex:1;"]),q=c.b.ul.withConfig({displayName:"Header__NavList",componentId:"sc-185sf0o-4"})(["display:flex;gap:32px;"]),H=c.b.a.withConfig({displayName:"Header__NavLink",componentId:"sc-185sf0o-5"})(["color:inherit;text-decoration:none;font-weight:475;"]),A=function(){return Object(g.jsx)(I,{children:Object(g.jsxs)(C,{children:[Object(g.jsx)(b,{}),Object(g.jsx)(z,{}),Object(g.jsx)(N,{children:Object(g.jsxs)(q,{children:[Object(g.jsx)("li",{children:Object(g.jsx)(H,{href:"",children:"Categories"})}),Object(g.jsx)("li",{children:Object(g.jsx)(H,{href:"",children:"Submissions"})}),Object(g.jsx)("li",{children:Object(g.jsx)(H,{href:"",children:"Sign Up"})})]})})]})})},S=c.b.section.withConfig({displayName:"Hero__Wrapper",componentId:"sc-558u1o-0"})(["position:relative;height:60vh;min-height:400px;display:flex;justify-content:center;align-items:flex-end;background:hsl(0deg 0% 1%);"]),W=c.b.img.withConfig({displayName:"Hero__HeroImage",componentId:"sc-558u1o-1"})(["display:block;width:500px;height:500px;max-height:100%;"]),G=c.b.img.withConfig({displayName:"Hero__Swoop",componentId:"sc-558u1o-2"})(["position:absolute;left:0;right:0;bottom:-2px;width:100%;"]),L=function(){return Object(g.jsxs)(S,{children:[Object(g.jsx)(W,{src:"/images/hero-img.jpg"}),Object(g.jsx)(G,{src:"/swoop.svg"})]})},P=[{id:"a",src:"/images/vincent-van-zalinge-bird.jpg",alt:"A tiny shrewd turquoise-and-amber bird",tags:["bird","blurred background","wildlife","animal in its natural habitat"]},{id:"b",src:"/images/alexandru-rotariu-dog.jpg",alt:"A serious-looking grey dog with cool glacier eyes",tags:["dog","HD"]},{id:"c",src:"/images/scott-walsh-fox.jpg",alt:"A happy-looking cute wild fox in nature, near some pink flowers",tags:["fox","flowers"]},{id:"d",src:"/images/andy-holmes-giraffe.jpg",alt:"A giraffe sticking its black tongue out",tags:["giraffe","dramatic"]},{id:"e",src:"/images/karsten-winegeart-dog.jpg",alt:'A small dog wearing a golden "Champions" hoodie',tags:["dog","cute","animal wearing human clothes"]},{id:"f",src:"/images/marko-blazevic-cat.jpg",alt:"A small kitten standing on its back legs, reaching up towards the camera",tags:["kitten","cat","#cute"]},{id:"g",src:"/images/mark-stoop-lizard.jpg",alt:"A relaxed green lizard, sitting on a wooden beam",tags:["lizard","world-famous insurance salesman from the commercials"]},{id:"h",src:"/images/geran-de-klerk-squirrel.jpg",alt:"A fuzzy squirrel, highlighted in a dark backdrop",tags:["squirrel","animal","fuzzy"]},{id:"i",src:"/images/wexor-tmg-turtle.jpg",alt:"A large tropical turtle swimming in water",tags:["turtle","ocean","flippers"]}],M=c.b.a.withConfig({displayName:"PhotoGridItem__Anchor",componentId:"sc-17pabp6-0"})(["text-decoration:none;color:inherit;outline-offset:4px;"]),F=c.b.img.withConfig({displayName:"PhotoGridItem__Image",componentId:"sc-17pabp6-1"})(["display:block;width:100%;height:300px;border-radius:2px;margin-bottom:8px;"]),T=c.b.ul.withConfig({displayName:"PhotoGridItem__Tags",componentId:"sc-17pabp6-2"})(["display:flex;flex-wrap:wrap;gap:8px;"]),B=c.b.li.withConfig({displayName:"PhotoGridItem__Tag",componentId:"sc-17pabp6-3"})(["padding:4px 8px;background:var(--color-gray-300);font-size:0.875rem;font-weight:475;color:var(--color-gray-800);"]),D=function(e){var t=e.id,n=e.src,i=(e.alt,e.tags);return Object(g.jsxs)("article",{children:[Object(g.jsx)(M,{href:"/photos/".concat(t),children:Object(g.jsx)(F,{src:n})}),Object(g.jsx)(T,{children:i.map((function(e){return Object(g.jsx)(B,{children:e},e)}))})]})},E=Object(c.b)(p).withConfig({displayName:"MainContent__Wrapper",componentId:"sc-s8xx9g-0"})(["display:grid;grid-gap:16px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));padding-top:128px;padding-bottom:128px;"]),J=function(){return Object(g.jsxs)(E,{children:[Object(g.jsx)(w,{children:Object(g.jsx)("h1",{children:"All Photos"})}),P.map((function(e){var t=e.id,n=e.src,i=e.alt,r=e.tags;return Object(g.jsx)(D,{id:t,src:n,alt:i,tags:r},t)}))]})},U=c.b.footer.withConfig({displayName:"Footer__Wrapper",componentId:"sc-k65rlq-0"})(["text-align:center;padding:32px;font-weight:350;"]),V=function(){return Object(g.jsx)(U,{children:"\xa9 2021-present. All rights reserved."})},K=c.b.div.withConfig({displayName:"App__HeaderWrapper",componentId:"sc-1pxhs72-0"})(["position:sticky;z-index:2;top:0;"]),Q=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(K,{children:Object(g.jsx)(A,{})}),Object(g.jsxs)("main",{children:[Object(g.jsx)(L,{}),Object(g.jsx)(J,{})]}),Object(g.jsx)(V,{}),Object(g.jsx)(d,{})]})};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(Q,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b06b8986.chunk.js.map