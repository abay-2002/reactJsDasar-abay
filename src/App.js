// 'import react' adalah library yang disediakan untuk membaca component pembuatan sebuah component
import React from 'react';

import Navbar from './Navbar';

import Card from './Card';

// belajar component export import
// import DenganDefaultImport from './ComponentExportImport';

// belajar component export import
// import {ExportBiasa} from './ComponentExportImport';

// import Test from './PropsDanState';

// arrow function component
/* export */ const Footer = () => {
  return (
    <div>
      <h3>Footer, menggunakan arrow function</h3>
    </div>
  )
}

// kemudian kita panggil si navbar ini dengan jsx, jsx ini tag HTML costum bisa dibilang begitu 
// jadi dibawah ini adalah satu buah component, nah component ini agar bisa diakses oleh tempat lain yaitu si index.js maka harus di export default
// function component
function App() {
  return (
    // To specify a CSS class, use the className attribute. This applies to all regular DOM and SVG elements like <div>, <a>, and others.
    <div className="App">
      <Navbar/>
      <h3>Hello World, menggunakan function component</h3>
      <Footer/>
      {/* belajar component */}
      {/* sedikit membahas props */}
      {/* <Card name="Sedikit belajar props" job="Front End Dev"/>
      <Card name="Ananda Ajeng" job="Back End Dev"/>  */}
      
      {/* belajar component import dan export */}
      {/* <DenganDefaultImport /> */}
      {/* <ExportBiasa /> */}
      
      {/* belajar state dan props */}
      {/* belajar state */}
      {/* <Test /> */}

    </div>
  );
}

// jadi ada beberapa jenis component
// class component, function component, arrow function component
export default App;
