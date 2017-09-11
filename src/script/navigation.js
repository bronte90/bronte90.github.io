'use strict';



//////////////////
//  VARIABLES  //

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



////////////////////
//  MENU TOGGLE  //

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



//////////////////////
//  SMOOTH SCROLL  //
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
