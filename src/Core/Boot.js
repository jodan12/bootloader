;(function (Boot) {

    Boot.loadable =   Boot.loadable || [];


    /*
     |------------------------------------------------------------
     | Add to bootloader list of todos
     |------------------------------------------------------------
     | condition, can be id, or function
     |
     */
    Boot.load = function (condition, callback) {
        this.loadable.push({key:condition, callback: callback});
    };

    /*
     |------------------------------------------------------------
     | Execute bootload
     |------------------------------------------------------------
     | Execute callback functions
     */
    Boot.start = function () {

        this.loadable.forEach(function (elem) {

            var call = false;

            if (typeof elem.key == 'string' && elem.key.charAt(0) == '#') {
                call = document.getElementById(elem.key.substr(1));
            }

            if (typeof elem.key =='boolean') {
                call = elem.key;
            }

            if (call) {
                elem.callback.call();
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
