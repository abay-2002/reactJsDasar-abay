import React from "react";

const makanans = [
  {
    nama: "Nasi Goreng",
    harga: 15000,
  },
  {
    nama: "Kwetiau",
    harga: 12000,
  },
  {
    nama: "Mie Rebus",
    harga: 11000,
  },
];

export const MapFilterReduce = () => {
  return (
    <div>
      {/* map */}
      {/* Map adalah sebuah koleksi dari elemen-elemen yang ada pada JavaScript yang tiap elemen ini disimpan sebagai pasangan KV (key, value). */}
      {/* Hal ini memungkinkan untuk objek pada JavaScript Map untuk untuk menahan objek dan nilai primitif sebagai kunci atau nilainya. */}
      <h2>Map</h2>
      <ul>
        {makanans.map((makanan) => 
          <li>
            {makanan.nama} - Harga {makanan.harga}
          </li>
        )}
        {/* {makanans.map((makanan) => {
            return (
            <li>
                {makanan.nama} {makanan.harga}
            </li>
            );
        })} */}
      </ul>
      <h2>Filter</h2>
      <ul>
          {makanans.filter((makanan) => makanan.harga >= 12000).map((makanan) => (
              <li>{makanan.nama} - Harga {makanan.harga}</li>
          ))}
      </ul>
    </div>
  );
};
