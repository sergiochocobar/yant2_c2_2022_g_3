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
                <div class="col-3">
                    <div class="card-shadow">
                        <figure class="product-image text-center">
                            <img src="../assets/mi-botiquin/bengue.jpeg" alt="">
                        </figure>
                        <h3 class="text-center">Bengue</h3>
                        <p class="venc_text text-center mb-1">Venc: 2022-06-13</p>
                        <p class="text-center">Analgésico, antiinflamatorio, rubefaciente tópico que alivia el dolor y la inflamación localizada. Crema 150 gr. Contiene salicilato metilo y mentol.</p>
                        <div class="text-center">
                            <h4 class="badge rounded-pill bg-success text-center">Disponible</h4>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card-shadow">
                        <figure class="product-image text-center">
                            <img src="../assets/mi-botiquin/sertal.jpeg" alt="">
                        </figure>
                        <h3 class="text-center">Sertal Compuesto</h3>
                        <p class="venc_text text-center mb-1">Venc: 2022-05-30</p>
                        <p class="text-center">Analgésico, antiespasmódico. tratamiento del dolor leve a moderado asociado a dismenorrea primaria y estados espasmódicos del intestino en adultos y niños mayores de 12 años de edad. 10 comprimidos recubiertos de propinox clonixinato de lisina de 10 mg.</p>
                        <div class="text-center">
                            <h4 class="badge rounded-pill bg-warning text-center">A Reponer</h4>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card-shadow">
                        <figure class="product-image text-center">
                            <img src="../assets/mi-botiquin/tafirol.jpeg" alt="">
                        </figure>
                        <h3 class="text-center">Tafirol</h3>
                        <p class="venc_text text-center mb-1">Venc: 2022-06-13</p>
                        <p class="text-center">Analgésico, antipirético, Alivio en afecciones musculosqueléticas, ginecológicas, otorrinolaringológicas. 30 comprimidos de paracetamol 500 mg</p>
                        <div class="text-center">
                            <h4 class="badge rounded-pill bg-danger text-center">Vacío</h4>
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

    .product-image {

    }
    .product-image img {
        width: 60%;
    }

    .venc_text{
        font-size: 14px;
        font-weight: bold;
    }

</style> 