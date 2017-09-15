'use strict';


//=========================================================================
//       V A R I A B L E S
//=========================================================================

//***----------  M A I N   C O N T A I N E R S  ------------***//

  //========  J Q U E R Y  ==========//
  // var for container div when 'menu listed links' are clicked
  var $headerDiv = $('.header');
  var $aboutDiv = $('.about');
  var $galleryDiv = $('.gallery');
  var $contactDiv = $('.contact');
  var $htmlBodyDiv = $('html, body');

//***----------  N A V I G A T I O N  ------------***//

  //========  J Q U E R Y  ==========//
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

  // var for scroll
  var $scrollTime = 800;

//***----------  H E A D E R  ------------***//

  //========  J Q U E R Y  ==========//
  var $headerTitle = $('.header__title--name');
  var $headerLevel = $('.header__level');
  var $headerHouseWindowLeft = $('.header__house--window-left');
  var $headerHouseWindowRight = $('.header__house--window-right');
  var $headerHouseMain = $('.header__house--main');
  var $headerHouseFrame = $('.header__house--frame');
  var $headerHouseRoof = $('.header__house--roof');
  var $headerLogo = $('.header__logo');
  var $headerHouse = $('.header__house');

  //========  S T R I N G  ==========//
  var header = '.header';
  var headerHouse = '.header__house';
  var headerTitle = '.header__title--name';
  var headerBox = '.header__house--frame-box';
  var headerBoxTwo = '.header__house--frame-boxTwo';


//***----------  A B O U T  ------------***//

  //========  J Q U E R Y  ==========//
  var $aboutLevel = $('.about__level');
  var $aboutPic = $('.about__window-box');
  var $aboutTitle = $('.about__title');
  var $aboutTitleTwo = $('.about__title-two');
  var $aboutTitleThree = $('.about__title-three');
  var $aboutTitleFour = $('.about__title-four');
  var $aboutTitleFive = $('.about__title-five');
  var $aboutBlinders = $('.about__window-box--blinders-each');
  var $aboutBlindersBox = $('.about__window-box--blinders');


  //========  S T R I N G  ==========//
  var aboutContainer = '.about';
  var aboutLevel = '.about__level';
  var aboutTitle = '.about__title';
  var aboutPic = '.about__window-box';


//***----------  G A L L E R Y  ------------***//

  //========  J Q U E R Y  ==========//


  //========  S T R I N G  ==========//



//***----------  C O N T A C T  ------------***//

  //========  J Q U E R Y  ==========//
  var $contactPapereach = $('.contact__paper--total');
  var $contactMoon = $('.contact__moon');

  //========  S T R I N G  ==========//
  var contactContainer = '.contact';
  var contactTitlePath = '.contact__text--path';
  var contactTitlePathAfter = '.contact__text--path-after';
  var contactPapereach = '.contact__paper--total';
  var contactMoon = '.contact__moon';
  var contactBox = '.contact__box';



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

//----------  H o u s e   O n   S c r o l l  ------------//
var pinHouse = new ScrollMagic.Scene({
  triggerElement: header,
  triggerHook: 0,
  })
  .setPin(headerHouse)
  .addIndicators({name: '1 house (duration: 800)'}) // add indicators (requires plugin)
  .addTo(controller);


//------------  H o u s e   O n   L o a d  --------------//
var headerTl = new TimelineMax();
var titleText = "boat";
var titleTextStrike = titleText.strike();

headerTl
  .from($headerLevel, 0.7, {y: -15, opacity: 0, ease:Elastic.easeOut.config(1, 0.3)})
  .from($headerHouseMain, 0.6, {y: -15, opacity: 0, ease:Elastic.easeOut.config(1, 0.3)})
  .from($headerHouseRoof, 0.5, {y: -15, opacity: 0, ease:Elastic.easeOut.config(1, 0.3)})
  .from($headerHouseFrame, 0.5, {y: -15, opacity: 0, ease:Elastic.easeOut.config(1, 0.3)})
  .set($headerHouseWindowLeft, {rotationY: 0, transformOrigin:"0% 99%", opacity: 0, zIndex:2})
  .set($headerHouseWindowRight, {rotationY: 0, transformOrigin:"0% 99%", opacity: 0, zIndex:2})
  .from($headerHouseWindowLeft, 0.3, {rotationY: -180, transformOrigin:"0% 99%", opacity: 0, zIndex:2, ease:Bounce.easeOut})
  .from($headerHouseWindowRight, 0.3, {rotationY: -180, transformOrigin:"99% 0%", opacity: 0, zIndex:2, ease:Bounce.easeOut})
  .to($headerTitle, 1.7, {text: "BRONTË", scale:1.3}, '-=3')
  .to($headerTitle, 2, {text: "FRONTEND DEVELOPER", scale:1}, '-=0.25');


