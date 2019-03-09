import React from 'react';

const Ninjas = ({ninjas}) => {
    const ninjasList = ninjas.map(ninja => {
        return (
            <div className="ninja" key = { ninja.id }>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
            </div>
        )
    })
    return(
        <div className="ninjas-list">
            { ninjasList }
        </div>
    );
} 

export default Ninjas