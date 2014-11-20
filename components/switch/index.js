module.exports = {
    template: require('./index.html'),
    data: function () {
        return {
            value: false,
            options: ['Off', 'On']
        };
    },
    ready: function () {
        this.$el.id = 'switch';
    }
};
