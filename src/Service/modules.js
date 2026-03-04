
import api from "./api";

export const fetchAllModules = async ()=>{
 
    const {data} = await api.get('/modules')
    return data

}