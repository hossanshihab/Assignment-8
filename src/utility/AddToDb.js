
import { toast } from 'react-toastify';
const getStoredCartList = () =>{
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }else{
        return []
    }
}

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if(storedList.includes(id)){
        console.log(id);
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('cart-list', storedListStr)
        toast('This item added cart list')
    }
}

// Wish List
const getStoredWishList = () =>{
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }else{
        return []
    }
}

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        console.log(id);
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', storedListStr)
        toast('This item added cart list')
    }
}
export const updateStoredCartList = (updatedList) => {
    localStorage.setItem('cart', JSON.stringify(updatedList));
    toast('This item Deleted')
  };
export const updateStoredWishList = (updatedList) => {
    localStorage.setItem('wish', JSON.stringify(updatedList));
    toast('This item Deleted')
  };
  export const addToStoreCartList = (productId) => {
    let cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    if (!cartList.includes(productId)) {
      cartList.push(productId);
      localStorage.setItem('cartList', JSON.stringify(cartList));
    }
  };
  


  
   

export {addToStoredCartList,getStoredCartList, addToStoredWishList,getStoredWishList}