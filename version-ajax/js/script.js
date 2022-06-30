const myApp = new Vue({
    el: '#app',
    data: {
        apiUrl: 'http://localhost/php-ajax-dischi/version-ajax/api.php',
        songsList: [],
        genere: 'All'
    },
    created() {
        this.getSongsData(this.apiUrl);
    },
    methods: {
        getSongsData(url) {
            axios.get(url).then((result) => {
                this.songsList = result.data;
                console.log(this.songsList);
            }).catch((error) => {
                console.log('Errore', error);
            });
        },
        searchGenereSongs() {
            this.getSongsData(this.apiUrl + '?genere=' + this.genere);
        }
    }
});