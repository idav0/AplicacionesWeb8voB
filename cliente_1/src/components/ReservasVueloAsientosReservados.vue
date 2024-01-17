<template>
    <div>
        <b-link :to="{ name: 'reservas_vuelo' }">Regresar</b-link>
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
                    text: 'Reservas de Vuelo',
                    href: '#',
                    to: {name:"reservas_vuelo"}
                },
                {
                    text: 'Asientos Reservados',
                    active: true
                }
            ]
        }
    }
}
</script>

<style focused></style>