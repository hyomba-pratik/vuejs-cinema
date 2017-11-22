<template>
    <div class="check-filter" v-on:click="checkFilter" v-bind:class="{'check-filter': true, active:checked}">
        <span class="checkbox"></span>
        <span class="check-filter-title">{{title}}</span>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {
                checked: false
            };
        },
        props: ["title"],
        methods: {
            checkFilter: function () {
                this.checked = !this.checked;
                this.$emit('check-filter', 'genre', this.title, this.checked);
            }
        }
    }
</script>