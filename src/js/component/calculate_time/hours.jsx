import React from "react";
import { useState, useEffect } from "react";

const Hours = () => {
    const [counterHours, setCounterHours] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounterHours((prevTens) => (prevTens > 23 ? 0 : prevTens + 1));
        }, 3_600_000);

        return () => clearInterval(interval);
    }, []);

    return counterHours
}

export default Hours