import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cart, totalCompra, vaciarCarrito, eliminarProducto } =
    useContext(CartContext);

  return (
    <div>
      <h2 className="mt-20 ml-10 text-4xl">Tu compra</h2>
      <hr />

      {cart.map((prod) => (
        <div key={prod.id}>
          <h4>{prod.name}</h4>
          <img src={prod.img} alt={prod.name}></img>
          <p>Precio: ${prod.price * prod.cantidad}</p>
          <small> cantidad: {prod.cantidad} </small>
          <button onClick={() => eliminarProducto(prod.id)}>
            Eliminar producto
          </button>
          <hr />
        </div>
      ))}
      <h3 className="font-bold">TOTAl: ${totalCompra()}</h3>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
