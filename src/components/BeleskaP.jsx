import React from 'react';

function BeleskaP({beleska,zavrsi}) {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{beleska.naslov}</h5>
                    <p className="card-text">{beleska.tekst}</p>
                    <button className="btn btn-success card-link" onClick={()=>zavrsi(beleska.id)}>Završi</button>
                    <button className="btn btn-danger card-link">Obriši</button>
                </div>
                <div className="card-footer text-muted">
                    Status: {beleska.status}
                </div>
            </div>
        </div>
    );
}

export default BeleskaP;