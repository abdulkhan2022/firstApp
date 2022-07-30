import React from 'react'


export default function Home() {
    return (
        <>
            <div className="homepageconatiner">
                <p className='display-1'>In this Website you will have multiple Options to play with <kbd>words.</kbd></p>
                <div className="li">
                    <li>You can Convert your text to <kbd>Upper Case</kbd> or <kbd>Lower Case</kbd> Letters.</li>
                    <li>You can <kbd>Copy</kbd> Your Text after Converting it to Upper Case or Lower Case Letters.</li>
                    <li>This Page is also having functionality to Erease all the <kbd>Extra Spaces</kbd> from the Given Text</li>
                    <li>You will also be Given the Functionality to <kbd> toggle between </kbd> the Dark Mode and Light Mode.</li>
                </div>
            </div>
        </>
    )
}
