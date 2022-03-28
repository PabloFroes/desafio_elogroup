const leadError = "Nenhum lead encontrado"

const LeadService = {

    create: (lead) => {
        try {
            const leads = JSON.parse(localStorage.getItem("leads"))
            if(leads){
                leads.push(lead)
                localStorage.setItem("leads", JSON.stringify(leads))
                //alert("Lead incluído com sucesso")
            }else {
                localStorage.setItem("leads", JSON.stringify([lead]))
                //alert("Lead incluído com sucesso")
            }
        } catch (error) {
            throw error
        }
    },

    get: () => {
        try {
            const leads =  JSON.parse(localStorage.getItem("leads"))
            return leads
        } catch (error) {
            throw error
        }
    },

    update: (index,status) => {
        try {
            const leads = JSON.parse(localStorage.getItem("leads"))
            if(leads){
                leads[index].Status = status;
                localStorage.setItem("leads", JSON.stringify(leads))
            }else{
                throw leadError
            }
        } catch (error) {
            throw error
        }
    },
    
    delete: (index) => {
        try {
            const leads = JSON.parse(localStorage.getItem("leads"))
            if(leads){
                leads.splice(index,1)
                localStorage.setItem("leads", JSON.stringify(leads)) 
            }else{
                throw leadError
            }
        } catch (error) {
            throw error
        }
    }
}

export default LeadService