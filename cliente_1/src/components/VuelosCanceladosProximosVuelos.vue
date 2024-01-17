<template>
    <div>
        <b-link :to="{ name: 'vuelos_cancelados' }">Regresar</b-link>
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
                    to : {name : 'vuelos_cancelados'}
                },
                {
                    text: 'Próximos Vuelos',
                    active: true
                }
            ]
        }
    }
}
</script>

<style focused></style>