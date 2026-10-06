import './App.css';
import ProductCard from './components/ProductCard';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="product-list">
        <ProductCard 
          title="Waterfall Glitter Tumbler"
          description="This official UNDERTALE tumbler was designed by Nina Matsumoto to commemorate the game's 11th anniversary. 

It's a double-walled, 16 oz translucent plastic tumbler. "
          price="$32"
          img="https://tinyurl.com/yd9fxkej"
        />
        <ProductCard 
          title="Waterfall Shower Curtain"
          description="(The sound of rushing water fills you with determination.) 

This official UNDERTALE shower curtain was designed by Nina Matsumoto to commemorate the game's 11th anniversary.

It's 72 inches square (1.83 m) and made from polyester with a fluorine-free waterproof coating. "
          price="$24"
          img="https://tinyurl.com/3kxs6efc"
        />
        <ProductCard 
          title="Napstablook Bath Mat"
          description="The fresh scent of ectoplasm permeates the vicinity. 

This official UNDERTALE bath mat was designed by Audrey Waner to celebrate the game's 11th anniversary. It's 18 inches wide by 32 inches tall, with a nonslip canvas backing. "
          price="$29"
          img="https://tinyurl.com/nu8re9xx"
        />
      </div>
    </div>
  );
}

export default App;