import { useState, useEffect } from 'react';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const randomPage = Math.floor(Math.random() * 65) + 1;

        fetch(`https://apisimpsons.fly.dev/api/personajes?limit=10&page=${randomPage}`)
            .then(response => {
                if (!response.ok) { throw new Error(response.statusText); }
                return response.json();
            })
            .then(data => {
                setData(data.docs);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    return { data, isLoading, error };
};

export default useFetch;
