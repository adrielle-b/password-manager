function Form() {
  return (
    <form>

      <label htmlFor="name">
        Nome do serviço
        <input type="text" id="name" />
      </label>

      <label htmlFor="login">
        Login
        <input type="text" id="login" />
      </label>

      <label htmlFor="senha">
        Senha
        <input type="password" id="senha" />
      </label>

      <label htmlFor="url">
        URL
        <input type="text" id="url" />
      </label>

      <button type="button">Cadastrar</button>
      <button type="button">Cancelar</button>

    </form>
  );
}

export default Form;
