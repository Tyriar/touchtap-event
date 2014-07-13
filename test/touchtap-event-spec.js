describe('touchtap-event', function () {
  'use strict';

  describe('on a page with a abbr single element', function () {
    var elem;

    beforeEach(function () {
      elem = document.createElement('abbr');
      elem.title = 'test';
      document.body.appendChild(elem);
    });

    afterEach(function () {
      document.body.removeChild(elem);
    });

    it('should trigger the alert after a 10ms wait', function (done) {
      elem.addEventListener('touchtap', function () {
        done();
      });

      var event = document.createEvent('TouchEvent');
      event.initUIEvent('touchstart', true, true);
      elem.dispatchEvent(event, {
        pageX: 0,
        pageY: 0
      });

      setTimeout(function () {
        event = document.createEvent('TouchEvent');
        event.initUIEvent('touchend', true, true);
        elem.dispatchEvent(event);
      }, 10);
    });

    it('should trigger the alert after a 150ms wait', function (done) {
      elem.addEventListener('touchtap', function () {
        done();
      });

      var event = document.createEvent('TouchEvent');
      event.initUIEvent('touchstart', true, true);
      elem.dispatchEvent(event, {
        pageX: 0,
        pageY: 0
      });

      setTimeout(function () {
        event = document.createEvent('TouchEvent');
        event.initUIEvent('touchend', true, true);
        elem.dispatchEvent(event);
      }, 150);
    });

    it('should not trigger the alert after a 250ms wait', function (done) {
      elem.addEventListener('touchtap', function () {
        expect(false).toBe(true);
      });

      var event = document.createEvent('TouchEvent');
      event.initUIEvent('touchstart', true, true);
      elem.dispatchEvent(event, {
        pageX: 0,
        pageY: 0
      });

      setTimeout(function () {
        event = document.createEvent('TouchEvent');
        event.initUIEvent('touchend', true, true);
        elem.dispatchEvent(event);
      }, 250);

      // Trigger end of test
      setTimeout(function () {
        done();
      }, 350);
    });
  });
});
