(self.webpackChunkmaterial_angular_io=self.webpackChunkmaterial_angular_io||[]).push([[7865],{87865:function(t,e,n){"use strict";n.r(e),n.d(e,{CdkPortalExamplesModule:function(){return s},CdkPortalOverviewExample:function(){return p},ComponentPortalExample:function(){return u}});var o=n(82151),l=n(35366);const r=["templatePortalContent"],a=["domPortalContent"];function i(t,e){}function c(t,e){1&t&&l._uU(0,"Hello, this is a template portal")}let p=(()=>{class t{constructor(t){this._viewContainerRef=t}ngAfterViewInit(){this.componentPortal=new o.C5(u),this.templatePortal=new o.UE(this.templatePortalContent,this._viewContainerRef),this.domPortal=new o.Xp(this.domPortalContent)}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(l.s_b))},t.\u0275cmp=l.Xpm({type:t,selectors:[["cdk-portal-overview-example"]],viewQuery:function(t,e){if(1&t&&(l.Gf(r,5),l.Gf(a,5)),2&t){let t;l.iGM(t=l.CRH())&&(e.templatePortalContent=t.first),l.iGM(t=l.CRH())&&(e.domPortalContent=t.first)}},decls:15,vars:1,consts:[[1,"example-portal-outlet"],[3,"cdkPortalOutlet"],["templatePortalContent",""],[3,"click"],["domPortalContent",""]],template:function(t,e){1&t&&(l.TgZ(0,"h2"),l._uU(1,"The portal outlet is below:"),l.qZA(),l.TgZ(2,"div",0),l.YNc(3,i,0,0,"ng-template",1),l.qZA(),l.YNc(4,c,1,0,"ng-template",null,2,l.W1O),l.TgZ(6,"button",3),l.NdJ("click",function(){return e.selectedPortal=e.componentPortal}),l._uU(7,"Render component portal"),l.qZA(),l.TgZ(8,"button",3),l.NdJ("click",function(){return e.selectedPortal=e.templatePortal}),l._uU(9,"Render template portal"),l.qZA(),l.TgZ(10,"button",3),l.NdJ("click",function(){return e.selectedPortal=e.domPortal}),l._uU(11,"Render DOM portal"),l.qZA(),l.TgZ(12,"div",null,4),l._uU(14,"Hello, this is a DOM portal"),l.qZA()),2&t&&(l.xp6(3),l.Q6J("cdkPortalOutlet",e.selectedPortal))},directives:[o.Pl],styles:[".example-portal-outlet[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}"]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["component-portal-example"]],decls:1,vars:0,template:function(t,e){1&t&&l._uU(0,"Hello, this is a component portal")},encapsulation:2}),t})(),s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[o.eL]]}),t})()}}]);