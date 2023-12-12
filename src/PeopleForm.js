import React, { useState } from "react";

const PeopleForm = ({ kisiler, submitFn }) => {
  const [isim, setIsim] = useState("");

  function handleIsimChange(e) {
    setIsim(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitFn(isim);
    setIsim("");
  }


  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <div className="form-line">
        <label className="text-sm text-gray-600" htmlFor="title">
          Yeni İsim Ekle
        </label>
        <input
          className="input-text"
          id="title"
          name="title"
          type="text"
          onChange={handleIsimChange}
          value={isim}
        />
        {kisiler.includes(isim) && <p className="text-sm text-red-400">*Bu isim daha önce eklenmiş</p>}
      </div>

      <div className="pt-1 flex justify-end">
        <button
          className=" bg-blue-500  text-white py-2 px-4 rounded disabled:bg-gray-300"
          type="submit"
          disabled={isim.length === 0 || kisiler.includes(isim)}
          style={{ opacity: isim.length === 0 ? 0 : 1 }}
        >
          Ekle
        </button>
      </div>
    </form>
  );
};

export default PeopleForm;
