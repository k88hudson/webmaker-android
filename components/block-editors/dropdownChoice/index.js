module.exports = {
    template: require('./index.html'),
    data: function () {
        return {
            options: [''],
            value: 0
        };
    },
    ready: function () {
        this.$el.id = 'dropdownChoice-editor';
    }
};
