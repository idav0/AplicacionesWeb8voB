import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
{
    path: '/',
    redirect: '/inicio'
},
{
    path: '/',
    component:{
        render(c){
            return c('router-view');
        },
    },
    children:[
        {
            path: '/inicio',
            name: 'inicio',
            component:() => import('../components/Inicio.vue')
        },
        {
            path: '/main',
            name: 'main',
            component:() => import('../components/Main.vue')
        },
        {
            path: '/tercero',
            name: 'tercero',
            component:() => import('../components/Tercero.vue')
        },
        {
            path: '/reservas_vuelo',
            name: 'reservas_vuelo',
            component:() => import('../components/ReservasVuelo.vue')
        },
        {
            path: '/reservas_vuelo/asientos_reservados',
            name: 'asientos_reservados',
            component:() => import('../components/ReservasVueloAsientosReservados.vue')
        },
        {
            path: '/vuelos_disponibles',
            name: 'vuelos_disponibles',
            component:() => import('../components/VuelosDisponibles.vue')
        },
        {
            path: '/vuelos_disponibles/lineas_vuelo',
            name: 'lineas_vuelo',
            component:() => import('../components/VuelosDisponiblesLineasVuelo.vue')
        },
        {
            path: '/vuelos_cancelados',
            name: 'vuelos_cancelados',
            component:() => import('../components/VuelosCancelados.vue')
        },
        {
            path: '/vuelos_cancelados/proximos_vuelos',
            name: 'proximos_vuelos',
            component:() => import('../components/VuelosCanceladosProximosVuelos.vue')
        },
    ]
}
]

const router = new VueRouter({routes, }) 
export default router;