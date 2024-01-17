<template>
    <div>
        <b-link :to="{ name: 'proximos_vuelos' }">Siguiente</b-link>
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
                    text: 'Vuelos Cancelados',
                    href: '#',
                    active : true
                }
            ]
        }
    }
}
</script>

<style focused></style>