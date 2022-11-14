import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: ()=> ({
        user: null,
    }),

    getters: {
        estadoLoggin: (state) => state.user != null,
        medicineProducts: (state) => state.user
    },
    actions: {
        async signIn(email, password) {
        
            const result = await fetch ("https://6365984d046eddf1baf037f5.mockapi.io/users?email=" + email)
            const userData = await result.json()

            if(userData != ""){
                if(password == userData[0]["password"]) {
                    this.user = userData[0]
                }
            }
            
            /*for (var i = 0; i < userData.length; i++){ //Usar un filter
                let obj = usersData[i];

                if(email == obj["email"] && password == obj["password"]){
                    this.user = obj
                }
              }*/    

              return this.user != null
        }
    }
})

