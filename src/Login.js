export default function Login({ onSubmit = () => {} }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.target));

    onSubmit(values.username);
  };

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <img src="../images/glic.png" alt="logo" width={250} height={250} />
      <h1>
        Bem vindo a
        <strong>Glic Social</strong>
      </h1>
      <label>login</label>
      <input type="text" name="username" required />
      <label>password</label>
      <input type="password" name="password" required />
      <button type="submit">Login</button>
    </form>
  );
}
