import vector from './assets/vector.png'
import number from './assets/number.png'
import circle from './assets/circle.png'
import './App.css'

function App() {
  return (
    <>
      <div className='frame137'>
        <div className='item'>
          <img className='vector' src={vector} alt="sign up" />
          <span>Sign up</span>        
        </div>
        <div className='item'>
          <img className='vector' src={vector} alt="verify email" />
          <span>Verify Email</span>
        </div>
        <div className='items'>
          <img className='number' src={number} alt="upload credentials" />
          <span>Upload Credentials</span>
        </div>
      </div>

      <div className="frame139">
        <p>Take a passport photograph</p>
      </div>

      <div className="frame140">
        <img src={circle} alt="circle" />
      </div>

      <div className='button'>
        <button>Next</button>
      </div>
    </>
  )
}

export default App
