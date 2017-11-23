<template>
    <div id="movie-list">

        <movie-item v-for="movie in filteredMovies" v-bind:movie="movie.movie">
            <div class="movie-sessions">
                <div v-for="session in filteredSessions(movie.sessions)" class="session-time-wrapper">
                    <div class="session-time">{{ formatSessionTime(session.time)}}</div>
                </div>
            </div>
        </movie-item>

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
            },
            formatSessionTime: function (value) {
                return this.$moment(value).format("h:mm A");
            },
            filteredSessions: function (sessions) {
                var that = this;
                return sessions.filter((session)=>{
                    return this.$moment(session.time).isSame(that.day, 'day');
                });
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