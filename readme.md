# How to
You can directly access the `Boot.executable` and assign a valid css selector as key and a function as value, the function gets executed on `window.load`
```
// id
Boot.executable['#element_id'] = function () {
    // code here
}

// data attribute
Boot.executable['[data-load="sample"]'] = function () {
    // code here
}

// HTML tag
Boot.executable['body'] = function () {
    // code here
}
```
Additionally you can assign an array instead of an function with this format
```
Boot.executable['#el'] = [data1, ..., dataN, function (data1, ..., dataN) {

}, context];
```
`data` and `context` are optional
# Demo

```javascript
var app.Http = new XMLHttpRequest();
...

Boot.executable['#element_id'] = [window.app.Http, function (Http) {
    Http.open('GET' ,'https://api.github.com/repos/jodan12/bootloader/commits');

    Http.onload = function () {
        console.log(JSON.parse(Http.responseText));
    }
}];
```

### With context
```javascript
var context = {
    data: 10
}

Boot.executable['#element_id'] = [function() {
    console.log(this.data); // 10
}, context];
```
