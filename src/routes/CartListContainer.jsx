import { useParams } from "react-router";
import CartList from "../components/CartList";
import ClearButton from "../components/ClearButton";
import FinishCheckoutButton from "../components/FinishCheckoutButton";


export const CartListContainer = () => {
    const params = useParams()
    return (
        <>
            <CartList category={params.id} />
            <ClearButton/>
            <FinishCheckoutButton/>
        </>
    );
}