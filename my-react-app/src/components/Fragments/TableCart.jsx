import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";

const TableCart = ({ products }) => {
  const cart = useSelector((state) => state.cart.data);
  //   const [totalPrice, setTotalPrice] = useState(0);
  const totalPriceRef = useRef(null);
  const { isDarkMode } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  // 🔹 Hitung total price
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((p) => Number(p.id) === Number(item.id));

        if (!product) return acc;

        return acc + product.price * item.qty;
      }, 0);

      dispatch({
        type: "UPDATE",
        payload: { total: sum },
      });
    } else {
      dispatch({
        type: "UPDATE",
        payload: { total: 0 },
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, products, dispatch]);

  // 🔹 Show / Hide total row
  useEffect(() => {
    if (!totalPriceRef.current) return;

    if (products.length > 0 && cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart, products]);

  return (
    <table
      className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && "text-white"}`}
    >
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find(
              (p) => Number(p.id) === Number(item.id),
            );

            // 🛑 Prevent crash kalau product tidak ditemukan
            if (!product) return null;

            return (
              <tr key={item.id}>
                <td>{product.title.substring(0, 10)}...</td>

                <td>
                  $
                  {product.price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                </td>

                <td>{item.qty}</td>

                <td>
                  $
                  {(item.qty * product.price).toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}

        <tr ref={totalPriceRef}>
          <td colSpan={3}>
            <b>Total price</b>
          </td>
          <td>
            <b>
              $
              {total.toLocaleString("id-ID", {
                styles: "currency",
                currency: "USD",
              })}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
