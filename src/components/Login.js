import React from 'react'
import { Input, Button, Icon } from 'semantic-ui-react'
import {Link} from '@reach/router'

export function Login() {
    return (
        <div style={ { margin: 40 } }>
            <Input placeholder='Username' />
            <br /><Link to="/quiz">
                <Button style={ { margin: 10 } } color='black' animated>
                    <Button.Content visible>Next</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </Link>
        </div>
    )
}