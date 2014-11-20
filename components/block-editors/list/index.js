module.exports = {
    id: 'list-editor',
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
