import { defineStore } from 'pinia'

export const useNt2Store = defineStore('nt2', {
    state: ()=> ({ contador: 0, appName: "" }),
    getters: {
        total: (state) => state.contador,
        name: (state) =>  state.appName
    },
    actions: {
        incrementar() {
            //hacer mas cosas
            this.contador++;
        },
        async init() {
            const result = await fetch ("https://6365984d046eddf1baf037f5.mockapi.io/users")
            const data = await result.json()
            // console.log(data[0].medicineKit)
            this.appName = data[2].medicineKit
        }
    }
})


// export const useNt2Store = defineStore('nt2', {
//     state: ()=> ({ userEmail: "", userPassword: "", userId: 0, isLogged: false }),
//     getters: {
//         total: (state) => state.contador,
//         name: (state) =>  state.appName
//     },
//     actions: {
//         incrementar() {
//             //hacer mas cosas
//             this.contador++;
//         },


//         async loguearme() {
//             const result = await fetch ("https://6365984d046eddf1baf037f5.mockapi.io/users")
//             const data = await result.json()    
//         }


//         // async init() {
//         //     const result = await fetch ("https://6365984d046eddf1baf037f5.mockapi.io/users")
//         //     const data = await result.json()
//         //     // console.log(data[0].medicineKit)
//         //     this.appName = data[2].medicineKit
//         // }
//     }
// })