var xhr = require('xhr');
module.exports = {
    id: 'image-editor',
    template: require('./index.html'),
    methods: {
        getUrl: function (e) {
            e.preventDefault();
            e.stopPropagation();
            this.$data.showUrlInput = true;
            this.$data.editorOpen = false;
        },
        getImage: function (e, sourceType) {
            var self = this;
            e.preventDefault();
            e.stopPropagation();
            function onSuccess(imageData) {
                self.$data.value = 'data:image/jpeg;base64,' + imageData;
                self.$data.showUrlInput = false;
                self.$data.editorOpen = false;

            }
            function onFail(message) {
                console.log('Failed because: ' + message);
                self.$data.editorOpen = false;
            }
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 20,
                targetWidth: 320,
                targetHeight: 240,
                destinationType: window.Camera.DestinationType.DATA_URL,
                sourceType: window.Camera.PictureSourceType[sourceType]
            });
        },
        uploadPhoto: function (e) {
            function doUpload(policy) {
                var form = new FormData();
                var buffer = new Buffer(this.$data.value, 'base64');
                xhr({
                    uri: 'https://testing-s3-browser-uploads.s3.amazonaws.com',
                    method: 'POST',
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }, function (err, resp, body) {
                    if (err || !body) return console.log('oops');
                    console.log('ok done.', body);
                });
            }
            xhr({
                uri: 'config.PUBLISH_ENDPOINT',
                method: 'GET',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }, function (err, resp, body) {
                if (err || !body) return console.log('oops');
                doUpload(null, body);
            });
        },
        openEditor: function (e) {
            e.preventDefault();
            this.$data.editorOpen = true;
        },
        cancelEditor: function (e) {
            e.preventDefault();
            this.$data.editorOpen = false;
        },
        onUpdateUrl: function (e) {
            this.$data.value = this.$data.imageUrl;
        }
    },
    data: {},
    ready: function () {
        var uriPattern = 'data:image/jpeg;base64';
        if (this.$data.value && !this.$data.value.match(uriPattern)) {
            this.$data.imageUrl = this.$data.value;
        }
    }
};
