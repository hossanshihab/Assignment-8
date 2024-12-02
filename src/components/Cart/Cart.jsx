import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getStoredCartList, updateStoredCartList } from "../../utility/AddToDb"; 
import { toast } from 'react-toastify';
import modalImage from  '../../assets/Group.png';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const allGadget = useLoaderData();
  const navigate = useNavigate(); 
  useEffect(() => {
    const storedCartList = getStoredCartList();
    const storedCartListInt = storedCartList.map((id) => parseInt(id, 10));

    if (allGadget && allGadget.length > 0) {
      const cartList = allGadget.filter((gadget) =>
        storedCartListInt.includes(parseInt(gadget.product_id, 10))
      );
      setCartList(cartList);
    } else {
      toast("No gadgets found.");
    }
  }, [allGadget]);

  const totalCost = cartList.reduce((acc, item) => acc + item.price, 0);

  const handleSortByPrice = () => {
    const sortedCartList = [...cartList].sort((a, b) => {
      return sorted ? a.price - b.price : b.price - a.price;
    });
    setCartList(sortedCartList);
    setSorted(!sorted);
  };

  const handleDelete = (productId) => {
    const updatedCartList = cartList.filter(cart => cart.product_id !== productId);
    setCartList(updatedCartList);

    const storedCartList = getStoredCartList();
    const updatedStoredCartList = storedCartList.filter(id => parseInt(id, 10) !== productId);
    updateStoredCartList(updatedStoredCartList);
  };

  const handlePurchase = () => {
    if (cartList.length === 0) {
      toast("Your cart is already empty.");
      return;
    }
    setCartList([]);
    updateStoredCartList([]);
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <div className="cart-list">
      <div className="flex p-10 justify-between items-center w-11/12 mx-auto">
        <h1 className="font-bold">Cart</h1>
        <div className="flex justify-between items-center gap-10">
          <h2 className="font-bold">Total Cost: {totalCost}$</h2>
          <button className="btn bg-purple-500" onClick={handleSortByPrice}>
            Sort By Price
          </button>
          <button className="btn bg-purple-500" onClick={handlePurchase}>
            Purchase
          </button>
        </div>
      </div>
      {cartList.length > 0 ? (
        cartList.map((cart) => (
          <div
            key={cart.product_id}
            className="hero w-[900px] mx-auto p-10 mb-4"
          >
            <div className="hero-content flex-col lg:flex-row border-2 rounded-2xl">
              <img
                src={cart.product_image}
                alt={cart.product_title}
                className="max-w-sm rounded-lg shadow-2xl "
              />
              <div className="flex flex-col justify-center p-2">
                <h1 className="text-3xl font-bold">{cart.product_title}</h1>
                <p className="py-4">{cart.description}</p>
                <p className="py-2 font-bold text-2xl">Price: {cart.price}$</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => handleDelete(cart.product_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">Your cart is empty</p>
      )}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mb-10">
          <div className="bg-white p-8 rounded-lg flex flex-col justify-center items-center">
             <img src={modalImage} alt="" />
            <h2 className="text-2xl font-bold">Payment Successfully</h2>
            <p>Thanks for purchasing..</p>
            <button className="btn btn-primary mt-4" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
