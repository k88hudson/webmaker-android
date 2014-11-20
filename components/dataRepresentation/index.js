var dataRepresentation = module.exports = {
    template: require('./index.html'),
    data: function () {
        return {
            isInteractive: true,
            sortOldest: false,
            sortKey: 'submitted',
            sortOptions: ['Newest', 'Oldest'],
            initialDataLoaded: false
        };
    },
    methods: Object.create(null),
    ready: function () {
        this.$el.id = 'dataRepresentation';
    }
};

dataRepresentation.methods.formatUnixTime = function (unix) {
    var date = new Date(unix);
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleTimeString('en-US', options);
};

dataRepresentation.methods.computed = {
    countSelected: function () {
        if (!this.$data) return false;
        var dataSet = this.$data.dataSet;
        var count = 0;
        for (var i = 0; i < dataSet.length; i++) {
            if (dataSet[i] && dataSet[i].isSelected) count++;
        }
        return count;
    },
    countDataSets: function () {
        if (!this.$data) return 0;

        return this.$data.dataSet.length;
    },
    allSelected: {
        $get: function () {
            if (!this.$data) return false;

            var exists = this.$data.dataSet.length !== 0;
            var inRange = this.countSelected === this.$data.dataSet.length;

            return exists && inRange;
        },
        $set: function (toValue) {
            var dataSet = this.$data.dataSet;
            for (var i = 0; i < dataSet.length; i++) {
                if (dataSet[i]) dataSet[i].isSelected = toValue;
            }
        }
    }
};
