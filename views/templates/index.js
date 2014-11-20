var templates = require('../../lib/templates.json');
var view = require('../../lib/view');
var App = require('../../lib/app');

module.exports = view.extend({
    template: require('./index.html'),
    data: function () {
        return {
            title: 'Make',
            templates: templates
        };
    },
    ready: function () {
        var self = this;
        self.$el.id = 'templates';

        // Click handler
        function clickHandler (e) {
            e.preventDefault();
            var id = e.currentTarget.getAttribute('data-id');
            var app = App.createApp({template: id});
            app.data.enteredEditorFrom = '/templates';
            self.page('/make/' + app.id + '/edit');
        }

        // Apply click handler to each cell
        var targets = self.$el.getElementsByClassName('cell');
        for (var i = 0; i < targets.length; i++) {
            targets[i].addEventListener('click', clickHandler);
        }
    }
});
