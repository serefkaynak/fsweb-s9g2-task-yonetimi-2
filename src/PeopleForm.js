import React, { useEffect, useState } from "react";
import { initialTasks, initialTeam } from "./data";

const PeopleForm = ({ kisiler, submitFn }) => {
  const [team, setTeam] = useState(initialTeam);
  const [isim, setIsim] = useState("");

  const handleSubmit = (e) => {
    setTeam([...team, isim]);
    submitFn(isim);
    setIsim("");
    console.log("Form submit");
    e.preventDefault();
    
  };

  useEffect(() => {
    setIsim("");
  }, [kisiler]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="text-xs text-gray-600" htmlFor="title">
          Yeni İsim Ekle
        </label>
        <input
          className="input-text"
          id="title"
          name="title"
          type="text"
          onChange={(e) => setIsim(e.target.value)}
          value={isim}
        />
        {kisiler.includes(isim) && <p className="text-sm text-red-400">*Bu isim daha önce eklenmiş</p>}
      </div>

      <div className="pt-1 flex justify-end">
        <button
          className=" bg-blue-500  text-white py-2 px-4 rounded disabled:bg-gray-300"
          type="button"
          disabled={isim.length === 0 || kisiler.includes(isim)}
          style={{ opacity: isim.length === 0 ? 0 : 1 }}
          onClick={handleSubmit}
        >
          Ekle
        </button>
      </div>
    </form>
  );
};

export default PeopleForm;
