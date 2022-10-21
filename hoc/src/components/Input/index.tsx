import React from "react";

const Input = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="number"
          onChange={handleChange}
          placeholder="Digite um número"
        />
        <button input="submit">Buscar personagem</button>
      </label>
    </form>
  );
};

export default Input;
