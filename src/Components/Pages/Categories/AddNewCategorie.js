import React from 'react';
import useSendData from '../../Hooks/useSendData';

const AddNewCategorie = () => {
    const {sendCategorieDataHandeler} = useSendData()
    return (
        <div>
            <h2 className="text-center">Add New Categorie</h2> <hr />
      <form onSubmit={sendCategorieDataHandeler} action="">
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Categorie
          </label>
          <input name="categorie" type="text" className="form-control" />
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

export default AddNewCategorie;