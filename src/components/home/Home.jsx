import { useEffect , useState } from "react"
import Hero from "../Hero/Hero"

const Home =    () => {
    const [data, setData] = useState(null)
    const [date, setDate] = useState("");

    useEffect(() => {
        if (date) {        
            const API_Authorization = import.meta.env.VITE_API_WIKI_AUTHORIZATION
            const [year, month, day] = date.split('-')
            const apiURL = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`
            const options = {
                headers: {
                    'Authorization': API_Authorization,
                    'Api-User-Agent': 'ThatOneDay'
                }
            }
        
            const handleRequests = async () => {
                try {
                    const responseWikiApi = await fetch(apiURL, options)
                    const resWikiData = await responseWikiApi.json()
                    const result = []
                    result.push(  resWikiData) 
                    setData(result)                   
                } catch (err) {
                    console.log(err)
                } finally {

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