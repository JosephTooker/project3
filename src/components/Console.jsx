import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Console(props) {
    const {id} = props;
    const [console, setConsole] = useState(null);

    useEffect(() => {
        axios.get('http://csc225.mockable.io/consoles/' + id).then((response) => {
            setConsole(response.data);
        });
    }, []);

    if(!console) {
        return <p>Loading Console...</p>
    }

    return (
        <div className='card' style={{width: 18 + 'rem'}}>
            <img src={console.image} className='card-img-top' alt={console.name} />
            <div className="card-body">
                <h5 className="card-title">{console.name}</h5>
                <p className="card-text">Year released: {console.releaseYear}</p>
                <p className="card-text">Country: {console.country}</p>
                <p className="card-text">Price: ${console.price}</p>
            </div>
        </div>
    )
}

export default Console;