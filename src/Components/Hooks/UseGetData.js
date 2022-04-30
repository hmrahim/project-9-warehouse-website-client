import { useEffect, useState } from "react"
import axios from "axios";

const useCategorie = ()=> {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/categorie")
        .then(res=> res.json())
        .then(data=> setCategories(data))
       


    },[categories])
    return [categories,setCategories]

}



export {useCategorie}
