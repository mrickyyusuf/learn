import { Fragment, useContext, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
// import Button from "../components/Elements/Button/Button";
// import Counter from "../components/Fragments/Counter";
// import { getUsername } from "../services/auth.service";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [products, setProducts] = useState([]);
  useLogin();

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  // const handleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item,
  //       ),
  //     );
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };

  // userRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  return (
    <Fragment>
      <Navbar />
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  // handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center mb-5">
        <Counter />
      </div> */}
    </Fragment>
  );
};

export default ProductsPage;
