import React, { useState } from "react";

const Home = () => {
    const [milliseconds, setMilliseconds] = useState(0);

    const totalSeconds = Math.floor(milliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const days = Math.floor(totalHours / 24) % 30;
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;
    const tenths = Math.floor((milliseconds % 1000) / 100);
    const hundredths = Math.floor((milliseconds % 100) / 10);

    function startCounter() {
        if (!window.timer) {
            window.timer = true;
            window.intervalId = setInterval(() => {
                setMilliseconds((mill) => mill + 10);
            }, 10);
        }
    }

    function stopCounter() {
        if (window.timer) {
            window.timer = false;
            clearInterval(window.intervalId);
        }
    }

    function resetCounter() {
        setMilliseconds(0);
        stopCounter(); 
    }

    const timeValue = `${days <= 9 ? "0" + days : days} : ${hours <= 9 ? "0" + hours : hours} : ${minutes <= 9 ? "0" + minutes : minutes} : ${seconds <= 9 ? "0" + seconds : seconds}.${tenths}${hundredths}`;

    return (
        <div className="position-absolute bottom-50 start-50 translate-middle">
            <div className="d-flex row">
                <input className="bg-dark text-white mx-auto fs-1 text-center" type="text" readOnly value={timeValue}/>
                <div className="d-flex justify-content-center p-2">
                    <button type="button" className="btn btn-primary m-2" onClick={startCounter}>Start</button>
                    <button type="button" className="btn btn-primary m-2" onClick={stopCounter}>Stop</button>
                    <button type="button" className="btn btn-primary m-2" onClick={resetCounter}>Reset</button>

                </div>
            </div>
        </div>
    );
};

export default Home;