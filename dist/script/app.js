"use strict";function navigation(){$navContainer.toggleClass($active),$navButton.toggleClass($active),$navButton.toggleClass($notActive),$navButtonClose.toggleClass($active)}function navigationOff(){$navContainer.removeClass($active),$navButton.toggleClass($active),$navButton.toggleClass($notActive),$navButtonClose.toggleClass($active)}function pathPrepare(e){var a=e[0].getTotalLength();e.css("stroke-dasharray",a),e.css("stroke-dashoffset",a)}var $headerDiv=$(".header"),$aboutDiv=$(".about"),$galleryDiv=$(".gallery"),$contactDiv=$(".contact"),$htmlBodyDiv=$("html, body"),$navButton=$(".nav__button"),$navButtonClose=$(".nav__button--icon-close"),$navContainer=$(".nav__list-container"),$active="active",$notActive="notActive",$home=$(".nav__list--home"),$about=$(".nav__list--about"),$gallery=$(".nav__list--gallery"),$contact=$(".nav__list--contact"),$scrollTime=800,$headerTitle=$(".header__title--name"),$headerLevel=$(".header__level"),$headerHouseWindowLeft=$(".header__house--window-left"),$headerHouseWindowRight=$(".header__house--window-right"),$headerHouseMain=$(".header__house--main"),$headerHouseFrame=$(".header__house--frame"),$headerHouseRoof=$(".header__house--roof"),$headerLogo=$(".header__logo"),$headerHouse=$(".header__house"),header=".header",headerHouse=".header__house",headerTitle=".header__title--name",headerBox=".header__house--frame-box",headerBoxTwo=".header__house--frame-boxTwo",$aboutLevel=$(".about__level"),$aboutPic=$(".about__window-box"),$aboutTitle=$(".about__title"),aboutContainer=".about",aboutLevel=".about__level",aboutTitle=".about__title",aboutPic=".about__window-box",$contactPapereach=$(".contact__paper--total"),$contactMoon=$(".contact__moon"),contactContainer=".contact",contactTitlePath=".contact__text--path",contactTitlePathAfter=".contact__text--path-after",contactPapereach=".contact__paper--total",contactMoon=".contact__moon",contactBox=".contact__box";$(document).ready(function(){$navButton.click(function(){navigation()})}),$home.click(function(){$htmlBodyDiv.animate({scrollTop:$headerDiv.offset().top},$scrollTime),navigationOff()}),$about.click(function(){$htmlBodyDiv.animate({scrollTop:$aboutDiv.offset().top},$scrollTime),navigationOff()}),$gallery.click(function(){$htmlBodyDiv.animate({scrollTop:$galleryDiv.offset().top},$scrollTime),navigationOff()}),$contact.click(function(){$htmlBodyDiv.animate({scrollTop:$contactDiv.offset().top},$scrollTime),navigationOff()});var controller=new ScrollMagic.Controller,pinHouse=new ScrollMagic.Scene({triggerElement:header,triggerHook:0}).setPin(headerHouse).addIndicators({name:"1 house (duration: 800)"}).addTo(controller),headerTl=new TimelineMax,titleText="boat",titleTextStrike=titleText.strike();headerTl.from($headerLevel,.7,{y:-15,opacity:0,ease:Elastic.easeOut.config(1,.3)}).from($headerHouseMain,.6,{y:-15,opacity:0,ease:Elastic.easeOut.config(1,.3)}).from($headerHouseRoof,.5,{y:-15,opacity:0,ease:Elastic.easeOut.config(1,.3)}).from($headerHouseFrame,.5,{y:-15,opacity:0,ease:Elastic.easeOut.config(1,.3)}).from($headerHouseWindowLeft,.3,{rotationY:90,transformOrigin:"0% 99%",opacity:0,ease:Bounce.easeOut}).from($headerHouseWindowRight,.3,{rotationY:90,transformOrigin:"99% 0%",opacity:0,ease:Bounce.easeOut}).to($headerTitle,1.7,{text:"BRONTË",scale:1.6},"-=3").to($headerTitle,2,{text:"FRONTEND DEVELOPER",scale:1},"-=0.25");var homeTl=new TimelineMax;homeTl.to($headerLevel,1,{opacity:0,ease:Power2.easeOut}).to($headerLogo,2.3,{y:460,ease:Linear.easeNone}).to($headerTitle,1,{opacity:0,scale:1.8,x:"+=10",y:"+=100",zIndex:0,ease:Power2.easeOut});var headerTitle=new ScrollMagic.Scene({triggerElement:headerHouse,offset:280,duration:500,reverse:!0}).setTween(homeTl).addIndicators({name:"3 Title"}).addTo(controller),homeAboutTl=new TimelineMax;homeAboutTl.to($headerHouseRoof,.7,{rotationX:-90,transformOrigin:"0% 99%",ease:Linear.easeNone}).to($headerHouseMain,.7,{rotationX:-90,transformOrigin:"0% 99%",ease:Linear.easeNone});var headerAbout=new ScrollMagic.Scene({triggerElement:headerTitle,duration:800}).setTween(homeAboutTl).addIndicators({name:"2 house"}).addTo(controller),galaxyTl=new TimelineMax;galaxyTl.set($aboutDiv,{backgroundSize:"100% 100%"}).to($aboutDiv,.1,{backgroundSize:"+=38% +=38%",autoRound:!1,ease:Power0.easeNone});var sceneGalaxyZoom=new ScrollMagic.Scene({triggerElement:aboutContainer}).setTween(galaxyTl).addIndicators({name:"2 - galaxy"}).addTo(controller),windowTl=new TimelineMax;windowTl.from($aboutLevel,.2,{y:-15,opacity:0,ease:Linear.easeNone}).from($aboutPic,.1,{scale:0,opacity:0,ease:Linear.easeNone}).to($headerHouseWindowLeft,.23,{rotationY:180,transformOrigin:"0% 99%",ease:Linear.easeNone}).to($headerHouseWindowRight,.23,{rotationY:180,transformOrigin:"99% 0%",ease:Linear.easeNone}).to($aboutTitle,1,{scale:2.5,ease:Linear.easeNone});var sceneGalaxyZoom=new ScrollMagic.Scene({triggerElement:aboutTitle,offset:-230,duration:300}).setTween(windowTl).addIndicators({name:"4 window-galaxy"}).addTo(controller),pinProfile=new ScrollMagic.Scene({triggerElement:aboutContainer,offset:380}).setPin(aboutPic).addIndicators({name:"pin profile"}).addTo(controller),$contactTitlePath=$("path.contact__text--path");pathPrepare($contactTitlePath);var contactTween=(new TimelineMax).add(TweenMax.to($contactTitlePath,1,{strokeDashoffset:0,ease:Linear.easeNone})).add(TweenMax.to("path",1.1,{stroke:"rgba(232, 212, 143, 0.7)",ease:Linear.easeNone}),0),scene=new ScrollMagic.Scene({triggerElement:contactContainer,duration:200,tweenChanges:!0}).setTween(contactTween).addIndicators({name:"contact"}).addTo(controller);$contactPapereach.each(function(){var e=TweenMax.to($(this),.2,{margin:"+=20",x:"-=20",ease:Linear.easeNone});new ScrollMagic.Scene({triggerElement:this,offset:-90}).setTween(e).addIndicators({name:"paper"}).addTo(controller)});var moonTl=new TimelineMax;moonTl.delay(.1).from($contactMoon,1,{y:-30,opacity:0,ease:Bounce.easeOut});var sceneGalaxyZoom=new ScrollMagic.Scene({triggerElement:contactBox,offset:160}).setTween(moonTl).addIndicators({name:"moon"}).addTo(controller);itle, 2, { text: "FRONTEND DEVELOPER", scale: 1 }, '-=0.25');

