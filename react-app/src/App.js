import React, { useEffect, useState } from "react";

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log("App component has mounted");

        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log("Fetched data:", data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <h1>Hello, React!!</h1>

            <div className="card-container">
                {data ? (
                    data.results.map((character) => (
                        <div key={character.id} className="card">
                            <h2>{character.name}</h2>
                            <img src={character.image} alt={character.name} />
                        </div>
                    ))
                ) : (
                    <p>Loading data...</p>
                )}
            </div>
        </div>
    );
};

export default App;
