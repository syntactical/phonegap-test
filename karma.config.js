module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            'spec/indexSpec.js'
        ],
        browsers: ['Chrome'],

        autoWatch: true
    });
};