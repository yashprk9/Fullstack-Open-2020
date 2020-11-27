import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const App = ({anecdotes}) => {
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
    
    const handleVote = () => {
      const newVotes = [...votes]
      newVotes[selected] = newVotes[selected] + 1 
      setVotes(newVotes)
    }

    const handleNextAnecdote = () => {
      setSelected(Math.floor(Math.random() * props.anecdotes.length))
    }
  
      const maxVoted = () => votes.indexOf(Math.max(...votes));
      
      return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <button onClick={handleVote}>Vote</button>
            <button onClick={handleNextAnecdote}>Next Anecdote</button>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[maxVoted()]}</p>
            <p>has {votes[maxVoted()]} votes</p>
        </div>
    );
};
