import { useContext, useRef, useState } from "react";
import { MyContext } from "../context";

const Confirm = () => {

    const context = useContext(MyContext);

    const goNext = () => {
        context.goTo(2)
    }

    const goBack = () => {
        context.question('')
        context.goTo(0)
    }

    return(
        <div>
            <h3>Your question is: </h3>
            <div className="viewer">
                { context.state.question }
            </div>
            <div>
                <hr />
                <button 
                    className="btn animate__animated animate__bounceIn animate__delay-1s" 
                    onClick={goNext}
                >
                    Decide it
                </button>
                <button 
                    className="btn animate__animated animate__bounceIn animate__delay-1s" 
                    onClick={goBack}
                >
                    Ask a new question
                </button>
            </div>
        </div>
    );
}

export default Confirm;