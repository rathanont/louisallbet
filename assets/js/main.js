$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.navbar-collapse').toggleClass('open')
  })

  
  if (window.innerWidth < 1320) {
    $("header").sticky({
      topSpacing:0,
      zIndex: 1020 
    });
  }
})