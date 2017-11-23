<template>
    <div id="overview">
        <div class="main">
            <movie-list v-bind:genre="genre" v-bind:time="time" v-bind:movies="movies"></movie-list>
            <movie-filter v-on:check-filter="checkFilter"></movie-filter>
        </div>
    </div>
</template>
<script>
    import MovieList from './MovieList.vue';
    import MovieFilter from './MovieFilter.vue';
    import CheckFilter from './CheckFilter.vue';

    export default{
        props: ['genre', 'time', 'movies'],
        components: {
            MovieList,
            MovieFilter
        },
        methods: {
            checkFilter: function (category, title, checked) {
                if (checked) {
                    this[category].push(title);
                } else {
                    let index = this[category].indexOf(title);
                    if (index > -1) {
                        this[category].splice(index, 1);
                    }
                }
            }
        }
    }
</script>