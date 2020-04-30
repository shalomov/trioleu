/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/about/about.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/about/about.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.about-info_tabs a').click(function (e) {
  e.preventDefault();
  var tab_id = $(this).attr('data-tab');
  $('.about-info_tabs a').removeClass('current-about');
  $('.about-tab_content').removeClass('current-about');
  $(this).addClass('current-about');
  $("#" + tab_id).addClass('current-about');
});

/***/ }),

/***/ "./src/blocks/modules/career/career.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/career/career.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.direction-jobs ul li').click(function () {
  $('.direction-jobs ul li').removeClass('active-position');
  $(this).addClass('active-position');
});
$('.job-item').click(function () {
  $(this).toggleClass('active-job_item');
  $(this).next().toggle();
}); // attach cv
// ;( function( $, window, document, undefined )
// {
// 	$( '.resume-add_cv' ).each( function()
// 	{
// 		var $input	 = $( this ),
// 			$label	 = $input.next( 'label' ),
// 			labelVal = $label.html();
// 		$input.on( 'change', function( e )
// 		{
// 			var fileName = '';
// 			if( this.files && this.files.length > 1 )
// 				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
// 			else if( e.target.value )
// 				fileName = e.target.value.split( '\\' ).pop();
// 			if( fileName )
// 				$label.find( 'span' ).html( fileName );
// 			else
// 				$label.html( labelVal );
// 		});
// 		$input
// 		.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
// 		.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
// 	});
// })( jQuery, window, document );
// attach cv end 

$('.slider-career').slick({
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: $('.prev-slide'),
  nextArrow: $('.next-slide'),
  responsive: [{
    breakpoint: 992,
    settings: {
      dots: false,
      arrows: false,
      prevArrow: false,
      nextArrow: false
    }
  }]
});
$('.slider-success').slick({
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000
});
$('.co-worker-slider').slick({
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  dots: true,
  arrows: true,
  autoplaySpeed: 3000,
  prevArrow: $('.prev-co_worker'),
  nextArrow: $('.next-co_worker'),
  responsive: [{
    breakpoint: 992,
    settings: {
      dots: false,
      autoplay: true
    }
  }]
});

/***/ }),

/***/ "./src/blocks/modules/codevelopment/codevelopment.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/codevelopment/codevelopment.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if ($('.codev').length > 0) {
  var scrollTrackingCodev = function scrollTrackingCodev() {
    if (block_show) {
      return false;
    }

    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.co-development_list').offset().top;
    var eh = $('.co-development_list').outerHeight();
    var dh = $(document).height();

    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
      block_show = true;
      $('.co-development-count').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 1500,
          easing: 'swing',
          step: function step(now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  };

  var scrollTrackingSecond = function scrollTrackingSecond() {
    if (block_show_second) {
      return false;
    }

    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.codev-innov_list').offset().top;
    var eh = $('.codev-innov_list').outerHeight();
    var dh = $(document).height();

    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
      block_show_second = true;
      $('.codev-count').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: 'swing',
          step: function step(now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  };

  var block_show = false;
  $(window).scroll(function () {
    scrollTrackingCodev();
  });
  $(document).ready(function () {
    scrollTrackingCodev();
  });
  var block_show_second = false;
  $(window).scroll(function () {
    scrollTrackingSecond();
  });
  $(document).ready(function () {
    scrollTrackingSecond();
  });
}

$(' .codev-wrapp .footer-form_btn').click(function (e) {
  e.preventDefault();
  $('.footer-form').addClass('d-block');
  $('body').addClass('implementations-modal');
});

/***/ }),

/***/ "./src/blocks/modules/contacts/contacts.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/contacts/contacts.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.contacts-info_tabs a').click(function (e) {
  e.preventDefault();
  var tab_id = $(this).attr('data-tab');
  $('.contacts-info_tabs a').removeClass('current-contacts');
  $('.contacts-tab_content').removeClass('current-contacts');
  $(this).addClass('current-contacts');
  $("#" + tab_id).addClass('current-contacts');
});
$('.contacts-tab_content .cont-modal').click(function (e) {
  // hidden input
  $('#fperson').val($(this).closest('.contact-item_tabs').find('h3').text());
  $('#fperson_email').val($(this).closest('.contact-item_tabs').find('.person-email').val()); // hidden input end
});
$('.cont-modal').click(function (e) {
  e.preventDefault();
  var target = $(e.target);
  var authorName = target.siblings('h3').text();
  $('.contacts-modal .message-to').text(authorName);
  $('body').addClass('cont-modal-active');
  $('.contacts-modal').fadeIn();
  $(document).mouseup(function (e) {
    var div = $(".contacts-modal_wrapp");

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('body').removeClass('cont-modal-active');
      $('.contacts-modal').fadeOut();
    }
  });
  $('.contacts-modal_wrapp .modal-reg_close').click(function () {
    $('.contacts-modal').fadeOut();
    $('body').removeClass('cont-modal-active');
  });
});

/***/ }),

/***/ "./src/blocks/modules/documents/documents.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/documents/documents.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.doc-tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('.doc-tabs li').removeClass('current');
    $('.doc-tab_content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  }); // filter content toggle

  $('.products-list_item > a').click(function (e) {
    $(this).toggleClass('active-elem');

    if ($('.products-list_item > .active-elem').length > 1) {
      $('.products-list_item > a').removeClass('active-elem');
      $(this).toggleClass('active-elem');
    }
  });
  $('.products-list a , .read-more_link').click(function (e) {
    e.preventDefault();
  });
  $('.search-results_page .read-more_link').unbind('click'); // filter content toggle
  //

  $('.lines-list li a').click(function (e) {
    var targetItem = event.target;
    $('.lines-list li a').removeClass('active-line');
    $(targetItem).addClass('active-line');
  }); //
});

/***/ }),

