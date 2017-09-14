'use strict';


//=========================================================================
//       V A R I A B L E S
//=========================================================================

  // var for menu total visibility
    // main class
    var $navButton = $('.nav__button');
    var $navButtonClose = $('.nav__button--icon-close');
    var $navContainer = $('.nav__list-container');

    // added Class to toggle style
    var $active = 'active';
    var $notActive = 'notActive';


  // var for 'menu listed links'
  var $home = $('.nav__list--home');
  var $about = $('.nav__list--about');
  var $gallery = $('.nav__list--gallery');
  var $contact = $('.nav__list--contact');


  // var for container div when 'menu listed links' are clicked
  var $headerDiv = $('.header');
  var $aboutDiv = $('.about');
  var $galleryDiv = $('.gallery');
  var $contactDiv = $('.contact');
  var $htmlBodyDiv = $('html, body');


  // var for scroll
  var $scrollTime = 800;



//===============================================================
//         NAVIGATION
//===============================================================

//----------  M E N U   T O G G L E
//--------------------------------------------------------------


// Function 1: Navigation open
function navigation() {
  // Toggle Nav List
  $navContainer.toggleClass($active);
  // Toggle Nav Button Color and "Close/Menu" innerHTML display
  $navButton.toggleClass($active);
  $navButton.toggleClass($notActive);
  $navButtonClose.toggleClass($active);
}

// Function 2: Navigation off
function navigationOff() {
  // Toggle Nav List
  $navContainer.removeClass($active);
  // Toggle Nav Button Color and "Close/Menu" innerHTML display
  $navButton.toggleClass($active);
  $navButton.toggleClass($notActive);
  $navButtonClose.toggleClass($active);
}

// fire menu function from the start
$(document).ready(function() {
  $navButton.click(function() {
    navigation();
  })
});



//----------  S M O O T H   S C R O L L
//-------------------------------------------------------------
// scroll to containers and close menu after click, reset button from 'close' to 'menu'

// Home
$home.click(function() {
    $htmlBodyDiv.animate({
        scrollTop: $headerDiv.offset().top
    }, $scrollTime);
    navigationOff();
});

//  About
$about.click(function() {
    $htmlBodyDiv.animate({
        scrollTop: $aboutDiv.offset().top
    }, $scrollTime);
    navigationOff();
});


//  Gallery
$gallery.click(function() {
    $htmlBodyDiv.animate({
        scrollTop: $galleryDiv.offset().top
    }, $scrollTime);
    navigationOff();
});


//  Contact
$contact.click(function() {
    $htmlBodyDiv.animate({
        scrollTop: $contactDiv.offset().top
    }, $scrollTime);
    navigationOff();
});




//-----------------------------------------------//
//----------   M A G I C   ----------------------//
var controller = new ScrollMagic.Controller();
///=========================================================================
//         H E A D E R
//=========================================================================
var $headerTitle = $('.header__title--name');
var $headerHouseOne = $('.header__house--total-one');
var $headerLevel = $('.header__level');
var $headerHouseTotal = $('.header__house--total');
var $headerHouseWindowLeft = $('.header__house--window-left');
var $headerHouseWindowRight = $('.header__house--window-right');
var $headerHouseMain = $('.header__house--main');
var $headerHouseFrame = $('.header__house--frame');
var $headerHouseRoof = $('.header__house--roof');
var header = '.header';
var headerHouse = '.header__house';
var headerTitle = '.header__title--name';
var headerBox = '.header__house--frame-box';
var headerBoxTwo = '.header__house--frame-boxTwo';
var $headerLogo = $('.header__logo');
var $headerHouse = $('.header__house');


//----------  H o u s e   O n   S c r o l l  ------------//
var pinHouse = new ScrollMagic.Scene({
  triggerElement: header,
  triggerHook: 0,
  // duration: 800
  })
  .setPin(headerHouse)
  .addIndicators({name: '1 house (duration: 800)'}) // add indicators (requires plugin)
  .addTo(controller);


//------------  H o u s e   O n   L o a d  --------------//
var headerTl = new TimelineMax();

headerTl
  .from($headerLevel, 0.7, {y: -15, opacity: 0, ease:Elastic.easeOut.config(1, 0.3)})
  .from($headerHouseMain, 0.7, {y: -15, opacity: 0, ease:Elastic.easeOut.config(1, 0.3)})
  .from($headerHouseRoof, 0.7, {y: -15, opacity: 0, ease:Elastic.easeOut.config(1, 0.3)})
  .from($headerHouseFrame, 0.7, {y: -15, opacity: 0, ease:Elastic.easeOut.config(1, 0.3)})
  .from($headerHouseWindowLeft, 0.5, {rotationY: 90, transformOrigin:"0% 99%", ease:Bounce.easeOut})
  .from($headerHouseWindowRight, 0.5, {rotationY: 90, transformOrigin:"99% 0%", ease:Bounce.easeOut})
  .from($headerTitle, 0.7, {x:-15, opacity: 0, ease:Power2.easeOut, zIndex: 0}, '-=0.15');


//------------  H o u s e   T i t l e  --------------//
var homeTl = new TimelineMax();

homeTl
  .to($headerLevel, 1, {opacity: 0, ease:Power2.easeOut})
  .to($headerLogo, 2.3, {y: 440, ease:Linear.easeNone})
  .to($headerTitle, 1, {opacity: 0, zIndex:0, ease:Power2.easeOut});


