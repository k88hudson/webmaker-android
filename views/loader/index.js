var view = require('../../lib/view');

module.exports = view.extend({
    template: require('./index.html'),
    ready: function () {
        this.$el.id = 'loader';
    }
});
