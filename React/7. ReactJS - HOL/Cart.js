function Cart(props) {

    return (

        <table
            border="1"
            cellPadding="10"
            style={{
                margin: "20px auto",
                borderCollapse: "collapse"
            }}
        >

            <thead>

                <tr>

                    <th>ID</th>

                    <th>Item Name</th>

                    <th>Price (₹)</th>

                </tr>

            </thead>

            <tbody>

                {

                    props.items.map((item) => (

                        <tr key={item.id}>

                            <td>{item.id}</td>

                            <td>{item.itemname}</td>

                            <td>{item.price}</td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}

export default Cart;
