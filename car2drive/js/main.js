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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function openMenu() {
  new TimelineMax({
    onStart: function onStart() {
      $('.mobile-panel').removeClass('is-hidden');
    },
    onComplete: function onComplete() {
      $('body').addClass('is-menu-open');
    }
  }).from('.mobile-panel', 0.5, {
    x: '100%',
    ease: Power1.easeInOut,
    clearProps: 'all'
  });
}

function closeMenu() {
  new TimelineMax({
    onStart: function onStart() {
      $('body').removeClass('is-menu-open');
    },
    onComplete: function onComplete() {
      $('.mobile-panel').addClass('is-hidden');
    }
  }).to('.mobile-panel', 0.5, {
    x: '-100%',
    autoAlpha: 0,
    ease: Power1.easeInOut,
    clearProps: 'all'
  });
}

function openDropdownSelect($dropdown, $select) {
  new TimelineMax({
    onStart: function onStart() {
      $('.select-item').removeClass('is-open-select');
      $('.select-item__dropdown').addClass('is-hidden');
      $dropdown.removeClass('is-hidden');
      $select.addClass('is-open-select');
    }
  }).from($dropdown, 0.3, {
    autoAlpha: 0,
    clearProps: 'all'
  });
}

function closeDropdownSelect() {
  new TimelineMax({
    onStart: function onStart() {
      $('.select-item').removeClass('is-open-select');
    },
    onComplete: function onComplete() {
      $('.select-item__dropdown').addClass('is-hidden');
    }
  }).to($('.select-item__dropdown'), 0.3, {
    autoAlpha: 0,
    clearProps: 'all'
  });
}

$('.slider-block').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1
});
$('.header__burger').on('click', function () {
  openMenu();
});
$('.mobile-panel__back').on('click', function () {
  closeMenu();
});
$('.select-item__button').on('click', function (e) {
  var $this = $(e.currentTarget);
  var $select = $this.closest('.select-item');
  var $dropdown = $this.next();

  if (!$select.hasClass('is-open-select')) {
    openDropdownSelect($dropdown, $select);
  } else {
    closeDropdownSelect();
  }
});
$('.select-item__button-dropdown').on('click', function (e) {
  var $this = $(e.currentTarget);
  var $input = $this.closest('.select-item').find('input');
  var $selectButton = $this.closest('.select-item').find('.select-item__button');
  var text = $this.text();
  $selectButton.text(text);
  $input.val(text);
  closeDropdownSelect();
});
$('.mobile-panel__item-nav').on('click', function (e) {
  e.preventDefault();
  var $this = $(e.currentTarget);
  new TimelineMax({
    onStart: function onStart() {
      $('body').removeClass('is-menu-open');
    },
    onComplete: function onComplete() {
      $('.mobile-panel').addClass('is-hidden');
      $('html, body').stop().animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 800);
    }
  }).to('.mobile-panel', 0.5, {
    x: '-100%',
    autoAlpha: 0,
    ease: Power1.easeInOut,
    clearProps: 'all'
  });
});
$('.datepicker').datepicker({
  minDate: 0
});
$('.datepicker').datepicker('setDate', new Date());

/***/ })

/******/ });
//# sourceMappingURL=main.js.map