//------------  H o u s e   T i t l e  --------------//
var homeTl = new TimelineMax();

homeTl
  .to($headerLevel, 1, {opacity: 0, ease:Power2.easeOut})
  .to($headerLogo, 2.3, {y: 460, ease:Linear.easeNone})
  .to($headerTitle, 1, {opacity: 0, scale:1.8, x:'+=10', y:'+=100', zIndex:0, ease:Power2.easeOut});


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
  .to($headerHouseRoof, 0.7, {rotationX:-90, transformOrigin:"0% 99%", ease:Linear.easeNone})
  .to($headerHouseMain, 0.7, {rotationX:-90, transformOrigin:"0% 99%", ease:Linear.easeNone});


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

//----------  G a l a x y   B a c k g r o u n d  -----------//
var galaxyTl = new TimelineMax();

galaxyTl
  .set($aboutDiv,{backgroundSize:'100% 100%'})
  .to($aboutDiv, 0.2, {backgroundSize: '+=45% +=45%', autoRound:false, ease: Power0.easeNone});


var sceneGalaxyZoom = new ScrollMagic.Scene({
  triggerElement: aboutContainer,
})
.setTween(galaxyTl)
.addIndicators({name:'2 - galaxy'}) //indicate trigger meeting point
.addTo(controller);

//----------  H o u s e   i n   G a l a x y  -----------//

//--- SCENE 1: Scrolling down title, profilepic and windows open up
var aboutTl = new TimelineMax();

aboutTl
.from($aboutLevel, 0.2, {y: -15, opacity:0, ease:Linear.easeNone})
.add("picAppear")
.to($headerHouseWindowLeft, 0.6, {rotationY: -180, transformOrigin:"0% 99%", zIndex: 2, ease:Linear.easeNone}, "picAppear")
.to($headerHouseWindowRight, 0.6, {rotationY: -180, transformOrigin:"99% 0%", zIndex: 2, ease:Linear.easeNone})
.from($aboutPic, 0.9, {scale: 0, opacity:0, ease:Linear.easeNone}, "picAppear")
.to($aboutTitleFive, 1, {scale: 4.6, y: "-=166", ease:Linear.easeNone}, "+=1")
.to($aboutTitleFour, 1, {scale: 3.9, y: "-=126", ease:Linear.easeNone})
.to($aboutTitleThree, 1, {scale: 3.5, y: "-=86", ease:Linear.easeNone})
.to($aboutTitleTwo, 1, {scale: 2.7, y: "-=46", ease:Linear.easeNone})
.to($aboutTitle, 1, {scale: 2.2, ease:Linear.easeNone})
;

var sceneGalaxyScroll = new ScrollMagic.Scene({
  triggerElement: aboutTitle,
  offset: -230,
  duration: 430
})
.setTween(aboutTl)
.addIndicators({name:'4 galaxy'}) //indicate trigger meeting point
.addTo(controller);

//--- SCENE 2: Window fram zooms, profile and pic description appears
var windowTl = new TimelineMax();

windowTl
.add("zoom")
.to($headerHouse, 0.5, {scale: 1.6, y: "-=150", opacity: 0, ease:Linear.easeNone}, "zoom")
.to($aboutPic, 0.5, {scale: 1.6, y: "-=310", opacity: 0, ease:Linear.easeNone}, "zoom")
;

var windowGalaxyScroll = new ScrollMagic.Scene({
  triggerElement: aboutTitle,
  offset: +80,
  duration: 250
})
.setTween(windowTl)
.addIndicators({name:'5 galaxy'}) //indicate trigger meeting point
.addTo(controller);


//--- SCENE 3: Loop to close blinds

$aboutBlinders.each(function(){
  //build a tween
  var blinderTween = TweenMax.to($(this), 1, {rotationX: -11, ease:Linear.easeNone});

  //build scene
  var blindersScene = new ScrollMagic.Scene({
    triggerElement: aboutContainer,
    offset: 680,
    duration: 140
  })
  .setTween(blinderTween)
  .addIndicators({name:'blinds'}) // add indicators (requires plugin)
  .addTo(controller)
  ;
});



// ----------------  P I N S  I N  G A L A X Y
//----------------------------------------------------------------------
    //----------  P i n   P r o f i l e   P i c  -----------//
var pinProfile = new ScrollMagic.Scene({
  triggerElement: aboutContainer,
  offset: 350
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
  .add(TweenMax.to($contactTitlePath, 2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
  .add(TweenMax.to("path", 2.1, {stroke: "rgba(246,246,246, 0.4)", ease:Linear.easeNone}), 0);			// change color during the whole thing

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

//loop through elements
$contactPapereach.each(function(){
  //build a tween
  var tween = TweenMax.to($(this), 0.23, {margin: '+=20', x:'-=20', ease:Linear.easeNone});

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
