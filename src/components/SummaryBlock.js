import React, { useState, useEffect}from 'react'
import {  Segment, Container} from 'semantic-ui-react'

export function SummaryBlock(props) {
const [text, setText] = useState("")
    useEffect(() => {
            fetch(props.link)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    return data.text
                })
            .then(text=> setText(text))
    }, [props.link, text])
    
    return (
        <div style={ { margin: 40 } }>
            <Segment>
                <Container>
                    <p>{ text }</p>
                </Container>
            </Segment>
            
        </div>
    )
}