const myApp = new Vue({
    el: '#app',
    data: {
        apiUrlAll: 'http://localhost/php-ajax-dischi/version-ajax/api.php',
        apiUrlRock: 'http://localhost/php-ajax-dischi/version-ajax/filter-api/songs-rock.php',
        apiUrlPop: 'http://localhost/php-ajax-dischi/version-ajax/filter-api/songs-pop.php',
        apiUrlJazz: 'http://localhost/php-ajax-dischi/version-ajax/filter-api/songs-jazz.php',
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
                case 'Pop':
                    this.getSongsData(this.apiUrlPop);
                    break;
                case 'Jazz':
                    this.getSongsData(this.apiUrlJazz);
                    break;
            }
        }
    }
});