import { useState } from "react";

function AddProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    addProject(newProject);

    setTitle("");
    setDescription("");
  };

  return (
    <section className="form-section">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <label>Title</label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br/>

        <label>Description</label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default AddProjectForm;