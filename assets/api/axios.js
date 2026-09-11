import axios from "axios";

const api = axios.create({

    baseUrl: "https://dofxzdlhadyokehrkxoc.supabase.co/rest/v1",

    headers: {
        apikey: "sb_publishable_D9AUiclRIM8Rw2dE3-4ZKg_LC83mB12"
    }
}

);

export default api;