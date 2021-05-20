import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Console from './Console';

function Consoles() {
    const [consoles, setConsoles] = useState([]);
    const [selectedConsole, setSelectedConsole] = useState(null);

    useEffect(() => {
        axios.get('http://csc225.mockable.io/consoles').then((response) => {
            setConsoles(response.data);
        });
    }, []);

    if(consoles.length === 0) {
        return <p>Loading!</p>;
    }

    if(!!selectedConsole) {
        return (
            <div>
                <Console id={selectedConsole} />
                <button onClick={() => setSelectedConsole(null)}>Reset</button>
            </div>
        );
    }

    return (
        <div style={{backgroundColor: 'black'}}>
            {consoles.map((console) => {
                return (
                    <div className='d-grid gap-2' key={console.id}>
                        <button type='button' className='btn btn-danger' onClick={() => setSelectedConsole(console.id)}>
                                {console.name}
                            </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Consoles;