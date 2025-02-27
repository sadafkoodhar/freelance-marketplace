import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProjectCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    skills: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects', {
        ...formData,
        skills: formData.skills.split(',').map(skill => skill.trim())
      });
      navigate('/projects');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="create-project">
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
        <textarea
          placeholder="Project Description"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
        <input
          type="number"
          placeholder="Budget"
          value={formData.budget}
          onChange={(e) => setFormData({...formData, budget: e.target.value})}
        />
        <input
          type="text"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={(e) => setFormData({...formData, skills: e.target.value})}
        />
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default ProjectCreate; 