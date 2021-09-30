import React, { useState } from "react";
import { Redirect } from "react-router";

const Admin = ({ name, lastname, email, setName, setLastname, setEmail }) => {
  const [name1, setName1] = useState("");
  const [lastname1, setLastname1] = useState("");
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/api/admin", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name1,
        lastname1,
        email1,
        password1,
      }),
    });
    /* setName(name1);
    setLastname(lastname1);
    setEmail(email1); */
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Name: <strong>{name}</strong>
        </li>
        <li className="list-group-item">
          Lastname: <strong>{lastname}</strong>
        </li>
        <li className="list-group-item">
          Email: <strong>{email}</strong>
        </li>
      </ul>
      <form onSubmit={submitHandler}>
        <h1 className="h3 mb-3 fw-normal">Edit personal information</h1>
        <h5 className="h5 mb-3 fw-normal">
          Input new informations you want to change
        </h5>
        <h5 className="h5 mb-3 fw-normal">
          **Change the fields you would like to edit. All fields must be filled.
          Password is requiered. If you want to set a new password, simply
          submit this form with new password!
        </h5>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            placeholder="New name"
            value={name}
            required
            onChange={(e) => setName1(e.target.value)}
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            placeholder="New lastname"
            value={lastname}
            required
            onChange={(e) => setLastname1(e.target.value)}
          />
          <label htmlFor="floatingInput">Lastname</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            value={email}
            required
            onChange={(e) => setEmail1(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            required
            onChange={(e) => setPassword1(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>{" "}
    </div>
  );
};

export default Admin;
