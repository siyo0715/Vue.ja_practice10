new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    computed: {
        lessThanThreeComputed: function () {
            return this.counter > 3 ? '3より上' : '3より下'
        }
    },
    // methods: {
    //     lessThanThreeMethod: function () {
    //         return this.counter > 3 ? '3より上' : '3より下'
    //     }
    // },
})