import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from 'react-toastify';
import { initialTasks, initialTeam } from "./data";
import PeopleForm from "./PeopleForm";
import { useState } from "react";

export default function TaskHookForm({ kisiler, submitFn, submitFn2 }) {
  const {register, handleSubmit, reset, formState: { errors, isValid },} = useForm({ mode: "onChange" });
  const [team, setTeam] = useState(initialTeam);

  function handlePeopleSubmit(yeniKisi) {
    console.log(yeniKisi);
    submitFn2(yeniKisi);
  }

  function mySubmit(data) {
    submitFn({
      ...data,
      id: nanoid(5),
      status: "yapılacak",
    });
    toast.success(data.title + " başarıyla eklendi", {
      position: "bottom-left",
    });
    reset({
      title: "",
      description: "",
      deadline: ""
    });
  }


  return (
    <form onSubmit={handleSubmit(mySubmit)}>
      <div className="pt-2 ">
        <label className="text-xs text-gray-600" htmlFor="title">
          Başlık
        </label>
        <input
          className="input-text"
          {...register("title", { required: "Task başlığı yazmalısınız" })}
          id="title"
          name="title"
          type="text"
        />
        {errors.title && <p className="text-sm text-red-400">{`*${errors.title.message}`}</p>}
      </div>

      <div className="pt-2">
        <label className="text-xs text-gray-600" htmlFor="description">
          Açıklama
        </label>
        <textarea
          className="input-textarea"
          {...register("description", {
            required: "Task açıklaması yazmalısınız",
            minLength: {
              value: 10,
              message: "Task açıklaması en az 10 karakter içermelidir",
            },
          })}
          rows="3"
          id="description"
          name="description"
        ></textarea>
        {errors.description && (
          <p className="text-sm text-red-400">{`*${errors.description.message}`}</p>
        )}
      </div>

      <div className="pt-2">
        <label className="text-xs text-gray-600">Kişiler</label>
        <div className="flex flex-wrap">
          {kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input {...register("people", {
                  required: "Lütfen en az 1 kişi seçin",
                  validate: {
                    maxKisi: (value) =>
                      value.length < 4 || "En fazla 3 kişi seçebilirsiniz",
                  },
                })}
                type="checkbox"
                name="people"
                value={p}
              />
              {p}
            </label>
          ))}
        </div>
        {errors.people && (
          <p className="text-sm text-red-400">{`*${errors.people.message}`}</p>
        )}
        <div className="border-collapse">
          <PeopleForm kisiler={team} submitFn={handlePeopleSubmit} />
        </div>
      </div>

      <div className="pt-2">
        <label className="text-xs text-gray-600" htmlFor="deadline">
          Son teslim tarihi
        </label>
        <input
          className="input-text"
          {...register("deadline", { required: "Son teslim tarihi seçmelisiniz" })}
          id="deadline"
          name="deadline"
          type="date"
          min="2023-01-25"
        />
        {errors.deadline && <p className="text-sm text-red-400">{`*${errors.deadline.message}`}</p>}
      </div>

      <div className="py-4 flex justify-end ">
        <button className=" bg-blue-500  text-white py-2 px-4 rounded disabled:bg-gray-300" disabled={!isValid}>
          Kaydet
        </button>
      </div>
    </form>
  );
}
