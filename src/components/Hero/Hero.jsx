import { useState, useEffect } from "react"
import './Hero.scss'

const Hero = ({ onDateChange, data }) => {
    const [year, setYear] = useState('')
    const [temp, setTemp] = useState(null);
    const [description, setDescription] = useState('');
    const [event, setEvent] = useState(null);


    const handleChange = (e) => {
        const selectedDate = e.target.value;
        setYear(selectedDate); 
        onDateChange(selectedDate); 
    }


    useEffect(() => {
        if (data && data.length > 1) {

            const { temp, description } = data[0].days[0]; 
            const event = data[1]?.events[0].text;  
            setTemp(temp);
            setDescription(description);
            setEvent(event);
        }
    }, [data]);

    return (
        <>
            <main>
                
                <div> 
                    <h2>Explore one day in the past!</h2>
                    <p>Select a date from the calendar</p>
                </div>

        
                <div>
                    <form>
                        <label htmlFor="year">Choose a date : </label>
                        <input type="date" value={year} onChange={handleChange}/>

                    </form>  
                </div>                    
                    

                <div className="that-day">
                    <div>
                        <h3>On this day:</h3>
                        <p>{event ? event : 'error'}</p>
                    </div>
                    
                    <div className="extra-details">
                        <div>
                            <h4>Weather:</h4>
                            <h5>{temp ? `${temp} °F`: 'error 2' }</h5>
                            <p> It was {description ? description : 'error 3' }</p>
                        </div>
                        <div>
                            <h4>Top 3 songs: </h4>
                            <ul>
                                <li>Music</li>
                                <li>Music</li>
                                <li>Music</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </main>
            

        </>
    )

}

export default Hero