import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'


function OrderModal({closeModal}) {

    const [value, setValue] = useState(0)
    const [name, setName] = useState('')
    const [nubmer, setNubmer] = useState('')

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

    function listId() {
        let result = []
        carts.mycars.forEach(cart => {
            result.push(cart.id)
        })
        return result
    }

    async function orderSubmit(e) {
        e.preventDefault();
        const cartsId = await listId();
        const data = {
            name,
            nubmer,
            cartsId,
            value
        }
        console.log(data)
    }


    return (
        <div className='modal_order'>
            <div className='modal_order_body'>
            <p>Подтвердите заказ пожалуйста либо отмените.</p>
                <form onSubmit={orderSubmit}>
                    <p>Ваша общая покупка на цену <span>{value} $</span></p>
                    <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder="Как ваше имя? " />
                    <input value={nubmer} onChange={e => setNubmer(e.target.value)} type='text' placeholder='Ваш номер телефона?' />
                    <button className='btn_complite'>ПОДТВЕРДИТЬ</button>
                </form>
                <button className='btn_close' onClick={closeModal}>ОТМЕНИТЬ</button>
            </div>
        </div>
    )
}

export default OrderModal;
