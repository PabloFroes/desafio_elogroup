

const UsersService = {
    register: (username,password) => {
        localStorage.setItem("user", JSON.stringify({username,password}))
    },
    login: (username,password) => {
        const user = JSON.parse(localStorage.getItem("user"))
                if(user.username === username && user.password === password){
                    localStorage.setItem("userLogged", JSON.stringify({username,password}))
                    console.log("logged")
                }        
                else{
                    console.log("error username")
                }

    },
    logout: () => {
        localStorage.removeItem("userLogged",null)
    }
}

export default UsersService