import { useState } from "react";

function JuiceForm({onCancel}) {
    const [juiceData, setJuiceData] = useState('');

    const addJuice = (value, key) => {
        setJuiceData({ ...juiceData, [key]: value })
    }

    const submitJuice = (e) =>{
        e.preventDefault();
    }

    return (
        <form method='post' onSubmit={submitJuice}>
            <label htmlFor="name">name</label>
            <input type="text" onChange={(e) => {
                addJuice(e.target.value, "name");
            }}
                value={juiceData.name} name="name" />

            <label htmlFor="content">amount</label>
            <input type="text" onChange={(e) => {
                addJuice(e.target.value, "amount");
            }}
                value={juiceData.amount} name="amount" />
            <div>
                <button type="submit">Submit</button>
                <button onClick={()=>{
                    onCancel();
                }}>Cancel</button>
            </div>
        </form>
    )
}

export default JuiceForm