import "./App.css";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { Button } from "./components/ui/button.tsx";

function App() {
  return (
    <>
    
    <Hero />
    <Button variant="outline">Click me</Button>
    <Header />
      <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl mb-4 text-center">
        Learn to integrate tailwind
      </h1>
      <div className="flex gap-4">
      <Card 
      title="Card 1" 
      buttonText="Buy Now" 
      imageUrl="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
      />
      <Card 
      title="Card 2" 
      buttonText="Buy Now" 
      imageUrl="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
      />
      <Card 
      title="Card 3" 
      buttonText="Buy Now" 
      imageUrl="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
      />
      </div> 
    </>
  )
}

export default App
