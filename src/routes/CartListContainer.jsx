import { useParams } from "react-router";
import CartList from "../components/CartList";
import ClearButton from "../components/ClearButton";
import FinishCheckoutButton from "../components/FinishCheckoutButton";
import "../components/CartList.css"


export const CartListContainer = () => {
    const params = useParams()
    return (
        <>
            <CartList category={params.id} />
            <div className="cartListButtons">
            <ClearButton/>
            <FinishCheckoutButton/>
            </div>
        </>
    );
}