import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="Varun" decription="Full Stack Developer" />
        <Card title="Varun" decription="Video Editor" />
        <Card title="Varun" decription="Just a Man" />
        <Card title="Varun" decription="Programmer" />
      </div>
      <Footer/>
    </>
  )
}

export default App
