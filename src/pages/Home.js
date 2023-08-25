import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [Home, setHome] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            setHome(data.results);
        } catch (error) {
            console.error(error);
        }
        };

        fetchData();
    }, []);

    return (
        <div className="Home">
        {Home.map((character) => {
            const { name, id, image } = character;

            return (
            <Link key={id} to={`/charinfo/${id}`}>
                <img src={image} alt={``} />
                <h2 className="HomeItems">{name}</h2>
            </Link>
            );
        })}
        </div>
    );
};

export default Home;
