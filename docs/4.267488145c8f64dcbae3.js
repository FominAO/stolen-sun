(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{IhDX:function(e,t,n){"use strict";n.r(t),n.d(t,"MainMenuModule",function(){return p});var o=n("ofXK"),i=n("tyNb"),a=n("fXoL");const s=function(e){return["/","main-menu",e]};function r(e,t){if(1&e&&(a.Fb(0,"div",9),a.Vb(1),a.Eb()),2&e){const e=t.$implicit;a.Nb("routerLink",a.Ob(2,s,e.path)),a.tb(1),a.Wb(e.label)}}const c=[{path:"**",component:(()=>{class e{constructor(){this.menuItems=[{label:"Continue",path:"continue"},{label:"New Game",path:"new"},{label:"Settings",path:"settings"},{label:"Achievements",path:"achievements"},{label:"Exit Game",path:"loading"}]}ngOnInit(){}onNewGameClick(e){e.volume=.1,e.play()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.wb({type:e,selectors:[["app-main-menu"]],decls:9,vars:1,consts:[[1,"right-content"],[1,"header"],["src","assets/icons/logo.png","alt","",1,"header__logo"],[1,"menu"],["class","menu__item","routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],[1,"left-content"],["loop","","autoplay","","src","assets/images/girl.webm",3,"click"],["loop","","src","assets/sounds/main.m4a"],["sound",""],["routerLinkActive","active",1,"menu__item",3,"routerLink"]],template:function(e,t){if(1&e){const e=a.Gb();a.Fb(0,"div",0),a.Fb(1,"div",1),a.Db(2,"img",2),a.Eb(),a.Fb(3,"div",3),a.Ub(4,r,2,4,"div",4),a.Eb(),a.Eb(),a.Fb(5,"div",5),a.Fb(6,"video",6),a.Lb("click",function(){a.Rb(e);const n=a.Qb(8);return t.onNewGameClick(n)}),a.Eb(),a.Db(7,"audio",7,8),a.Eb()}2&e&&(a.tb(4),a.Nb("ngForOf",t.menuItems))},directives:[o.h,i.b,i.a],styles:['[_nghost-%COMP%]{display:flex}.header__logo[_ngcontent-%COMP%]{height:160px}.menu[_ngcontent-%COMP%]{padding-left:100px;font-size:32px;line-height:32px;color:#c6c5eb;font-family:Vollkorn}.menu__item[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;outline:none;transition:font-size .1s;margin:12px 0;cursor:url(assets/icons/cursor_active.png),pointer;display:flex;align-items:center;position:relative}.menu__item[_ngcontent-%COMP%]:before{opacity:0;content:" ";background-image:url(assets/icons/sun.png);width:50px;height:50px;background-size:contain;position:absolute;animation:disappears .2s;left:-62px;top:-12px}.menu__item[_ngcontent-%COMP%]:hover{font-size:36px}.menu__item[_ngcontent-%COMP%]:hover:before{opacity:1;animation:appears .2s}.menu__item.active[_ngcontent-%COMP%]{font-size:36px;color:#690000}.menu__item.active[_ngcontent-%COMP%]:before{opacity:1;animation:none}.menu__item.active[_ngcontent-%COMP%]:after{content:" ";width:calc(100% + 100px);height:35px;background:linear-gradient(90deg,rgba(255,219,172,0),#ffdbac 4%,#ffb973,rgba(255,185,115,0));position:absolute;left:-22px;top:-4px;z-index:-1;transform-origin:0 50%;animation:select .2s}.menu__item.active[_ngcontent-%COMP%]:hover:before{animation:appears-active .3s ease-out 1}@keyframes appears{0%{opacity:0;transform:scale(1.3)}to{opacity:1;transform:scale(1)}}@keyframes disappears{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(1)}}@keyframes select{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes appears-active{0%{transform:scale(1) rotate(-90deg)}50%{transform:scale(1.2) rotate(-45deg)}to{transform:scale(1) rotate(0deg)}}']}),e})()}];let l=(()=>{class e{}return e.\u0275mod=a.Ab({type:e}),e.\u0275inj=a.zb({factory:function(t){return new(t||e)},imports:[[i.c.forChild(c)],i.c]}),e})(),p=(()=>{class e{}return e.\u0275mod=a.Ab({type:e}),e.\u0275inj=a.zb({factory:function(t){return new(t||e)},imports:[[o.b,l]]}),e})()}}]);