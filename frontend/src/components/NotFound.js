import React from 'react'
import notfound from '../assets/error-404.png'


export const NotFound = () =>(
    <div className='notfound_container'>
        <p>УПС ПОХОЖЕ ВЫ ЗАШЛИ КУДА ТО НЕ ТУДА</p>
        <img src={notfound} alt='not_found_img' />
    </div>
)
