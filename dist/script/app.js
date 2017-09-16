"use strict";function errorMsg(){window.alert("Error: Failed to retrieve information.")}function errorHandle(e,a){0===e.status?window.alert("Not connect.\n Verify Network."):404==e.status?window.alert("Requested API not found. [404]"):500==e.status?window.alert("Internal Server Error [500]."):"parsererror"===a?window.alert("Requested JSON parse failed."):"timeout"===a?window.alert("Time out error."):"abort"===a?window.alert("Ajax request aborted."):window.alert("Uncaught Error.\n"+e.responseText)}function navigation(){$navContainer.toggleClass($active),$navButton.toggleClass($active),$navButton.toggleClass($notActive),$navButtonClose.toggleClass($active)}function navigationOff(){$navContainer.removeClass($active),$navButton.toggleClass($active),$navButton.toggleClass($notActive),$navButtonClose.toggleClass($active)}function pathPrepare(e){var a=e[0].getTotalLength();e.css("stroke-dasharray",a),e.css("stroke-dashoffset",a)}var $headerDiv=$(".header"),$aboutDiv=$(".about"),$galleryDiv=$(".gallery"),$contactDiv=$(".contact"),$htmlBodyDiv=$("html, body"),$navButton=$(".nav__button"),$navButtonClose=$(".nav__button--icon-close"),$navContainer=$(".nav__list-container"),$active="active",$notActive="notActive",$home=$(".nav__list--home"),$about=$(".nav__list--about"),$gallery=$(".nav__list--gallery"),$contact=$(".nav__list--contact"),$scrollTime=800,$headerTitle=$(".header__title--name"),$headerLevel=$(".header__level"),$headerHouseWindowLeft=$(".header__house--window-left"),$headerHouseWindowRight=$(".header__house--window-right"),$headerHouseMain=$(".header__house--main"),$headerHouseFrame=$(".header__house--frame"),$headerHouseRoof=$(".header__house--roof"),$headerLogo=$(".header__logo"),$headerHouse=$(".header__house"),$ladder=$(".background-ladder"),header=".header",headerHouse=".header__house",headerTitle=".header__title--name",headerBox=".header__house--frame-box",headerBoxTwo=".header__house--frame-boxTwo",$aboutLevel=$(".about__level"),$aboutPic=$(".about__window-box"),$aboutTitle=$(".about__title"),$aboutTitleTwo=$(".about__title-two"),$aboutTitleThree=$(".about__title-three"),$aboutTitleFour=$(".about__title-four"),$aboutTitleFive=$(".about__title-five"),$aboutBlinders=$(".about__window-box--blinders-each"),$aboutBlindersBox=$(".about__window-box--blinders"),$aboutSkills=$(".about__skills"),$aboutProfile=$(".about__profile"),$aboutSkillsNumber=$(".about__sub-two"),$aboutProfileNumber=$(".about__sub-one"),aboutContainer=".about",aboutLevel=".about__level",aboutTitle=".about__title",aboutPic=".about__window-box",aboutSkills=".about__skills",aboutProfile=".about__profile",aboutSkillsNumber=".about__sub-one",aboutProfileNumber=".about__sub-two",$galleryNumber=$(".gallery__level"),$galleryTitle=$(".gallery__title"),$galleryProjects=$(".gallery__projects"),$galleryEachProject=$(".gallery__projects--each"),galleryContainer=".gallery",galleryNumber=".gallery__level",galleryTitle=".gallery__title",galleryProjects=".gallery__projects",galleryEachProject=".gallery__projects--each",$contactPapereach=$(".contact__paper--total"),$contactMoon=$(".contact__moon"),contactContainer=".contact",contactTitlePath=".contact__text--path",contactTitlePathAfter=".contact__text--path-after",contactPapereach=".contact__paper--total",contactMoon=".contact__moon",contactBox=".contact__box";$(document).ready(function(){$navButton.click(function(){navigation()})}),$home.click(function(){$htmlBodyDiv.animate({scrollTop:$headerDiv.offset().top},$scrollTime),navigationOff()}),$about.click(function(){$htmlBodyDiv.animate({scrollTop:$aboutDiv.offset().top},$scrollTime),navigationOff()}),$gallery.click(function(){$htmlBodyDiv.animate({scrollTop:$galleryDiv.offset().top},$scrollTime),navigationOff()}),$contact.click(function(){$htmlBodyDiv.animate({scrollTop:$contactDiv.offset().top},$scrollTime),navigationOff()});var controller=new ScrollMagic.Controller,pinHouse=new ScrollMagic.Scene({triggerElement:header,triggerHook:0,duration:1600}).setPin(headerHouse).addTo(controller),headerTl=new TimelineMax,titleText="boat",titleTextStrike=titleText.strike();headerTl.from($headerLevel,.7,{x:-25,opacity:0,ease:Elastic.easeOut.config(1,.3)}).from($headerHouseMain,.6,{y:-15,opacity:0,ease:Elastic.easeOut.config(1,.3)}).from($headerHouseRoof,.5,{y:-15,opacity:0,ease:Elastic.easeOut.config(1,.3)}).from($headerHouseFrame,.5,{y:-15,opacity:0,ease:Elastic.easeOut.config(1,.3)}).set($headerHouseWindowLeft,{rotationY:-180,transformOrigin:"0% 99%",opacity:0,zIndex:2}).set($headerHouseWindowRight,{rotationY:-180,transformOrigin:"0% 99%",opacity:0,zIndex:2}).from($headerHouseWindowLeft,.3,{rotationY:180,transformOrigin:"0% 99%",opacity:0,zIndex:2,ease:Bounce.easeOut}).from($headerHouseWindowRight,.3,{rotationY:180,transformOrigin:"99% 0%",opacity:0,zIndex:2,ease:Bounce.easeOut}).from($ladder,.7,{x:-15,opacity:0,ease:Linear.easeNone}).to($headerTitle,1.7,{text:"BRONTË",scale:1.3},"-=3").to($headerTitle,2,{text:"FRONTEND DEVELOPER",scale:1},"-=0.25");var homeTl=new TimelineMax;homeTl.to($headerLevel,1,{opacity:0,ease:Power2.easeOut}).to($headerLogo,2.3,{y:460,ease:Linear.easeNone}).to($headerTitle,1,{opacity:0,scale:1.8,x:"+=10",y:"+=100",zIndex:0,ease:Power2.easeOut});var headerTitle=new ScrollMagic.Scene({triggerElement:headerHouse,offset:280,duration:500,reverse:!0}).setTween(homeTl).addTo(controller),homeAboutTl=new TimelineMax;homeAboutTl.to($headerHouseRoof,.7,{rotationX:-90,transformOrigin:"0% 99%",ease:Linear.easeNone}).to($headerHouseMain,.7,{rotationX:-90,transformOrigin:"0% 99%",ease:Linear.easeNone});var headerAbout=new ScrollMagic.Scene({triggerElement:headerTitle,duration:800}).setTween(homeAboutTl).addTo(controller),galaxyTl=new TimelineMax;galaxyTl.set($aboutDiv,{backgroundSize:"100% 100%"}).to($aboutDiv,.1,{backgroundSize:"+=45% +=45%",autoRound:!1,ease:Circ.easeOut});var sceneGalaxyZoom=new ScrollMagic.Scene({triggerElement:aboutContainer,offset:100,duration:800}).setTween(galaxyTl).addTo(controller),aboutTl=new TimelineMax;aboutTl.from($aboutLevel,.2,{y:-15,opacity:0,ease:Linear.easeNone}).add("picAppear").to($headerHouseWindowLeft,1,{rotationY:-180,transformOrigin:"0% 99%",zIndex:2,ease:Linear.easeNone},"picAppear").to($headerHouseWindowRight,1,{rotationY:-180,transformOrigin:"99% 0%",zIndex:2,ease:Linear.easeNone}).from($aboutPic,.9,{scale:0,opacity:0,ease:Linear.easeNone},"picAppear").to($aboutTitleFive,1,{scale:4.6,y:"-=166",ease:Linear.easeNone},"+=1").to($aboutTitleFour,1,{scale:3.9,y:"-=126",ease:Linear.easeNone}).to($aboutTitleThree,1,{scale:3.5,y:"-=86",ease:Linear.easeNone}).to($aboutTitleTwo,1,{scale:2.7,y:"-=46",ease:Linear.easeNone}).to($aboutTitle,1,{scale:2.2,ease:Linear.easeNone});var sceneGalaxyScroll=new ScrollMagic.Scene({triggerElement:aboutTitle,offset:-230,duration:430}).setTween(aboutTl).addTo(controller),windowTl=new TimelineMax;windowTl.add("zoom").to($headerHouse,.5,{scale:1.6,y:"-=150",opacity:0,ease:Linear.easeNone},"zoom").to($aboutPic,.5,{scale:1.6,y:"-=303",opacity:0,ease:Linear.easeNone},"zoom");var windowGalaxyScroll=new ScrollMagic.Scene({triggerElement:aboutTitle,offset:80,duration:250}).setTween(windowTl).addTo(controller);$aboutBlinders.each(function(){var e=TweenMax.to($(this),1,{rotationX:-11,ease:Linear.easeNone,zIndex:-1});new ScrollMagic.Scene({triggerElement:aboutContainer,offset:680,duration:140}).setTween(e).addTo(controller)});var descriptionTl=new TimelineMax;descriptionTl.from($aboutProfileNumber,1,{x:"-=45",opacity:0,ease:Linear.easeNone}).from($aboutProfile,2,{x:"+=45",opacity:0,ease:Linear.easeNone},"+=0.5").from($aboutSkillsNumber,1,{x:"+=45",opacity:0,ease:Linear.easeNone},"+=0.5").from($aboutSkills,2,{x:"-=45",opacity:0,ease:Linear.easeNone},"+=0.5");var windowGalaxyScroll=new ScrollMagic.Scene({triggerElement:aboutProfile,offset:-80,duration:500}).setTween(descriptionTl).addTo(controller),pinProfile=new ScrollMagic.Scene({triggerElement:aboutContainer,offset:350}).setPin(aboutPic).addTo(controller);$.getJSON("/src/script/json/skills.json",function(e){for(var a=0;a<e.length;a++){var o=e[a].skillImage.skillImageLarge,t=e[a].skillImage.skillImageMedium,r=e[a].skillImage.skillImageSmall;$aboutSkills.append('<img class="skillSets" src='+r+' srcset="'+t+" 650w, "+o+' 1000w" alt="skillset logos">')}}).fail(errorHandle);var galleryTl=new TimelineMax;galleryTl.from($galleryTitle,2,{x:"-=45",opacity:0,ease:Linear.easeNone}).from($galleryNumber,2,{x:"+=45",opacity:0,ease:Linear.easeNone});var windowGalaxyScroll=new ScrollMagic.Scene({triggerElement:galleryContainer,offset:-250,duration:200}).setTween(galleryTl).addIndicators({name:"gallery title"}).addTo(controller);$.getJSON("/src/script/json/projects.json",function(e){for(var a=0;a<e.length;a++){var o=e[a].projectTitle,t=e[a].projectDescription,r=e[a].projectImage.projectImageSmall,n=e[a].projectImage.projectImageMedium,l=e[a].projectImage.projectImageLarge,i=e[a].projectLink;$galleryProjects.append('<a class="gallery__projects--link" href = '+i+'><li class = "gallery__projects--each"><div class = "gallery__projects--box"><div class = "gallery__projects--title">'+o+'</div><img class = "gallery__projects--image" src = '+r+" srcset = "+n+" 650w, "+l+' 1000w" alt = "projects"><div class = "gallery__projects--description">'+t+"</div></div></li></a>")}}).fail(errorHandle);var $contactTitlePath=$("path.contact__text--path");pathPrepare($contactTitlePath);var contactTween=(new TimelineMax).add(TweenMax.to($contactTitlePath,2,{strokeDashoffset:0,ease:Linear.easeNone})).add(TweenMax.to("path",2.1,{stroke:"rgba(246,246,246, 0.4)",ease:Linear.easeNone}),0),scene=new ScrollMagic.Scene({triggerElement:contactContainer,duration:200,tweenChanges:!0}).setTween(contactTween).addTo(controller);$contactPapereach.each(function(){var e=TweenMax.to($(this),.23,{margin:"+=20",x:"-=20",ease:Linear.easeNone});new ScrollMagic.Scene({triggerElement:this,offset:-90}).setTween(e).addTo(controller)});var moonTl=new TimelineMax;moonTl.delay(.1).from($contactMoon,1,{y:-30,opacity:0,ease:Bounce.easeOut});var sceneMoonDrop=new ScrollMagic.Scene({triggerElement:contactBox,offset:160}).setTween(moonTl).addTo(controller);ar.easeNone }).add("picAppear").to($headerHouseWindowLeft, 1, { rotationY: -180, transformOrigin: "0% 99%", zIndex: 2, ease: Linear.easeNone }, "picAppear").to($headerHouseWindowRight, 1, { rotationY: -180, transformOrigin: "99% 0%", zIndex: 2, ease: Linear.easeNone }).from($aboutPic, 0.9, { scale: 0, opacity: 0, ease: Linear.easeNone }, "picAppear").to($aboutTitleFive, 1, { scale: 4.6, y: "-=166", ease: Linear.easeNone }, "+=1").to($aboutTitleFour, 1, { scale: 3.9, y: "-=126", ease: Linear.easeNone }).to($aboutTitleThree, 1, { scale: 3.5, y: "-=86", ease: Linear.easeNone }).to($aboutTitleTwo, 1, { scale: 2.7, y: "-=46", ease: Linear.easeNone }).to($aboutTitle, 1, { scale: 2.2, ease: Linear.easeNone });

