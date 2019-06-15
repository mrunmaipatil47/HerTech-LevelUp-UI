import React from 'react'
import { Card, Image, Icon, List } from 'semantic-ui-react'
import { Link } from '@reach/router'
import topic_cover from '../images/topic_science.png'

export function Dashboard() {
    return (
        <div style={ { margin: 60 } }>

            <Card>
                <Image src={ topic_cover } wrapped ui={ false } />
                <Card.Content>
                    <Card.Header>The Human Body</Card.Header>
                    <Card.Meta>Class V - Science</Card.Meta>
                    <Card.Description>
                        <List bulleted>
                            <List.Item>Our Body</List.Item>
                            <List.Item>Cells</List.Item>
                            <List.Item>Types of Cells</List.Item>
                            <List.Item>Tissues</List.Item>
                            <List.Item>Organs</List.Item>
                        </List>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Link to='/quiz'>
                        <Icon name='arrow alternate circle right' />
                        Start Quiz
      </Link>
                </Card.Content>
            </Card>
        </div>
    )
}