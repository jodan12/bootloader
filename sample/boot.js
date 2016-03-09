(function () {
    Boot.executable.test = [window.test || (window.test = {test:123}), function (sample) {
        console.log('1st callback');
        console.log(sample);
        console.log(arguments);

    }];

    Boot.executable.test3 = function () {
        console.log('2nd callback');
    };
})();
