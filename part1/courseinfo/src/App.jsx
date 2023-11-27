import React from 'react';

// Header component
const Header = ({ course }) => {
  console.log(course); // Debugging: Log course to the console
  return <h1>{course.name}</h1>;
};

// Part component
const Part = ({ part }) => {
  console.log(part); // Debugging: Log part to the console
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

// Content component
const Content = ({ course }) => {
  console.log(course); // Debugging: Log course to the console
  return (
    <div>
      {course.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

// Total component
const Total = ({ course }) => {
  console.log(course); // Debugging: Log course to the console
  const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <p><strong>Total exercises: {totalExercises}</strong></p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;