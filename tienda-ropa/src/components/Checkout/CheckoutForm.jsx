
const CheckoutForm = () => {
  return (
    <form>
      <h3>Formulario de Compra</h3>
      <label>
        Nombre:
        <input type="text" name="name" required />
      </label>
      <br />
      <label>
        Correo:
        <input type="email" name="email" required />
      </label>
      <br />
      <button type="submit">Confirmar Compra</button>
    </form>
  );
};

export default CheckoutForm;