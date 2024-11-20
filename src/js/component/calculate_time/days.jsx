import React from "react";
import { useState, useEffect } from "react";

const Days = () => {
    const [counterDays, setcounterDays] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setcounterDays((prevTens) => (prevTens > 29 ? 0 : prevTens + 1));
        }, 86_400_000 );

        return () => clearInterval(interval);
    }, []);

    return counterDays
}
    


export default Days