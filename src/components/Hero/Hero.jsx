import { useState } from "react"
import './Hero.scss'

const Hero = ({ onDateChange }) => {
    const [year, setYear] = useState('')
    const handleChange = (e) => {
        const selectedDate = e.target.value;
        setYear(selectedDate); 
        onDateChange(selectedDate); 
    }
    return (
        <>
            <main>
                
                <div> 
                    <h2>Explore one day in the past!</h2>
                    <p>Select a date from the calendar</p>
                </div>

        
                <section>
                    
                    <form>
                        <label htmlFor="year">Choose a date : </label>
                        <input type="date" value={year} onChange={handleChange}/>

                    </form>
                    
                </section>
                
            </main>
            

        </>
    )

}

export default Hero