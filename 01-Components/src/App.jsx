import Header from './Header'
import Footer from './Footer'
import Greeting from './Greeting'
function App(){
  return <>
    <Header />
    <Greeting name="Anmol" age={21} />
    <Greeting name="Alice" age={25} />
    <Greeting name="Bob" age={30} />
    <h1>Hello Anmol</h1>
    <p>Welcome to the First React Project</p>
    <Footer />
  </>
}

export default App;