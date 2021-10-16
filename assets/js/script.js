$(function () {
   'use strict';

   /* Top Header New Slider Js Start */
   $('.top_header_news').slick({
      arrows: false,
      vertical: true,
      verticalSwiping: true,
      autoplay:true,
   });
   /* //Top Header New Slider Js End */


   /* Featured Category Slider Section Js Start */
   $('.featured_category_slider').slick({
      slidesToShow: 10,
      slidesToScroll: 3,
      prevArrow: '<i class="fas fa-long-arrow-alt-left featured_slide_icon slider_icon"></i>',
      nextArrow: '<i class="fas fa-long-arrow-alt-right featured_slide_icon slider_icon"></i>',
   })

   /* //Featured Category Slider Section Js End */
})