import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return [services, setService];
};

export default Hooks;
