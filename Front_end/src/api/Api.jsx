import axios from "axios";

const blogFetch = axios.create({
    baseURL: 'https://projeto-individual-case-backend.onrender.com/',
    headers:{
        "Content-Type": "application/json",
    }
});

export default blogFetch;