/***/ "./src/blocks/modules/faq/faq.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/faq/faq.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.faq-title').click(function () {
  if ($(this).next('.faq-content').is(":visible")) {
    $(this).removeClass('active-faq');
  } else if ($(this).next('.faq-content').is(":hidden")) {
    $(this).addClass('active-faq');
  }
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('input[type="checkbox"].form-control').change(function () {
    if ($(this).attr('required')) {
      if ($(this).is(':checked', true)) {
        $(this).next('label').removeClass('req-input');
      } else {
        $(this).next('label').addClass('req-input');
      }
    }
  });
  $('#resume-add_cv').change(function () {
    if ($(this).attr('required')) {
      if ($('#resume-add_cv').length) {
        if ($('#resume-add_cv').is(":invalid")) {
          $('.resume-cv_label').css('border-color', '#dc3545');
        } else if ($('#resume-add_cv').is(":valid")) {
          $('.resume-cv_label').css('border-color', '#28a745');
        }
      }
    }
  }); // $('.form-validation').submit(function (event) {
  //     let $form = $(this);
  //     event.preventDefault();
  //     if ($($form)[0].checkValidity() === false) {
  //         event.stopPropagation();
  //         $($form).addClass('was-validated');
  //         if ($('#resume-add_cv').length) {
  //           if($('input[type="checkbox"].form-control').length) {
  //             if ( $('input[type="checkbox"].form-control').is(":valid")  ) {
  //               $('.was-validated input[type=checkbox].form-control + label').removeClass('req-input');
  //             } else {
  //               $('.was-validated input[type=checkbox].form-control + label').addClass('req-input');
  //             }
  //           }
  //         }
  //         // Attach your CV
  //         if ($('#resume-add_cv').length) {
  //           if ( $('#resume-add_cv').is(":invalid")  ) {
  //             $('.resume-cv_label').css('border-color','#dc3545');
  //           } else if ( $('#resume-add_cv').is(":valid")  ) {
  //               $('.resume-cv_label').css('border-color','#28a745');
  //           }
  //         }
  //         // Attach your CV end
  //     } else {
  //       $.ajax({
  //         type: $form.attr('method'),
  //         url: $form.attr('action'),
  //         data: $form.serialize(),
  //         success  : function () {
  //           $form.removeClass('was-validated');
  //         }
  //       });
  //     }
  // });

  $('input[type="email"]').attr("pattern", "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
  $('.footer-contact_us').click(function (e) {
    e.preventDefault();
    $('body').addClass('modal-active');
    $('.footer-modal').fadeIn();
    $(document).mouseup(function (e) {
      var div = $(".footer-modal_wrapp");

      if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('body').removeClass('modal-active');
        $('.footer-modal').fadeOut();
      }
    });
    $('.footer-modal_wrapp .modal-reg_close').click(function () {
      $('.footer-modal').fadeOut();
      $('body').removeClass('modal-active');
    });
  }); // cookies

  $('.cookies').fadeIn();
  $('.cookies-agree').click(function () {
    $('.cookies').fadeOut();
  });
}); // cookies end

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.burger-toggle').click(function () {
  $(this).toggleClass('active-burger');
  $('.header-sublist').removeClass('show-sublist');
  $('.region-list a i').removeClass('rotate-i');
  $('.header-list').slideToggle(200).toggleClass('opened');
});
$('.search-btn').click(function (e) {
  e.preventDefault();
  $('.overlay').css('display', 'flex');
  $('body').addClass('search-modal-active');
});
$('.clear-img').click(function () {
  $('.overlay').css('display', 'none');
  $('.search-form')[0].reset();
  $('body').removeClass('search-modal-active');
  $('#autocomplete-results div , #autocomplete-results p').remove();
  $('#autocomplete-results').removeClass('ss-search-form__results--visible');
  $('.search-form')[0].reset();
});
$(document).mouseup(function (e) {
  var div = $(".search-wrapp");

  if (!div.is(e.target) && div.has(e.target).length === 0) {
    $('.overlay').css('display', 'none');
    $('body').removeClass('search-modal-active');
    $('#autocomplete-results div, #autocomplete-results p').remove();
    $('#autocomplete-results').removeClass('ss-search-form__results--visible');
    $('.search-form')[0].reset();
  }
});
$('.tabs a').click(function () {
  var tab_id = $(this).attr('data-tab');
  $('.tabs a').removeClass('current');
  $('.tab-content').removeClass('current');
  $(this).addClass('current');
  $("#" + tab_id).addClass('current');
});
$('.lines-info_tabs a').click(function (e) {
  e.preventDefault();
  var tab_id = $(this).attr('data-tab');
  $('.lines-info_tabs a').removeClass('current-lines');
  $('.lines-tab_content').removeClass('current-lines');
  $(this).addClass('current-lines');
  $("#" + tab_id).addClass('current-lines');
});
$('.form-register-tabs a').click(function (e) {
  e.preventDefault();
  var tab_id = $(this).attr('data-tab');
  $('.form-register-tabs a').removeClass('current-reg');
  $('.tab-register_content').removeClass('current-reg');
  $(this).addClass('current-reg');
  $("#" + tab_id).addClass('current-reg');
});

if ($(window).width() < 991) {
  $('.lang-item a').click(function (e) {
    e.preventDefault();
    var langElem = $(this).next('.header-sublist');
    langElem.toggle();
    var langElemTarget = langElem.parent('li');
    $(document).mouseup(function (e) {
      if (!langElemTarget.is(e.target) && langElemTarget.has(e.target).length === 0) {
        langElem.css('display', 'none');
      }
    });
  });
  $('.header-list > li > a').click(function (e) {
    $(this).next('.header-sublist').toggleClass('show-sublist');

    if ($('.header-list > li > .show-sublist').length > 1) {
      $('.header-list > li > a').next('.header-sublist').removeClass('show-sublist');
      $('.region-list > a > i').removeClass('rotate-i');
      $(this).next('.header-sublist').toggleClass('show-sublist');
    }
  });
  $('.region-list > a').click(function () {
    $(this).find('i').toggleClass('rotate-i');
  });
  $('.header-list .hide-sublist > .header-sublist').remove();
}

$('select').niceSelect();
$('.sticky-nav_list .nav-link, .makeorder').bind('click.smoothscroll', function (event) {
  event.preventDefault();
  var target = this.hash,
      $target = $(target);

  if ($(window).width() >= 767) {
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 90
    }, 900, 'swing');
  } else if ($(window).width() >= 320) {
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 60
    }, 900, 'swing');
  }
}); // modal reg
// if ($('.modal-reg').length !== 0 ) {
//     $('.dwnld-link , .login-btn , .product-info .dwld-btn , .about-info .page-btn').click( function() {
// }

