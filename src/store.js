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
            const result = await fetch ("https://run.mocky.io/v3/21f4c348-7ad3-4895-b643-eee4f1ce7cb0")
            const data = await result.json()
            this.appName = data
        }
    }
})