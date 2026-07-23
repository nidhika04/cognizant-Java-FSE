import Cart from "./Cart";

function OnlineShopping() {

    const items = [

        { id: 1, itemname: "TV", price: 45000 },

        { id: 2, itemname: "Refrigerator", price: 30000 },

        { id: 3, itemname: "Washing Machine", price: 25000 },

        { id: 4, itemname: "Mobile", price: 20000 },

        { id: 5, itemname: "Table", price: 5000 }

    ];

    return (

        <div>

            <h1 align="center">Shopping Cart</h1>

            <Cart items={items} />

        </div>

    );

}

export default OnlineShopping;
