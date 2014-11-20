var page = require('page');

module.exports = {
    inherit: true,
    template: require('./index.html'),
    data: function () {
        return {
            goBack: function (e) {
                if (this.$data.app) {
                    var enteredFrom = this.$data.app.enteredEditorFrom || '';
                    if (enteredFrom) {
                        page(enteredFrom);
                        return;
                    }
                }
                e.preventDefault();
                global.history.back();
            }
        };
    },
    ready: function () {
        this.$el.id = 'navigationBar';
    }
};
