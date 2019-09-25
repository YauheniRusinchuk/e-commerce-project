import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'


function OrderModal({closeModal}) {

    const [value, setValue] = useState(0)

    const carts = useSelector(state => ({
        mycars: state.carts.carts
    }))

    useEffect(()=> {
        total();
    })

    function total() {
        let money = 0;
        carts.mycars.forEach(cart => {
            money += Number(cart.price)
        })
        setValue(money)
    }


    return (
        <div className='modal_order'>
            <div className='modal_order_body'>
            <p>Подтвердите заказ пожалуйста либо отмените.</p>
                <form>
                    <p>Ваша общая покупка на цену <span>{value} $</span></p>
                    <input type='text' placeholder="Как ваше имя? " />
                    <input type='text' placeholder='Ваш номер телефона?' />
                    <button className='btn_complite'>ПОДТВЕРДИТЬ</button>
                </form>
                <button className='btn_close' onClick={closeModal}>ОТМЕНИТЬ</button>
            </div>
        </div>
    )
}

export default OrderModal;
