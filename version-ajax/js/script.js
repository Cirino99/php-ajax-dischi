const myApp = new Vue({
    el: '#app',
    data: {
        apiUrlAll: 'http://localhost/php-ajax-dischi/version-ajax/api.php',
        apiUrlRock: 'http://localhost/php-ajax-dischi/version-ajax/filter-songs-api.php',
        songsList: [],
        genere: 'All'
    },
    created() {
        this.getSongsData(this.apiUrlAll);
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
            switch (this.genere) {
                case 'All':
                    this.getSongsData(this.apiUrlAll);
                    break;
                case 'Rock':
                    this.getSongsData(this.apiUrlRock);
                    break;
            }
        }
    }
});