var sceneGalaxyScroll = new ScrollMagic.Scene({
  triggerElement: aboutTitle,
  offset: -230,
  duration: 430
}).setTween(aboutTl).addTo(controller);

//--- SCENE 2: Window fram zooms, profile and pic description appears
var windowTl = new TimelineMax();

windowTl.add("zoom").to($headerHouse, 0.5, { scale: 1.6, y: "-=150", opacity: 0, ease: Linear.easeNone }, "zoom").to($aboutPic, 0.5, { scale: 1.6, y: "-=303", opacity: 0, ease: Linear.easeNone }, "zoom");

var windowGalaxyScroll = new ScrollMagic.Scene({
  triggerElement: aboutTitle,
  offset: +80,
  duration: 250
}).setTween(windowTl).addTo(controller);

//--- SCENE 3: Loop to close blinds

$aboutBlinders.each(function () {
  //build a tween
  var blinderTween = TweenMax.to($(this), 1, { rotationX: -11, ease: Linear.easeNone, zIndex: -1 });

  //build scene
  var blindersScene = new ScrollMagic.Scene({
    triggerElement: aboutContainer,
    offset: 680,
    duration: 140
  }).setTween(blinderTween).addTo(controller);
});

//----------  A b o u t   D e s c r i p t i o n  -----------//
var descriptionTl = new TimelineMax();

