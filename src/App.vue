<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/"><img src="./assets/logoPharmApp.png" style="width: 55px"/>PharmApp</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item pe-3">
              <router-link  class="nav-link" to="/login"><img src="./assets/user-solid.png" style="width: 25px"/></router-link>
            </li>
            <li class="nav-item">
              <router-link  class="nav-link" to="/user"><img src="./assets/gear-solid.png" style="width: 25px"/></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- <h1>{{store.name}}</h1> -->

    <!-- <h2>{{store.contador}}</h2> -->

    <!-- <button @click="store.incrementar">Incrementar</button> -->

    <router-view></router-view>


    <footer class="mt-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h6 class="m-0 text-white">© Pharm App | Todos los Derechos Reservados</h6>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<style lang="css">

  footer {
    background-color: #00A2B9;
    padding: 15px 0;
  }
</style> 


<script>
import { useNt2Store } from './store';

export default {
  setup() {
    //Vamos a dejar disponible el STATE
    const store = useNt2Store() 
    return { store }
  },
  async created() {
    await this.store.init()
  }
}

</script>