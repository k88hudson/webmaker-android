var i18n = require('../../lib/i18n');

module.exports = {
    className: 'app-cell',
    methods: {
        onClick: function () {
            this.$data.enteredEditorFrom = '/profile';
        }
    },
    template: require('./index.html'),
    paramAttributes: ['mode'],
    computed: {
        guestKey: function () {
            return i18n.get('Guest');
        }
    }
};
