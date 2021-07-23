import React, { Component } from 'react'

export default class propsDanState extends Component {
    constructor(props){
        super(props);
        this.state = {
            makanan : 'Bakso'
        }
    }
    
    gantiMakanan(makanan_baru){
        this.setState({
            makanan : makanan_baru
        })
    }

    render() {
        return (
            <div>
                <h1>Belajar props dan state</h1>
                <h3>State: </h3>
                <h2>{this.state.makanan}</h2>
                <button onClick={ _ => {this.gantiMakanan("Soto")}}>Ganti Makanan</button>
            </div>
        )
    }
}

// State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa di akses dari component lain.
// ===== perbedaan state dan props =====
// // props
// props are read only 
// props cannot be modified 

// // state
// state change can be asynchronous
// state can be modified using this.setState({ propertie : value})

// kapan state berubah jadi props?
// ketika dioper kekomponen lainnya


// Menangani events dengan elemen React sangat mirip seperti menangani sebuah events pada elemen DOM. Ada beberapa perbedaan sintaksis:
// PENANGANAN EVENT
// Events pada React biasanya ditulis dalam bentuk camelCase, bukan lowercase.
// Dengan JSX Anda dapat mengoper function sebagai event handler, bukan sebagai string.
// Sebagai contoh pada HTML berikut ini:
// <button onclick="activateLasers()">
//   Aktivasi Laser
// </button>

// sedikit berbeda dengan React:
// <button onClick={activateLasers}>
//   Aktivasi Laser
// </button>


