"use strict";function navigation(){$navContainer.toggleClass($active),$navButton.toggleClass($active),$navButton.toggleClass($notActive),$navButtonClose.toggleClass($active)}function navigationOff(){$navContainer.removeClass($active),$navButton.toggleClass($active),$navButton.toggleClass($notActive),$navButtonClose.toggleClass($active)}var $navButton=$(".nav__button"),$navButtonClose=$(".nav__button--icon-close"),$navContainer=$(".nav__list-container"),$active="active",$notActive="notActive",$home=$(".nav__list--home"),$about=$(".nav__list--about"),$gallery=$(".nav__list--gallery"),$contact=$(".nav__list--contact"),$headerDiv=$(".header"),$aboutDiv=$(".about"),$galleryDiv=$(".gallery"),$contactDiv=$(".contact"),$htmlBodyDiv=$("html, body"),$scrollTime=800;$(document).ready(function(){$navButton.click(function(){navigation()})}),$home.click(function(){$htmlBodyDiv.animate({scrollTop:$headerDiv.offset().top},$scrollTime),navigationOff()}),$about.click(function(){$htmlBodyDiv.animate({scrollTop:$aboutDiv.offset().top},$scrollTime),navigationOff()}),$gallery.click(function(){$htmlBodyDiv.animate({scrollTop:$galleryDiv.offset().top},$scrollTime),navigationOff()}),$contact.click(function(){$htmlBodyDiv.animate({scrollTop:$contactDiv.offset().top},$scrollTime),navigationOff()});