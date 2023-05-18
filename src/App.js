import logo from './logo.jpg';
import './App.css';
import Question from './Question.js'
import Answer from './Answer.js'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://q2ajp06ktk.execute-api.us-east-2.amazonaws.com/default/learnSomething');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);
  
  
  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center">Learn Something</h1>
          {data}
        </div>
      </div>
      <div class="row">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-auto">
               <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <Question/>
          <Answer/>
          <div>
            <button class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
