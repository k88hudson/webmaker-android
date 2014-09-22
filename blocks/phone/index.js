module.exports = {
    className: 'phone',
    template: require('./index.html'),
    data: {
        name: 'phone',
        icon: '/images/blocks_phone.png',
        attributes: {
            number: {
                label: 'Phone #',
                type: 'string',
                value: '+18005555555'
            },
            innerHTML: {
                label: 'Label',
                type: 'string',
                value: 'Place call'
            }
        }
    },
    ready: function () {
        var self = this;

        // Call phone function
        self.$data.callMe = function (e) {
            if (!window.MozActivity) return;
            if (self.$parent.$parent.$data.params.mode !== 'play') return;
            e.preventDefault();
            new MozActivity({
                name: 'new',
                data: {
                    type: 'webtelephony/number',
                    number: self.$data.attributes.number.value
                }
            });
        };
    }
};
