;(function (Boot) {

    Boot.loadable =  Boot.loadable instanceof Map === true ? Boot.loadable : new Map();


    /*
     |------------------------------------------------------------
     | Add to bootloader list of todos
     |------------------------------------------------------------
     | condition, can be id, or function
     |
     */
    Boot.load = function (condition, callback) {
        this.loadable.set(condition, callback);
    };

    /*
     |------------------------------------------------------------
     | Execute bootload
     |------------------------------------------------------------
     | Execute callback functions
     */
    Boot.start = function () {

        this.loadable.forEach(function (callback, key) {

            var call = false;

            if (typeof key == 'string' && key.charAt(0) == '#') {
                call = document.getElementById(key.substr(1));
            }

            if (typeof key =='boolean') {
                call = key;
            }

            if (call) {
                callback.call();
            }

        });
    };

    /*
     |------------------------------------------------------------
     | Bootstrap bootloader
     |------------------------------------------------------------
     | Execute start method on window onload event
     */
    window.onload = function () {
        Boot.start();
    };

}) (window.Boot || (window.Boot = {}));
