import React from 'react'

function OrderView({orders}) {
    return (
        <div className='orderview_container'>
            {orders.map(order => {
                return (
                    <div key={order.id} className='order_view'>
                        <p>Номер заказа : <span>{order.id}</span></p>
                        <p>Имя заказчика : <span>{order.who}</span></p>
                        <p>Контакт : <span>{order.contact}</span></p>
                        <p>Цена : <span>{order.price}</span></p>
                        <p>Статус : <span>{order.status}</span></p>
                        <button>удалить</button>
                    </div>
                )
            })}
        </div>
    )
}

export default OrderView;
