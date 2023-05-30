import React from 'react'
import { Link, Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { AiFillDelete } from 'react-icons/ai'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Cart = ({cartProducts, handleAddProduct, handleRemoveProduct, handleRemoveSameProducts, clearCart, redirectUrl, setRedirectUrl }) => {

    const subTotal = cartProducts.reduce(
        (price, product) => price + product.quantity * product.price,
        0
    )

    const commands = [
        {
            command: ["I want to check out", "(please) proceed to check out (please)" ],
            callback: () => {
                console.log("checkout");
                setRedirectUrl("checkout");
                resetTranscript();
          
            }
        }
    ]

    const { resetTranscript }  = useSpeechRecognition({ commands });
    if (!SpeechRecognition.browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
  return (
    <>
    <div className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                        <h4 className="col-1-cart">Product</h4>
                        <h4 className="col-2-cart">Price</h4>
                        <h4 className="col-3-cart">Quantity</h4>
                        <h4 className="col-4-cart">Total</h4>
                    </div>
                </div>  
                    
                {cartProducts.length === 0 && (
                        <div>No products are added to the cart.</div>
                )}

           
                            {cartProducts.map((product) => (
                                <div className="col-12">
                                <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                    <div className="col-1-cart d-flex gap-15 align-items-center">
                                        <div className="w-25">
                                            <img src={product.image} className="img-fluid" alt="watch"/>                                
                                        </div>
                                        <div className="w-75">
                                            <p>Abcd</p>
                                            <p>Size: Medium</p>
                                            <p>Color: Unknown</p>
                                        </div>
                                    </div>
                            
                                    <div className="col-2-cart">
                                        <h5 className="price">{product.price}</h5>
                                    </div>
                                    <div className="col-3-cart d-flex align-items-center gap-15">
                                        <div>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name=""
                                                id=""
                                                value={product.quantity}
                                            />                                
                                        </div>
                                        <div className="d-flex flex-column">
                                            <button className="cart-product-plus" onClick={() => handleAddProduct(product)}>
                                                +
                                            </button>
                                            <button className="cart-product-minus" onClick={() => handleRemoveProduct(product)}>
                                                -
                                            </button>
                                        </div>
                                        <div>
                                            <button onClick={() => handleRemoveSameProducts(product)}>
                                                <AiFillDelete className="text-danger" />
                                            </button>
                                            
                                        </div>
                                    </div>
                                    <div className="col-4-cart">
                                        {product.quantity} * £{product.price}
                                    </div>
                                </div>
                                </div>
                            
                            ))}

                {cartProducts.length>=1 && (
                    <div className="col-12 clear-cart d-flex justify-content-end">
                        <div>
                            <button className="clear-cart-button" onClick={() => clearCart()}>Clear Cart</button>
                        </div>
                                 
                    </div>
                )}
                
                
                <div className="col-12 mt-4 py-2">
                    <div className="d-flex justify-content-between align-items-baseline">
                        <div>
                            <Link to="/product" className="button">
                                Continue to Shopping
                            </Link>
                        </div>
                        {cartProducts.length !== 0 && (
                            <div className="d-flex flex-column align-items-end">
                            <h4>Sub Total: £{subTotal}</h4>
                            <p>Shipping cost calculated at checkout</p>
                            <Link to="/checkout" className="button">
                                Proceed to Checkout
                            </Link>
                        </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Cart