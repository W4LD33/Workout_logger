import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import NewExercise from './pages/NewExercise';
import Header from './components/Header';
import './App.css';

function App() {

  const getExercises = async () => {
    const exerciseName = 'Pull-up'
    try {
      const response = await fetch(`http://localhost:8000/exercises/${exerciseName}`)
      const json = await response.json()
    } catch (err){
      console.log(err)
    }
  }

  useEffect(() => getExercises, [])

  const [showNewExercise, setShowNewExercise] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);

  const handleNewExerciseClick = () => {
    setShowNewExercise(true);
  }

  const handleLogoClick = () => {
    setShowNewExercise(false);
    setShowDashboard(true);
  }

  return (
    <div className="App">
      <Header handleLogoClick={handleLogoClick} />
      {!showNewExercise && <Dashboard handleNewExerciseClick={handleNewExerciseClick}/> || <NewExercise/>}
    </div>
  )
}

export default App;
