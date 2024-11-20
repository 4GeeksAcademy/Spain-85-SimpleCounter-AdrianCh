import React from "react";
import { useState, useEffect } from "react";

const Hundredths = () => {
    const [counterHundredths, setcounterHundredths] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setcounterHundredths((prevUnits) => (prevUnits > 8 ? 0 : prevUnits + 1));
        }, 10);
        
        return () => clearInterval(interval);
    }, []);

    return counterHundredths
}

export default Hundredths