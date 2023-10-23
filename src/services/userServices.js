import axios from "axios";
import { base_url } from "../utils/BaseUrl";

export async function createUser(email,password,fullName){
    const requestBody = {
        email: email,
        password: password,
        fullName: fullName,
      };
    return await axios.post(`${base_url}/users/signup`,requestBody)
}

export async function loginUser(email,password){
    const requestBody = {
        email: email,
        password: password,
      };
    return await axios.post(`${base_url}/users/login`,requestBody)
}

export async function getMyJobsApplied(token) {
    return await axios.get(`${base_url}/application`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  export async function applyForTheJob(token, jobId) {
    return await axios.post(
      `${base_url}/application/apply/${jobId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
  
