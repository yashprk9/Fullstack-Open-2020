import React from 'react'

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
        <div>
        {course.parts.map((part) => <Part part={part}/>)}
        </div>
    )
}

export default function Course({course}) {
    return(
        <div>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
        </div>
    )
}