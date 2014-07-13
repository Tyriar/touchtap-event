# touchtap-event.js

A JavaScript library that adds a `'touchtap'` custom event to the document which can be listened to on any element.

## Including

**Browser**

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
