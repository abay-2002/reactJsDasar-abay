// belajar component
import React from 'react'

// export
// import {Navbar} from './Card';
// ibarat export dan importnya satu persatu
export const Navbar = () => {
    return (
        <div>
           <p>Navbar</p> 
        </div>
    )
}

// export
// import {Header} from './Card';
// ibarat export dan importnya satu persatu
export const Header = () => {
    return (
        <div>
           <p>Header</p> 
        </div>
    )
}
// =========


// export default
// import Card from './Card';
// export dan importnya satu kali
const CardComponent = (props) => {
    return (
        <div class="card">
            <p>{props.name}</p>
            <p>{props.job}</p>
        </div>
    )
}

export default CardComponent

// Class component memiliki state, sedangkan function based component tidak memiliki state (hanya menerima props). Secara sederhana, ketika kita membutuhkan state sudah hampir pasti akan membutuhkan class based component.
