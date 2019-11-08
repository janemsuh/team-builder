import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Members from './Components/Team/Team';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {name: 'Jane', email: 'jane@lambda.com', role: 'Web developer'},
    {name: 'John', email: 'john@lambda.com', role: 'Security analyst'},
    {name: 'Alison', email: 'alison@lambda.com', role: 'Project manager'}
  ]);

  const addTeamMember = (teamMember) => {
    const newTeamMember = setTeamMembers([ ...teamMembers, teamMember]);
  };
  // console.log(teamMembers);
  return (
    <div className="App">
      <h1>Build Your Team</h1>
      <Form addTeamMember={addTeamMember} />
      <Members member={teamMembers} />
    </div>
  );
  // console.log(teamMembers);
}

export default App;
