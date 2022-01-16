import React from 'react';
import BeleskaP from "./BeleskaP";

function Pocetna({beleske,zavrsi,obrisi}) {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 g-3">

                {beleske.map((beleska)=>(
                    <BeleskaP beleska={beleska} key={beleska.id} zavrsi={zavrsi} obrisi={obrisi}/>
                ))}

            </div>
        </div>
    );
}

export default Pocetna;