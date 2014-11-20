var view = require('../../lib/view');
var fakeDiscovery  = require('../../lib/fake-discovery');

module.exports = view.extend({
    template: require('./index.html'),
    data: function () {
        return {
            title: 'Discover',
            apps: fakeDiscovery,
            mode: 'featured'
        };
    },
    created: function () {
        this.$data.created = this.model.data.apps;
    },
    ready: function () {
        this.$el.id = 'discover';
    }
});