$('.login-btn').click(function () {
  $('.modal-reg').fadeIn();
  $('body').addClass('reg-modal-active');
  $(document).mouseup(function (e) {
    var div = $(".register-wrapp");

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      hideModal();
      $('body').removeClass('reg-modal-active');
    }
  });
  return false;
});
$('.modal-reg_close').click(function () {
  hideModal();
  $('body').removeClass('reg-modal-active');
});
$('.forgot-pass_link').click(function (e) {
  e.preventDefault();
  $('.reset-wrapp').css('display', 'flex');
  $('.go-back').click(function (e) {
    e.preventDefault();
    $('.reset-wrapp').css('display', 'none');
  });
}); // modal reg end
// modal functions
// function successSendResetPass() {
//     $('.success-form_row').css('display','flex');
//     $('.reset-form_row').css('display','none');
//     setTimeout(hideModal, 2000);
// }
// function createNewPass() {
//     $('.new-pass_wrapp').css('display','flex');
//     $('.new-pass_row').css('display','flex');
//     $('.success-pass_row').css('display','none');
//     $('.modal-reg').fadeIn();
//     $('body').addClass('reg-modal-active');
// }
// function successPass() {
//     $('.new-pass_wrapp').css('display','flex');
//     $('.new-pass_row').css('display','none');
//     $('.success-pass_row').css('display','flex');
//     setTimeout(hideModal, 2000);
//     setTimeout(function () {
//         location = location.origin + location.pathname + '?to_auth=true';
//     },2500);
// }
// function successCreateAcc() {
//     $('.new-acc_wrapp').css('display','flex');
//     setTimeout(hideModal, 2000);
// }

function hideModal() {
  $('.modal-reg').fadeOut("slow", function () {
    $(".register-wrapp div").removeAttr("style");
  });
} // modal functions end

/***/ }),

/***/ "./src/blocks/modules/home/home.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/home/home.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.main-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: $('.prev-slide_main'),
    nextArrow: $('.next-slide_main'),
    responsive: [{
      breakpoint: 992,
      settings: {
        dots: false,
        arrows: false
      }
    }]
  });
});

/***/ }),

/***/ "./src/blocks/modules/implementations/implementations.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/implementations/implementations.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.our-projects li').click(function () {
  $('.our-projects li').removeClass('active-project');
  $(this).addClass('active-project');
});
$(' .desc-info .main-link').click(function (e) {
  e.preventDefault();
  $('.footer-form').addClass('d-block');
  $('body').addClass('implementations-modal');
});
$('.modal-imp_close').click(function () {
  $('.footer-form').removeClass('d-block');
  $('body').removeClass('implementations-modal');
  $('.block-form').removeClass('hide-block_form');
  $('.callback-form').removeClass('callback-active');
});
$(document).mouseup(function (e) {
  var div = $(" .block-form , .callback-form");

  if (!div.is(e.target) && div.has(e.target).length === 0) {
    $('.footer-form').removeClass('d-block');
    $('body').removeClass('implementations-modal');
    $('.block-form').removeClass('hide-block_form');
    $('.callback-form').removeClass('callback-active');
  }
});
$('.footer-form_btn.call-me').click(function (e) {
  e.preventDefault();
  $('.block-form').addClass('hide-block_form');
  $('.callback-form').addClass('callback-active');
});

/***/ }),

/***/ "./src/blocks/modules/libs/jquery.nice-select.min.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/libs/jquery.nice-select.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
      var s = t.next(),
          n = t.find("option"),
          i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
        var n = e(this),
            i = n.data("display");
        s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()));
      });
    }

    if ("string" == typeof t) return "update" == t ? this.each(function () {
      var t = e(this),
          n = e(this).next(".nice-select"),
          i = n.hasClass("open");
      n.length && (n.remove(), s(t), i && t.next().trigger("click"));
    }) : "destroy" == t ? (this.each(function () {
      var t = e(this),
          s = e(this).next(".nice-select");
      s.length && (s.remove(), t.css("display", ""));
    }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
    this.hide(), this.each(function () {
      var t = e(this);
      t.next().hasClass("nice-select") || s(t);
    }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
      var s = e(this);
      e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus();
    }), e(document).on("click.nice_select", function (t) {
      0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
    }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
      var s = e(this),
          n = s.closest(".nice-select");
      n.find(".selected").removeClass("selected"), s.addClass("selected");
      var i = s.data("display") || s.text();
      n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change");
    }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
      var s = e(this),
          n = e(s.find(".focus") || s.find(".list .option.selected"));
      if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;

      if (40 == t.keyCode) {
        if (s.hasClass("open")) {
          var i = n.nextAll(".option:not(.disabled)").first();
          i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"));
        } else s.trigger("click");

        return !1;
      }

      if (38 == t.keyCode) {
        if (s.hasClass("open")) {
          var l = n.prevAll(".option:not(.disabled)").first();
          l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"));
        } else s.trigger("click");

        return !1;
      }

      if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");else if (9 == t.keyCode && s.hasClass("open")) return !1;
    });
    var n = document.createElement("a").style;
    return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
  };
}(jQuery);

/***/ }),

