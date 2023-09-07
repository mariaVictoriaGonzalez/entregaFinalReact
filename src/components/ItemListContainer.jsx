import { useEffect, useState } from "react"
import { getData } from "../data"
import ItemList from "./ItemList"
import { collection, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"

function ItemListContainer({ category = '' }) {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setIsLoading(true)
        const db = getFirestore()

        if (category) {
            const q = query(collection(db, "data"), where("category", "==", category))
            getDocs(q)
                .then((snapshot) => {
                    if (snapshot.size != 0) {
                        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                    } else {
                        console.log("Products not found.")
                    }
                })
                .catch(error => console.error(error))
                .finally(() => setIsLoading(false))
        } else {
            const itemCollection = collection(db, "data")
            getDocs(itemCollection)
                .then((snapshot) => {
                    if (snapshot.size != 0) {
                        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                    } else {
                        console.log("Products not found.")
                    }
                    setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch(error => console.error(error))
                .finally(() => setIsLoading(false))
        }
    }, [category])

    return (
        <ItemList ItemList={products} />
    )
}

export default ItemListContainer