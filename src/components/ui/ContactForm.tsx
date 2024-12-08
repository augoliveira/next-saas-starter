"use client";
import React, { useState } from "react";

const ContactForm = ({ setSuccessMessage }: any) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const emailValidation = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // ============== Error message end here ================
  const handleSendDetails = (e: any) => {
    e.preventDefault();
    if (username === "") {
      setErrMessage("Your name is required!");
    } else if (email === "") {
      setErrMessage("Please give your Email");
    } else if (!emailValidation(email)) {
      setErrMessage("Give a Valid Email");
    } else if (message === "") {
      setErrMessage("Enter your Messages");
    } else {
      setUsername("");
      setEmail("");
      setMessage("");
      setSuccessMessage(
        `Olá querido ${username}. Recebemos sua mensagem com sucesso. Detalhes adicionais serão enviados a você por e-mail em ${email} e nosso pessoal responsável entrará em contato com você em breve. Obrigado pelo seu tempo.`
      );
    }
  };
  return (
    <>
      <div className="flex justify-between gap-1">
        <h4 className="mb-2 text-lg text-sky-400 mdl:text-xl">
          Preencha o Formulários
        </h4>
      </div>
      <div className="font-titleFont flex flex-col gap-1 text-base text-gray-100">
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="w-full rounded-sm border-b-[1px] border-b-borderColor bg-transparent px-4 pb-2 pt-5 outline-none duration-500 placeholder:translate-y-0 placeholder:text-sm placeholder:uppercase placeholder:transition-transform focus:border-b-lime-600 focus:placeholder:-translate-y-5"
          type="text"
          placeholder="Qual seu Nome"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full rounded-sm border-b-[1px] border-b-borderColor bg-transparent px-4 pb-2 pt-5 outline-none duration-500 placeholder:translate-y-0 placeholder:text-sm placeholder:uppercase placeholder:transition-transform focus:border-b-lime-600 focus:placeholder:-translate-y-5"
          type="email"
          placeholder="Qual seu E-mail"
        />

        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="w-full resize-none rounded-sm border-b-[1px] border-b-borderColor bg-transparent px-4 pb-2 pt-5 outline-none duration-500 placeholder:translate-y-0 placeholder:text-sm placeholder:uppercase placeholder:transition-transform focus:border-b-lime-600 focus:placeholder:-translate-y-5"
          id=""
          cols={30}
          rows={5}
          placeholder="Descreva sua duvida"
        />
      </div>
      {errMessage && (
        <h4 className="mt-10 rounded-sm bg-white px-4 py-1 text-center text-base font-semibold text-lime-600">
          {errMessage} !
        </h4>
      )}
      <button
        onClick={handleSendDetails}
        className="font-titleFont group relative mt-8 w-full overflow-hidden border border-gray-800 p-2 text-lg font-semibold uppercase tracking-[4px] active:bg-sky-400"
      >
        Enviar
        <span className="absolute left-0 top-0 h-[1px] w-full -translate-x-[100%] bg-sky-400 transition-transform duration-500 group-hover:translate-x-0"></span>
        <span className="absolute bottom-0 left-0 h-[1px] w-full translate-x-[100%] bg-sky-400 transition-transform duration-500 group-hover:translate-x-0"></span>
        <span className="absolute bottom-0 left-0 h-full w-[1px] translate-y-[100%] bg-sky-400 transition-transform duration-500 group-hover:translate-y-0"></span>
        <span className="absolute bottom-0 right-0 h-full w-[1px] -translate-y-[100%] bg-sky-400 transition-transform duration-500 group-hover:translate-y-0"></span>
      </button>
    </>
  );
};

export default ContactForm;
