;(function (Boot) {

    Boot.executable =   Boot.executable || {};

    /*
     |------------------------------------------------------------
     | Add to bootloader list of todos
     |------------------------------------------------------------
     | condition, can be id, or function
     |
     */
    Boot.register = function (tag, callback) {
        this.executable[tag] = callback;
    };

    /*
     |------------------------------------------------------------
     | Execute bootload
     |------------------------------------------------------------
     | Execute callback functions
     */
    Boot.start = function () {

        var startables = document.querySelectorAll('[data-load]');

        for (var i = 0; i < startables.length; i++) {
            if (!Boot.executable[startables[i].dataset.load]){
                continue;
            }

            Boot.executable[startables[i].dataset.load].call();

        }

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
