import axios from "axios";
import { base_url } from "../utils/BaseUrl";

export async function getAllJobs(){
    return await axios(`${base_url}/jobs/all`)
}

export async function getAllCategory(){
    return await axios(`${base_url}/jobs/allcategories`)
}

export async function getAllJobsByCategory(categoryName){
    return await axios(`${base_url}/jobs/all?category=${categoryName}`)
}