//------------  H o u s e   T i t l e  --------------//
var homeTl = new TimelineMax();

homeTl.to($headerLevel, 1, { opacity: 0, ease: Power2.easeOut }).to($headerLogo, 2.3, { y: 460, ease: Linear.easeNone }).to($headerTitle, 1, { opacity: 0, scale: 1.8, x: '+=10', y: '+=100', zIndex: 0, ease: Power2.easeOut });

var headerTitle = new ScrollMagic.Scene({
  triggerElement: headerHouse,
  offset: 280,
  duration: 500,
  reverse: true
}).setTween(homeTl).addIndicators({ name: '3 Title' }).addTo(controller);

//------------  H o u s e   R e a c h   'A b o u t   S e c t i o n'  --------------//
var homeAboutTl = new TimelineMax();

homeAboutTl.to($headerHouseRoof, 0.7, { rotationX: -90, transformOrigin: "0% 99%", ease: Linear.easeNone }).to($headerHouseMain, 0.7, { rotationX: -90, transformOrigin: "0% 99%", ease: Linear.easeNone });

var headerAbout = new ScrollMagic.Scene({
  triggerElement: headerTitle,
  duration: 800
}).setTween(homeAboutTl).addIndicators({ name: '2 house' }).addTo(controller);

//=========================================================================
//         A B O U T
//========================================================================

