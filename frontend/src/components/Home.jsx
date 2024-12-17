import Card from './Card';
import Cart from './Cart';
import { useState, useEffect } from "react";
// import { juiceService } from '../services/juice';
import { useFetcher } from '../hooks/useFetcher';

function Home() {

    // const [juice, setJuice] = useState([]);
    const [isOpen, setIsOpen] = useState(false)


    // const getJuice = async () => {
    //     const response = await juiceService.getJuice();
    //     setJuice(response)
    // }

    // useEffect(() => {
    //     getJuice();
    // }, [])

    const { juice, loading, error } = useFetcher();

    const renderSomething = () => {
        if (loading === true) {
            return (
                <h1>I am loading...</h1>
            )
        } else if (error) {
            return <p>error: {error.message}</p>
        } else if(loading === false){
            return (
                isOpen ? (
                    <>
                    <div>
                        <button onClick={()=>setIsOpen(false)}>close cart</button>
                    </div>
                    <Cart />
                    </>
                ):(

                    <>
                    <div>
                        <button onClick={()=>setIsOpen(true)}>show cart</button>
                    </div>
                    <div>

                        {juice.map((v) => {
                            return (
                                <div key={v.id}>
                                    <Card {...v} />
                                </div>
                            )
                        })}
                    </div>
                    </>

                )
            )
        }
    }

    return (
        <>

            {renderSomething()}

            {/* {isOpen? (
                <>
                <div>
                    <button onClick={()=>setIsOpen(false)}>close cart</button>
                </div>
                    <Cart />
                </>
            ) : (
                <>
                <div>
                    <button onClick={()=>setIsOpen(true)}>show cart</button>
                </div>
                {juice.map((v) => {
                return (
                    <div key={v.id}>
                        <Card {...v}/>
                    </div>
                )
            })}
                </>
            )} */}


        </>
    )
}

export default Home
