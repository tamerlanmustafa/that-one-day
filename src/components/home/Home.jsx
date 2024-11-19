import { useEffect , useState } from "react"
import Hero from "../Hero/Hero"



const Home =    () => {
    const [data, setData] = useState(null)
    const [date, setDate] = useState("");
    
    // wikipedia
    const fetchData = async () => {
       
    }
    fetchData()

    //////////////
    useEffect(() => {
        if (date) {
        
            const API_KEY1 = import.meta.env.VITE_API_KEY_WEATHER
            const API_Authorization = import.meta.env.VITE_API_WIKI_AUTHORIZATION
            const [year, month, day] = date.split('-')



            const apiUrl1 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Arlington,VA/${year}-${month}-${day}T13:00:00?key=${API_KEY1}&include=current `

            const apiUrl2 = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`

            const optionsApi2 = {
                headers: {
                    'Authorization': API_Authorization,
                    'Api-User-Agent': 'ThatOneDay'
                }
            }
        
            const handleRequests = async () => {
                try {
                    const responseWeatherApi = await fetch(apiUrl1)
                    const resWeatherData = await responseWeatherApi.json()

                    const responseWikiApi = await fetch(apiUrl2, optionsApi2)
                    const resWikiData = await responseWikiApi.json()
                    
                    const result = []
                    result.push( resWeatherData, resWikiData)
 
                    setData(result)
                   

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
        <Hero data={data}  onDateChange={setDate} />
    </>)
}

export default Home