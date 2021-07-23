import React, { Component } from 'react'

import RekapPropsState from './RekapPropsState'

// ===== state =====
export default class RekapStateSederhana extends Component {
    constructor(props){
        super(props);
        this.state = {
            minuman : 'Jus Jeruk'
        }
    }
    
    // state can be modified using setState({})
    gantiMinuman(minumanBaru){
        this.setState({
            minuman : minumanBaru
        })
    }

    render() {
        return (
            <div>
                <h2>Rekap Props dan State</h2>
                <h2>{this.state.minuman}</h2>
                <button onClick={ _ => {this.gantiMinuman("Jus Mangga")}}>Ganti Minuman</button>
            </div>
        )
    }
}

// ===== props sederhana =====
export const PropsSederhana = (props) => {
    return (
        <div>
            <h2>Props sederhana {props.name}</h2>
        </div>
    )
}

// ===== props dan state =====
export class RekapPropsDanState extends Component {
    constructor(props){
        super(props);
        this.state = {
            makanan : 'Bakso'
        }
    }

    gantiMakanan = (makanan_baru) => {
        this.setState({
            makanan : makanan_baru
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button onClick={ _ => {this.gantiMakanan("Soto")}}>ganti makanan</button>
                <RekapPropsState makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
        )
    }
}
// Class component memiliki state, sedangkan function based component tidak memiliki state (hanya menerima props). Secara sederhana, ketika kita membutuhkan state sudah hampir pasti akan membutuhkan class based component.














