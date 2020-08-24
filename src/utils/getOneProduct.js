export default function getOneProduct(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const items = [{
                id: "01",
                name: "remera",
                description: "una remera",
                longDescription: "una remera que deberias comprar, porque? no hay porque... ",
                price: 220
            },
            {
                id: "02",
                name: "pantalon",
                description: "un pantalon",
                longDescription: "un pantalon que deberias comprar, porque? no hay porque... ",
                price: 550
            },
            {
                id: "03",
                name: "pollera",
                description: "una pollera",
                longDescription: "una pollera que deberias comprar, porque? no hay porque... ",
                price: 340
            },
            {
                id: "04",
                name: "camisa",
                description: "una camisa",
                longDescription: "una camisa que deberias comprar, porque? no hay porque... ",
                price: 280
            },
            {
                id: "05",
                name: "campera",
                description: "una campera",
                longDescription: "una campera que deberias comprar, porque? no hay porque... ",
                price: 700
            },
            {
                id: "06",
                name: "zapatilla",
                description: "unas zapatillas",
                longDescription: "unas zapatillas que deberias comprar, porque? no hay porque... ",
                price: 800
            }].find(detail => detail.id === id);
            res(items);
            console.log('info detallada: ' + items.longDescription);
            return items;
        },2000);
    });
}