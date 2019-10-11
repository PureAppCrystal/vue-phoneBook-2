import App from '../App'

const routerList = {
    mode: 'history',
    routes: [
        {
            path:'/',
            name: 'home',
            component: App,
            alias: '/home', 
        },
        {
            path:'/insert',
            name: 'insert',
            component: App,
            alias: '/insert', 
        },
    ]
}

export default routerList;