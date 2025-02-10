import React, { useState } from "react";

const Operator = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleAdd() {
    if (name && email) {
      setData([...data, { id: data.length + 1, name, email }]);
      setName("");
      setEmail("");
    } else {
      alert("Please fill in both fields.");
    }
  }

  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAdd}>Add Name</button>
      <table className="Table">
        <thead className="head">
          <tr>
            <th className="data">Id</th>
            <th className="data">Name</th>
            <th className="data">Email</th>
            <th className="data">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="data">{item.id}</td>
              <td className="data">{item.name}</td>
              <td className="data">{item.email}</td>
              <td className="data">
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Operator;