var headerTitle = new ScrollMagic.Scene({
  triggerElement: headerHouse,
  offset: 280,
  duration: 500,
  reverse: true
})
.setTween(homeTl)
.addIndicators({name: '3 Title'})
.addTo(controller);


//------------  H o u s e   R e a c h   'A b o u t   S e c t i o n'  --------------//
var  homeAboutTl = new TimelineMax();

homeAboutTl
  .to($headerHouseRoof, 2, {rotationX:-90, transformOrigin:"0% 99%", ease:Linear.easeNone})
  .to($headerHouseMain, 2, {rotationX:-90, transformOrigin:"0% 99%", ease:Linear.easeNone});


var headerAbout = new ScrollMagic.Scene({
  triggerElement: headerTitle,
  duration: 800
})
.setTween(homeAboutTl)
.addIndicators({name: '2 house'})
.addTo(controller);


//=========================================================================
//         A B O U T
//========================================================================
var aboutContainer = '.about';
var $imgAboutContainer = $('.about');
var aboutLevel = '.about__level';
var $aboutLevel = '.about__level';
var aboutTitle ='.about__title';
var $aboutPic = $('.about__window-box');
var aboutPic = '.about__window-box';




//----------  G a l a x y   B a c k g r o u n d  -----------//
var galaxyTl = new TimelineMax();

galaxyTl
  .set($imgAboutContainer,{backgroundSize:'100% 100%'})
  .to($imgAboutContainer, 0.1, {
  backgroundSize: '+=38% +=38%',
  autoRound:false,
  ease: Power0.easeNone
});


var sceneGalaxyZoom = new ScrollMagic.Scene({
  triggerElement: aboutContainer
})
.setTween(galaxyTl)
.addIndicators({name:'2 - galaxy'}) //indicate trigger meeting point
.addTo(controller);

//----------  H o u s e   i n   G a l a x y  -----------//

// var pinHouse = new ScrollMagic.Scene({
//   triggerElement: aboutTitle,
//   offset: -120,
//   duration: 300
//   })
//   .setPin(headerHouse)
//   .addIndicators({name: 'house galaxy'}) // add indicators (requires plugin)
//   .addTo(controller);

//----------  H o u s e   i n   G a l a x y  -----------//

var windowTl = new TimelineMax();

windowTl
.from($aboutPic, 0.5, {scale: 0, opacity:0, ease:Linear.easeNone})
.to($headerHouseWindowLeft, 0.5, {rotationY: 180, transformOrigin:"0% 99%", ease:Linear.easeNone})
.to($headerHouseWindowRight, 0.5, {rotationY: 180, transformOrigin:"99% 0%", ease:Linear.easeNone})
;


var sceneGalaxyZoom = new ScrollMagic.Scene({
  triggerElement: aboutTitle,
  offset: -143
})
.setTween(windowTl)
.addIndicators({name:'4 window-galaxy'}) //indicate trigger meeting point
.addTo(controller);


//----------  P i n   P r o f i l e   P i c  -----------//
var pinProfile = new ScrollMagic.Scene({
  triggerElement: aboutTitle,
  offset: -147
  })
  .setPin(aboutPic)
  .addIndicators({name: 'pin profile'}) // add indicators (requires plugin)
  .addTo(controller);





//==========================================================================
//         G A L L E R Y
//==========================================================================



//===========================================================================
//         C O N T A C T
//=========================================================================
var contactContainer = '.contact';
var contactTitlePath = '.contact__text--path';
var contactTitlePathAfter = '.contact__text--path-after';



//----------  C O N T A C T   T I T L E  -----------//
function pathPrepare ($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

var $contactTitlePath = $("path.contact__text--path");

// prepare SVG
pathPrepare($contactTitlePath);

// build tween
var contactTween = new TimelineMax()
  .add(TweenMax.to($contactTitlePath, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
  .add(TweenMax.to("path", 1.1, {stroke: "#bdbdbd", ease:Linear.easeNone}), 0);			// change color during the whole thing

// build scene
var scene = new ScrollMagic.Scene({
  triggerElement: contactContainer,
  duration: 200,
  tweenChanges: true,
  })
.setTween(contactTween)
.addIndicators({name:'contact'}) // add indicators (requires plugin)
.addTo(controller);


// * * * ---- N o t e : Gets length of contact svg (Uncomment to get value on console)
  // var len = $("#contact__text--path").get(0).getTotalLength();
  // console.log(len);


//----------  C O N T A C T   P A P E R -----------//
var contactPapereach = '.contact__paper--total';
var $contactPapereach = $('.contact__paper--total');


//loop through elements
$contactPapereach.each(function(){
  //build a tween
  var tween = TweenMax.to($(this), 0.2, {margin: '+=20', x:'-=20', ease:Linear.easeNone});

  //build scene
  var paperScene = new ScrollMagic.Scene({
    triggerElement: this,
    offset: -90
  })
  .setTween(tween)
  .addIndicators({name:'paper'}) // add indicators (requires plugin)
  .addTo(controller)
  ;
});


//----------  C O N T A C T   M O O N -----------//
var contactMoon = '.contact__moon';
var $contactMoon = $('.contact__moon');
var contactBox = '.contact__box';
var moonTl = new TimelineMax();

moonTl
.delay(0.1)
.from($contactMoon, 1, {y: -30, opacity: 0, ease:Bounce.easeOut})
;

var sceneGalaxyZoom = new ScrollMagic.Scene({
  triggerElement: contactBox,
  offset: 160
})
.setTween(moonTl)
.addIndicators({name:'moon'}) //indicate trigger meeting point
.addTo(controller);
