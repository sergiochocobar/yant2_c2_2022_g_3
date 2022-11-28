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


        async catalogoInit() {
            const result = await fetch ("https://6365984d046eddf1baf037f5.mockapi.io/medicineKit2")
            const data = await result.json()
            this.products = data
        },


        async restarProducto(id){
            let product = this.userProducts.find(function(item){
                return item.id === id
            });

            let objeto = { amount: parseInt(product.amount) - 1 }

            await axios.patch("https://6365984d046eddf1baf037f5.mockapi.io/users/" + this.user.id + "/medicineKit/" + id, objeto)
                .then(function( response ){

                    product.amount = response.data.amount

                    if (product.amount == 0) { 
                        this.borrarProducto(product.id)
                    }
                    
                }.bind(this))
                .catch( function( error ){
                    this.axiosError = error
                }.bind(this))
        },


        borrarProducto(id) {
            axios.delete("https://6365984d046eddf1baf037f5.mockapi.io/users/" + this.user.id + "/medicineKit/" + id)
            .then(function( response ){
                
                let productIndex = this.userProducts.findIndex(function(item){
                    return item.id === response.data.id
                });

                this.userProducts.splice(productIndex, 1)

            }.bind(this))
            .catch( function( error ){
                this.axiosError = error
            }.bind(this))
        },

        async agregarABotiquin(productId) {
            let axiosResponse

            const product = this.userProducts.find(function(item){
                return item.productId === productId
            });
            
            if(product != null){            
                let objeto = { amount: parseInt(product.amount) + 1 }

                await axios.patch("https://6365984d046eddf1baf037f5.mockapi.io/users/" + this.user.id + "/medicineKit/" + product.id , objeto)
                .then(function( response ){
                    axiosResponse = response.status
                    product.amount = response.data.amount                  
                }.bind(this))
                .catch( function( error ){
                    this.axiosError = error
                }.bind(this))

            } else {
                const newProductToAdd = this.products.find(function(item){
                    return item.productId === productId
                });

                newProductToAdd.userId = this.user.id;
                
                await axios.post("https://6365984d046eddf1baf037f5.mockapi.io/users/" + this.user.id + "/medicineKit", newProductToAdd)
                .then(function( response ){
                    axiosResponse = response.status
                    this.userProducts.push(response.data)
                }.bind(this))
                .catch( function( error ){
                    this.axiosError = error
                }.bind(this))
            }

            return axiosResponse
        }
    }
})

