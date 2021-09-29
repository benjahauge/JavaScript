Vue.createApp({

    data() {

        return {

            word:"",
            upper:"",
            lower:""
        }

    },

    methods: {

        showIt() {
            console.log()
            this.upper = this.word.toUpperCase()
            this.lower = this.word.toLowerCase()
        }
    }

}).mount("#app")