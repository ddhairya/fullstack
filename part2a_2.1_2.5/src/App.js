import React from 'react';
import './App.css';
import Course from './component/Course'

const App = ({course}) => {       
  return(
      <div>
          <Course course={course}/>
      </div>
  )
}
export default App;
