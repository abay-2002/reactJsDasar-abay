import React from 'react'

const Card = (props) => {
    return (
        <div class="kartu">
            <p class="nama">{props.name}</p>
            <p>{props.job}</p>
        </div>
    )
}
// props
// component kita menerima props untuk merubah kontennya menjadi dinamis

export default Card
