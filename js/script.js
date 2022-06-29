const myApp = new Vue({
    el: '#app',
    data: {
        apiUrl: 'http://localhost/php-ajax-dischi/api.php',
        songsList: [],
    },
    created() {
        this.getSongsData();
    },
    methods: {
        getSongsData() {
            axios.get(this.apiUrl).then((result) => {
                this.songsList = result.data;
                console.log(this.songsList);
            }).catch((error) => {
                console.log('Errore', error);
            });
        }
    }
});