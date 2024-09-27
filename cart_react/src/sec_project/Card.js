import { useState } from "react"
import { arrObj } from "./Imgs";
import './style/Cards.css';
import Popup from "./Popup";

export default function Card(props){
    const [cardData, setCardData] = useState(arrObj);

    function increment(id){
        // console.log(0);
        let updatecopy = cardData.map((val)=>{
            // console.log(1);
            if(val.id === id){
                // console.log(2);
                return {...val, orderedq: val.orderedq + 1}
            }else return val;
        })
        setCardData(updatecopy);
    }
    function decrement(id){
        let updatecopy = cardData.map((val)=>{
            if(val.id === id && val.orderedq > 0){
                    return {...val, orderedq: val.orderedq - 1}
            }else return val
        })
        setCardData(updatecopy);        
    }

    function handleHeaderCount(id){
        let updatecopy = cardData.map((val)=>{
            if(val.id === id && val.orderedq > 0){
                    return {...val, addedToCart: 1, finalorderedq: val.finalorderedq + val.orderedq}
            }else return val;
        })
        setCardData(updatecopy);
        updateHeaderCount(updatecopy);
    }
    function updateHeaderCount(updatecopy){
        let count = 0;
        updatecopy.forEach((val)=>{
            if(val.addedToCart == 1 && val.orderedq > 0) count++;
        })
        props.setHeaderCount(count);
    }      
      function removeFromCart(id){
        let updatecopy = cardData.map((val)=>{
            if(val.id === id){
                return { ...val, addedToCart: 0, orderedq: 0, finalorderedq: 0};
            } else return val;
        }); 
        setCardData(updatecopy);
        updateHeaderCount(updatecopy);
        // Close popup if all items are removed from cart
        if (updatecopy.every(val => val.addedToCart === 0)) {
            props.setPopupShow(0);
        }
      }
        function closePopup(){
            props.setPopupShow(0);
        }

        function finalorderincrement(id){
            let updatecopy = cardData.map((val)=>{
                // console.log(1);
                if(val.id === id){
                    // console.log(2);
                    return {...val, finalorderedq: val.finalorderedq + 1}
                }else return val;
            })
            setCardData(updatecopy);
        }
        function finalorderdecrement(id){
            let updatecopy = cardData.map((val)=>{
                if(val.id === id && val.finalorderedq > 0){
                    return {...val, finalorderedq: val.finalorderedq - 1}
                }else return val
            })
            setCardData(updatecopy);
        } 
    return(
        <>
                <div className="card">
           {
            cardData.map((val)=>{
                // console.log(5);
                return(
                    <div className="container">
                        <div className="mx_w">
                            <div className="im">
                            <img src={val.url}></img>
                            </div>
                            <div className="name">
                                <h3>{val.prod_name}</h3>                               
                                    <p>
                                        <span>₹ {val.price}</span> || 
                                        <span>{val.kg} Kg</span>
                                    </p>                   
                            </div>
                            <div className="bttn">
                                <button onClick={()=>{ increment(val.id)}}>+</button>
                                <span>₹ {val.price * val.orderedq}</span>
                                <button onClick={()=>{ decrement(val.id)}}>-</button>
                                <span>{val.kg * val.orderedq} Kg</span>
                            </div>
                            <div className="Add_btn">
                                <button onClick={()=>{ handleHeaderCount(val.id) }} >Add To Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })
           }
           
            
        </div>
        <Popup popupShow={ props.popupShow} cardData={ cardData} closePopup={closePopup} finalorderincrement={finalorderincrement} 
        finalorderdecrement={finalorderdecrement} removeFromCart={removeFromCart}/>
        
        </>        
    )
}