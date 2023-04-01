import React, {useState} from "react";

function ClickCounter() {
    const [counter, setCounter] = useState(0);

    function handleClick () {
        setCounter(counter +1)
    };

    return (
        <div>
            <p>Clicked {counter} times.</p>
            <button onClick={handleClick}>
                Click
            </button>
        </div>
    );

}

export default ClickCounter;
// kazdy component ma swoje CSS
// nie jeden bo zaciaga kilka razy duzy duzy CSS i ujemne punkty w SEA search enginge cos tam xd optymalizacja


// zad3 wersja mobilna, czyli ma być flex (RWD query media)