//Componente para o formulário de login.
import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const LoginForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  })

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fazerLogin = async (email, senha) => {

    try {

      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      })
      if (!response.ok) {
        throw new Error("Credenciais inválidas front");
      }
      const data = await response.json();
      return data;

    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return { error: error.message };
    }

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await fazerLogin(formData.email, formData.senha);
      if (result.error) {
        setError(result.error);
      } else {
        //console.log("deu certo, bb front", + result.email);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error("Error:  front " + error);
      setError("Erro ao realizar login  front");
    }

    //logica para enviar form para api
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-slate-900">
        
        <div className="p-5 rounded-lg border-2 shadow-lg bg-white">

          <h1 className="text-center text-3xl mb-5 font-semibold text-azulClaro">
            Login
          </h1>

          <form onSubmit={loginSubmit} className="grid gap-3 p-5">
            <input
              className="rounded-md p-2 border outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              className="rounded-md p-2 border outline-none"
              type="password"
              name="senha"
              id="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleInputChange}
            />
            <input
              className="bg-azulClaro hover:scale-[1.1] transition-all duration-500 ease-in-out text-white font-semibold p-2 rounded-md w-1/2 mx-auto cursor-pointer "
              type="submit"
              value="Logar"
            />
          </form>

          <p className=" text-center my-2">
            Não tem conta ? <Link className="hover:underline text-azulClaro " to="/cadastrar">Cadastre-se </Link>
          </p>
        </div>

      </div>
    </>
  );
};
export default LoginForm;
