import React from 'react';
import useSendData from '../../Hooks/useSendData';

const AddNewProduct = () => {
    const {sendProductDataHandeler} = useSendData()
    return (
        <div>
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
            Price
          </label>
          <input name="price" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Image link
          </label>
          <input name="link" type="text" className="form-control" />
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