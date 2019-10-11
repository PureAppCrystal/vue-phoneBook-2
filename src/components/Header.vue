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
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'header',    
 
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