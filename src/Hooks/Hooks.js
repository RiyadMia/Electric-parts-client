import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch(" https://mighty-inlet-62276.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return [services, setService];
};

export default Hooks;
