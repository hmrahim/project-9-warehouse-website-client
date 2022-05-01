
import getProducts from "./useProduct"


const useApi = ()=> {
    const {useProducts} = getProducts()
    const [products,setProducts] = useProducts()
    const deleteProduct = (id)=> {
        
    const proced =   window.confirm("are you sure to delete data")
    if(proced){
        const url = `http://localhost:5000/product/${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
        const remening = products.filter(data=> data._id !== id)
        setProducts(remening)
    }
       
    
    }

    return {deleteProduct}
}

export {useApi}