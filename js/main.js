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

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.form-validation').submit(function (event) {
  var $form = $(this);
  event.preventDefault();

  if ($($form)[0].checkValidity() === false) {
    event.stopPropagation();
    $($form).addClass('was-validated');
  } else {
    $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
      success: function success() {
        $form.removeClass('was-validated');
      }
    });
  }
});
$('.footer-contact_us').click(function (e) {
  e.preventDefault();
  $('.footer-modal').toggleClass('show-modal');
  $('body').addClass('modal-active');
  $(document).mouseup(function (e) {
    var div = $(".footer-modal_wrapp");

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.footer-modal').removeClass('show-modal');
      $('body').removeClass('modal-active');
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.burger-toggle').click(function () {
  $(this).toggleClass('active-burger');
  $('.header-sublist').hide();
  $('.region-list a i').removeClass('rotate-i');
  $('.header-list').slideToggle(200).toggleClass('opened');
});
$('.search-btn').click(function () {
  $('.overlay').css('display', 'flex');
});
$('.clear-img').click(function () {
  $('.overlay').css('display', 'none');
  $('.search-form')[0].reset();
});
$(document).mouseup(function (e) {
  var div = $(".search-wrapp");

  if (!div.is(e.target) && div.has(e.target).length === 0) {
    $('.overlay').css('display', 'none');
  }
});
$('.login-btn').click(function () {
  $('.login-wrapp').slideToggle(200);
});
$(document).mouseup(function (e) {
  var loginMenu = $('.login-wrapp'),
      loginBtn = $('.login-btn');

  if (!loginMenu.is(e.target) && loginMenu.has(e.target).length === 0 && !loginBtn.is(e.target) && loginBtn.has(e.target).length === 0) {
    loginMenu.css('display', 'none');
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
    e.preventDefault();
    $(this).next('.header-sublist').slideToggle('show-sublist');
  });
  $('.region-list > a').click(function () {
    $(this).find('i').toggleClass('rotate-i');
  });
}

$('select').niceSelect();
$('.sticky-nav_list a, a.page-btn').bind('click.smoothscroll', function (event) {
  event.preventDefault();
  var target = this.hash,
      $target = $(target);

  if ($(window).width() < 1200) {
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 60
    }, 900, 'swing');
  } else if ($(window).width() > 1200) {
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 30
    }, 900, 'swing');
  }
});

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
    dots: true,
    arrows: false,
    // autoplay: true
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
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__);






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