import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  { id: 1, name: "Lionel Messi", country: "Argentina" },
  { id: 2, name: "Cristiano ronaldo", country: "Portugal" },
  { id: 3, name: "Neymar Junior", country: "Brasil" },
  { id: 4, name: "Kylian Mbappé", country: "Francia" },
  { id: 5, name: "Paulo Dybala", country: "Argentina" },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
    // console.log(data)
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    const index = db.findIndex((el) => el.id === id);
    const newForm = [...db];
    newForm.splice(index, 1);
    setDb(newForm);
  };

  return (
    <>
      <h2 className="crudApp"> Crud App </h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </>
  );
};

export default CrudApp;
