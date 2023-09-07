const data = [
    {
        id: 1,
        category: "Dresses",
        title: "Floral Print Dress",
        description: "A beautiful floral print dress for any occasion.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkB8PE5Thrg7Uu19h3_Qw7xuKqn4HeD5GINA&usqp=CAU",
        price: 49.99,
    },
    {
        id: 2,
        category: "Jeans",
        title: "High-Waisted Jeans",
        description: "Classic high-waisted jeans that provide comfort and style.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkB8PE5Thrg7Uu19h3_Qw7xuKqn4HeD5GINA&usqp=CAU",
        price: 39.99,
    },
    {
        id: 3,
        category: "Tops",
        title: "Lace Blouse",
        description: "Elegant lace blouse perfect for formal occasions.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkB8PE5Thrg7Uu19h3_Qw7xuKqn4HeD5GINA&usqp=CAU",
        price: 29.99,
    },
    {
        id: 4,
        category: "Skirts",
        title: "Wrap Skirt",
        description: "Chic wrap skirt that adds flair to your outfit.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkB8PE5Thrg7Uu19h3_Qw7xuKqn4HeD5GINA&usqp=CAU",
        price: 34.99,
    },
    {
        id: 5,
        category: "Sweaters",
        title: "Cropped Sweater",
        description: "Cozy cropped sweater perfect for colder days.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkB8PE5Thrg7Uu19h3_Qw7xuKqn4HeD5GINA&usqp=CAU",
        price: 24.99,
    },
    {
        id: 6,
        category: "Tops",
        title: "Ruffled Blouse",
        description: "Stylish ruffled blouse with a unique design.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkB8PE5Thrg7Uu19h3_Qw7xuKqn4HeD5GINA&usqp=CAU",
        price: 27.99,
    },
    {
        id: 7,
        category: "Skirts",
        title: "Pleated Skirt",
        description: "Graceful pleated skirt that complements any look.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkB8PE5Thrg7Uu19h3_Qw7xuKqn4HeD5GINA&usqp=CAU",
        price: 31.99,
    },
    {
        id: 8,
        category: "Sweaters",
        title: "Knit Sweater",
        description: "Warm and cozy knit sweater for chilly days.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkB8PE5Thrg7Uu19h3_Qw7xuKqn4HeD5GINA&usqp=CAU",
        price: 28.99,
    },
    {
        id: 9,
        category: "Tops",
        title: "Ruffled Blouse",
        description: "Stylish ruffled blouse with a unique design.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkB8PE5Thrg7Uu19h3_Qw7xuKqn4HeD5GINA&usqp=CAU",
        price: 27.99,
    }]

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}

export const getItem = ({itemId}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const newItem = data.filter(item => item.id ===itemId )
            if (newItem) {
                resolve(newItem)
            } else {
                reject("No se encuentra el item.")
            }
        }, 1000)
    })
}