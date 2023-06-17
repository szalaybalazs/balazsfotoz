"use client";

import clsx from "clsx";
import { FormEvent, FunctionComponent, useState } from "react";

interface iFormProps {}

const roundNess = "rounded-md";
const inputClasses = clsx(
  "bg-gray-500 bg-opacity-10 appearance-none",
  roundNess,
  "w-full py-3 px-4 text-gray-900 leading-tight",
  "focus:outline-none focus:bg-opacity-20 font-serif font-medium placeholder-gray-500"
);
const labelClasses = clsx(
  "flex text-sm font-bold font-serif text-gray-700 mb-2"
);
const Form: FunctionComponent<iFormProps> = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    setIsSuccess(true);

    event.preventDefault();
    event.stopPropagation();

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = formData.get("subject");

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message, subject }),
    });
  };

  return (
    <>
      {isSuccess ? (
        <div className="relative font-serif text-center pt-32 mt-12">
          <div className="success">
            <span></span>
          </div>
          <h3 className="text-2xl font-medium mt-8">Köszönöm!</h3>
          <p className="text-lg mt-2 font-medium text-gray-400">
            Igyekszem mindenre pár napon belül válaszolni.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-4 mt-12">
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <label className={labelClasses}>Név</label>
              <input
                className={inputClasses}
                name="name"
                placeholder="Teszt Elek"
                required
              />
            </div>
            <div className="flex-1">
              <label className={labelClasses}>Email</label>
              <input
                className={inputClasses}
                name="email"
                placeholder="testelek@gmail.com"
                required
                type="email"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className={labelClasses}>Tárgy</label>
            <input
              className={inputClasses}
              name="subject"
              placeholder="Miben segíthetek"
              required
            />
          </div>
          <div className="flex-1">
            <label className={labelClasses}>Üzenet</label>
            <textarea
              className={clsx(inputClasses, "min-h-[80px]")}
              name="message"
              rows={4}
              placeholder="Kérlek fejtsd ki egy kicsit..."
              required
            />
          </div>
          <button
            className={clsx(
              roundNess,
              "bg-gray-900 appearance-none transition-all",
              "w-fit px-12 py-3 text-gray-100 font-serif font-medium cursor-pointer disabled:opacity-40",
              "hover:bg-gray-700 hover:scale-[1.01]",
              "active:bg-gray-800 active:scale-[0.99]",
              "focus:outline-none ml-auto"
            )}
            type="submit"
          >
            Küldés
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
