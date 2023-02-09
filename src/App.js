import './App.css';
import MultiStepForm from './MultiPage';
import SignupForm from './Registraion';
function App() {
  return (
    <div className='App'>
      <SignupForm></SignupForm>
      {/* მრავალგვერდიანი ფორმის სანახავად გაუშვით მეორე კონპონენტი  */}
      {/* <MultiStepFom></MultiStepFom> */}
    </div>
    );
   
   
}

export default App;