/***/ "./src/blocks/modules/partners/partners.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/partners/partners.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($('#map-partnership').length > 0) {
    var checkFilterImp = function checkFilterImp() {
      if (window.matchMedia("(min-width: 992px)").matches) {
        if ($('.map-list li.implantation-triol').hasClass('current-map_item')) {
          $('.prod-filter').fadeIn(100);
        } else {
          $('.filter-list li').removeClass('current-prod');
          $('.dot-map').removeClass(['ak06-show', 'tm01-show', 'at24-show', 'at27-show']);
          $('.prod-filter').fadeOut(100);
        }
      }
    };

    var checkFilterOffice = function checkFilterOffice() {
      if ($('.offices-triol').hasClass('current-map_item')) {
        $('.office-info').addClass('show-offices');
      } else {
        $('.office-info').removeClass('show-offices');
      }
    };

    var checkFilterWarehouse = function checkFilterWarehouse() {
      if ($('.warehouse-triol').hasClass('current-map_item')) {
        $('.warehouse-info').addClass('show-warehouse');
      } else {
        $('.warehouse-info').removeClass('show-warehouse');
      }
    };

    var checkFilterServices = function checkFilterServices() {
      if ($('.services-triol').hasClass('current-map_item')) {
        $('.services-info').addClass('show-services');
      } else {
        $('.services-info').removeClass('show-services');
      }
    };

    var checkDots = function checkDots() {
      if ($('.ak06-filter').hasClass('current-prod')) {
        $('.ak06-item_map').addClass('ak06-show');
      } else {
        $('.ak06-item_map').removeClass('ak06-show');
      }

      if ($('.tm01-filter').hasClass('current-prod')) {
        $('.tm01-item_map').addClass('tm01-show');
      } else {
        $('.tm01-item_map').removeClass('tm01-show');
      }

      if ($('.at24-filter').hasClass('current-prod')) {
        $('.at24-item_map').addClass('at24-show');
      } else {
        $('.at24-item_map').removeClass('at24-show');
      }

      if ($('.at27-filter').hasClass('current-prod')) {
        $('.at27-item_map').addClass('at27-show');
      } else {
        $('.at27-item_map').removeClass('at27-show');
      }
    };

    var usaProd = function usaProd() {
      var usLeftPos = $('.usa-elem').find('path').offset().left;
      var usTopPos = $('.usa-elem').find('path').offset().top;
      var usWidth = $('.usa-elem').find('path').get(0).getBBox().width;
      var usHeight = $('.usa-elem').find('path').get(0).getBBox().height;
      $('.usa-info_wrapp').offset({
        'left': usLeftPos,
        'top': usTopPos
      });
      $('.usa-info_wrapp').css({
        'width': usWidth,
        'height': usHeight
      });
    };

    var usaOffice = function usaOffice() {
      var usLeftPos = $('.usa-elem').find('path').offset().left;
      var usTopPos = $('.usa-elem').find('path').offset().top;
      var usWidth = $('.usa-elem').find('path').get(0).getBBox().width;
      var usHeight = $('.usa-elem').find('path').get(0).getBBox().height;
      $('.usa-office_info').offset({
        'left': usLeftPos,
        'top': usTopPos
      });
      $('.usa-office_info').css({
        'width': usWidth,
        'height': usHeight
      });
    };

    var france = function france() {
      var frLeftPos = $('.fr-elem').find('path').offset().left;
      var frTopPos = $('.fr-elem').find('path').offset().top;
      var frWidth = $('.fr-elem').find('path').get(0).getBBox().width;
      var frHeight = $('.fr-elem').find('path').get(0).getBBox().height;
      $('.fr-info_wrapp').offset({
        'left': frLeftPos,
        'top': frTopPos
      });
      $('.fr-info_wrapp').css({
        'width': frWidth,
        'min-height': frHeight
      });
    };

    var romania = function romania() {
      var roLeftPos = $('.ro-elem').find('path').offset().left;
      var roTopPos = $('.ro-elem').find('path').offset().top;
      var roWidth = $('.ro-elem').find('path').get(0).getBBox().width;
      var roHeight = $('.ro-elem').find('path').get(0).getBBox().height;
      $('.ro-info_wrapp').offset({
        'left': roLeftPos,
        'top': roTopPos
      });
      $('.ro-info_wrapp').css({
        'width': roWidth,
        'min-height': roHeight
      });
    };

    var ukraineProd = function ukraineProd() {
      var uaLeftPos = $('.ua-elem').find('path').offset().left;
      var uaTopPos = $('.ua-elem').find('path').offset().top;
      var uaWidth = $('.ua-elem').find('path').get(0).getBBox().width;
      var uaHeight = $('.ua-elem').find('path').get(0).getBBox().height;
      $('.ua-info_wrapp').offset({
        'left': uaLeftPos,
        'top': uaTopPos
      });
      $('.ua-info_wrapp').css({
        'width': uaWidth,
        'min-height': uaHeight
      });
    };

    var ukraineOffice = function ukraineOffice() {
      var uaLeftPos = $('.ua-elem').find('path').offset().left;
      var uaTopPos = $('.ua-elem').find('path').offset().top;
      var uaWidth = $('.ua-elem').find('path').get(0).getBBox().width;
      var uaHeight = $('.ua-elem').find('path').get(0).getBBox().height;
      uaTopPos = uaTopPos - 110;
      $('.ua-office_info').offset({
        'left': uaLeftPos,
        'top': uaTopPos
      });
      $('.ua-office_info').css({
        'width': uaWidth,
        'min-height': uaHeight
      });
    };

    var ukraineServices = function ukraineServices() {
      var uaLeftPos = $('.ua-elem').find('path').offset().left;
      var uaTopPos = $('.ua-elem').find('path').offset().top;
      var uaWidth = $('.ua-elem').find('path').get(0).getBBox().width;
      var uaHeight = $('.ua-elem').find('path').get(0).getBBox().height;
      uaTopPos = uaTopPos - 50;
      $('.ua-services_info').offset({
        'left': uaLeftPos,
        'top': uaTopPos
      });
      $('.ua-services_info').css({
        'width': uaWidth,
        'min-height': uaHeight
      });
    };

    var latAm = function latAm() {
      var latLeftPos = $('.lat-elem').find('path').offset().left;
      var latTopPos = $('.lat-elem').find('path').offset().top;
      var latWidth = $('.lat-elem').find('path').get(0).getBBox().width;
      var latHeight = $('.lat-elem').find('path').get(0).getBBox().height;
      $('.lat-info_wrapp').offset({
        'left': latLeftPos,
        'top': latTopPos
      });
      $('.lat-info_wrapp').css({
        'width': latWidth,
        'min-height': latHeight
      });
    };

    var indiaProduct = function indiaProduct() {
      var inLeftPos = $('.in-elem').find('path').offset().left;
      var inTopPos = $('.in-elem').find('path').offset().top;
      var inWidth = $('.in-elem').find('path').get(0).getBBox().width;
      var inHeight = $('.in-elem').find('path').get(0).getBBox().height;
      $('.in-info_wrapp').offset({
        'left': inLeftPos,
        'top': inTopPos
      });
      $('.in-info_wrapp').css({
        'width': inWidth,
        'min-height': inHeight
      });
    };

    var indiaService = function indiaService() {
      var inLeftPos = $('.in-elem').find('path').offset().left;
      var inTopPos = $('.in-elem').find('path').offset().top;
      var inWidth = $('.in-elem').find('path').get(0).getBBox().width;
      var inHeight = $('.in-elem').find('path').get(0).getBBox().height;
      inTopPos = inTopPos - 30;
      $('.in-services_info').offset({
        'left': inLeftPos,
        'top': inTopPos
      });
      $('.in-services_info').css({
        'width': inWidth,
        'min-height': inHeight
      });
    };

    var indonesiaProd = function indonesiaProd() {
      var idLeftPos = $('.id-elem').find('path').offset().left;
      var idTopPos = $('.id-elem').find('path').offset().top;
      var idWidth = $('.id-elem').find('path').get(0).getBBox().width;
      var idHeight = $('.id-elem').find('path').get(0).getBBox().height;
      $('.id-info_wrapp').offset({
        'left': idLeftPos,
        'top': idTopPos
      });
      $('.id-info_wrapp').css({
        'width': idWidth,
        'min-height': idHeight
      });
    };

    var indonesiaService = function indonesiaService() {
      var idLeftPos = $('.id-elem').find('path').offset().left;
      var idTopPos = $('.id-elem').find('path').offset().top;
      var idWidth = $('.id-elem').find('path').get(0).getBBox().width;
      var idHeight = $('.id-elem').find('path').get(0).getBBox().height;
      idTopPos = idTopPos - idHeight;
      $('.id-services_info').offset({
        'left': idLeftPos,
        'top': idTopPos
      });
      $('.id-services_info').css({
        'width': idWidth,
        'min-height': idHeight
      });
    };

    var iraq = function iraq() {
      var irqLeftPos = $('.irq-elem').find('path').offset().left;
      var irqTopPos = $('.irq-elem').find('path').offset().top;
      var irqWidth = $('.irq-elem').find('path').get(0).getBBox().width;
      var irqHeight = $('.irq-elem').find('path').get(0).getBBox().height;
      $('.irq-info_wrapp').offset({
        'left': irqLeftPos,
        'top': irqTopPos
      });
      $('.irq-info_wrapp').css({
        'width': irqWidth,
        'min-height': irqHeight
      });
    };

    var iranProd = function iranProd() {
      var irnLeftPos = $('.irn-elem').find('path').offset().left;
      var irnTopPos = $('.irn-elem').find('path').offset().top;
      var irnWidth = $('.irn-elem').find('path').get(0).getBBox().width;
      var irnHeight = $('.irn-elem').find('path').get(0).getBBox().height;
      $('.irn-info_wrapp').offset({
        'left': irnLeftPos,
        'top': irnTopPos
      });
      $('.irn-info_wrapp').css({
        'width': irnWidth,
        'min-height': irnHeight
      });
    };

    var iranServices = function iranServices() {
      var irnLeftPos = $('.irn-elem').find('path').offset().left;
      var irnTopPos = $('.irn-elem').find('path').offset().top;
      var irnWidth = $('.irn-elem').find('path').get(0).getBBox().width;
      var irnHeight = $('.irn-elem').find('path').get(0).getBBox().height;
      irnTopPos = irnTopPos - irnHeight;
      $('.irn-services_info').offset({
        'left': irnLeftPos,
        'top': irnTopPos
      });
      $('.irn-services_info').css({
        'width': irnWidth,
        'min-height': irnHeight
      });
    };

    var nigeria = function nigeria() {
      var ngLeftPos = $('.ng-elem').find('path').offset().left;
      var ngTopPos = $('.ng-elem').find('path').offset().top;
      var ngWidth = $('.ng-elem').find('path').get(0).getBBox().width;
      var ngHeight = $('.ng-elem').find('path').get(0).getBBox().height;
      $('.ng-info_wrapp').offset({
        'left': ngLeftPos,
        'top': ngTopPos
      });
      $('.ng-info_wrapp').css({
        'width': ngWidth,
        'min-height': ngHeight
      });
    };

    var thailand = function thailand() {
      var thaiLeftPos = $('.thai-elem').find('path').offset().left;
      var thaiTopPos = $('.thai-elem').find('path').offset().top;
      var thaiWidth = $('.thai-elem').find('path').get(0).getBBox().width;
      var thaiHeight = $('.thai-elem').find('path').get(0).getBBox().height;
      $('.thai-info_wrapp').offset({
        'left': thaiLeftPos,
        'top': thaiTopPos
      });
      $('.thai-info_wrapp').css({
        'width': thaiWidth,
        'min-height': thaiHeight
      });
    };

    var oman = function oman() {
      var omLeftPos = $('.om-elem').find('path').offset().left;
      var omTopPos = $('.om-elem').find('path').offset().top;
      var omWidth = $('.om-elem').find('path').get(0).getBBox().width;
      var omHeight = $('.om-elem').find('path').get(0).getBBox().height;
      $('.om-info_wrapp').offset({
        'left': omLeftPos,
        'top': omTopPos
      });
      $('.om-info_wrapp').css({
        'width': omWidth,
        'min-height': omHeight
      });
    };

    var kuwait = function kuwait() {
      var kuwLeftPos = $('.kuw-elem').find('path').offset().left;
      var kuwTopPos = $('.kuw-elem').find('path').offset().top;
      var kuwWidth = $('.kuw-elem').find('path').get(0).getBBox().width;
      var kuwHeight = $('.kuw-elem').find('path').get(0).getBBox().height;
      $('.kuw-info_wrapp').offset({
        'left': kuwLeftPos,
        'top': kuwTopPos
      });
      $('.kuw-info_wrapp').css({
        'width': kuwWidth,
        'min-height': kuwHeight
      });
    };

    var georgia = function georgia() {
      var geLeftPos = $('.ge-elem').find('path').offset().left;
      var geTopPos = $('.ge-elem').find('path').offset().top;
      var geWidth = $('.ge-elem').find('path').get(0).getBBox().width;
      var geHeight = $('.ge-elem').find('path').get(0).getBBox().height;
      $('.ge-info_wrapp').offset({
        'left': geLeftPos,
        'top': geTopPos
      });
      $('.ge-info_wrapp').css({
        'width': geWidth,
        'min-height': geHeight
      });
    };

    var turkey = function turkey() {
      var trLeftPos = $('.tr-elem').find('path').offset().left;
      var trTopPos = $('.tr-elem').find('path').offset().top;
      var trWidth = $('.tr-elem').find('path').get(0).getBBox().width;
      var trHeight = $('.tr-elem').find('path').get(0).getBBox().height;
      $('.tr-info_wrapp').offset({
        'left': trLeftPos,
        'top': trTopPos
      });
      $('.tr-info_wrapp').css({
        'width': trWidth,
        'min-height': trHeight
      });
    };

    var egypt = function egypt() {
      var egLeftPos = $('.eg-elem').find('path').offset().left;
      var egTopPos = $('.eg-elem').find('path').offset().top;
      var egWidth = $('.eg-elem').find('path').get(0).getBBox().width;
      var egHeight = $('.eg-elem').find('path').get(0).getBBox().height;
      $('.eg-info_wrapp').offset({
        'left': egLeftPos,
        'top': egTopPos
      });
      $('.eg-info_wrapp').css({
        'width': egWidth,
        'min-height': egHeight
      });
    };

    var argentina = function argentina() {
      var agLeftPos = $('.ag-elem').find('path').offset().left;
      var agTopPos = $('.ag-elem').find('path').offset().top;
      var agWidth = $('.ag-elem').find('path').get(0).getBBox().width;
      var agHeight = $('.ag-elem').find('path').get(0).getBBox().height;
      agTopPos = agTopPos - 30;
      $('.ag-info_wrapp').offset({
        'left': agLeftPos,
        'top': agTopPos
      });
      $('.ag-info_wrapp').css({
        'width': agWidth,
        'min-height': agHeight
      });
    };

    var columbia = function columbia() {
      var coLeftPos = $('.co-elem').find('path').offset().left;
      var coTopPos = $('.co-elem').find('path').offset().top;
      var coWidth = $('.co-elem').find('path').get(0).getBBox().width;
      var coHeight = $('.co-elem').find('path').get(0).getBBox().height;
      $('.co-info_wrapp').offset({
        'left': coLeftPos,
        'top': coTopPos
      });
      $('.co-info_wrapp').css({
        'width': coWidth,
        'min-height': coHeight
      });
    };

    var peru = function peru() {
      var perLeftPos = $('.per-elem').find('path').offset().left;
      var perTopPos = $('.per-elem').find('path').offset().top;
      var perWidth = $('.per-elem').find('path').get(0).getBBox().width;
      var perHeight = $('.per-elem').find('path').get(0).getBBox().height;
      $('.per-info_wrapp').offset({
        'left': perLeftPos,
        'top': perTopPos
      });
      $('.per-info_wrapp').css({
        'width': perWidth,
        'min-height': perHeight
      });
    };

    var uzbekistanProd = function uzbekistanProd() {
      var uzLeftPos = $('.uz-elem').find('path').offset().left;
      var uzTopPos = $('.uz-elem').find('path').offset().top;
      var uzWidth = $('.uz-elem').find('path').get(0).getBBox().width;
      var uzHeight = $('.uz-elem').find('path').get(0).getBBox().height;
      $('.uz-info_wrapp').offset({
        'left': uzLeftPos,
        'top': uzTopPos
      });
      $('.uz-info_wrapp').css({
        'width': uzWidth,
        'min-height': uzHeight
      });
    };

    var uzbekistanOffice = function uzbekistanOffice() {
      var uzLeftPos = $('.uz-elem').find('path').offset().left;
      var uzTopPos = $('.uz-elem').find('path').offset().top;
      var uzWidth = $('.uz-elem').find('path').get(0).getBBox().width;
      var uzHeight = $('.uz-elem').find('path').get(0).getBBox().height;
      uzTopPos = uzTopPos - 45;
      $('.uz-office_info').offset({
        'left': uzLeftPos,
        'top': uzTopPos
      });
      $('.uz-office_info').css({
        'width': uzWidth,
        'min-height': uzHeight
      });
    };

    var kazahstanProd = function kazahstanProd() {
      var kzLeftPos = $('.kz-elem').find('path').offset().left;
      var kzTopPos = $('.kz-elem').find('path').offset().top;
      var kzWidth = $('.kz-elem').find('path').get(0).getBBox().width;
      var kzHeight = $('.kz-elem').find('path').get(0).getBBox().height;
      $('.kz-info_wrapp').offset({
        'left': kzLeftPos,
        'top': kzTopPos
      });
      $('.kz-info_wrapp').css({
        'width': kzWidth,
        'min-height': kzHeight
      });
    };

    var kazahstanServices = function kazahstanServices() {
      var kzLeftPos = $('.kz-elem').find('path').offset().left;
      var kzTopPos = $('.kz-elem').find('path').offset().top;
      var kzWidth = $('.kz-elem').find('path').get(0).getBBox().width;
      var kzHeight = $('.kz-elem').find('path').get(0).getBBox().height;
      kzTopPos = kzTopPos - 25;
      $('.kz-services_info').offset({
        'left': kzLeftPos,
        'top': kzTopPos
      });
      $('.kz-services_info').css({
        'width': kzWidth,
        'min-height': kzHeight
      });
    };

    var chinaServices = function chinaServices() {
      var cnLeftPos = $('.cn-elem').find('path').offset().left;
      var cnTopPos = $('.cn-elem').find('path').offset().top;
      var cnWidth = $('.cn-elem').find('path').get(0).getBBox().width;
      var cnHeight = $('.cn-elem').find('path').get(0).getBBox().height;
      cnTopPos = cnTopPos - 15;
      $('.cn-services_info').offset({
        'left': cnLeftPos,
        'top': cnTopPos
      });
      $('.cn-services_info').css({
        'width': cnWidth,
        'min-height': cnHeight
      });
    };

    var uae = function uae() {
      var uaeLeftPos = $('.uae-elem').find('path').offset().left;
      var uaeTopPos = $('.uae-elem').find('path').offset().top;
      var uaeWidth = $('.uae-elem').find('path').get(0).getBBox().width;
      var uaeHeight = $('.uae-elem').find('path').get(0).getBBox().height;
      uaeTopPos = uaeTopPos - 70;
      $('.uae-office_info').offset({
        'left': uaeLeftPos,
        'top': uaeTopPos
      });
      $('.uae-office_info').css({
        'width': uaeWidth,
        'min-height': uaeHeight
      });
    };

    var scrollTracking = function scrollTracking() {
      if (block_show) {
        return false;
      }

      var wt = $(window).scrollTop();
      var wh = $(window).height();
      var et = $('.innovation-list').offset().top;
      var eh = $('.innovation-list').outerHeight();
      var dh = $(document).height();

      if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
        block_show = true;
        $('.count').each(function () {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 2000,
            easing: 'swing',
            step: function step(now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
      }
    };

    $('.partners-tabs a').click(function (e) {
      e.preventDefault();
      var tab_id = $(this).attr('data-tab');
      $('.partners-tabs a').removeClass('current-partners');
      $('.partners-tab_content').removeClass('current-partners');
      $(this).addClass('current-partners');
      $("#" + tab_id).addClass('current-partners');
    });
    $('.map-info_mobile li').click(function (e) {
      e.preventDefault();
      var tab_id = $(this).attr('data-tab');
      $('.map-info_mobile li').removeClass('current-mapinfo');
      $('.mapinfo-tab_content').removeClass('current-mapinfo');
      $(this).addClass('current-mapinfo');
      $("#" + tab_id).addClass('current-mapinfo');
    });
    $('.title-mobile').click(function () {
      $(this).next().toggleClass('mapinfo-list_show');
    });
    $('.map-list li').click(function () {
      if ($('.map-list li.current-map_item').length > 0) {
        $('.map-list li').removeClass('current-map_item');
      }

      $(this).addClass('current-map_item');
      checkFilterImp();
      checkFilterOffice();
      checkFilterWarehouse();
      checkFilterServices();
    });
    checkFilterImp();
    checkFilterOffice();
    checkFilterWarehouse();
    checkFilterServices();
    $('.filter-list li').click(function () {
      $(this).toggleClass('current-prod');

      if ($('.filter-list li.current-prod').length > 1) {
        $('.filter-list li').removeClass('current-prod');
        $(this).toggleClass('current-prod');
      }

      checkDots();
    });
    checkDots();
    usaProd();
    usaOffice();
    france();
    romania();
    ukraineProd();
    ukraineOffice();
    ukraineServices();
    latAm();
    indiaProduct();
    indiaService();
    indonesiaProd();
    indonesiaService();
    iraq();
    iranProd();
    iranServices();
    nigeria();
    thailand();
    oman();
    kuwait();
    georgia();
    turkey();
    egypt();
    argentina();
    columbia();
    peru();
    uzbekistanProd();
    uzbekistanOffice();
    kazahstanProd();
    kazahstanServices();
    chinaServices();
    uae();
    var block_show = false;
    $(window).scroll(function () {
      scrollTracking();
    });
    $(document).ready(function () {
      scrollTracking();
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/patents/patents.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/patents/patents.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.patent-tabs li').click(function () {
  var tab_id = $(this).attr('data-tab');
  $('.patent-tabs li').removeClass('current');
  $('.patent-tab_content').removeClass('current');
  $(this).addClass('current');
  $("#" + tab_id).addClass('current');
});
$('.patents-list_products li').click(function () {
  var tab_id = $(this).attr('data-active');
  $('.patents-list_products li').removeClass('active-patent_product');
  $('.content-patents_item').removeClass('active-patent_product');

  if ($(this).hasClass('active-patent_product') == false) {
    $('.patents-list_products li').removeClass('active-patent_product');
    $(this).addClass('active-patent_product');
  }

  $("#" + tab_id).addClass('active-patent_product');
});

/***/ }),

