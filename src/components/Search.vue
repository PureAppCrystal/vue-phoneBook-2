<template>
    <div id='search'>
        <input type='text'/>
    </div>
</template>

<script>
export default {
    name: 'search',    
}
</script>

<style scoped>
#search {
    background-color: blue;
    display: flex;
    align-items: center;
    padding: 0.4rem;
    padding-left: 1rem;
    padding-right: 1rem;
    
}

input {
    flex:1;
    border-radius: 5px;
    border-style: none;
    height: 1.5rem;

    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: gray;
}
</style>