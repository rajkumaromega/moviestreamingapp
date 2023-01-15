import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import db from '../firebase'
import "./PlansScreen.css"
import {loadStripe } from "@stripe/stripe-js"
const PlansScreen = () => {

    const [products, setProducts] = useState([])
    const user = useSelector(selectUser)
     const loadCheckOut = async (priceId) =>{
            const docRef = await db.collection('customers')
            .doc(user.uid)
            .collection("checkout_sessions")
            .add({
                price:priceId,
                success_url:window.location.origin,
                cancel_url:window.location.origin,
            });

            docRef.onSnapshot(async (snap) => {
                const {error,sessionId} = snap.data();

                if(error){
                    alert(`An error occurred:${error.message}`);
                }
                if(sessionId){
                    const stripe = await loadStripe("pk_test_51MQP3lSHtXnpMbHZjWTgXzua1ljgYROg3syTApbtwbISsTWWBtMGQtgDHQ5IGgvMqVQZxmkbN6q0aLtoTkSleXsQ00sOpNuzBi");
                    stripe.redirectToCheckout({sessionId})
                }
            })
     };
    useEffect(()=>{
        db.collection("products").where("active", "==",true)
        .get()
        .then((querySnapshot) => {
            const products ={};
            querySnapshot.forEach(async productDoc =>{
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection("prices").get();
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices ={
                        priceId:price.id,
                        priceData:price.data()
                    }
                })
            })
            setProducts(products);
        })
    },[]);
    
  return (
    <div>
        
        {Object.entries(products).map(([productId,productData])=>{
            
            console.log("products",productData)
            return (
               <div className='plansScreen__plan'>
                <div className='plansScreen__info'>
                    <h5>{productData.name}</h5>
                    <h6>{productData.description}</h6>
                </div>
                <button onClick={()=> loadCheckOut(productData.prices.priceId)}>Subscribe</button>
               </div>
            )
         })}
    </div>
  )
}

export default PlansScreen