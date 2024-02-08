import { useState } from "react";
import axios from "axios";

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
    const [joke, setJoke] = useState('random dad joke');

    const fetchDadJoke = async () => {
        try {
            const {data} = await axios(url, {
                headers: {
                    Accept : 'application/json', 
                }
            });
            setJoke(data.joke);
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <section className="w-[90vw] max-w-[600px] my-0 mx-auto pb-8 text-center">
            <button className="btn" onClick={fetchDadJoke}>
                random joke
            </button>
            <p className="mt-4">{joke}</p>
        </section>
    )
};

export default Headers;