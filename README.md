# touchtap-event [![NPM version](http://img.shields.io/npm/v/touchtap-event.svg?style=flat)](https://www.npmjs.org/package/touchtap-event)

[![Build Status](http://img.shields.io/travis/Tyriar/touchtap-event.svg?style=flat)](https://travis-ci.org/Tyriar/touchtap-event)
[![Code Climate](http://img.shields.io/codeclimate/github/Tyriar/touchtap-event.svg?style=flat)](https://codeclimate.com/github/Tyriar/touchtap-event)

A lightweight JavaScript library that adds a `touchtap` custom event to the document which can be listened to on any element. This will only emit an event on touch enabled devices or those emulating touch devices.

It works by listening to various touch events to dispatch the event if the `touchstart` and `touchend` events were in approximately the same position and took <= 200ms.

## Installing

```bash
# via bower
bower install --save touchtap-event

# via NPM
npm install --save touchtap-event
```

## Including

```html
<!-- Bower -->
<script src="bower_components/touchtap-event/touchtap-event.js"></script>

<!-- NPM -->
<script src="node_modules/touchtap-event/touchtap-event.js"></script>
```

## Usage

```javascript
var elem = document.querySelector('#some-element');
elem.addEventListener('touchtap', function (e) {
  console.log(e);
});
```
