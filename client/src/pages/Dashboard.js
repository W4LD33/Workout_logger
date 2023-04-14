import React from 'react';
import './styles/dashboard.css';

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="button-container">
        <button className="add-button" onClick={props.handleNewExerciseClick}>+</button>
      </div>
    </div>
  );
};

export default Dashboard;