//----------  G a l a x y   B a c k g r o u n d  -----------//
var galaxyTl = new TimelineMax();

galaxyTl.set($aboutDiv, { backgroundSize: '100% 100%' }).to($aboutDiv, 0.1, {
  backgroundSize: '+=38% +=38%',
  autoRound: false,
  ease: Power0.easeNone
});

var sceneGalaxyZoom = new ScrollMagic.Scene({
  triggerElement: aboutContainer
}).setTween(galaxyTl).addIndicators({ name: '2 - galaxy' }) //indicate trigger meeting point
.addTo(controller);

//----------  H o u s e   i n   G a l a x y  -----------//

var windowTl = new TimelineMax();

windowTl.from($aboutLevel, 0.2, { y: -15, opacity: 0, ease: Linear.easeNone }).from($aboutPic, 0.1, { scale: 0, opacity: 0, ease: Linear.easeNone }).to($headerHouseWindowLeft, 0.23, { rotationY: 180, transformOrigin: "0% 99%", ease: Linear.easeNone }).to($headerHouseWindowRight, 0.23, { rotationY: 180, transformOrigin: "99% 0%", ease: Linear.easeNone }).to($aboutTitle, 1, { scale: 2.5, ease: Linear.easeNone });

var sceneGalaxyZoom = new ScrollMagic.Scene({
  triggerElement: aboutTitle,
  offset: -230,
  duration: 300
}).setTween(windowTl).addIndicators({ name: '4 window-galaxy' }) //indicate trigger meeting point
.addTo(controller);

// ----------------  P I N S  I N  G A L A X Y
//----------------------------------------------------------------------
//----------  P i n   P r o f i l e   P i c  -----------//
var pinProfile = new ScrollMagic.Scene({
  triggerElement: aboutContainer,
  offset: 380
}).setPin(aboutPic).addIndicators({ name: 'pin profile' }) // add indicators (requires plugin)
.addTo(controller);

//==========================================================================
//         G A L L E R Y
//==========================================================================


//===========================================================================
//         C O N T A C T
//=========================================================================

//----------  C O N T A C T   T I T L E  -----------//
function pathPrepare($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

var $contactTitlePath = $("path.contact__text--path");

// prepare SVG
pathPrepare($contactTitlePath);

// build tween
var contactTween = new TimelineMax().add(TweenMax.to($contactTitlePath, 1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
.add(TweenMax.to("path", 1.1, { stroke: "rgba(232, 212, 143, 0.7)", ease: Linear.easeNone }), 0); // change color during the whole thing

// build scene
var scene = new ScrollMagic.Scene({
  triggerElement: contactContainer,
  duration: 200,
  tweenChanges: true
}).setTween(contactTween).addIndicators({ name: 'contact' }) // add indicators (requires plugin)
.addTo(controller);

// * * * ---- N o t e : Gets length of contact svg (Uncomment to get value on console)
// var len = $("#contact__text--path").get(0).getTotalLength();
// console.log(len);


//----------  C O N T A C T   P A P E R -----------//

//loop through elements
$contactPapereach.each(function () {
  //build a tween
  var tween = TweenMax.to($(this), 0.2, { margin: '+=20', x: '-=20', ease: Linear.easeNone });

  //build scene
  var paperScene = new ScrollMagic.Scene({
    triggerElement: this,
    offset: -90
  }).setTween(tween).addIndicators({ name: 'paper' }) // add indicators (requires plugin)
  .addTo(controller);
});

//----------  C O N T A C T   M O O N -----------//
var moonTl = new TimelineMax();

moonTl.delay(0.1).from($contactMoon, 1, { y: -30, opacity: 0, ease: Bounce.easeOut });

var sceneGalaxyZoom = new ScrollMagic.Scene({
  triggerElement: contactBox,
  offset: 160
}).setTween(moonTl).addIndicators({ name: 'moon' }) //indicate trigger meeting point
.addTo(controller);