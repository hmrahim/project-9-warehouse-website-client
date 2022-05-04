import { useEffect, useState } from "react"


const useGetData = ()=> {




const useCategorie = ()=> {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch("https://secure-tundra-45476.herokuapp.com/categorie")
        .then(res=> res.json())
        .then(data=> setCategories(data))
       


    },[categories])
    return [categories,setCategories]

}

return {useCategorie}

}






export default useGetData
