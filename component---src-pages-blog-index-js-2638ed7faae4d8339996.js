(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return p});a(178);var r=a(0),n=a.n(r),i=a(148),s=a.n(i),o=a(160),l=a.n(o),d=a(151),c=a(179),u=a.n(c),f=a(154);t.default=function(e){return n.a.createElement("div",null,n.a.createElement(f.a,{title:"Oscar Oceguera",description:"Oscar Oceguera desarrollador full stack javascript",url:e.data.site.siteMetadata.siteUrl,pathname:e.location.pathname}),n.a.createElement("div",{className:u.a.header},n.a.createElement(d.a,null),n.a.createElement("h1",{className:u.a.headerTitle},"Blog")),n.a.createElement("div",{className:u.a.posts},e.data.allMarkdownRemark.edges.map(function(e){var t=e.node;return n.a.createElement("div",{className:u.a.post,key:t.id},n.a.createElement(l.a,{fixed:t.frontmatter.image.childImageSharp.fixed}),n.a.createElement("div",{className:u.a.container},n.a.createElement(s.a,{to:t.fields.slug,className:u.a.postLink},n.a.createElement("h3",{className:u.a.postLinkTitle},t.frontmatter.title),n.a.createElement("p",{className:u.a.date},t.frontmatter.date),n.a.createElement("p",{className:u.a.desc},t.excerpt))))})))};var p="3229408562"},149:function(e,t,a){var r;e.exports=(r=a(152))&&r.default||r},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(148),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var d=a(149),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=n.a.createContext({}),p=function(e){return n.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},151:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(155),l=a.n(o),d=a(150),c=a(153),u=a.n(c),f=function(e){var t,a=e.secondary,r=l()(u.a.navLink,((t={})[u.a.secondary]=a,t));return n.a.createElement("div",{className:u.a.nav},n.a.createElement(d.Link,{className:r,to:"/"},"Home"),n.a.createElement(d.Link,{className:r,to:"/blog"},"Blog"),n.a.createElement(d.Link,{className:r,to:"/portfolio"},"portfolio"))};f.propTypes={secondary:s.a.bool},t.a=f},152:function(e,t,a){"use strict";a.r(t);a(32);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(53),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},153:function(e,t,a){e.exports={breackpoints:'"../../styles/breakpoints.css"',bpTablet:"(max-width: 768px)",bpPhone:"(max-width: 480px)",nav:"styles-module--nav--3S79p",navLink:"styles-module--navLink--3njf0",secondary:"styles-module--secondary--1nhuv"}},154:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(159),s=a.n(i),o="https://avatars1.githubusercontent.com/u/5040939?s=400&u=6b1c53b0468bc1eacaf820786a2a62d377fa82cc&v=4";t.a=function(e){return n.a.createElement(s.a,{title:e.title,meta:[{name:"title",content:e.title},{name:"description",content:e.description},{name:"keywords",content:"Javascript, React, HTML, CSS, Frontend, Front end, front-end, Backend, Back-end, Back end, Freelance, Node, Nodejs, remote"},{property:"og:title",content:e.title},{property:"og:url",content:e.pathname?e.url+e.pathname:e.url},{property:"og:image",content:o},{property:"og:image:secure_url",content:o},{property:"og:description",content:e.description},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:locale",content:"es"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:e.title},{name:"twitter:description",content:e.description},{name:"twitter:image",content:o},{property:"og:type",content:"website"},{name:"robots",content:"index, follow"},{name:"twitter:creator",content:"@oscarOcegueraB"},{property:"og:site_name",content:"oscaroceguera.com"}]},n.a.createElement("hrml",{lan:"es"}))}},158:function(e,t,a){var r=a(11),n=a(16),i=a(17),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},160:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(52)),o=r(a(156)),l=r(a(157)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.Tag,w=e.itemProp,S="boolean"==typeof b?"lightgray":b,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),L=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),k={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(m){var R=m;return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&d.default.createElement(y,(0,l.default)({src:R.base64},k)),R.tracedSVG&&d.default.createElement(y,(0,l.default)({src:R.tracedSVG},k)),S&&d.default.createElement(v,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(y,{alt:a,title:t,src:R.src,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},R))}}))}if(h){var x=h,N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},i);return"inherit"===i.display&&delete N.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&d.default.createElement(y,(0,l.default)({src:x.base64},k)),x.tracedSVG&&d.default.createElement(y,(0,l.default)({src:x.tracedSVG},k)),S&&d.default.createElement(v,{title:t,style:{backgroundColor:S,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),d.default.createElement(y,{alt:a,title:t,width:x.width,height:x.height,src:x.src,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var S=b;t.default=S},178:function(e,t,a){"use strict";a(158)("fixed",function(e){return function(){return e(this,"tt","","")}})},179:function(e,t,a){e.exports={breackpoints:'"../../styles/breakpoints.css"',bpTablet:"(max-width: 768px)",bpPhone:"(max-width: 480px)",header:"styles-module--header--308tp",headerTitle:"styles-module--headerTitle--2yG1z",posts:"styles-module--posts--2Si1l",container:"styles-module--container--1t0tv",post:"styles-module--post--2OUoc",postLink:"styles-module--postLink--23t1K",postLinkTitle:"styles-module--postLinkTitle--PmZ_2",date:"styles-module--date--MgHu0",desc:"styles-module--desc--aRFz7"}}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-2638ed7faae4d8339996.js.map