/***/ "./src/blocks/modules/product/product.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/product/product.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.lines-tab_content ul li ul').parent('li').css({
  'color': '#000',
  'font-weight': 'bold'
}); // Sticky navbar
// =========================

$(document).ready(function () {
  // Custom function which toggles between sticky class (is-sticky)
  var stickyToggle = function stickyToggle(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;

    if (scrollElement.scrollTop() >= stickyTop) {
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    } else {
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  }; // Find all data-toggle="sticky-onscroll" elements


  $('[data-toggle="sticky-onscroll"]').each(function () {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page

    sticky.before(stickyWrapper);
    sticky.addClass('sticky'); // Scroll & resize events

    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
      stickyToggle(sticky, stickyWrapper, $(this));
    }); // On page load

    stickyToggle(sticky, stickyWrapper, $(window));
  });
});
$(".custom-wrapp_table table , .custom-wrapp_table table tr , .custom-wrapp_table table td , .custom-wrapp_table table th , .custom-wrapp_table table div").removeAttr("style");
$(".custom-wrapp_table table , .custom-wrapp_table table tr , .custom-wrapp_table table td , .custom-wrapp_table table th , .custom-wrapp_table table div").removeAttr("width");

/***/ }),

/***/ "./src/blocks/modules/service/service.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/service/service.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// team-item text modal
$('.sup-team .cont-modal').click(function (e) {
  $('#fperson').val($(this).closest('.team-item').find('h3').text());
  $('#fperson_email').val($(this).closest('.team-item').find('.person-email').val());
}); // team-item text modal end

