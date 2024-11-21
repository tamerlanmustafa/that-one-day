
import { usePollinationsImage } from '@pollinations/react';
import { useState, useEffect } from 'react';

const ImageGenerator = (apiData) => {
    const { event, selected, birth, holiday } = apiData.props
    
    const [imageTexts, setImageTexts] = useState([])
    
    const [imageURLs, setImageURLs] = useState({
        event: '',
        selected: '',
        birth: '',
        holiday: '',

    })



    useEffect(() => {
        setImageTexts([event, selected, birth, holiday]);
      }, [event, selected, birth, holiday]);
    

    imageTexts.forEach(imageText => {
        console.log('hello')
    })
    
    const imgURL =  usePollinationsImage(prompt, {
        
        width: 1024,
        height: 1024,
        seed: 42,
        model: 'flux',
        nologo: true

    })

    return (
        <>
            <h1>AI Image</h1>
            <div>
                    {imgURL ? (
                    <img 
                    src={imgURL} 
                    alt="Generated image" 
                    />
                ) : (
                    <p>Loading...</p>
                )}
             </div>
        </>
    )
    
}

export default ImageGenerator