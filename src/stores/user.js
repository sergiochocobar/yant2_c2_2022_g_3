import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: ()=> ({
        user: null,
        userProducts: null,
        products: null,
    }),

    getters: {
        estadoLoggin: (state) => state.user != null,
        medicineProducts: (state) => state.userProducts
    },
    actions: {
        async signIn(email, password) {
            const result = await fetch ("https://6365984d046eddf1baf037f5.mockapi.io/users?email=" + email)
            const userData = await result.json()

            if(userData != ""){
                if(password == userData[0]["password"]) {
                    this.user = userData[0]
                    this.userProducts = userData[0]["medicineKit"]
                }
            } 

            return this.user != null
        },


        async restarProducto(productId){
            let productIndex = this.userProducts.findIndex(function(item){
                return item.id === productId
            });

            const productAmount = this.userProducts[productIndex]["amount"]

            let objeto = { amount: parseInt(productAmount) - 1 }

            await axios.patch("https://6365984d046eddf1baf037f5.mockapi.io/users/" + this.user['id'] + "/medicineKit/" + productId, objeto)
                .then(function( response ){
                    this.userProducts[productIndex]["amount"] = response.data["amount"]

                    if (this.userProducts[productIndex]["amount"] == 0){
                        console.log("borrar producto") //Ver como eliminar cuando el producto sea 0
                    }
                    
                }.bind(this))
                .catch( function( error ){
                    this.axiosError = error
                }.bind(this))
        },

        async catalogoInit() {
            const result = await fetch ("https://6365984d046eddf1baf037f5.mockapi.io/medicineKit2")
            const data = await result.json()
            this.products = data
        },

        agregarABotiquin(productId) {
             console.log("Producto ID: " + productId)
        }
    }
})

