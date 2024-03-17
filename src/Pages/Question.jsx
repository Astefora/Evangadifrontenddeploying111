import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Pages/questin .modele.css.css";

function Question() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://geospatial.cyclic.app/api/question/createQuestion",
        {
          title: title,
          description: description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Question created:", response.data);

      setTitle("");
      setDescription("");
      setErrorMessage("");

      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating question:", error.message);
      setErrorMessage("Failed to create question. Please try again.");
    }
  };

  return (
    <div className="container">
      <section className="steps">
        <h1>Steps to Write a Good Question</h1>
        <ul>
          <li>Summarize your problem</li>
          <li>Describe your problem in more detail</li>
          <li>Describe what you tried and what you expected to happen</li>
          <li>Review your question</li>
        </ul>
      </section>
      <br />
      <br />
      <br />
      <h2>Ask a Public Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p style={{ textAlign: "center" }}>Go to question page</p> <br />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Question description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Post Your Question</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Question;
