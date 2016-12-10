/**
 * @license
 * touchtap-event <http://github.com/Tyriar/touchtap-event>
 * Copyright 2014 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/touchtap-event/blob/master/LICENSE>
 */
(function () {
  'use strict';

  var touchTapEvent;
  var isTapLength;
  var tapLengthTimeout;
  var startPosition = { x: -1, y: -1 };
  var currentPosition = { x: -1, y: -1 };

  /**
   * Gets the touch object from a touch* event.
   * @param {Event} e The event.
   * @returns {Touch} The (first) touch object from the event.
   */
  function getTouchObject(e) {
    if (e.originalEvent && e.originalEvent.targetTouches) {
      return e.originalEvent.targetTouches[0];
    }
    if (e.targetTouches) {
      return e.targetTouches[0];
    }
    return e;
  }

  /**
   * Gets whether two numbers are approximately equal to each other.
   * @param {number} a The first number.
   * @param {number} b The second number.
   * @returns {Boolean}
   */
  function approximatelyEqual(a, b) {
    return Math.abs(a - b) < 2;
  }

  /**
   * Handler for the touchstart event.
   * @param {Event} e The touchstart event.
   */
  function touchstart(e) {
    var touchObject = getTouchObject(e);
    startPosition.x = touchObject.pageX;
    startPosition.y = touchObject.pageY;
    currentPosition.x = touchObject.pageX;
    currentPosition.y = touchObject.pageY;
    isTapLength = true;
    if (tapLengthTimeout) {
      clearTimeout(tapLengthTimeout);
    }
    tapLengthTimeout = setTimeout(function () {
      isTapLength = false;
    }, 200);
  }

  /**
   * Handler for the touchend event.
   * @param {Event} e The touchend event.
   */
  function touchend(e) {
    if (isTapLength &&
        approximatelyEqual(startPosition.x, currentPosition.x) &&
        approximatelyEqual(startPosition.y, currentPosition.y)) {
      touchTapEvent.customData = {
        touchX: currentPosition.x,
        touchY: currentPosition.y
      };
      e.target.dispatchEvent(touchTapEvent);
    }
  }

  /**
   * Handler for the touchmove event.
   * @param {Event} e The touchmove event.
   */
  function touchmove(e) {
    var touchObject = getTouchObject(e);
    currentPosition.x = touchObject.pageX;
    currentPosition.y = touchObject.pageY;
  }

  /**
   * Initialises the library.
   */
  function init() {
    try {
      // The basic events module is supported by most browsers, including IE9 and newer.
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/createEvent#Example
      touchTapEvent = document.createEvent('Event');
      touchTapEvent.initEvent('touchtap', true, true);

      // EventTarget.addEventListener() is supported by most browsers, including IE9 and newer.
      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Browser_compatibility
      document.addEventListener('touchstart', touchstart, false);
      document.addEventListener('touchend', touchend, false);
      document.addEventListener('touchcancel', touchend, false);
      document.addEventListener('touchmove', touchmove, false);
    }
    catch (err) {
      // Ignore "Object doesn't support this property or method" in IE8 and earlier.
    }
  }

  init();
})();