/***/ }),

/***/ "./src/blocks/modules/solution-teasier/solution-teasier.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/solution-teasier/solution-teasier.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.reviews-slider').slick({
  infinite: true,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500
});
$('.form-register-teasier-tabs a').click(function (e) {
  e.preventDefault();
  var tab_id = $(this).attr('data-tab');
  $('.form-register-teasier-tabs a').removeClass('current-teasier_reg');
  $('.tab-signin_teasier__content').removeClass('current-teasier_reg');
  $(this).addClass('current-teasier_reg');
  $("#" + tab_id).addClass('current-teasier_reg');
});
$('.forgot-pass_teasier').click(function (event) {
  event.preventDefault();
  $('.wrapp-form_reset__teasier').addClass('show-modal_reset ');
  $('.wrapp-forms_teasier').addClass('forms-teasier_hide');
}); // сообщение "Успешная регистрация в Тизер"

function successNewAcc() {
  $('.success-message_teasier__reg').addClass('success-reg_teasier__show');
  $('.wrapp-forms_teasier').addClass('forms-teasier_hide');
} // сообщение "Успешная регистрация в Тизер" /
// сообщение "перейдите по ссылке в почте"


function msgResetPass() {
  $('.success-message_teasier').addClass('success-message_send__teasier');
  $('.wrapp-form_reset__teasier').removeClass('show-modal_reset');
} // сообщение "перейдите по ссылке в почте" /
// после перехода по ссылке в почте


