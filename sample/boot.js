(function () {
    Boot.executable['#sample'] = [window.test || (window.test = {test:123}), function (sample) {
        console.log('1st callback');

        console.log(sample);
    }];


    var ctx = {
        data: 10,
    }

    Boot.executable['#sample2'] = [function () {
        console.log('2nd callback');
        console.log(this.data);
    }, ctx];

})();
