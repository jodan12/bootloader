# How to
___

You can directly access the `Boot.executable` namespace and assign a function to be executed on load when the element with the ID used as key exists in the DOM
```
Boot.executable['#element_id'] = function () {
    // code here
}
```

# Demo
___

```javascript
var app.Http = new XMLHttpRequest();
...

Boot.executable['#element_id'] = [window.app.Http, function (Http) {
    Http.get('https://api.github.com/repos/jodan12/bootloader/commits');

    Http.onload = function () {
        console.log(JSON.parse(Http.responseText));
    }
}];
```

You can pass in context at the last element of the array after the function
```javascript
var context = {
    data: 10
}

Boot.executable['#element_id'] = [function() {
    console.log(this.data); // 10
}, context];
```
