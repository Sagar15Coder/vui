import React, { useState } from 'react';
import "./App.css";
import { Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Store from './pages/Store';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { MdKeyboardVoice } from 'react-icons/md';
import { useSpeechSynthesis } from 'react-speech-kit';
import { AiOutlineStop } from 'react-icons/ai';
import Categories  from './components/Categories';
import BlogContent1 from './pages/BlogContent1';
import BlogContent2 from './pages/BlogContent2';
import BlogContent3 from './pages/BlogContent3';
import BlogContent4 from './pages/BlogContent4';
import UserDetails from './pages/UserDetails';


const App = () => {
  
  const [cartProducts, setCartProducts] = useState([]);
  const [ redirectUrl, setRedirectUrl ] = useState('');
  const [catg, setCatg] = useState(Categories);

  const commands = [
    
    {
      command: ["Go to *", "Open *", "Click *", "Tap *", "Visit *", "Direct me to *"],
      callback: (redirectPage) =>  {
        setRedirectUrl(redirectPage);
        resetTranscript();
      }
    },
    {
      command: ["(Can you) show me *(s) (only) (please)"],
      callback: (val) => {
        filterProducts(val);
        setRedirectUrl("store");
        resetTranscript();
        speak({text: "Check out the top "+val})
      }
    },

    {
      command: ["(Can you) show me *(s)(es) under :price pound(s)"],
      callback: (val, p) => {
        filterProductsByPriceUnder(val, p);
        setRedirectUrl("store");
        resetTranscript();
      }

    },

    {
      command: ["(Can you) show me *(s)(es) over :price pound(s)"],
      callback: (val, p) => {
        filterProductsByPriceOver(val, p);
        setRedirectUrl("store");
        resetTranscript();
      }

    },

    {
      command: ["(Can you) show me *(s)(es) from :price1 to :price2 pound(s) (only)"],
      callback: (val, p1, p2) => {
        filterProductsByPriceFromTo(val, p1, p2);
        setRedirectUrl("store");
        resetTranscript();
      }

    },

    {
      command: ["Add product (ID) :id (to cart)"],
      callback: (id) => {
        let productFound = Categories.find(findProductByID)

        function findProductByID(product) {
          if (id === "to"){
            return product.id == 2;
          }
          return product.id == id;          
        }
        handleAddProduct(productFound);
        resetTranscript();
        speak({text: "The product has been added to the cart."})
    
      }
    },

    {
      command: ["Remove product (ID) :id (from cart)", "Delete product (ID) :id (from cart)"],
      callback: (id) => {
        let productFound = Categories.find(findProductByID)

        function findProductByID(product) {
          if (id === "to"){
            return product.id == 2;
          }
          return product.id == id;          
        }
        handleRemoveSameProducts(productFound);
        resetTranscript();
        speak({text: "The product has been removed from the cart."})
    
      }
    },
    
    {
      command: ["Clear (the) cart (please)", "Empty (the) cart (please)", "Clear (the) card (please)", "Empty (the) card (please)"],
      callback: () => {
        clearCart();
        resetTranscript();
        speak({text: "The cart is empty now."})
    
      }
    },

    {
      command: ["(Can you) scroll down (please)"],
      callback: () => {
        pageScrollDown();
        resetTranscript();        
      }
    },

    {
      command: ["(Can you) scroll up (please)"],
      callback: () => {
        pageScrollUp();
        resetTranscript();        
      }
    },

    {
      command: ["Stop listening (please)"],
      callback: () =>  {
        stopSpeechListening();
        resetTranscript();       
      }
    },
  ]
  
  
  const { transcript, resetTranscript }  = useSpeechRecognition({ commands });


  const pages = ["home", "store", "contact", "blogs", "blocks", "login", "register", "cart", "card", "checkout"];
  const urls = {
    home: "/",
    store: "/product",
    contact: "/contact",
    blogs: "/blogs",
    blocks: "/blogs",
    login: "/login",
    register: "/register",
    cart: "/cart",
    card: "/cart",
    checkout: "/checkout"
  };

  const {speak, cancel} = useSpeechSynthesis();

  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  let redirect = "";
  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]} />;
    } 
    else {
        redirect = <p>Could not find page: {redirectUrl}</p>
        
    }
  }

  
  const handleAddProduct = (product) => {
    const productExistAlready = cartProducts.find((prod) => prod.id === product.id);
    if (productExistAlready){
      setCartProducts(cartProducts.map((prod) => prod.id === product.id ?
      {...productExistAlready, quantity: productExistAlready.quantity + 1}: prod)
      );
    }
    else {
      setCartProducts([...cartProducts, {...product, quantity:1}]);
    }
  }
  
  const handleRemoveProduct = (product) => {
    const productExistAlready = cartProducts.find((prod) => prod.id === product.id);
    if (productExistAlready.quantity ===1) {
      setCartProducts(cartProducts.filter((prod) => prod.id !== product.id));
    }
    else {
      setCartProducts(cartProducts.map((prod) =>
      prod.id === product.id
        ? { ...productExistAlready, quantity: productExistAlready.quantity - 1 }
        : prod
      ));
    }
  }

  const handleRemoveSameProducts = (product) => {
    setCartProducts(cartProducts.filter((prod) => prod.id !== product.id));
  }

  const clearCart = () => {
    setCartProducts([]);
  }

  const filterProducts = (catItem) => {
    const res = Categories.filter((currentData)=>{
      return currentData.category===catItem;
    });
    setCatg(res);
  }

  const filterProductsByPriceUnder = (catItem, p) => {
    const res = Categories.filter((currentData)=>{
      return (currentData.category===catItem & currentData.price<p);
    });
    setCatg(res);
  }

  const filterProductsByPriceOver = (catItem, p) => {
    const res = Categories.filter((currentData)=>{
      return (currentData.category===catItem & currentData.price>p);
    });
    setCatg(res);
  }

  const filterProductsByPriceFromTo = (catItem, p1, p2) => {
    const res = Categories.filter((currentData)=>{
      return (currentData.category===catItem & currentData.price>=p1 & currentData.price<=p2);
    });
    setCatg(res);
  }

  const pageScrollDown = () => {
    window.scrollBy(0,1000);
  }

  const pageScrollUp = () => {
    window.scrollBy(0,-1000);
  }
  
  const speechListening = () => {
 
    SpeechRecognition.startListening({ continuous: true });
    
  }
  const stopSpeechListening = () => {
    SpeechRecognition.stopListening();
    resetTranscript();
  }

  const isUserLoggedIn = window.localStorage.getItem("logged_in");
  
  return (
    <div>
      <div className="d-flex align-items-baseline gap-10 speech-rg">
        <div className="transcript">
          <p>{ transcript }</p>
          
          
        </div>
        <div>
          <button className="voice-button" onClick={speechListening}><MdKeyboardVoice /></button>
          <button className="stop-button" onClick={stopSpeechListening}><AiOutlineStop /></button>
        </div>        
      </div>
      <Header cartProducts={cartProducts} />
      <Route exact path="/">
      {isUserLoggedIn == "true" ? <UserDetails /> : <Home/>}
      </Route>  
      <Route path="/contact">        
        <Contact />
      </Route>
      <Route exact path="/product">
        <Store handleAddProduct={handleAddProduct} catg={catg} setCatg={setCatg} filterProducts={filterProducts}  />
      </Route>
      <Route path="/product/:id">
        <ProductPage />
      </Route>
      <Route path="/cart">
        <Cart cartProducts={cartProducts} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleRemoveSameProducts={handleRemoveSameProducts} clearCart={clearCart} redirectUrl={redirectUrl} setRedirectUrl={setRedirectUrl} />
      </Route>

      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/blogs">
        <Blogs />
      </Route>
      <Route path="/blog/1">
        <BlogContent1 commands={commands} speak={speak} cancel={cancel} />
      </Route>
      <Route path="/blog/2">
        <BlogContent2 commands={commands} speak={speak} cancel={cancel} />
      </Route>
      <Route path="/blog/3">
        <BlogContent3 commands={commands} speak={speak} cancel={cancel} />
      </Route>
      <Route path="/blog/4">
        <BlogContent4 speak={speak} cancel={cancel} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/userDetails">
        <UserDetails/>
      </Route>
      {redirect}
      
      <Footer />
    </div>
  )
}

export default App