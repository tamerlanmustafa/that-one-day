import { useState, useEffect } from "react";
import './Hero.scss';

const Hero = ({ onDateChange, data }) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (data && data.length > 0) {
            setLoading(true); 
    
            setTimeout(() => {
                setApiData({
                    event: data[0]?.events?.[9]?.text || 'No event found',
                    selected: data[0]?.selected?.[5]?.text || 'No selected item found',
                    birth: data[0]?.births?.[0]?.text || 'No births found',
                    death: data[0]?.deaths?.[0]?.text || 'No deaths found',
                    holiday: data[0]?.holidays?.[0]?.text || 'No holidays found',
                });
    
                setLoading(false); 
            }, 1000);
        } else {
            setApiData({
                event: 'No event found',
                selected: 'No selected item found',
                birth: 'No births found',
                death: 'No deaths found',
                holiday: 'No holidays found',
            });
            setLoading(false);
        }
    }, [data]);
    
    const [year, setYear] = useState(''); 
    const [apiData, setApiData] = useState({
        event: '',
        selected: '',
        birth: '',
        death: '',
        holiday: '',
    });
    const [formattedDate, setFormattedDate] = useState('');

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const day = String(today.getDate()).padStart(2, '0'); 
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        const today = getTodayDate();
        setYear(today);
        onDateChange(today);
        const [_, month, day] = today.split('-');
        const monthName = new Date(2000, parseInt(month, 10) - 1).toLocaleString('default', { month: 'long' });
        setFormattedDate(`${monthName} ${parseInt(day, 10)}`);
    }, [onDateChange]);

    const handleChange = (e) => {
        const selectedDate = e.target.value;
        setYear(selectedDate);
        onDateChange(selectedDate);
        const [_, month, day] = selectedDate.split('-');
        const monthName = new Date(2000, parseInt(month, 10) - 1).toLocaleString('default', { month: 'long' });
        setFormattedDate(`${monthName} ${parseInt(day, 10)}`);
    };

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
                death: 'No deaths found',
                holiday: 'No holidays found',
            });
        }
    }, [data]);

    return (
        <>
            <main>
                <div>
                    <h2>Explore one day in the past!</h2>
                    <p>Select a day and a month from the calendar</p>
                </div>

                <div>
                    <form>
                        <label htmlFor="year">Choose a date(Month and Day ONLY): </label>
                        <input
                            type="date"
                            id="year"
                            value={year}
                            onChange={handleChange}
                        />
                    </form>
                </div>

                <div className="that-day">
                    {loading ? (
                        <div className="loading">
                            <p>Loading data...</p>
                        </div>
                    ) : (
                        <div className="that-day__content">
                            <h3>Key events on <strong>{formattedDate}</strong>:</h3>
                            <ul>
                                <li>
                                    <h4>Selected: </h4>
                                    {apiData.selected || 'error'}
                                </li>
                                <hr />
                                <li>
                                    <h4>Random: </h4>
                                    {apiData.event || 'error'}
                                </li>
                                <hr />
                                <li>
                                    <h4>Who was born: </h4>
                                    {apiData.birth || 'error'}
                                </li>
                                <hr />
                                <li>
                                    <h4>Who died: </h4>
                                    {apiData.death || 'error'}
                                </li>
                                <hr />
                                <li>
                                    <h4>Holiday:</h4>
                                    {apiData.holiday || 'error'}
                                </li>
                            </ul>
                        </div>)}
                </div>
            </main>
        </>
    );
};

export default Hero;
