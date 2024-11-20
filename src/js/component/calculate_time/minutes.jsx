import React from "react";
import { useState, useEffect } from "react";

const Minutes = () => {
    const [counterMinutes, setcounterMinutes] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setcounterMinutes((prevTens) => (prevTens > 5 ? 0 : prevTens + 1));
        }, 60_000);

        return () => clearInterval(interval);
    }, []);

    return counterMinutes

}

export default Minutes