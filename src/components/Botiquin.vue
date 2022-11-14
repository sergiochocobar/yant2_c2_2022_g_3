    <template>
        <div>
            <div class="banner-page">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 text-center">
                            <h1 class="text-white">Mi Botiquín</h1>
                        </div>
                    </div>
                </div>        
            </div>

            <div class="container mt-5">
                <div class="row">

                    <div class="col-3 mb-5" v-for="(item, index) in userStore.medicineProducts" :key="index">
                        <div class="card-shadow">
                            <figure class="product-image text-center">
                                <img src="../assets/mi-botiquin/bengue.jpeg" alt="">
                            </figure>
                            <h3 class="text-center">{{ item.name }}</h3>
                            <p class="venc_text text-center mb-1">{{item.due_date}}</p>
                            <p class="text-center">{{ item.description }}</p>
                            <div class="text-center">
                                <button type="button" class="btn btn-primary btn-sm" @click="userStore.restarProducto(item.id)">Restar</button>
                                <button class="btn btn-sm ms-2 text-white" v-bind:class="calcularCantidad(item.amount)" role="button" data-bs-toggle="button" aria-pressed="true">Cantidad: {{ item.amount }}</button>
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
        const userStore = useUserStore();
        return { userStore };
    },
    methods: {
        calcularCantidad(cantidad){
            let buttonClass = "btn-success"
            if(cantidad < 3) {
                buttonClass = "btn-danger"
            } else if (cantidad < 7) {
                buttonClass = "btn-warning"
            } 

            return buttonClass
        }
    }
    }

    </script>