import axios from "axios"

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
})

export const getStatus = async () => {
  const res = await API.get("/")
  return res.data
}