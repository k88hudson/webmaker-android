module.exports = {
    template: require('./index.html'),
    data: function () {
        return {
            items: ['']
        };
    },
    ready: function () {
        this.$el.id = 'list-editor';
    }
};
