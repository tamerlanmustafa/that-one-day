import { useEffect } from "react"
import Hero from "../Hero/Hero"



const Home =    () => {
    
    // useEffect(() => {
        
        
    //     const API_KEY1 = import.meta.env.VITE_API_KEY_WEATHER
    //     const API_KEY2 = import.meta.env.VITE_API_KEY_HISTORIC_EVENT
       

    //     const apiUrl1 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Arlington,VA/2020-12-15T13:00:00?key=${API_KEY1}&include=current `

    //     const apiUrl2 = `https://api.api-ninjas.com/v1/historicalevents?year=1999&month=4&day=12`

    //     const optionsApi2 = {
    //         method: 'GET',
    //         headers: {
    //            'X-Api-Key': `${API_KEY2}`
    //         }
    //     }
        
    //     const handleRequests = async () => {
    //         try {
    //             const responses = await Promise.all([
    //                 fetch(apiUrl1),
    //                 fetch(apiUrl2,optionsApi2)
    //             ])
    //             const data = []
    //             for (let res of responses) {
    //                 const resData = await res.json()
    //                 data.push(resData)
    //             }
    //             console.log(data)

    //         } catch (err) {
    //             console.log(err)
    //         } finally {
    //             console.log('Finally happened')
    //         }
    //     }
    //     handleRequests()

       
    // },[])
        

  
    

    return (<>
        <Hero/>
    </>)
}

export default Home