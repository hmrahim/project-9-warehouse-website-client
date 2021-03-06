
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useAuthState} from "react-firebase-hooks/auth"
import auth from "../../firebase.init";


const useSendData = ()=> {
  const [user,loading,error] = useAuthState(auth)
    const sendProductDataHandeler= async(e)=>{
        e.preventDefault()
        const title = e.target.title.value
        const unit = e.target.unit.value
        const price = e.target.price.value
        const link = e.target.link.value
        const categorie = e.target.categorie.value
        const quantity = e.target.quantity.value
        const desc = e.target.desc.value
        const suply = e.target.suply.value
        const email = user.email
        if(!title || !unit || !price || !link || !categorie || !quantity || !desc || !suply){
          toast.error("You cannot provide empty any field")

        }else{
        const data = {title,unit,price,link,categorie,quantity,desc,suply,email}
        
        const url = "https://secure-tundra-45476.herokuapp.com/product"
      const sendData = await  axios.post(url,data,{
        headers:{
          "authorization":`${user?.email} ${localStorage.getItem("token")}`,
          "Content-Type" : "Application/json"
      }
      })
      if(sendData){
        e.target.reset()
        toast.success("Data inserted successfully")
        console.log(sendData);

      }
    }
     

    }

    const sendCategorieDataHandeler =async (e)=> {
      e.preventDefault()
      const categorie = e.target.categorie.value
      if(!categorie){
        toast.error("You cannot provide empty this field")
        
      }
      const data = {categorie}
      const url = "https://secure-tundra-45476.herokuapp.com/categorie"
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