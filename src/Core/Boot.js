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
        var callback = null;

        for (var i = 0; i < startables.length; i++) {
            if (!Boot.executable[startables[i].dataset.load]){
                continue;
            }

            callback = Boot.executable[startables[i].dataset.load];


            if (Boot.executable[startables[i].dataset.load] instanceof Array) {
                callback = callback.pop();
            }

            callback.apply(null, Boot.executable[startables[i].dataset.load]);
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
