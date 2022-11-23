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
            <li class="nav-item  pe-3">
              <div  class="nav-link position-relative" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="./assets/bell-solid.png" style="width: 25px"/>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
                <ul class="dropdown-menu ">
                  <li><a class="dropdown-item" href="#">dsadsaudasdasidbaskjdbasjkdbaskjdbakjdbkajdbjkasb </a></li>
  
                </ul>
              </div>
            </li>


            <li class="nav-item">
              <div class="nav-link" @click="recargarPagina"><img src="./assets/sign-out.png" style="width: 25px"/></div>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>

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
  export default {
    methods: {
        async recargarPagina() {
          location.reload()
        }
    }
  }

</script>