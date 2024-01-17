<template>
    <div>
        <b-link :to="{ name: 'vuelos_disponibles' }">Regresar</b-link>
        <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Inicio',
                    href: '#',
                    to: 'inicio'
                },
                {
                    text: 'Vuelos Disponibles',
                    href: '#',
                    to : {name:'vuelos_disponibles'}
                },
                {
                    text: 'Lineas de Vuelo',
                    href : '#',
                    to : 'vuelos_disponibles_lineas_vuelo'
                }
            ]
        }
    }
}
</script>

<style focused></style>