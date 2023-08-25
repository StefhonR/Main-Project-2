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
            <h4>ID: {charInfo.id}</h4>
            <h4>Name: {charInfo.name}</h4>
            <h4>Status: {charInfo.status}</h4>
            
        </div>
    );
};

export default CharInfo;
