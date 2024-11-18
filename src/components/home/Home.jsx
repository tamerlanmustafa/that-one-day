import { useEffect , useState } from "react"
import Hero from "../Hero/Hero"



const Home =    () => {
    const [data, setData] = useState(null)
    const [date, setDate] = useState("");

    useEffect(() => {
        if (date) {
            console.log("Selected date from Hero:", date);
        
            const API_KEY1 = import.meta.env.VITE_API_KEY_WEATHER
            const API_KEY2 = import.meta.env.VITE_API_KEY_HISTORIC_EVENT
            const [year, month, day] = date.split('-')


            const apiUrl1 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Arlington,VA/${year}-${month}-${day}T13:00:00?key=${API_KEY1}&include=current `

            const apiUrl2 = `https://api.api-ninjas.com/v1/historicalevents?year=${year}&month=${month}&day=${day}`

            const optionsApi2 = {
                method: 'GET',
                headers: {
                    'X-Api-Key': `${API_KEY2}`
                }
            }
        
            const handleRequests = async () => {
                try {
                    const responses = await Promise.all([
                        fetch(apiUrl1),
                        fetch(apiUrl2, optionsApi2)
                    ])
                    const result = []
                    for (let res of responses) {
                        const resData = await res.json()
                        result.push(resData)
                    }

                    setData(result)
                    console.log(result)

                } catch (err) {
                    console.log(err)
                } finally {
                    // console.log('Finally happened')
                }
            }
            handleRequests()
        }
       
    },[date])
        

  
    

    return (<>
        <Hero  onDateChange={setDate} />
    </>)
}

export default Home