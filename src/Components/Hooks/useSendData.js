
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const useSendData = ()=> {
    const sendProductDataHandeler= async(e)=>{
        e.preventDefault()
        const title = e.target.title.value
        const unit = e.target.unit.value
        const price = e.target.price.value
        const link = e.target.link.value
        if(!title || !unit || !price || !link){
          toast.error("You cannot provide empty any field")

        }
        const data = {title,unit,price,link}
        const url = "http://localhost:5000/product"
      const sendData = await  axios.post(url,data)
      toast.success("Data inserted successfully")
        console.log(sendData);

    }

    const sendCategorieDataHandeler =async (e)=> {
      e.preventDefault()
      const categorie = e.target.categorie.value
      if(!categorie){
        toast.error("You cannot provide empty this field")
        
      }
      const data = {categorie}
      const url = "http://localhost:5000/categorie"
      const sendData = await  axios.post(url,data)
      if(sendData){
        toast.success("Data inserted successfully")
      console.log(sendData);
      e.target.reset()

      }
      


    }




    return {sendProductDataHandeler,sendCategorieDataHandeler}
}


export default useSendData