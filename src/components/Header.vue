<template>
    <div id='header'>
        <div id='leftBtn'>
            <button
                v-on:click="onLeft"
            >{{leftTitle}}</button>
        </div>
        <div id='title'>
            {{title}}
        </div>
        <div id='rightBtn'>
            <button
                v-on:click="onRight"
            >{{rightTitle}}</button>
        </div>
    </div>
</template>

<script>
// import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'header',    
    props:['formState'],
    computed: {
        title: function() {
            console.log(this.formState)
            switch(this.formState) {
                case 'list': return '연락처';
                case 'insert': return '등록하기';
                case 'select': return '상세보기';
                case 'update': return '수정하기';
                default: return 'unknown'
            }
        },
        leftTitle: function() {
            switch(this.formState) {
                case 'list': return '홈';
                case 'insert': return '뒤로';
                case 'select': return '뒤로';
                case 'update': return '뒤로';
                default: return 'unknown'
            }
        },
        rightTitle: function() {
            switch(this.formState) {
                case 'list': return '등록';
                case 'insert': return '저장';
                case 'select': return '편집';
                case 'update': return '저장';
                default: return 'unknown'
            }
        },
    },
    methods: {
        onRight: function() {
            this.$router.push('/insert')
        }
    }
 
}
</script>


<style scoped>
#header {
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
}

</style>