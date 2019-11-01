$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.navbar-collapse').toggleClass('open')
  })

  $("header").sticky({
    topSpacing:0,
    zIndex: 1020 
  });
})