// 'import react' adalah library yang disediakan untuk membaca component pembuatan sebuah component
import React from 'react';

// 'import react dom' adalah library yang disediakan untuk me-render component yang tadi dibuat dari react ke dom 
import ReactDOM from 'react-dom';

// import dibawah adalah hasil export dari app.js
// import App from './App';


// ===== BELAJAR COMPONENT =====
// import Component from './Component';

// import Navbar from './Navbar';

// import Card from './Card';

// export langsung component importnya pake {}
// import {ExportBiasa} from './ComponentExportImport';
// export default importnya tanpa pakai {}
// import DenganDefaultExport from './ComponentExportImport';


// ===== BELAJAR PROPS DAN STATE =====
// import PropsDanState from './PropsDanState'

import RekapStateSederhana from './RekapPropsDanState';
import {PropsSederhana} from './RekapPropsDanState';
import {RekapPropsDanState}  from './RekapPropsDanState';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    
    {/*===== Belajar Component =====*/}
    {/* <Component /> */}
    {/* <Navbar /> */}
    {/* <Card name="akbar angkasa" job="Front End Web Dev"/> */}
    {/* <ExportBiasa /> */}
    {/* <DenganDefaultExport /> */}
    
    {/*===== Belajar props dan state =====*/}
    {/* <PropsDanState /> */}
    <RekapStateSederhana />
    <PropsSederhana name="akbar angkasa" />
    <RekapPropsDanState />
  </React.StrictMode>,
  document.getElementById('root')
);

// //component basically adalah sebuah function
// //contoh:
// // penulisan syntax dibawah menggunakan syntax javscript es6

// const Card = () =>{
// 	return(
// 	<div class="card">
// 		<p class="title">Akbar Angkasa</p>
// 		<p>Front end Dev</p>
// 	</div>
// 	)
// }

// const App = () => {
// 	// return hanya mengembalikan satu parent
// 	return(
// 		<div id="parentCard">
// 			<Card />
// 			<Card />
// 		</div>
// 	)
// }


// ReactDOM.render(
// 	//<Card />
// 	<App />, 
// 	document.querySelector("#root")
// )
