import React from "react";
import { useState, useEffect } from "react";

const Tenths = () => {
    const [counterTenths, setcounterTenths] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setcounterTenths((prevUnits) => (prevUnits > 8 ? 0 : prevUnits + 1));
        }, 100);
        
        return () => clearInterval(interval);
    }, []);

    return counterTenths
}

export default Tenths