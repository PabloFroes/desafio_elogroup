const userAlreadyExist = "Usuário já existente";
const userOrPassWrong = "Usuário ou senha incorreto";
const userNotExist = "Nenhum Usuário cadastrado";

const UsersService = {

    register: (username,password) => {
        try {
            let users = JSON.parse(localStorage.getItem("users"))
            if(!users){
                localStorage.setItem("users", JSON.stringify([{username,password}]))
            }else {
                const user = users.find(user => user.username === username)
                if(user){
                    throw userAlreadyExist;
                }else{
                    users.push({username,password})
                    localStorage.setItem("users", JSON.stringify(users))
                }
            }
        } catch (error) {
            throw error
        }
    },

    login: (username,password) => {
        const users = JSON.parse(localStorage.getItem("users"))
        if(!users){
            throw userNotExist
        } 
        const user = users.find(user => user.username === username)
        if(!user){
            throw userOrPassWrong
        }
        try {
                if(user.username === username && user.password === password){
                    localStorage.setItem("userLogged", JSON.stringify({username,password}))
                }
                else{
                    throw userOrPassWrong;
                }    
        } catch (error) {
            throw error
        }

    },
    
    logout: () => {
        localStorage.removeItem("userLogged",null)
    }
}

export default UsersService