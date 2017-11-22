<template>
    <div id="movie-list">

        <movie-item v-for="movie in filteredMovies" v-bind:movie="movie.movie" v-bind:sessions="movie.sessions"></movie-item>

        <div v-if="!filteredMovies.length" class="no-results">No movies found.</div>


    </div>
</template>
<script>
    import genres from '../util/genres';
    import MovieItem from './MovieItem.vue';

    export default
    {
        props: ['genre', 'time', 'movies'],
        methods: {
            moviePassesGenreFilter: function (movie) {
                if (!this.genre.length) {
                    return true;
                }

                let movieGenres = movie.movie.Genre.split(", ");
                let matched = true;
                this.genre.forEach(function (genre) {
                    if (movieGenres.indexOf(genre) === -1) {
                        matched = false;
                    }
                });
                return matched;
            }
        },
        computed: {
            filteredMovies: function () {
                return this.movies.filter(this.moviePassesGenreFilter);
            }
        },
        components: {
            MovieItem
        }
    };

</script>
<style>

</style>