import { useState } from "react";

export default function Fact() {
  const [fact, setFact] = useState('');
  const [error, setError] = useState(null);

  const getAPI = async () => {
    const url = 'https://facts-by-api-ninjas.p.rapidapi.com/v1/facts';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '364f71375fmsh8dd3f9eeb01c498p135e14jsn22564156787c',
        'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      
      if (Array.isArray(data) && data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomFact = data[randomIndex].fact;

        setFact(randomFact);
        setError(null);
      } else {
        throw new Error('No facts found in the response');
      }
    } catch (error) {
      setError(error.message || 'Problem fetching fact!');
      console.error(error);
    }
  };

  const getRandomFact = async () => {
    try {
      await getAPI();
    } catch (err) {
      setError(err.message || 'Problem fetching fact!');
    }
  };

  return (
    <div className="fact-container">
      <button onClick={getRandomFact} className="glow-btn">Show Random Fact!</button>
      <div className="random-fact">
        {fact && <p>{fact}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
