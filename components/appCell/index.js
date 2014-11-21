var i18n = require('../../lib/i18n');

module.exports = {
    name: 'app-cell',
    inherit: true,
    methods: {
        onClick: function () {
            this.$data.enteredEditorFrom = '/profile';
        }
    },
    template: require('./index.html'),
    paramAttributes: ['mode'],
    computed: {
        name: function () {
            var username = this.$data.app.author && this.$data.app.author.username;
            return username || i18n.get('Guest');
        }
    },
    ready: function () {
        this.$el.className = 'app-cell';
    }
};
