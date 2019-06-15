import React, { useState } from 'react'
import {Question} from './Question'
import { Tab, List, Label } from 'semantic-ui-react'
import { Link } from '@reach/router'

export function QuizUp() {
  const [questions, setQuestion] = useState([])
  
  const panes = questions.map((question,i) => 
    {
    return (
      {
        menuItem: `${i}`,
      pane: (
        <Tab.Pane key='tab4'>
          <Question question={question} />
        </Tab.Pane>
      )
    })
    })
  function handleChange(e, data) { return setQuestion(2) }

  return (
    <div>
      <Tab panes={panes} renderActiveOnly={false} />
    </div>
  )
}