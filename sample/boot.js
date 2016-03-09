(function () {
    Boot.executable.test = function () {
        console.log('1st callback');
    };

    Boot.executable.test3 = function () {
        console.log('2nd callback');
    };
})();
