<template>
    <div>
        <div class="container">
            <div class="row">
                <!-- Alert -->
                <div class="alert alert-danger" role="alert" v-if="error">
                    {{this.error_msg}}
                </div>
                <!-- /// -->
                <div class="col-12">
                    <div class="row">
                        <div class="col-5 m-auto mt-5">
                            <form id="formulario" v-on:submit.prevent = "login">
                                <div class="row mb-3">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputEmail3" v-model="email">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputPassword3" class="col-sm-2 col-form-label" >Password</label>
                                    <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword3" v-model="password">
                                    </div>
                                </div>  
                                <button type="submit" class="btn btn-primary d-block m-auto" id="liveAlertBtn">Ingresar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                email: "",
                password: "",
                error: false,
                error_msg: ""
            }
        },
        methods: {
            // login() {
                //Si el email y la contrasena ingresada estan bien, cmabiar el parametro del estado centralizado a TRUE
                //Guardar tambien el id del usuario.
            //     console.log(`email: ${this.email} - contrasenia: ${this.password}`)
            //     if (this.email == "sergio@email.com" && this.password == "123"){
            //         this.error = false
            //     } else {
            //         this.error = true
            //         this.error_msg = "Completa los campos requeridos"
            //     }
            // }

            async login() {
                if (this.email != "" || this.password != ""){
                    this.error = false
                    await this.userStore.signIn(this.email, this.password);
                } else {
                    this.error = true
                    this.error_msg = "Completa los campos requeridos"
                } 
                // this.$router.push("/") // Por ahi no es un push sino un REDIRECT
            }
        }
    };
    
    // const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    // const alert = (message, type) => {
    // const wrapper = document.createElement('div')
    // wrapper.innerHTML = [
    //     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    //     `   <div>${message}</div>`,
    //     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    //     '</div>'
    // ].join('')

    // alertPlaceholder.append(wrapper)
    // }

    // const alertTrigger = document.getElementById('liveAlertBtn')
    // if (alertTrigger) {
    // alertTrigger.addEventListener('click', (e) => {
    //     e.preventDefault
    //     alert('Nice, you triggered this alert message!', 'success')
    // })
    // }
</script>