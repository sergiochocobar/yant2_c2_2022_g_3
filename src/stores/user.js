import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: ()=> ({
        user: null,
        // isLogged: false
    }),

    getters: {
        estadoLoggin: (state) => state.user != null,
        medicineProducts: (state) => state.user
    },
    actions: {
        async signIn(email, password) {
           
            // let form = { email, password }

            // fetch( 'https://6365984d046eddf1baf037f5.mockapi.io/user', {
            //     method: 'POST',
            //     headers: {
            //         'Authorization': 'Bearer '+ this.token,
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json;charset=utf-8'
            //     },
            //     body: JSON.stringify( form )
            // } )
            // .then( function( response ){
            //     if( response.status != 201 ){
            //         this.fetchError = response.status;
            //     }else{
            //         response.json().then( function( data ){
            //             this.fetchResponse = data;
            //         }.bind(this));
            //     }
            // }.bind(this));




            const result = await fetch ("https://6365984d046eddf1baf037f5.mockapi.io/users")
            const usersData = await result.json()
            
            for (var i = 0; i < usersData.length; i++){ //Usar un filter
                let obj = usersData[i];

                if(email == obj["email"] && password == obj["password"]){

                    console.log(obj)

                    // const result = await fetch ("https://6365984d046eddf1baf037f5.mockapi.io/users/" + obj["id"])
                    // const userData = await result.json()


                    // this.user = userData
                    // this.isLogged = true
                
                    // window.location.href = '/'
                    

                    // console.log("Te autenticaste con usuario id:" + obj["id"])
                    // console.log(userData)
                    
                  
                }
              }    



              if (this.isLogged) {
                console.log("Estas autenticado")
                
              }else {
                console.log("no estas autenticado")  
              }
        }
    }
})

