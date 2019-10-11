<template>
    <div id='phone-list'>
        <div id='phone' v-for="phone in phoneList" v-bind:key="phone.id">
            <div id='name'> {{phone.name}} </div>
            <div id='del'> DEL </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'list',    
    data() {
        return {
     
        }
    },
    computed: {
        ...mapGetters({
            phoneList: 'getPhoneList'
        })
    }
}
</script>


<style scoped>

#phone-list {
    padding: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
}

#phone {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.5rem;

}

#phone + #phone {
    border-top-style: solid;
    border-width: 1px;
}

#name {

}

#del {

}
</style>