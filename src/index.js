import React from "react";
import { render } from "react-dom";
import Header from "./components/header.js";
import InputField from "./components/input-field.js";
import "./index.css";

const Message = ({ sender, imgUrl, message }) => {
  return (
    <div className={'message ' + (sender == 'You' ? 'you' : '')}>
      <div className="user-info">
        <div className="user-img">
          <img src={imgUrl} alt={sender} />
        </div>
        <small className="user-name">{sender}</small>
      </div>
      <p className="content">{message}</p>
    </div>
  );
};

const App = () => {
  const messages = [
    {
      sender: "Joseph",
      imgUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
      ratione officia pariatur voluptatibus perspiciatis provident, nam
      labore? Beatae quis harum illum, laboriosam natus sapiente
      blanditiis neque voluptate, obcaecati est distinctio?`
    },
    {
      sender: "Venice",
      imgUrl:
        "https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80",
      message: `Lorem ipsum dolor. Voluptas
      ratione officia pariatur voluptatibus perspiciatis provident, nam
      labore? Beatae quis harum illum, laboriosam natus sapiente
      blanditiis neque voluptate`
    },
    {
      sender: "Venice",
      imgUrl:
        "https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80",
      message: `Voluptas
      ratione officia pariatur voluptatibus perspiciatis provident, nam
      labore? Beatae quis harum illum?`
    },
    {
      sender: "You", // will serve as indicator for now
      imgUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem, nihil minima velit enim veniam ipsa vel maxime, totam quam ut officiis expedita? Ab, repellendus. Aut voluptatum officiis fuga veniam.`
    }
  ];
  return (
    <>
      <Header />
      <main className="app">
        {messages.map((m, i) => <Message key={i.toString()} {...m}/>)}
      </main>
      <InputField />
    </>
  );
};

render(<App />, document.getElementById("root"));