function newPass() {
  $('.wrapp-form_newpass__teasier').addClass('wrapp-form_newpass__show');
  $('.wrapp-forms_teasier').addClass('forms-teasier_hide');
} // после перехода по ссылке в почте /
// пароль сброшен


function successNewPass() {
  $('.newpass-message_teasier').addClass('show-modal_reset');
} // пароль сброшен /
// modal subscribe
//   $('.teasier-btn_win').click( function() {
//     function subscribeModal(){
//         $('.subscribe-modal').addClass('d-flex');
//         $('body').addClass('subscribe-modal_active');
//       }
//       setTimeout(subscribeModal, 2000);
// });


$(document).mouseup(function (e) {
  var div = $(".wrapp-content_subscribe");

  if (!div.is(e.target) && div.has(e.target).length === 0) {
    $('body').removeClass('subscribe-modal_active');
    $('.subscribe-modal').removeClass('d-flex');
  }
}); // modal teasier reg

$('.modal-reg_teasier__btn').click(function () {
  $('.modal-teasier_reg__wrapp').addClass('modal-teasier_active');
  $('body').addClass('teasier-reg_modal__active');
  $(document).mouseup(function (e) {
    var div = $(".modal-teasier_reg");

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.modal-teasier_reg__wrapp').removeClass('modal-teasier_active');
      $('body').removeClass('teasier-reg_modal__active');
      $('.wrapp-form_reset__teasier').removeClass('show-modal_reset ');
      $('.wrapp-forms_teasier').removeClass('forms-teasier_hide');
      $('.success-message_teasier').removeClass('success-message_send__teasier');
      $('.wrapp-form_newpass__teasier').removeClass('wrapp-form_newpass__show');
      $('.newpass-message_teasier').removeClass('show-modal_reset');
      $('body').removeClass('subscribe-modal_active');
      $('.subscribe-modal').removeClass('d-flex');
      $('.success-message_teasier__reg').removeClass('success-reg_teasier__show');
    }
  });
  return false;
});
$('.modal-reg_teasier__close').click(function () {
  $('.modal-teasier_reg__wrapp').removeClass('modal-teasier_active');
  $('body').removeClass('teasier-reg_modal__active');
  $('.wrapp-form_reset__teasier').removeClass('show-modal_reset ');
  $('.wrapp-forms_teasier').removeClass('forms-teasier_hide');
  $('.success-message_teasier').removeClass('success-message_send__teasier');
  $('.wrapp-form_newpass__teasier').removeClass('wrapp-form_newpass__show');
  $('.newpass-message_teasier').removeClass('show-modal_reset');
  $('.success-message_teasier__reg').removeClass('success-reg_teasier__show');
});
$('.forgot-pass_link').click(function (e) {
  e.preventDefault();
  $('.reset-wrapp').css('display', 'flex');
  $('.go-back').click(function (e) {
    e.preventDefault();
    $('.reset-wrapp').css('display', 'none');
  });
}); // modal teasier reg end
// modal subscribe /

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_libs_jquery_nice_select_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/libs/jquery.nice-select.min */ "./src/blocks/modules/libs/jquery.nice-select.min.js");
/* harmony import */ var _modules_libs_jquery_nice_select_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_libs_jquery_nice_select_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/home/home */ "./src/blocks/modules/home/home.js");
/* harmony import */ var _modules_home_home__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_home_home__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/product/product */ "./src/blocks/modules/product/product.js");
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_product_product__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/service/service */ "./src/blocks/modules/service/service.js");
/* harmony import */ var _modules_service_service__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_service_service__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_documents_documents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/documents/documents */ "./src/blocks/modules/documents/documents.js");
/* harmony import */ var _modules_documents_documents__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_documents_documents__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_about_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/about/about */ "./src/blocks/modules/about/about.js");
/* harmony import */ var _modules_about_about__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_about_about__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/contacts/contacts */ "./src/blocks/modules/contacts/contacts.js");
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_career_career__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/career/career */ "./src/blocks/modules/career/career.js");
/* harmony import */ var _modules_career_career__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_career_career__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_patents_patents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/patents/patents */ "./src/blocks/modules/patents/patents.js");
/* harmony import */ var _modules_patents_patents__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_patents_patents__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_partners_partners__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/partners/partners */ "./src/blocks/modules/partners/partners.js");
/* harmony import */ var _modules_partners_partners__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_partners_partners__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/faq/faq */ "./src/blocks/modules/faq/faq.js");
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_faq_faq__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_implementations_implementations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/implementations/implementations */ "./src/blocks/modules/implementations/implementations.js");
/* harmony import */ var _modules_implementations_implementations__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_implementations_implementations__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_solution_teasier_solution_teasier__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/solution-teasier/solution-teasier */ "./src/blocks/modules/solution-teasier/solution-teasier.js");
/* harmony import */ var _modules_solution_teasier_solution_teasier__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_solution_teasier_solution_teasier__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_codevelopment_codevelopment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/codevelopment/codevelopment */ "./src/blocks/modules/codevelopment/codevelopment.js");
/* harmony import */ var _modules_codevelopment_codevelopment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_modules_codevelopment_codevelopment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_15__);

















/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map