import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const getProducts = ()=> {
    
    const useProducts = ()=> {
    const [user]  = useAuthState(auth)
    const [products,setProducts] = useState([])
    useEffect(()=> {
        fetch("http://localhost:5000/product",{
            method:"GET",
            headers:{
                "authorization":`${user?.email} ${localStorage.getItem("token")}`,
                "Content-Type" : "Application/json"
            }
        })
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[products])

    return [products,setProducts]



};




return {useProducts}
}

export default getProducts




