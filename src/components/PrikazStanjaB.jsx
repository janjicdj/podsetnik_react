import React from 'react';
import OnePrikazStanjaB from "./OnePrikazStanjaB";
import {MdAccessTime, MdDone, MdSummarize} from "react-icons/md";

function PrikazStanjaB({zavrseni,ukupno}) {
    return (
       <div className="row justify-content-md-center">
           <OnePrikazStanjaB className="col" ikona={<MdDone />} naslov="Završeno: " vrednost={zavrseni} />
           <OnePrikazStanjaB className="col" ikona={<MdAccessTime />} naslov="Na čekanju: " vrednost={ukupno-zavrseni} />
           <OnePrikazStanjaB className="col" ikona={<MdSummarize />} naslov="Ukupno: " vrednost={ukupno} />
       </div>
    );
}

export default PrikazStanjaB;