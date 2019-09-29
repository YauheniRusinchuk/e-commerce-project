import React from 'react'

function OrderView({orders}) {
    return (
        <div className='orderview_container'>
            {orders.map(order => {
                return (
                    <div key={order.id} className='order_view'>
                        <p>{order.who}</p>
                        <span>{order.price}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default OrderView;
