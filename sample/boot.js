(function () {
    Boot.load('#sample', modules.sample);
    Boot.load('#sample', function () {
        console.log('2nd callback');
    });

    Boot.load('#test', function () {
        console.log('this doesn\' get executed');
    });
})();
