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
            // let productIndex = this.userProducts.findIndex(function(item){
            //     return item.id === productId
            // });

            let product = this.userProducts.find(function(item){
                return item.id === productId
            });

            // console.log(product)

            // const productAmount = product.amount

            let objeto = { amount: parseInt(product.amount) - 1 }

            await axios.patch("https://6365984d046eddf1baf037f5.mockapi.io/users/" + this.user['id'] + "/medicineKit/" + productId, objeto)
                .then(function( response ){
                    // this.userProducts[productIndex]["amount"] = response.data["amount"]

                    let product = this.userProducts.find(function(item){
                        return item.id === productId
                    });

                    product.amount = response.data["amount"]



                    // if (this.userProducts[productIndex]["amount"] == 0){
                    //     console.log("borrar producto") //Ver como eliminar cuando el producto sea 0
                    // }
                    
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

        async agregarABotiquin(productId) {
            const resultado = this.userProducts.filter((elemento) => elemento["productId"] == productId);
        
            if(resultado != ""){
                let productIndex = this.userProducts.findIndex(function(item){
                    return item.productId === productId
                });

                const productAmount = this.userProducts[productIndex]["amount"]
                let objeto = { amount: parseInt(productAmount) + 1 }

                await axios.patch("https://6365984d046eddf1baf037f5.mockapi.io/users/" + this.user['id'] + "/medicineKit/" + productId, objeto)
                .then(function( response ){
                    this.userProducts[productIndex]["amount"] = response.data["amount"]

                    /// Si se agrego correctamente usar un alert!! usar el status code 200
                    
                }.bind(this))
                .catch( function( error ){
                    this.axiosError = error
                }.bind(this))
            } else {
                const resultado2 = this.products.filter((elemento) => elemento["productId"] == productId);
                resultado2["0"].userId = this.user.id;
                
                await axios.post("https://6365984d046eddf1baf037f5.mockapi.io/users/" + this.user['id'] + "/medicineKit", resultado2["0"])
                .then(function( response ){
                    this.userProducts.push(response.data)
                }.bind(this))
                .catch( function( error ){
                    this.axiosError = error
                }.bind(this))
            }
        }
    }
})

