import React, { useState } from 'react'

export default function Form(props) {
    const handleOnChange = (e) => {
        console.log("Text Changed")
        setText(e.target.value)
    }

    const handleUpperCase = () => {
        console.log("clicked on Button")
        let newText;
        newText = text.toUpperCase()
        setText(newText)
        // setText("Text is Changes Now. Once you will click on Button")
    }
    const handleLowercase = () => {
        let newText;
        newText = text.toLowerCase()
        setText(newText)
    }

    const copyTexttoClipboard = () => {
        let text = document.getElementById('floatingTextarea2')
        text.select()
        // text.setselectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
    }
    const handleToRemoveSpaces = () => {
        let newText = text.split(/[ ]+/) // Using this Line to Create an array of word without any space in Betwwen.
        setText(newText.join(" ")) // Using this line to join all the Word wihh on space.
    }

    const [text, setText] = useState("Enter your Text Here")
    return (
        <div className="form-main">
            <p className='display-1'>Welcome to My <kbd>Text Machine</kbd></p>
            <div className={`container`} style={props.myStyle}>

                <p class="h1">Enter your Text Below</p>
                <div class="form-floating">
                    <textarea className="form-control p-2" placeholder="Leave a comment here" id="floatingTextarea2" value={text} onChange={handleOnChange}></textarea>
                    <button type="button" className="btn btn-primary my-4 mx-2" onClick={handleUpperCase}>Convert to Upper Case</button>
                    <button type="button" className="btn btn-primary my-4 mx-2" onClick={handleLowercase}>Convert to Lower Case</button>
                    <button type="button" className="btn btn-primary my-4 mx-2" onClick={copyTexttoClipboard}>Copy Text</button>
                    <button type="button" className="btn btn-primary my-4 mx-2" onClick={handleToRemoveSpaces}>Remove Spaces</button>

                    <div>
                        <p>This Sentence consists of <kbd>{text.split(" ").length - 1}</kbd> Words and <kbd>{text.length}</kbd> letters.</p>
                        <p>it will take around <kbd>{0.008 * (text.split(" ").length)}</kbd> Minutes to read this paragraph</p>
                        <p className='preview'>{text}</p>
                    </div>
                </div>
                </div>
            </div>
    )
}
