!function(a){"use strict";a(".animsition-overlay").animsition({inClass:"overlay-slide-in-right",outClass:"overlay-slide-out-left",inDuration:1500,outDuration:800,linkElement:'a:not([target="_blank"]):not([href^="#"])',loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",loadingInner:'<span class="vl-preloader"></span>',timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!0,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",transition:function(e){window.location.href=e}}),a(".mi-testimonial-slider").slick({dots:!1,infinite:!0,arrows:!1,speed:500,slidesToShow:2,slidesToScroll:2,autoplay:!0,autoplaySpeed:6e3,pauseOnHover:!1,adaptiveHeight:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]});var e=document.querySelectorAll("img.mi-svgimage");SVGInjector(e),a("[data-fancybox]").fancybox({animationEffect:"zoom",buttons:["zoom","share","slideShow","fullScreen","download","close"]}),a("#particles-js").length&&particlesJS.load("particles-js","assets/json/particles.json",function(){console.log("callback - particles.js config loaded")}),a(".mi-header-menu li").each(function(){var e=function(e){var t=e.split("/");return t[t.length-1]}(window.location.href);a(this).find("a").attr("href")===e?a(this).find("a").addClass("active"):""===e?a(".mi-header-menu li:first-child a").addClass("active"):a(this).find("a").removeClass("active")}),a(".mi-progress").each(function(){var i=a(this),o=a(this).find(".mi-progress-percentage").text();a(window).on("load scroll",function(){var e=a(window).height(),t=a(window).scrollTop();i.offset().top<e?i.find(".mi-progress-active").css("width",o):t+e>i.offset().top+50&&i.find(".mi-progress-active").css("width",o)})}),a(".mi-header-toggler").on("click",function(e){e.preventDefault(),a(this).find("i").toggleClass("lni-close"),a(".mi-header").toggleClass("is-visible")}),a(function(){var i=a("#mi-contactform"),o=a(".form-message");a(i).submit(function(e){e.preventDefault();var t=a(i).serialize();a.ajax({type:"POST",url:a(i).attr("action"),data:t}).done(function(e){a(o).removeClass("alert-danger"),a(o).addClass("alert-success"),a(o).text(e),a('#mi-contactform input:not([type="submit"]), #mi-contactform textarea').val("")}).fail(function(e){a(o).removeClass("alert-success"),a(o).addClass("alert-danger"),""!==e.responseText?a(o).text(e.responseText):a(o).text("Oops! An error occured and your message could not be sent.")})})})}(jQuery);