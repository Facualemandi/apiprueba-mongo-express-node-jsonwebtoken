import React from "react";

const CrudTableRow = ({el, deleteData, setDataToEdit}) => {
  let {name, country, id} = el
  return (
    <>
 
      <tr >
        <td>{name}</td>
        <td>{country}</td>
        <td>
          <button onClick={() => setDataToEdit(el)}>Editar</button>
          <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>
      </tr>


    </>
  );
};

export default CrudTableRow;
