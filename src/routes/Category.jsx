import { useParams } from "react-router";
import ItemListContainer from "../components/ItemListContainer";


export const Category = () => {
    const params = useParams()
    return (
        <>
            <ItemListContainer category={params.id} />
        </>
    );
}