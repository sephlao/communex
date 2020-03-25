import React from "react";
import { render } from "react-dom";
import Header from "./components/header.js";
import InputField from './components/input-field.js';
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="app">
        <div className="message">
          <div className="user-info">
          <div className="user-img">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="username"
            />
          </div>
            <small className="user-name">John</small>
          </div>
          <p className="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            ratione officia pariatur voluptatibus perspiciatis provident, nam
            labore? Beatae quis harum illum, laboriosam natus sapiente
            blanditiis neque voluptate, obcaecati est distinctio?
          </p>
        </div>

        <div className="message">
          <div className="user-info">
          <div className="user-img">
            <img
              src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80"
              alt="username"
            />
          </div>
            <small className="user-name">Johnice</small>
          </div>
          <p className="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            ratione officia pariatur voluptatibus perspiciatis provident, nam
            labore? Beatae quis harum illum, laboriosam natus sapiente
            blanditiis neque voluptate, obcaecati est distinctio?
          </p>
        </div>

        <div className="message you">
          <div className="user-info">
          <div className="user-img">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="username"
            />
          </div>
            <small className="user-name">You</small>
          </div>
          <p className="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            ratione officia pariatur voluptatibus perspiciatis provident, nam
            labore? Beatae quis harum illum, laboriosam natus sapiente
            blanditiis neque voluptate, obcaecati est distinctio?
          </p>
        </div>
      </main>
      <InputField />
    </>
  );
};

render(<App />, document.getElementById("root"));
