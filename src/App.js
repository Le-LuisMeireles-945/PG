import './App.css';
import EmailGrid from './EmailGrid';
// import EmailGrid from './EmailGrid';

function App() {
  return (
    <>
    {
      EmailGrid.map(email =>{
        return(
          <div className='box'>
            {email.title}
          </div>
        )
      })
    }
    </>
  );
}

export default App;
