import { useState, useEffect } from "react"
import './Hero.scss'

const Hero = ({ onDateChange, data }) => {
    const [year, setYear] = useState('')
    const [apiData, setApiData] = useState({
        event: '',
        selected: '',
        birth: '',
        death: '',
        holiday: '',
    })

    const handleChange = (e) => {
        const selectedDate = e.target.value;
        setYear(selectedDate); 
        onDateChange(selectedDate); 
    }    

    useEffect(() => {
        if (data && data.length > 0) {
            setApiData((prevState) => ({
                ...prevState,
                event: data[0]?.events?.[9]?.text || 'No event found',
                selected: data[0]?.selected?.[5]?.text || 'No selected item found',
                birth: data[0]?.births?.[0]?.text || 'No births found',
                death: data[0]?.deaths?.[0]?.text || 'No deaths found',
                holiday: data[0]?.holidays?.[0]?.text || 'No holidays found',
            }));
        } else {

            setApiData({
                event: 'No event found',
                selected: 'No selected item found',
                birth: 'No births found',
                holiday: 'No holidays found',
            });
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
                        <ul>
                            <li>
                                <h4>Event: </h4>
                                {apiData.event ? apiData.event : 'error'}
                            </li>
                            <hr />
                            <li>
                                <h4>Selected: </h4>
                                {apiData.selected ? apiData.selected : 'error'}
                            </li>
                            <hr />
                            <li>
                                <h4>Who was born: </h4>
                                {apiData.birth ? apiData.birth : 'error'}
                            </li>
                            <hr />
                            <li>
                                <h4>Who died: </h4>
                                {apiData.death ? apiData.death : 'error'}
                            </li>
                            <hr />
                            <li>
                                <h4>Holiday:</h4>
                                {apiData.holiday ? apiData.holiday : 'error'}
                            </li>
                        </ul>                        
                    </div>
                </div>
                
            </main>
        </>
    )

}

export default Hero