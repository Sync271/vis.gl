(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Y3Mf:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return d}));var a=n("vOnD"),l=n("v5f6"),r=a.c.div.attrs({className:"container-lg"}).withConfig({displayName:"components__ContainerLg",componentId:"tmnxop-0"})(["max-width:","px;margin:0 auto;display:flex;justify-content:center;flex-direction:column;position:relative;overflow:hidden;","{margin:0px 40px;&.no-margin{margin:0 0;}}"],(function(e){return e.theme.containerMaxWidth}),l.b.xl),o=Object(a.c)(r).attrs({className:"container-sm"}).withConfig({displayName:"components__ContainerSm",componentId:"tmnxop-1"})(["max-width:1100px;margin-top:100px;:last-child{margin-bottom:100px}"]),i=a.c.div.attrs({className:"content-title"}).withConfig({displayName:"components__Headline",componentId:"tmnxop-2"})(["font-family:",";font-size:",";line-height:",";letter-spacing:",";font-weight:",";"],(function(e){return e.theme.fontFamilySemiBold}),(function(e){return e.theme.fontSizeUltraHeading}),(function(e){return e.theme.lineHeightUltraHeading}),(function(e){return e.theme.letterSpacingUltraHeading}),(function(e){return e.theme.fontWeightUltraHeading})),c=Object(a.c)(i).attrs({className:"content-title h1"}).withConfig({displayName:"components__H1",componentId:"tmnxop-3"})(["font-size:",";font-family:",";line-height:",";color:",";letter-spacing:",";margin:4px 0 24px;"],(function(e){return e.theme.fontSizeH1}),(function(e){return e.theme.fontFamilyMedium}),(function(e){return e.theme.lineHeightH1}),(function(e){return e.theme.darkBlue}),(function(e){return e.theme.letterSpacingH1})),m=Object(a.c)(i).attrs({className:"content-title h2"}).withConfig({displayName:"components__H2",componentId:"tmnxop-4"})(["font-size:",";line-height:",";font-family:",";margin:24px 0 16px;"],(function(e){return e.theme.fontSizeH2}),(function(e){return e.theme.lineHeightH2}),(function(e){return e.theme.fontFamilyMedium})),u=Object(a.c)(i).attrs({className:"content-title h3"}).withConfig({displayName:"components__H3",componentId:"tmnxop-5"})(["font-weight:normal;font-family:",";font-size:",";line-height:",";"],(function(e){return e.theme.fontFamily}),(function(e){return e.theme.fontSizeH3}),(function(e){return e.theme.lineHeightH3})),s=(Object(a.c)(u).attrs({className:"content-title h4"}).withConfig({displayName:"components__H4",componentId:"tmnxop-6"})(["font-family:",";font-size:",";line-height:",";"],(function(e){return e.theme.fontFamily}),(function(e){return e.theme.fontSizeH4}),(function(e){return e.theme.lineHeightH4})),a.c.p.attrs({className:"content-paragraph"}).withConfig({displayName:"components__Paragraph",componentId:"tmnxop-7"})(["font-family:",";font-size:",";line-height:",";margin:0 0 16px;"],(function(e){return e.theme.fontFamily}),(function(e){return e.theme.fontSizeP1}),(function(e){return e.theme.lineHeightP1}))),d=a.c.ul.withConfig({displayName:"components__List",componentId:"tmnxop-8"})(["margin:0 0 12px;"]);a.c.li.withConfig({displayName:"components__ListItem",componentId:"tmnxop-9"})(["margin-bottom:4px;"]),a.c.code.withConfig({displayName:"components__InlineCode",componentId:"tmnxop-10"})(["background-color:#f7f7f7;border-radius:4px;padding:0 5px;font-family:Consolas,Menlo,Monaco,'Andale Mono WT','Andale Mono','Lucida Console','Lucida Sans Typewriter','DejaVu Sans Mono','Bitstream Vera Sans Mono','Liberation Mono','Nimbus Mono L','Courier New',Courier,monospace;font-size:0.9em;margin:1px 0;line-height:calc(1.5em / 0.9 - 2px);display:inline-block;vertical-align:top;"]),a.c.div.withConfig({displayName:"components__SubTitle",componentId:"tmnxop-11"})(["color:",";font-size:14px;"],(function(e){return e.theme.gray}))},sABq:function(e,t,n){"use strict";n.r(t);n("E9XD");var a=n("q1tI"),l=n.n(a),r=n("Bl7J"),o=n("Y3Mf");t.default=function(e){var t=e.data.allFile.edges.reduce((function(e,t){return e[t.node.relativePath]=t.node.publicURL,e}),{});return l.a.createElement(r.a,{page:"home"},l.a.createElement("div",{className:"section-title"},l.a.createElement(o.f,null,"vis.gl"),l.a.createElement(o.f,null,"Framework Catalog")),l.a.createElement("div",{className:"section-text"},l.a.createElement(o.c,null,"The vis.gl Framework Catalog"),l.a.createElement(o.f,null,"The vis.gl frameworks are designed for GPU powered geospatial visualization and analytics on the web. The frameworks are designed to be independently usable while following a common style that makes them work seamlessly together."),l.a.createElement(o.f,null,"Each framework provides a number of sub-modules that export composable components such as loaders, visualzation layers, and math modules that developers can cherry-pick and combine to achieve desired results. Various"),l.a.createElement("br",null),function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement(o.d,null)),l.a.createElement("th",{style:{paddingLeft:10,paddingRight:80}},l.a.createElement(o.d,null)),l.a.createElement("th",{style:{paddingLeft:30}},l.a.createElement(o.d,null)))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{height:"100",alt:"kepler.gl",title:"kepler.gl",src:e["frameworks/kepler.png"]})),l.a.createElement("td",null,l.a.createElement("a",{href:"https://kepler.gl"},l.a.createElement("code",null,"kepler.gl"))),l.a.createElement("td",null,"The kepler.gl demo application is a widely used geospatial tool for visualization and exploration of geospatial data using deck.gl. It demonstrates the power of the kepler.gl application framework, designed to let users build advanced custom geospatial applications.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{height:"100",alt:"deck.gl",title:"deck.gl",src:e["frameworks/deck.png"]})),l.a.createElement("td",null,l.a.createElement("a",{href:"https://deck.gl"},l.a.createElement("code",null,"deck.gl"))),l.a.createElement("td",null,"Providing high-performance, GPU powered visualization layers for large scale geospatial data. deck.gl is the corner stone of the vis.gl framework suite. A selection of submodules provide layers for various geospatial and 3D use cases.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{height:"100",alt:"pydeck",title:"pydeck",src:e["frameworks/pydeck.png"]})),l.a.createElement("td",null,l.a.createElement("a",{href:"https://pydeck.gl"},l.a.createElement("code",null,"pydeck"))),l.a.createElement("td",null,"Python bindings for deck.gl that enable powerful custom geospatial visualizations to be programmed directly in Jupyter Notebooks.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{height:"100",alt:"loaders.gl",title:"loaders.gl",src:e["frameworks/loaders.png"]})),l.a.createElement("td",null,l.a.createElement("a",{href:"https://loaders.gl"},l.a.createElement("code",null,"loaders.gl"))),l.a.createElement("td",null,"A wide range of highly optimized, framework-independent loaders for geospatial, tabular and 3D file formats. Supports worker based binary data loading. Supported outputs includes geospatial layers, point clouds, 3D geometries, images, textures and tabular data.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{height:"100",alt:"luma.gl",title:"luma.gl",src:e["frameworks/luma.png"]})),l.a.createElement("td",null,l.a.createElement("a",{href:"https://luma.gl"},l.a.createElement("code",null,"luma.gl"))),l.a.createElement("td",null,"A high-performance WebGL library for high-performance visualization and GPU computation.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{height:"100",alt:"react-map-gl",title:"react-map-gl",src:e["frameworks/react-map-gl.png"]})),l.a.createElement("td",null,l.a.createElement("a",{href:"http://visgl.github.io/react-map-gl"},l.a.createElement("code",null,"react-map-gl"))),l.a.createElement("td",null,"A React wrapper for Mapbox GL JS that integrates with deck.gl."))))}(t),l.a.createElement("br",null),l.a.createElement(o.c,null,"Related Frameworks"),l.a.createElement(o.f,null,"In addition to the core frameworks, the vis.gl framework suite integrates with a number of related open source frameworks that are not under open governance."),l.a.createElement("br",null),function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement(o.d,null)),l.a.createElement("th",{style:{paddingLeft:10,paddingRight:80}},l.a.createElement(o.d,null)),l.a.createElement("th",{style:{paddingLeft:30}},l.a.createElement(o.d,null)))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{height:"100",alt:"hubble.gl",title:"hubble.gl",src:e["frameworks/hubble.png"]})),l.a.createElement("td",null,l.a.createElement("a",{href:"https://hubble.gl"},l.a.createElement("code",null,"hubble.gl"))),l.a.createElement("td",null,"A powerful deck.gl-based video capture solution.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{height:"100",alt:"nebula.gl",title:"nebula.gl",src:e["frameworks/nebula.png"]})),l.a.createElement("td",null,l.a.createElement("a",{href:"https://nebula.gl"},l.a.createElement("code",null,"nebula.gl"))),l.a.createElement("td",null,"A high-performance feature editing framework for deck.gl.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{height:"100",alt:"math.gl",title:"math.gl",src:e["frameworks/math.png"]})),l.a.createElement("td",null,l.a.createElement("a",{href:"https://math.gl"},l.a.createElement("code",null,"math.gl"))),l.a.createElement("td",null,"Math library focusing on 3D and geospatial math.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{height:"100",alt:"H3",title:"H3",src:e["frameworks/h3.png"]})),l.a.createElement("td",null,l.a.createElement("a",{href:"https://h3geo.org"},l.a.createElement("code",null,"H3"))),l.a.createElement("td",null,"Hexagon-based discrete global grid system."))))}(t)))}}}]);
//# sourceMappingURL=component---src-pages-frameworks-js-094e6adacf07a4d827fc.js.map