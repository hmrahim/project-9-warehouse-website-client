import { useEffect, useState } from "react"


const getProducts = ()=> {

const useProducts = ()=> {
    const [products,setProducts] = useState([])
    useEffect(()=> {
        fetch("http://localhost:5000/product")
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[products])

    return [products,setProducts]



};




return {useProducts}
}

export default getProducts




