import './App.css';
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import DataSet from './data'
function App() {
  const Cards = DataSet.map(item => {
    return (
      <Card
        key={item.id}
        {...item} 
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {Cards}
      </section>
    </div>
  );
}

export default App;
