import { useRef, useState } from "react";

const Initial = () => {

    const textInput = useRef();
    const [showNext, setShowNext] = useState(false);
    const [showError, setShowError] = useState(false);

    // To check the text input >= 5 to show next button
    const handleChange = () => {
        if(textInput.current.value.length >= 5)
            setShowNext(true)
        else
            setShowNext(false)  
    }

    // Check the value in input

    const handleSubmit = () => {
        const value = textInput.current.value;

        if(value.length >= 30){
            setShowError(true);
            return false
        }

        alert('NEXT')
    }

    return(
        <div>
            <h1>Ask a question</h1>
            

                <input 
                    ref={textInput}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    name="question"
                />
            {showNext &&
                <button className="btn" onClick={handleSubmit}> Next </button>
            }

            { showError &&
                <div className="error">
                    The question is too long
                </div>       
            }


            
        </div>
    );
}

export default Initial;