module.exports = {
    id: 'loadingIndicator',
    template: require('./index.html'),
    ready: function () {
        this.$el.id = 'loadingIndicator';
    }
};
