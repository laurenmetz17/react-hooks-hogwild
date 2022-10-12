import React,{useState} from 'react';

function Hog({name, image, greased, weight, highestMedal}) {
    
    const [showDetails, setShowDetails] = useState(false);
    const greasedHog = greased ? "Greased" : "Not Greased";

    function handleClick() {
        setShowDetails((showDetails) => !showDetails)
    }

    return (
        <div onClick={handleClick}>
            <h4>{name}</h4>
            <img alt={name} src={image}></img>
            {showDetails ? <p>{greasedHog}</p> : null}
            {showDetails ? <p>{` Weight: ${weight} kg`}</p> : null}
            {showDetails ? <p>{`Highest Medal Achived: ${highestMedal}`}</p> : null}
        </div>
    )
}

export default Hog;