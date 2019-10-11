import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        id: 3,
        name: '',
        number: '',
        phoneList: [
            { id: 0, name: "라이언2", phone: "01012341234" },
            { id: 1, name: "애쉬", phone: "0234304227" },
            { id: 2, name: "라그나로스", phone: "01188762098" },
        ],
        searchList: [],
        searchState: false
    },
    getters: {
        getId(state) {
            return state.id
        },
        getName(state) {
            return state.name
        },
        getNumber(state) {
            return state.number;
        },
        getPhoneList(state) {
            return state.phoneList;
        },
        getSearchList(state){
            return state.searchList;
        },
        getSearchState(state){
            return state.searchState;
        }
    },
    mutionas: {
        incId(state) {
            state.id = state.id++;
        }
    },
    actions: {

    }
})