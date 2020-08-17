export default function getProducts() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([{
                id: "01",
                name: "remera",
                description: "una remera",
                price: 220
            },
            {
                id: "02",
                name: "pantalon",
                description: "un pantalon",
                price: 550
            },
            {
                id: "03",
                name: "pollera",
                description: "una pollera",
                price: 340
            },
            {
                id: "04",
                name: "camisa",
                description: "una camisa",
                price: 280
            },
            {
                id: "05",
                name: "campera",
                description: "una campera",
                price: 700
            },
            {
                id: "06",
                name: "zapatilla",
                description: "unas zapatillas",
                price: 800
            }])
        },2000 )
        console.log(res)
    });
}