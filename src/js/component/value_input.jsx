import React from "react";

import Hundredths from "./calculate_time/hundredths";
import Tenths from "./calculate_time/tenths";
import Seconds from "./calculate_time/seconds";
import Minutes from "./calculate_time/minutes";
import Hours from "./calculate_time/hours";
import Days from "./calculate_time/days";


const ValueInput = () => {
    const days = Days();
    const hours = Hours();
    const minutes = Minutes();
    const seconds = Seconds();
    const tenths = Tenths();
    const hundredths = Hundredths();


    return `${days} : ${(hours <= 9 ? "0" + hours : hours)} : ${(minutes <= 9 ? "0" + minutes : minutes)} : ${(seconds <= 9 ? "0" + seconds : seconds)} . ${tenths}${hundredths} `
}

export default ValueInput