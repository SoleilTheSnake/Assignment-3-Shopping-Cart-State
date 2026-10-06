import './App.css';
import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CartItem from './components/CartItem';

function App() {
 
 const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
const removeFromCart = (indexToRemove) => {
  setCart((prevCart) => prevCart.filter((_, i) => i !== indexToRemove));
};
const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="App">
      <Header cartCount={cart.length} />
       <Hero />
      <div className="product-list">
        <ProductCard 
          title="Waterfall Glitter Tumbler"
          description="This official UNDERTALE tumbler was designed by Nina Matsumoto to commemorate the game's 11th anniversary. 

It's a double-walled, 16 oz translucent plastic tumbler. "
          price="$32"
          img="https://tinyurl.com/yd9fxkej"
           onAddToCart={() =>
    addToCart({ title: "Waterfall Glitter Tumbler", price: 32 })
  }
        />
        <ProductCard 
          title="Waterfall Shower Curtain"
          description="(The sound of rushing water fills you with determination.) 

This official UNDERTALE shower curtain was designed by Nina Matsumoto to commemorate the game's 11th anniversary.

It's 72 inches square (1.83 m) and made from polyester with a fluorine-free waterproof coating. "
          price="$24"
          img="https://tinyurl.com/3kxs6efc"
          onAddToCart={() =>
    addToCart({ title: "Waterfall Shower Curtain", price: 24 })
  }
        />
        <ProductCard 
          title="Napstablook Bath Mat"
          description="The fresh scent of ectoplasm permeates the vicinity. 

This official UNDERTALE bath mat was designed by Audrey Waner to celebrate the game's 11th anniversary. It's 18 inches wide by 32 inches tall, with a nonslip canvas backing. "
          price="$29"
          img="https://tinyurl.com/nu8re9xx"
          onAddToCart={() =>
    addToCart({ title: "Napstablook Bath Mat", price: 29 })
  }
        />
      </div>
      <h2>Your Cart</h2>
{cart.length === 0 ? (
  <p>Your cart is empty.</p>
) : (
  cart.map((item, index) => (
    <CartItem
      key={index}
      name={item.title}
      price={item.price}
      onRemove={() => removeFromCart(index)}
    />
  ))
)}
<p className="cart-total">Total: ${total}</p>
      <Footer />
    </div>
  );
}

export default App;