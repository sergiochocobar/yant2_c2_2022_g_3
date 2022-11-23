<template>
    <div>
        <div class="banner-home">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12 text-center">
                        <h1 class="text-white">Lo mejor en Medicamentos<br>Lo mejor en Productos de Farmacia</h1>
                    </div>
                </div>
            </div>        
        </div>

        <div class="container">
            <div class="row">
                <div class="col-6 mt-5">
                    <div class="row">
                        <div class="col-9 m-auto">
                            <div class="w-100" style="border:5px solid #B2B2B2;">
                                <div class="w-100 image-container-01"></div>
                                <h4 class="p-3">Elegí los mejores productos de nuestro catalógo, pensados para vos.</h4>
                                <router-link  class="nav-link text-uppercase text-end pb-3 pe-3" to="/catalogo">Ir al Catálogo</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 mt-5">
                    <div class="row">
                        <div class="col-9 m-auto">
                            <div class="w-100" style="border:5px solid #B2B2B2;">
                                <div class="w-100 image-container-02"></div>
                                <h4 class="p-3">Mi botiquín, donde podés ver, actualizar, y reservar tus compras.</h4>  
                                <router-link  class="nav-link text-uppercase text-end pb-3 pe-3" to="/botiquin">Ir a mi botiquín</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>
    
<style lang="css">

    .banner-home {
        background: url('../assets/banner-home-01.png'); 
        height: 500px;
        background-size: cover;
        background-position-y: top;
        background-repeat: no-repeat
    }



    .image-container-01 {
        background: url('../assets/foto-home-01.jpg'); 
        height: 300px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat
    }

    .image-container-02 {
        background: url('../assets/foto-home-02.jpg'); 
        height: 300px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat
    }

</style> 

<script>
  import { useUserStore } from "../stores/user";

  export default {
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },
  
    mounted() {
      if(!this.userStore.estadoLoggin){
        this.$router.push("login")
      }
    }

  }

</script>