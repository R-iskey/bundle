import {useEffect, useState} from "react";

const useFetch = (url, options = { enable: true}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (options.enable) {
      fetchData();
    }
  }, [url, options.enable]);

  return {data, loading, error};
};

export default useFetch;
