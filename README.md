# touchtap-event.js

A JavaScript library that adds a `'touchtap'` custom event to the document which can be listened to on any element. This will only emit an event on touch enabled devices or those emulating touch devices.

It works by listening to various touch events to dispatch the event if the `touchstart` and `touchend` events were in approximately the same position and took <= 200ms.

## Installing

```bash
# Via bower
bower install --save touchtap-event.js

# Via NPM
npm install --save touchtap-event.js
```

## Including

```html
<script src="touchtap-event.js"></script>
```

## Usage

```javascript
var elem = document.querySelector('#some-element');
elem.addEventListener('touchtap', function (e) {
  console.log(e);
});
```
