import React, { useState, useEffect } from 'react';
import Loader from './Loader/Loader';

const DataFetching = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />; // Show loader while data is being fetched
  }

  return (
    <div>
      {/* Render your data */}
    </div>
  );
};

export default DataFetching;