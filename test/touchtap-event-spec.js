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
      elem.addEventListener('touchtap', function (e) {
        expect(e.target).toBe(elem);
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
      elem.addEventListener('touchtap', function (e) {
        expect(e.target).toBe(elem);
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

    describe('touching specific coordinates', function () {
      it('should dispatch the event with the coordinates attached', function () {
        elem.addEventListener('touchtap', function (e) {
          expect(e.target).toBe(elem);
          expect(e.customData.touchX).toBe(5);
          expect(e.customData.touchY).toBe(10);
          done();
        });

        var event = document.createEvent('TouchEvent');
        event.initUIEvent('touchstart', true, true);
        elem.dispatchEvent(event, {
          pageX: 5,
          pageY: 10
        });

        setTimeout(function () {
          event = document.createEvent('TouchEvent');
          event.initUIEvent('touchend', true, true);
          elem.dispatchEvent(event);
        }, 10);
      });
    });
  });
});
