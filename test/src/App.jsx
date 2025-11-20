import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.age && form.email) {
      setUsers([...users, form]);
      setForm({ name: "", age: "", email: "" });
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  const ageCategorie = {
    "0-20": 0,
    "21-40": 0,
    "41-60": 0,
    "61+": 0,
  };

  users.forEach((user) => {
    const age = parseInt(user.age);
    if (age <= 20) {
  ageCategorie["0-20"] = ageCategorie["0-20"] + 1;
}
if (age > 20 && age <= 40) {
  ageCategorie["21-40"] = ageCategorie["21-40"] + 1;
}
if (age > 40 && age <= 60) {
  ageCategorie["41-60"] = ageCategorie["41-60"] + 1;
}
if (age > 60) {
  ageCategorie["61+"] = ageCategorie["61+"] + 1;
}

  });

  return (
    <div className="dashboard">
      <h1>Dashboard Utilisateur</h1>

      <form onSubmit={handleSubmit} className="user-form">
        <input type="text" name="name" placeholder="Nom" value={form.name} onChange={handleChange}/>
        <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange}/>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange}/>
        <button type="submit">Ajouter</button>
      </form>

      {users.length > 0 && (
        <>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bar-chart">
            {Object.keys(ageCategorie).map((catego, index) => (
              <div key={index} className="bar-container">
                <div
                  className="bar"
                  style={{ height: `${ageCategorie[catego] * 20}px` }}
                  title={`${ageCategorie[catego]} users`}
                ></div>
                <span>{catego}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
