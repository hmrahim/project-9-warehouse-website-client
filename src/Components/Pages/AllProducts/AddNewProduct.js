import React from 'react';
import useSendData from '../../Hooks/useSendData';
import useGetData from '../../Hooks/UseGetData';

const AddNewProduct = () => {
  const {useCategorie} = useGetData()
  const [categories,setCategories] =useCategorie()
 
    const {sendProductDataHandeler} = useSendData()
    return (
        <div className='px-2'>
      <h2 className="text-center">Add New Product</h2> <hr />
      <form onSubmit={sendProductDataHandeler} action="">
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Title
          </label>
          <input name="title" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Unit
          </label>
          <select name="unit"  className='form-control' id="">
              <option selected>Choose Unit</option>
              <option value="1kg">1kg</option>
              <option value="4pcs">4pcs</option>
              <option value="1pcs">1pcs</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Categorie
          </label>
          <select name="categorie"  className='form-control' id="">
              <option selected>Choose Categorie</option>
              {
                categories.map(categorie=> <option value={categorie.categorie}>{categorie.categorie}</option>)
              }
              
              
          </select>
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Price
          </label>
          <input name="price" type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Quantity
          </label>
          <input name="quantity" type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Image link
          </label>
          <input name="link" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Description
          </label> <br />
          <textarea name="desc" id="" cols="50" rows="5">

          </textarea>
        </div>

        <div className="mb-3">
          <button className="btn btn-primary " type="submit">
            Sibmit
          </button>
        </div>
      </form>
    </div>
    );
};

export default AddNewProduct;