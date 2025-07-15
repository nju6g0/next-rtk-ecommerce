import axios from "./axiosClient";
import { PostTypes } from "@/types/post";

export const getPosts = () => axios.get<PostTypes[]>("/posts");
export const getPost = (id: number) => axios.get(`/posts/${id}`);
// export const createPost = (data: any) => axios.post("/posts", data);
// export const updatePost = (id: number, data: any) =>
//   axios.put(`/posts/${id}`, data);
// export const patchPost = (id: number, data: any) =>
//   axios.patch(`/posts/${id}`, data);
// export const deletePost = (id: number) => axios.delete(`/posts/${id}`);
// export const getPostComments = (id: number) =>
//   axios.get(`/posts/${id}/comments`);
