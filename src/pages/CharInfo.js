import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharInfo = () => {
    const [charInfo, setCharInfo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json();
                setCharInfo(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);
    
    console.log(charInfo.image)

    return (
        <div className="CharInfo">
            <img src={charInfo.image} alt={`Img of ${charInfo.name}`} />
            <h3>ID: {charInfo.id}</h3>
            <h3>Name: {charInfo.name}</h3>
            <h3>Status: {charInfo.status}</h3>
            <h3>Species: {charInfo.species}</h3>
            <h3>Type: {charInfo.type}</h3>
            <h3>Gender: {charInfo.gender}</h3>
            
        </div>
    );
};

export default CharInfo;
