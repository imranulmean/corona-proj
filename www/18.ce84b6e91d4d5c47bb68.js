(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"3uE+":function(l,n,o){"use strict";o.r(n);var u=o("CcnG"),t=o("Ado8"),i=o("ZZ/e"),e=o("9B/o"),r=o("9ii/"),b=function(){function l(l,n,o,u,t,i,e,r){this.iab=l,this.loadingController=n,this.toastController=o,this.newsApi=u,this.event=t,this.platform=i,this.admobFreeService=e,this.route=r,this.animationStart=1,this.resultsJob=[],this.pageEconomy=1,this.jobFlag=!0,this.resultFlag=!0,console.log("inside job"),this.getJobPosts(this.pageEconomy)}return l.prototype.ngOnInit=function(){this.platform.is("cordova")&&this.admobFreeService.BannerAd()},l.prototype.getJobPosts=function(l){var n=this;this.newsApi.getAllJobPosts(l).subscribe(function(l){if(l){for(var o=Object.keys(l).length,u=0;u<o;u++)n.resultsJob.push(l[u]);n.pageEconomy=n.pageEconomy+1,n.jobFlag=!1}else n.resultFlag=!1;for(var t=0,i=n.resultsJob;t<i.length;t++){var e=i[t],r=/href="([^\'\"]+)/g.exec(e.content.rendered);e.link=r[1]}})},l.prototype.loadAllJobNews=function(l){var n=this;setTimeout(function(){console.log("Done"),n.getJobPosts(n.pageEconomy),l.target.complete(),0==n.resultFlag&&(l.target.disabled=!0)},1500)},l.prototype.goToSource=function(l){this.iab.create(l,"_self","location=yes")},l.prototype.showAutoHideLoader=function(){this.loadingController.create({spinner:"crescent",cssClass:"loader",duration:800}).then(function(l){l.present(),l.onDidDismiss().then(function(l){console.log("Loading...")})})},l}(),c=function(){return function(){}}(),s=o("pMnS"),a=o("oBZk"),g=o("Ip0R"),p=o("ZYCi"),f=u.nb({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]{--background:#fe8c00}.sourceLogoAllCategory[_ngcontent-%COMP%]{width:9em;height:2em;align-items:right;float:right;border-radius:.5em;margin-bottom:.2em;margin-right:.2em}"]],data:{}});function h(l){return u.Eb(0,[(l()(),u.pb(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,u.rb(1,"",n.parent.context.$implicit.fimg_url,""))})}function d(l){return u.Eb(0,[(l()(),u.pb(0,0,null,null,0,"img",[["src","assets/img/news_fallback.png"]],null,null,null,null,null))],null,null)}function m(l){return u.Eb(0,[(l()(),u.pb(0,0,null,null,1,"ion-card-subtitle",[["class","sectionTitle"],["color","dark"]],[[8,"innerHTML",1]],null,null,a.G,a.f)),u.ob(1,49152,null,0,i.p,[u.h,u.k],{color:[0,"color"]},null)],function(l,n){l(n,1,0,"dark")},function(l,n){l(n,0,0,n.parent.context.$implicit.title.rendered)})}function k(l){return u.Eb(0,[(l()(),u.pb(0,0,null,null,0,"img",[["class","sourceLogoAllCategory"],["src","/assets/img/news-source-icons/prothom-alo.png"]],null,null,null,null,null))],null,null)}function x(l){return u.Eb(0,[(l()(),u.pb(0,0,null,null,12,"div",[],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,11,"ion-card",[],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.goToSource(l.context.$implicit.link)&&u),u},a.H,a.d)),u.ob(2,49152,null,0,i.m,[u.h,u.k],null,null),(l()(),u.pb(3,0,null,0,7,"ion-card-header",[],null,null,null,a.F,a.e)),u.ob(4,49152,null,0,i.o,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,h)),u.ob(6,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,d)),u.ob(8,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,m)),u.ob(10,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,k)),u.ob(12,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,6,0,n.context.$implicit.fimg_url),l(n,8,0,!n.context.$implicit.fimg_url),l(n,10,0,n.context.$implicit.title.rendered),l(n,12,0,"531"==n.context.$implicit.categories[0])},null)}function y(l){return u.Eb(0,[u.Bb(402653184,1,{content:0}),u.Bb(402653184,2,{infiniteScroll:0}),u.Bb(402653184,3,{slider:0}),(l()(),u.pb(3,0,null,null,11,"ion-header",[],null,null,null,a.M,a.k)),u.ob(4,49152,null,0,i.B,[u.h,u.k],null,null),(l()(),u.pb(5,0,null,0,9,"ion-toolbar",[],null,null,null,a.db,a.B)),u.ob(6,49152,null,0,i.Bb,[u.h,u.k],null,null),(l()(),u.pb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.E,a.c)),u.ob(8,49152,null,0,i.l,[u.h,u.k],null,null),(l()(),u.pb(9,0,null,0,1,"ion-menu-button",[],null,null,null,a.T,a.s)),u.ob(10,49152,null,0,i.R,[u.h,u.k],null,null),(l()(),u.pb(11,0,null,0,0,"img",[["height","35"],["src","../../../assets/img/logo-200.png"]],null,null,null,null,null)),(l()(),u.pb(12,0,null,0,2,"ion-title",[],null,null,null,a.cb,a.A)),u.ob(13,49152,null,0,i.zb,[u.h,u.k],null,null),(l()(),u.Db(-1,0,["\u099a\u09be\u0995\u09c1\u09b0\u09c0\u09b0 \u0996\u09ac\u09b0"])),(l()(),u.pb(15,0,null,null,9,"ion-content",[],null,null,null,a.J,a.h)),u.ob(16,49152,[[1,4]],0,i.u,[u.h,u.k],null,null),(l()(),u.pb(17,0,null,0,7,"ion-list",[],null,null,null,a.S,a.q)),u.ob(18,49152,null,0,i.O,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,x)),u.ob(20,278528,null,0,g.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.pb(21,0,null,0,3,"ion-infinite-scroll",[["threshold","85%"]],null,[[null,"ionInfinite"]],function(l,n,o){var u=!0;return"ionInfinite"===n&&(u=!1!==l.component.loadAllJobNews(o)&&u),u},a.P,a.m)),u.ob(22,49152,[[2,4]],0,i.E,[u.h,u.k],{threshold:[0,"threshold"]},null),(l()(),u.pb(23,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"]],null,null,null,a.O,a.n)),u.ob(24,49152,null,0,i.F,[u.h,u.k],{loadingSpinner:[0,"loadingSpinner"]},null)],function(l,n){l(n,20,0,n.component.resultsJob),l(n,22,0,"85%"),l(n,24,0,"bubbles")},null)}function v(l){return u.Eb(0,[(l()(),u.pb(0,0,null,null,1,"app-job",[],null,null,null,y,f)),u.ob(1,114688,null,0,b,[e.a,i.Fb,i.Nb,t.a,i.e,i.Jb,r.a,p.a],null,null)],function(l,n){l(n,1,0)},null)}var w=u.lb("app-job",b,v,{},{},[]),E=o("gIcY");o.d(n,"JobPageModuleNgFactory",function(){return J});var J=u.mb(c,[],function(l){return u.wb([u.xb(512,u.j,u.bb,[[8,[s.a,w]],[3,u.j],u.x]),u.xb(4608,g.k,g.j,[u.u,[2,g.s]]),u.xb(4608,E.g,E.g,[]),u.xb(4608,i.c,i.c,[u.z,u.g]),u.xb(4608,i.Hb,i.Hb,[i.c,u.j,u.q,g.c]),u.xb(4608,i.Kb,i.Kb,[i.c,u.j,u.q,g.c]),u.xb(1073742336,g.b,g.b,[]),u.xb(1073742336,E.f,E.f,[]),u.xb(1073742336,E.a,E.a,[]),u.xb(1073742336,i.Db,i.Db,[]),u.xb(1073742336,p.o,p.o,[[2,p.u],[2,p.m]]),u.xb(1073742336,c,c,[]),u.xb(1024,p.k,function(){return[[{path:"",component:b}]]},[])])})}}]);