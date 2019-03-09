import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjasList = ninjas.map(ninja => {
        return (ninja.age > 20) ? (
            <div className="ninja" key = { ninja.id }>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                <button onClick={() => deleteNinja(ninja.id)}>Delete ninja</button>
            </div>
        ) : null;
    });
    return(
        <div className="ninjas-list">
            { ninjasList }
        </div>
    );
} 

export default Ninjas