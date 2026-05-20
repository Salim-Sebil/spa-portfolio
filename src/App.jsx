import React, { useState } from "react";
import Header from "./components/Header";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "SPA Project",
      description: "Single Page Application project built with React",
    },
    {
      id: 2,
      title: "Plantshop",
      description: "E-commerce website for selling plants",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio website built with React",
    },
  ]);

  const [search, setSearch] = useState("");

  // adding a new project
  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  // filtering projects based on search query
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      <AddProjectForm addProject={addProject} />

      <div className="projects-section">
        <SearchBar search={search} setSearch={setSearch} />

        <ProjectList projects={filteredProjects} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;