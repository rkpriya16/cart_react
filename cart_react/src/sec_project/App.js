import { useState } from "react"
import Card from "./Card"
import CartHeader from "./CartHeader"

export default function App(){
    const [headerCount, setHeaderCount] = useState(0);
    const [popupShow, setPopupShow] = useState(0);

    return(
        <div className="App">
            <CartHeader headerCount={headerCount } popupStatus={ ( status) =>{ setPopupShow(status) } } />
            <Card setHeaderCount={( count)=>{ setHeaderCount(count) }} popupShow={popupShow} setPopupShow={setPopupShow} />
        </div>
    )
}