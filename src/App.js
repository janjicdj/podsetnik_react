import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pocetna from "./components/Pocetna";
import NovaBeleska from "./components/NovaBeleska";
import { useState} from "react";


function App() {
    const [beleske, setBeleske] = useState([
        {
            "id": 1,
            "naslov": "Naslov 1",
            "tekst": "Tekst 1",
            "status": "zavrsen"
        }, {
            "id": 2,
            "naslov": "Naslov 2",
            "tekst": "Tekst 2",
            "status": "cekanje"
        }, {
            "id": 3,
            "naslov": "Naslov 3",
            "tekst": "Tekst 3",
            "status": "cekanje"
        },
    ]);
    const [zavrseni, setZavrseni] = useState(vratiZavrsene());
    const [ukupno, setUkupno] = useState(beleske.length);


    function vratiZavrsene() {
        let br = 0;
        beleske.forEach((b) => {
            if (b.status === "zavrsen")
                br++;
        });
        return br;
    }

    function zavrsi(id) {
        beleske.forEach((b) => {
            if (b.id === id) {
                b.status = "zavrsen";
            }
        });
        osveziPocetnu()
    }

    function osveziPocetnu() {
        beleske.forEach((b) => console.log(b))
        setBeleske(beleske);
        setZavrseni(vratiZavrsene())
        setUkupno(beleske.length)

    }

    function obrisi(id) {
        for (let i = 0; i < beleske.length; i++) {
            if (beleske[i].id === id) {
                beleske.splice(i, 1);
                break;
            }
        }
        osveziPocetnu();
    }

    function generisiId() {
        return beleske.length==0?1:beleske[beleske.length - 1].id + 1
    }

    function dodajBelesku(e) {
        e.preventDefault();
        beleske.push({
            'id': generisiId(),
            'naslov': e.target[0].value,
            'tekst': e.target[1].value,
            'status': 'cekanje',
        })
        osveziPocetnu();
        e.target.reset();
    }

    return (
        <BrowserRouter>
            <NavBar zavrseni={zavrseni} ukupno={ukupno}/>
            <Routes>
                <Route path="/" element={<Pocetna beleske={beleske} zavrsi={zavrsi} obrisi={obrisi}/>}/>
                <Route path="/novaB" element={<NovaBeleska dodajBelesku={dodajBelesku}/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
