<template>
    <div>
        <div class="banner-page">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12 text-center">
                        <h1 class="text-white">Catálogo</h1>
                    </div>
                </div>
            </div>        
        </div>

        <div class="container mt-5">
            <div class="row">
                <div class="col-12" v-if="alertStatus">
                    <!-- Alert -->
                    <div class="alert" v-bind:class="this.alert" role="alert" >
                        {{this.alertMsg}}
                    </div>
                </div>
        
                <div class="col-3 mb-5" v-for="(item, index) in userStore.products" :key="index">
                    <div class="card-shadow">
                        <figure class="product-image text-center">
                            <img v-bind:src="item.image" alt="">
                        </figure>
                        <h3 class="text-center">{{ item.name }}</h3>
                        <p class="venc_text text-center mb-1">{{item.due_date}}</p>
                        <p class="text-center">{{ item.description }}</p>
                        <div class="text-center">
                            <button type="button" class="btn btn-primary btn-sm" @click="agregarABotiquin(item.productId)">Agregar a mi botiquín</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="css">

    .banner-page {
        background: url('../assets/mi-botiquin-banner-03.jpg'); 
        height: 180px;
        background-size: cover;
        background-position-y: center;
        background-repeat: no-repeat
    }

    .card-shadow {
        box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.1);
        padding: 15px;
    }

    .product-image img {
        width: 60%;
    }

    .venc_text{
        font-size: 14px;
        font-weight: bold;
    }

</style> 

<script>
import { useUserStore } from "../stores/user";

export default {

    setup() {
        const userStore = useUserStore()
        return { userStore }
    },

    data() {
        return {
            alert: "",
            alertMsg: "",
            alertStatus: false,
        }
    },
    
    async created() {
        await this.userStore.catalogoInit()
    },
    
    mounted() {
      if(!this.userStore.estadoLoggin){
        this.$router.push("login")
      }
    },
    
    methods: {
        async agregarABotiquin(productId) {
            let response = await this.userStore.agregarABotiquin(productId)
            if (response == 200 || response == 201) {
                this.alertStatus = true
                this.alert = "alert-success"
                this.alertMsg = "Producto agregado correctamente"
            } else {
                this.alertStatus = true
                this.alert = "alert-danger"
                this.alertMsg = "Hubo un problema al agregar el producto, intente nuevamente mas tarde"
            }
        }
    },

    watch:{
        alertStatus(val){
            if (val){
                setTimeout(()=> this.alertStatus=false, 3000);
            }
        }
    }
}

</script>