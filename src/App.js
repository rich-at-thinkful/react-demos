import RegistrationForm from './RegistrationForm';
import './App.css';

function App() {
  return (
    <div className="App container px-3">
      <div className="row my-3">
        <div className="col-sm-2 col-lg-3" />
        <div className="col-sm-8 col-lg-6">
          <h2>Registration</h2>
          <RegistrationForm />
        </div>
        <div className="col-sm-2 col-lg-3" />
      </div>
    </div>
  );
}

export default App;
