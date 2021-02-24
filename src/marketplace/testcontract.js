import React, { useState } from "react";
import * as bs from "react-bootstrap";
import Contract from '../Contract';

export function TestContract(props){
    const [number, setNumber] = useState("");
    const [storedNumber, setStoredNumber] = useState("");
  
    const handleSubmit = (evt) => {
        setNumber(number)
        contract.store(number)
        evt.preventDefault();
        //alert(`Submitting: ${number}`)
    }

    let contract = new Contract('fujinetwork',() => {

    });

    let save  = (e) => {
        contract.store(number);
    }

    function retrieve() {
        let obj = contract.retrieve();
        obj.then(result => setStoredNumber(result.toNumber()))
        alert(`This is your number: ${storedNumber}`)
    }
    
    return (
        <>
            <div>
                {console.log(number)}
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                        Number:
                        <input
                            type="text"
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                        />
                        </label>
                        <input type="submit" value="Submit" onSubmit={save}/>
                    </form>
                </div>
                <button onClick={retrieve}>Get Number</button>
            </div>
        </>
    );
}