import React from 'react'

export default function DisplayLanguage(props) {
    return (
        <>
            {
                props.langs.map(
                    function(temp, i) {
                        return  <li key={i}>{temp}</li>
                    }
                )
            }
        </>
    )
}

