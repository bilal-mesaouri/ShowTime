import { axiosClient } from "../axios";

export function findAll(){
    const data = axiosClient.get('movies').then((res)=>{
        return res.data ;
    });

    return data;

}


export function findLatest(){
    const data = axiosClient.get('movies/latest').then((res)=>{
        return res.data ;
    });

    return data;

}