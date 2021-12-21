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
    watch: {
        // 約3秒くらいで数値が0になる
        counter: function () {
            const vm = this;
            setTimeout(function () {
                vm.counter = 0
            },3000)
        }
    }
})