;(function (Boot) {

    Boot.executable = Boot.executable || {};

    var execute = function (exec) {

        var callback = null;
        var ctx = null;

        // Check if the value is an array
        if (exec instanceof Array) {
            callback = exec.pop();
        }

        // Check if the last element of the array is an object
        // The last object will become the context of the callback
        if (typeof callback == 'object') {
            ctx = callback;
            callback = callback.pop();
        }

        // Throw exception if the last element is not a function
        if (typeof callback != 'function') {
            throw 'Expected function not found';
        }

        // execute and apply context
        callback.apply(ctx, exec);
    };

    /*
     |------------------------------------------------------------
     | Execute bootload
     |------------------------------------------------------------
     | Execute callback functions
     */
    Boot.start = function () {

        for (var i = 0; i < startables.length; i++) {
            execute();
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
