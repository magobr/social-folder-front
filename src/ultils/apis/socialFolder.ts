import axios from "axios";

export const socialFolder = axios.create({
    baseURL: "http://localhost:3001"
})