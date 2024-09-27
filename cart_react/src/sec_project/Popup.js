import '../sec_project/Popup.css';
export default function Popup(props){
    // function handleclose(){
    //     props.closePopup();
    // }
    
    if(props.popupShow === 1){
        const itemsInCart = props.cardData.filter(val => val.addedToCart > 0);
        return(
            <div className="popup">
                <div className="popup-sec">
                    <button onClick={props.closePopup}>X</button>
                    <div className="productData">
                  {
                    itemsInCart.length > 0 ? (
                        itemsInCart.map((val)=>(
                            <div key={val.id} className="popup-data">
                                <span>
                                    <img src={val.url} alt={val.prod_name} />
                                </span>
                                <span>{val.prod_name}</span>
                                <div className='bttn'>
                                    <button onClick={()=>props.finalorderincrement(val.id)}>+</button>
                                    <span>₹ {val.price * val.finalorderedq}</span>
                                    <button onClick={()=> props.finalorderdecrement(val.id)}>-</button>
                                    <span>{val.kg * val.finalorderedq} kg</span>
                                    <button onClick={()=>props.removeFromCart(val.id)}>Remove</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='empty-cart' >Your cart is empty!!!</div>
                    )
                  }
                    </div>
                </div>
            </div>
        );
    }else{
        return null;
    }
}