descriptionTl.from($aboutProfileNumber, 1, { x: "-=45", opacity: 0, ease: Linear.easeNone }).from($aboutProfile, 2, { x: "+=45", opacity: 0, ease: Linear.easeNone }, "+=0.5").from($aboutSkillsNumber, 1, { x: "+=45", opacity: 0, ease: Linear.easeNone }, "+=0.5").from($aboutSkills, 2, { x: "-=45", opacity: 0, ease: Linear.easeNone }, "+=0.5");

var windowGalaxyScroll = new ScrollMagic.Scene({
  triggerElement: aboutProfile,
  offset: -80,
  duration: 500
}).setTween(descriptionTl).addTo(controller);

// ----------------  P I N S  I N  G A L A X Y
//----------------------------------------------------------------------
//----------  P i n   P r o f i l e   P i c  -----------//
var pinProfile = new ScrollMagic.Scene({
  triggerElement: aboutContainer,
  offset: 350
}).setPin(aboutPic).addTo(controller);

// ----------------  A P P E N D (json file)
//----------------------------------------------------------------------
//----------  A p p e n d   S k i l l s  -----------//
$.getJSON("/src/script/json/skills.json", function (jsonSkill) {
  for (var i = 0; i < jsonSkill.length; i++) {
    var skillLarge = jsonSkill[i].skillImage.skillImageLarge;
    var skillMed = jsonSkill[i].skillImage.skillImageMedium;
    var skillSmall = jsonSkill[i].skillImage.skillImageSmall;

    //Append them to div
    $aboutSkills.append('<img class="skillSets" src=' + skillSmall + ' srcset="' + skillMed + ' 650w, ' + skillLarge + ' 1000w" alt="skillset logos">');
  }
}).fail(errorHandle); //error handle


