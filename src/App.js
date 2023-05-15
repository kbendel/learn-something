import logo from './logo.jpg';
import './App.css';
import Question from './Question.js'
import Answer from './Answer.js'

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center">Learn Something</h1>
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
