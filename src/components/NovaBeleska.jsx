import React from 'react';

function NovaBeleska({dodajBelesku}) {
    const stil={width:50+'vw',marginLeft:'auto',marginRight:'auto'}
    return (
        <div>
            <form style={stil} onSubmit={dodajBelesku}>
                <h2> Dodaj novu belešku</h2>
                <div className="mb-3">
                    <label htmlFor="naslovB" className="form-label">Naslov</label>
                    <input type="text" name="naslov" className="form-control" id="naslovB" />

                </div>
                <div className="mb-3">
                    <label htmlFor="sadrzajB" className="form-label">Sadržaj</label>
                    <textarea id="sadrzajB" name="sadrzaj" className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Sačuvaj</button>
                <button type="reset" className="btn btn-secondary">Reset</button>
            </form>
        </div>
    );
}

export default NovaBeleska;