//==========================================================================
//         G A L L E R Y
//==========================================================================

// ----------------  T I T L E
//----------------------------------------------------------------------
// comeback
var galleryTl = new TimelineMax();

galleryTl.from($galleryTitle, 2, { x: "-=45", opacity: 0, ease: Linear.easeNone }).from($galleryNumber, 2, { x: "+=45", opacity: 0, ease: Linear.easeNone });

var windowGalaxyScroll = new ScrollMagic.Scene({
  triggerElement: galleryContainer,
  offset: -250,
  duration: 200
}).setTween(galleryTl).addIndicators({ name: 'gallery title' }) //indicate trigger meeting point
.addTo(controller);

// ----------------  A P P E N D (json file)
//----------------------------------------------------------------------
//----------  A p p e n d   P r o j e c t s  -----------//
$.getJSON("/src/script/json/projects.json", function (jsonProject) {
  for (var i = 0; i < jsonProject.length; i++) {
    var projectTitle = jsonProject[i].projectTitle;
    var projectDescription = jsonProject[i].projectDescription;
    var projectImageSmall = jsonProject[i].projectImage.projectImageSmall;
    var projectImageMedium = jsonProject[i].projectImage.projectImageMedium;
    var projectImageLarge = jsonProject[i].projectImage.projectImageLarge;
    var projectLink = jsonProject[i].projectLink;

    $galleryProjects.append('<a class="gallery__projects--link" href = ' + projectLink + '><li class = "gallery__projects--each"><div class = "gallery__projects--box"><div class = "gallery__projects--title">' + projectTitle + '</div><img class = "gallery__projects--image" src = ' + projectImageSmall + ' srcset = ' + projectImageMedium + ' 650w, ' + projectImageLarge + ' 1000w" alt = "projects"><div class = "gallery__projects--description">' + projectDescription + '</div></div></li></a>');
  }
}).fail(errorHandle); //error handle


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
var contactTween = new TimelineMax().add(TweenMax.to($contactTitlePath, 2, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
.add(TweenMax.to("path", 2.1, { stroke: "rgba(246,246,246, 0.4)", ease: Linear.easeNone }), 0); // change color during the whole thing

// build scene
var scene = new ScrollMagic.Scene({
  triggerElement: contactContainer,
  duration: 200,
  tweenChanges: true
}).setTween(contactTween).addTo(controller);

// * * * ---- N o t e : Gets length of contact svg (Uncomment to get value on console)
// var len = $("#contact__text--path").get(0).getTotalLength();
// console.log(len);


//----------  C O N T A C T   P A P E R -----------//

//loop through elements
$contactPapereach.each(function () {
  //build a tween
  var tween = TweenMax.to($(this), 0.23, { margin: '+=20', x: '-=20', ease: Linear.easeNone });

  //build scene
  var paperScene = new ScrollMagic.Scene({
    triggerElement: this,
    offset: -90
  }).setTween(tween).addTo(controller);
});

//----------  C O N T A C T   M O O N -----------//
var moonTl = new TimelineMax();

moonTl.delay(0.1).from($contactMoon, 1, { y: -30, opacity: 0, ease: Bounce.easeOut });

var sceneMoonDrop = new ScrollMagic.Scene({
  triggerElement: contactBox,
  offset: 160
}).setTween(moonTl).addTo(controller);