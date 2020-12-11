import React, {useState, useRef, useEffect} from 'react';

export const MainPageDisplay = (): any => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [mins, setMins] = useState(0)
    const [secs, setSecs] = useState(0)
    const isBreak = true;
    let interval = useRef<any>();

    const startTimer = () => {
        const targetDate = new Date('21 October 21 00:00:00 GMT').getTime(); 
        
        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const currentdays = Math.floor(distance / (1000* 60 * 60 * 24))
            const currenthours = Math.floor(distance % (1000* 60 * 60 * 24) / (1000 * 60 * 60))
            const currentmins = Math.floor(distance % (1000* 60 * 60)  / (1000 * 60 * 60))
            const currentsec = Math.floor(distance % (1000* 60)  / 1000)

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setDays(currentdays);
                setHours(currenthours);
                setMins(currentmins);
                setSecs(currentsec)
            }
        }, 1000);
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })
    if(isBreak) {
       return(
        <div className="main-container">
            <h1 style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}}>Will be back shortly 😉</h1>
        </div>
       ) 
    }
    return (
        <div className="main-container">
            <div className='date-container'>
                <div className='date'>
                    <h3>Days</h3>
                    <h1>{days}</h1>
                </div>
                <div className='date'>
                    <h3>Hours</h3>
                    <h1>{hours}</h1>
                </div>
                <div className='date'>
                    <h3>Mins</h3>
                    <h1>{mins}</h1>
                </div>
                <div className='date'>
                    <h3>Secs</h3>
                    <h1>{secs}</h1>
                </div>
            </div>
        </div>
    )
}

export default MainPageDisplay;