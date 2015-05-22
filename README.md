# touchtap-event.js [![NPM version](http://img.shields.io/npm/v/touchtap-event.js.svg?style=flat)](https://www.npmjs.org/package/touchtap-event.js)

[![Build Status](http://img.shields.io/travis/Tyriar/touchtap-event.js.svg?style=flat)](https://travis-ci.org/Tyriar/touchtap-event.js)
[![Code Climate](http://img.shields.io/codeclimate/github/Tyriar/touchtap-event.js.svg?style=flat)](https://codeclimate.com/github/Tyriar/touchtap-event.js)

A lightweight JavaScript library that adds a `touchtap` custom event to the document which can be listened to on any element. This will only emit an event on touch enabled devices or those emulating touch devices.

It works by listening to various touch events to dispatch the event if the `touchstart` and `touchend` events were in approximately the same position and took <= 200ms.

## Installing

```bash
# via bower
bower install --save touchtap-event.js

# via NPM
npm install --save touchtap-event.js
```

## Including

```html
<!-- Bower -->
<script src="bower_components/touchtap-event.js/touchtap-event.js"></script>

<!-- NPM -->
<script src="node_modules/touchtap-event.js/touchtap-event.js"></script>
```

## Usage

```javascript
var elem = document.querySelector('#some-element');
elem.addEventListener('touchtap', function (e) {
  console.log(e);
});
```
