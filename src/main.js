import Vue from 'vue';
import './style.scss';

import Overview from './components/Overview.vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

import moment from 'moment-timezone';
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, '$moment', {
    get(){
        return moment;
    }
});

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './util/routes';

const router = new VueRouter({
    routes
});

new Vue({
    el: "#app",
    router,
    data: {
        genre: [],
        time: [],
        movies: [],
        moment,
        day: moment()
    },
    methods: {},
    components: {
        Overview
    },
    created: function () {
        this.$http.get("/api").then(resp => {
            this.movies = resp.data;
        });
    }
});