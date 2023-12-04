function OrdersCards({totalPrice, totalProducts}) {

    return (
        <div className="flex justify-content items-center mb-3">
            <p>
                <span>{totalPrice}</span>
                <span>{totalProducts}</span>
            </p>
        </div>
    )
}

export {OrdersCards};