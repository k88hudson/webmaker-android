module.exports = {
    className: 'image',
    template: require('./index.html'),
    data: function () {
        return {
            name: 'Image',
            icon: '/images/blocks_image.png',
            attributes: {
                src: {
                    label: 'Source',
                    type: 'string',
                    value: '/images/placeholder.png'
                }
            }
        };
    }
};
