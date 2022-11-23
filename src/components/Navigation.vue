<template>
  <div>
     <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/"><img src="../assets/logoPharmApp.png" style="width: 55px"/>PharmApp</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item  pe-3">
              <div class="nav-link">
                <img v-bind:src="this.userStore.user != null ? this.userStore.user.avatar : '' " style="width: 35px; border-radius: 50%"/>
                Bienvenid{{this.userStore.user != null && this.userStore.user.genre == "male"? "o" : "a"}}, <b>{{this.userStore.user != null ? this.userStore.user.name : ""}}</b>
              </div>
            </li>
            <li class="nav-item  pe-3">
              <div  class="nav-link position-relative" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../assets/bell-solid.png" style="width: 25px"/>
                <span class="position-absolute translate-middle badge rounded-pill bg-danger" v-if="probando.length > 0">{{ probando.length }}</span>
                <ul class="dropdown-menu "  v-if="probando.length > 0">
                  <li v-for="(item, index) in probando" :key="index">
                     <a class="dropdown-item">¡El producto <b>{{item.name}}</b> está a punto de agotarse!</a> 
                  </li> 
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link"  @click="recargarPagina"><img src="../assets/sign-out.png" style="width: 25px"/></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useUserStore } from "../stores/user";

export default {
    setup() {
      const userStore = useUserStore();
      return { userStore };
    },
    
    data() {
      return {
        productsNotificacionObjects: []
      }
    },

    methods: {
        async recargarPagina() {
          location.reload()
        }
    },
  

    computed: {
      probando() {
        this.productsNotificacionObjects = []
        if(this.userStore.estadoLoggin){
          let userStoreProducts =  this.userStore.medicineProducts
          this.productsNotificacionObjects = userStoreProducts.filter(item => item.amount <= 2)
        }
        return this.productsNotificacionObjects
      }
    }
  }

</script>