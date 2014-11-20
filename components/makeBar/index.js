module.exports = {
    id: 'makeBar',
    template: require('./index.html'),
    ready: function () {
        this.$el.id = 'makeBar';
    }
};
