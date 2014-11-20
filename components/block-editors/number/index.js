module.exports = {
    id: 'number-editor',
    template: require('./index.html'),
    data: function () {
        return {
            value: 0
        };
    },
    ready: function () {
        this.$el.id = 'number-editor';
    }
};
