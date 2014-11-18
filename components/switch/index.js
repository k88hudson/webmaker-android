module.exports = {
    id: 'switch',
    template: require('./index.html'),
    data: function () {
        return {
            value: false,
            options: ['Off', 'On']
        };
    }
};
