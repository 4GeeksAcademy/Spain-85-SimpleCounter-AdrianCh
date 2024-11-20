import React from "react";
import { useState, useEffect } from "react";

const Seconds = () => {
    const [counterSeconds, setcounterSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setcounterSeconds((prevUnits) => (prevUnits > 58 ? 0 : prevUnits + 1));
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    return counterSeconds
}

export default Seconds