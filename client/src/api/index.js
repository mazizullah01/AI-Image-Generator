
import axios from "axios";

// Create a reusable Axios instance with the API base URL
const API = axios.create({
    baseURL: "/api/",
});

// Fetch all posts from the backend
export const GetPosts = async () => await API.get("/post/");

// Create a new post with the provided data
export const CreatePost = async (data) => await API.post("/post/", data);

// Generate an AI image using the provided data
export const GenerateAIImage = async (data) => await API.post("/generateImage/", data);
