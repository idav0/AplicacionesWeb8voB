<script setup>
</script>

<template>
  <div id="app">
    <!-- Navbar -->
    <b-navbar toggleable="md" type="dark" variant="primary" style="z-index: 10000;">
      <b-navbar-brand href="#">Navbar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav-collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    



    <b-container fluid>
      <b-row>
        <!-- Sidebar -->
        <b-col sm="3">
            <b-sidebar no-close-on-route-change shadow visible style="z-index:1;">
                <div class="p-3">
                  <h4 id="sidebar-no-header-title" style="margin-top: 10px;">Custom header sidebar</h4>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <nav class="mb-3">
                    <b-nav vertical >
                      <b-nav-item><b-link :to="{name : 'reservas_vuelo'}">Reservas de Vuelo</b-link></b-nav-item>
                      <b-nav-item><b-link :to="{name : 'vuelos_disponibles'}">Vuelos Disponibles</b-link></b-nav-item>
                      <b-nav-item><b-link :to="{name : 'vuelos_cancelados'}">Vuelos Cancelados</b-link></b-nav-item>
                    </b-nav>
                  </nav>
                </div>
            </b-sidebar>
        </b-col>

        <!-- Main Content -->
        <b-col sm="9">
          <router-view style="margin-top: 20px;"></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped></style>
