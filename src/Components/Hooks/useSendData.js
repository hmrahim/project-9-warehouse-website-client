import { async } from "@firebase/util"
import axios from "axios"


const useSendData = ()=> {
    const sendProductDataHandeler= async(e)=>{
        e.preventDefault()
        const title = e.target.title.value
        const unit = e.target.unit.value
        const price = e.target.price.value
        const link = e.target.link.value
        const data = {title,unit,price,link}
        const url = "http://localhost:5000/product"
      const sendData = await  axios.post(url,data)
        console.log(sendData);

    }




    return {sendProductDataHandeler}
}


export default useSendData