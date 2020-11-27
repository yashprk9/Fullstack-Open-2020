import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text,handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const positive = good * 100 / total

  return (
      <div>
          {
              total ?
              <table>
                  <tbody>
                      <Statistic text='Good' value={good} />
                      <Statistic text='Neutral' value={neutral} />
                      <Statistic text='Bad' value={bad} />
                      <Statistic text='All' value={total} />
                        <Statistic text="Average" value={average} />
                      <Statistic text="Positive" value={positive + "%"} /> 
                  </tbody>
              </table>
              :
              <p>No feedback given.</p>
          }
      </div>
  )
}

const App = () => {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

return (
  <div>
    <h1>Give Feedback</h1>
    <Button text='Good' handleClick={() => setGood(good + 1)} />
    <Button text='Neutral' handleClick={() => setNeutral(neutral + 1)} />
    <Button text='Bad' handleClick={() => setBad(bad + 1)} />
    
    <h1>Statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} />
  </div>
)
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)