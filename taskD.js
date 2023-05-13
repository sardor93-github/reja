const moment = require("moment");

class Shop {
    constructor(fantaSoni, pepsiSoni, colaSoni) {
        this.products = [
            {name: "fanta", count: fantaSoni},
            {name: "pepsi", count: pepsiSoni},
            {name: "cola", count: colaSoni}
        ]
    }

    methodQoldiq() {
        console.log(`Hozirgi vaqt: ${moment().format("HH:mm")}`);
        this.products.forEach(product => {
            console.log(`${product.name}: ${product.count}`);
        });
    }
    

    methodSotish(name, x) {
        const product = this.products.find(p => p.name.toLowerCase() === name.toLowerCase());
        if (product) {
            product.count -= x;
        } else {
            console.log("Bunday mahsulot mavjud emas!!!");
        }
    }
    
    methodQabul(name, x) {
        const product = this.products.find(p => p.name.toLowerCase() === name.toLowerCase());
        if (product) {
            product.count += x;
        } else {
            console.log("Bunday mahsulot mavjud emas!!!");
        }
    }
    
}

const shop = new Shop(4, 5, 8);
shop.methodQoldiq();
shop.methodSotish("fanta", 2);
shop.methodSotish("cola", 5);
shop.methodQoldiq();