
const LeadService = {

    create: (lead) => {
        try {
            const leads = JSON.parse(localStorage.getItem("leads"))
            if(leads){
                leads.push(lead)
                localStorage.setItem("leads", JSON.stringify(leads))
            }else {
                localStorage.setItem("leads", JSON.stringify([lead]))
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
            
        }
    }


}

export default LeadService