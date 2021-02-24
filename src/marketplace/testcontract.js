import React, { useState } from "react";
import * as bs from "react-bootstrap";
import Contract from '../Contract';

export function TestContract(props){
    const [number, setNumber] = useState("");
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting: ${number}`)
    }

    let contract = new Contract('fujinetwork');

    let save  = () => {
        contract.store(number);
        console.log(number);
        console.log(contract.retrieve())
    }

    function retrieve() {
        let obj = contract.retrieve();
        console.log(obj);
        //return contract.retrieve();
    }

    //  => {
    //     try {
    //         result = await contract.store(number);
    //     } catch (e) {
    //         console.log(e);
    //         err = e;
    //     } finally {
    //         display(number, " stored");
    //     }
    // })
    
    return (
        <>
            <div>
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
                    <p>
                        {retrieve()}
                    </p>
                </div>
  
            </div>
        </>
    );
}