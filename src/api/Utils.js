import axios from "axios";

//upload image
export const imageUpload = async imagedata => {
    const formData = new FormData()
    formData.append('image', imagedata)

    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`, formData)
    return data.data.url
    
}