(this.webpackJsonpsege=this.webpackJsonpsege||[]).push([[4],{81:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a,n,r,l){var o=n||"<<anonymous>>",i=l||a;if(null==t[a])return new Error("The "+r+" `"+i+"` is required to make `"+o+"` accessible for users of assistive technologies such as screen readers.");for(var c=arguments.length,s=Array(c>5?c-5:0),m=5;m<c;m++)s[m-5]=arguments[m];return e.apply(void 0,[t,a,n,r,l].concat(s))}},e.exports=t.default},85:function(e,t,a){"use strict";a.r(t),a.d(t,"Home",(function(){return W}));var n=a(18),r=a(15),l=a(20),o=a(19),i=a(0),c=a.n(i),s=a(1),m=a(2),u=(a(81),a(29)),d=a(75),E=a(48),v=a(45),f=a(40),p=a(16),h=function(e){var t=Object(u.a)(e,{activeKey:"onSelect"}),a=t.id,n=t.generateChildId,r=t.onSelect,l=t.activeKey,o=t.transition,s=t.mountOnEnter,m=t.unmountOnExit,d=t.children,E=Object(i.useMemo)((function(){return n||function(e,t){return a?a+"-"+t+"-"+e:null}}),[a,n]),v=Object(i.useMemo)((function(){return{onSelect:r,activeKey:l,transition:o,mountOnEnter:s||!1,unmountOnExit:m||!1,getControlledId:function(e){return E(e,"tabpane")},getControllerId:function(e){return E(e,"tab")}}}),[r,l,o,s,m,E]);return c.a.createElement(f.a.Provider,{value:v},c.a.createElement(p.a.Provider,{value:r||null},d))},b=a(4),g=a.n(b),y=a(5),N=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.as,r=void 0===n?"div":n,l=e.className,o=Object(m.a)(e,["bsPrefix","as","className"]),i=Object(y.a)(a,"tab-content");return c.a.createElement(r,Object(s.a)({ref:t},o,{className:g()(l,i)}))})),O=a(36);var w=c.a.forwardRef((function(e,t){var a=function(e){var t=Object(i.useContext)(f.a);if(!t)return e;var a=t.activeKey,n=t.getControlledId,r=t.getControllerId,l=Object(m.a)(t,["activeKey","getControlledId","getControllerId"]),o=!1!==e.transition&&!1!==l.transition,c=Object(p.b)(e.eventKey);return Object(s.a)({},e,{active:null==e.active&&null!=c?Object(p.b)(a)===c:e.active,id:n(e.eventKey),"aria-labelledby":r(e.eventKey),transition:o&&(e.transition||l.transition||O.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),n=a.bsPrefix,r=a.className,l=a.active,o=a.onEnter,u=a.onEntering,d=a.onEntered,E=a.onExit,v=a.onExiting,h=a.onExited,b=a.mountOnEnter,N=a.unmountOnExit,w=a.transition,x=a.as,j=void 0===x?"div":x,k=(a.eventKey,Object(m.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),C=Object(y.a)(n,"tab-pane");if(!l&&!w&&N)return null;var K=c.a.createElement(j,Object(s.a)({},k,{ref:t,role:"tabpanel","aria-hidden":!l,className:g()(r,C,{active:l})}));return w&&(K=c.a.createElement(w,{in:l,onEnter:o,onEntering:u,onEntered:d,onExit:E,onExiting:v,onExited:h,mountOnEnter:b,unmountOnExit:N},K)),c.a.createElement(f.a.Provider,{value:null},c.a.createElement(p.a.Provider,{value:null},K))}));w.displayName="TabPane";var x=w;function j(e,t){var a=0;return c.a.Children.map(e,(function(e){return c.a.isValidElement(e)?t(e,a++):e}))}function k(e){var t;return function(e,t){var a=0;c.a.Children.forEach(e,(function(e){c.a.isValidElement(e)&&t(e,a++)}))}(e,(function(e){null==t&&(t=e.props.eventKey)})),t}function C(e){var t=e.props,a=t.title,n=t.eventKey,r=t.disabled,l=t.tabClassName,o=t.id;return null==a?null:c.a.createElement(v.a,{as:E.a,eventKey:n,disabled:r,id:o,className:l},a)}var K=function(e){var t=Object(u.a)(e,{activeKey:"onSelect"}),a=t.id,n=t.onSelect,r=t.transition,l=t.mountOnEnter,o=t.unmountOnExit,i=t.children,E=t.activeKey,v=void 0===E?k(i):E,f=Object(m.a)(t,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return c.a.createElement(h,{id:a,activeKey:v,onSelect:n,transition:r,mountOnEnter:l,unmountOnExit:o},c.a.createElement(d.a,Object(s.a)({},f,{role:"tablist",as:"nav"}),j(i,C)),c.a.createElement(N,null,j(i,(function(e){var t=Object(s.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,c.a.createElement(x,t)}))))};K.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},K.displayName="Tabs";var P=K,S=a(7),I=function(e){function t(){return e.apply(this,arguments)||this}return Object(S.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(c.a.Component);I.Container=h,I.Content=N,I.Pane=x;var A=I,F=a(78),W=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={show:!1},e}return Object(r.a)(a,[{key:"handelModal",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("section",{className:"hero-screen"},c.a.createElement("div",{className:"owl-image"},c.a.createElement("img",{src:"/images/header-owl-shape.svg"})),c.a.createElement("div",{className:"container h-100"},c.a.createElement("div",{className:"row align-items-end align-items-md-center  h-100"},c.a.createElement("div",{className:"col-md-6 col-lg-5 col-xl-4"},c.a.createElement("div",{className:"mb-4"},c.a.createElement("h1",null,"Rideshare For"),c.a.createElement("h1",null,"Professionals, By"),c.a.createElement("h1",null,"Professionals")),c.a.createElement("p",null,"Sage guarantees that you or your employee"),c.a.createElement("p",null,"get picked up by a safe and experienced driver"),c.a.createElement("p",null,"every time. Download our app and try it today!")),c.a.createElement("div",{className:"col-md-6 col-lg-7 col-xl-8"},c.a.createElement("img",{src:"/images/banner-mobile.png",className:"w-100",alt:""}))))),c.a.createElement("section",{className:"OurOffer SectionPadding"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"section-title text-center"},c.a.createElement("h2",null,"Our offers"),c.a.createElement("p",{className:"mb-1"},"Safety and professionalism are our cornerstones."),c.a.createElement("p",null,"Click below to see how we are different. ")))),c.a.createElement(P,{defaultActiveKey:"ForRiders",transition:!1,className:"custometabsButtos"},c.a.createElement(A,{eventKey:"ForRiders",title:"For Riders"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("img",{src:"/images/forriders.png",className:"w-100",alt:"image go here"})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"tab-text-content"},c.a.createElement("h2",null,"Committing to safe and professional rides"),c.a.createElement("p",null,"We only select drivers who have at least one year of driving experience in the ride sharing business. We are drivers and riders ourselves and we know the pain points."),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-check-circle"}),"Easy and convenient rides"),c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-check-circle"}),"Affordable ride share service"),c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-check-circle"}),"24/7 online support"),c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-check-circle"}),"We pay your driver up to 90% of your money")),c.a.createElement("div",{className:"AppAndGoogleStore mt-5 clearfix"},c.a.createElement("img",{src:"/images/appstore.png",alt:"image goes here"}),c.a.createElement("img",{src:"/images/googleplay.png",alt:"image goes here"})))))),c.a.createElement(A,{eventKey:"ForDrivers",title:"For Drivers"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"tab-text-content"},c.a.createElement("h2",null,"We the drivers..."),c.a.createElement("p",null,"We are a driver oriented company. Bet that sounds new to you. With Sage you are not just a rideshare driver, you are an ally with an ownership opportunity."),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-check-circle"}),"Become owner, get stock options"),c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-check-circle"}),"Keep up to 90% of the fees"),c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-check-circle"}),"24/7 online support"),c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-check-circle"}),"Most riders are business travelers")),c.a.createElement("div",{className:"AppAndGoogleStore mt-5 clearfix"},c.a.createElement("img",{src:"/images/appstore.png",alt:"image goes here"}),c.a.createElement("img",{src:"/images/googleplay.png",alt:"image goes here"})))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("img",{src:"/images/fordriver.png",className:"w-100",alt:"image go here"})))),c.a.createElement(A,{eventKey:"ForInvestors",title:"For Investors"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("img",{src:"/images/forinvestors.svg",className:"w-100",alt:"image go here"})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"tab-text-content"},c.a.createElement("h2",null,"Be on board before we take off"),c.a.createElement("p",null,"We, the founders, have invested our own time and money to create an opportunity and a company like no other!  We call it Sage Alliance because we are a merit-based company designed to benefit the many, not the few. If you are a rideshare driver or rider, we provide a real opportunity for you to become a true owner of the company and app you so often use. Please click the button below to learn more!"),c.a.createElement("button",{className:"btn btn-theme btn-lg w-25",onClick:function(){e.handelModal()}},"See More")))))))),c.a.createElement(F.a,{show:this.state.show,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"investormodal"},c.a.createElement(F.a.Body,{className:"p-5"},c.a.createElement("button",{className:"closePopup",onClick:function(){e.handelModal()}},c.a.createElement("i",{className:"fa fa-times"})),c.a.createElement("h2",null,"Investor"),c.a.createElement("h3",null,"We are open to suggestions"),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{class:"form-control",type:"text",placeholder:"Your Name"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{class:"form-control",type:"email",placeholder:"Your Email"})),c.a.createElement("button",{className:"btn btn-theme btn-block"},"Submit"),c.a.createElement("p",{className:"mb-0 mt-3 text-center"},"By submitting your name and email you are requesting information about an investment opportunity with Sage Alliance, Inc. Your contact information will be kept confidential and will not be spammed or shared with any 3rd parties."))))}}]),a}(i.Component);t.default=W}}]);
//# sourceMappingURL=4.45f665da.chunk.js.map