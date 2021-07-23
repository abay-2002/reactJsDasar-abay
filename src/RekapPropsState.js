// Props adalah “model” data yang memiliki fungsi ganda yaitu selain untuk menyimpan data, Props juga berfungsi untuk “melempar data” antar components view jika ada perubahan data di state.
// Class component memiliki state, sedangkan function based component tidak memiliki state (hanya menerima props). Secara sederhana, ketika kita membutuhkan state sudah hampir pasti akan membutuhkan class based component.
import React, { Component } from 'react'

export default class RekapPropsState extends Component {
    render() {
        return (
            <div>
                <h2>Rekap propsState makanan adalah: {this.props.makanan}</h2>
                <button onClick={_ => this.props.gantiMakanan("Soto ayam")}>Ganti makanan</button>
            </div>
        )
    }
}