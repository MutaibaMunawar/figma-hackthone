import { Product } from "@/types/products";
import Swal from "sweetalert2";


export const addToCart = (product: Product) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingProductIndex = cart.findIndex(item => item._id === product._id)

    if(existingProductIndex > -1){
        cart[existingProductIndex].inventory += 1
    }
    else{
        cart.push({
            ...product, inventory: 1
        })
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId: string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem('cart' , JSON.stringify(cart))
} 
export const updateCartQuantity = (productId :string, quantity : number) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1){
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
};

// import { Product } from "@/types/products";

// Function to add a product to the wishlist
export const addToWishlist = (product: Product) => {
  const wishlist: Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]');

  // Check if the product already exists in the wishlist
  const existingProductIndex = wishlist.findIndex(item => item._id === product._id);

  if (existingProductIndex === -1) {
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  } else {
    // If the product is already in the wishlist, show an alert
    Swal.fire('Already in Wishlist', `${product.productName} is already in your wishlist!`, 'info');
  }
};

// Function to remove a product from the wishlist
export const removeFromWishlist = (productId: string) => {
  let wishlist: Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
  wishlist = wishlist.filter(item => item._id !== productId);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
};

// Function to get all items from the wishlist
export const getWishlistItems = (): Product[] => {
  return JSON.parse(localStorage.getItem('wishlist') || '[]');
};

