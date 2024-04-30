import React, { useState } from 'react';


const UserForm = () => {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    mobilenumber: '',
    qualification: 'qualification',
    message: '',
  });

  const handleChange = (e) => {
    // console.log(e);
    const newUser = {...user};
    newUser[e.target.name] = e.target.value;
    setUser(newUser);

  };

  const handleSubmit = () => {

    console.log('Form data submitted:', user);

  };

  return (
    <div style={{
      width: '500px',
      height: 'auto',
      backgroundColor: 'white',
      padding: '20px',
      margin: '0 auto',
      borderRadius: '20px',
      textAlign: 'center',
    }}>
      <h2>I'M INTERESTED IN THE PROGRAM</h2>
      <form>
        <input
          type="text"
          name="fullname"
          value={user.fullname}
          placeholder="Full Name"
          onChange={handleChange}
          style={{
            border: '2px solid black',
            width: '350px',
            padding: '10px',
            marginBottom: '10px',
          }}
        /><br/>

        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handleChange}
          style={{
            border: '2px solid black',
            width: '350px',
            padding: '10px',
            marginBottom: '10px',
          }}
        /><br/>

        <input
          type="text"
          name="mobilenumber"
          value={user.mobilenumber}
          placeholder="Mobile Number"
          onChange={handleChange}
          style={{
            border: '2px solid black',
            width: '350px',
            padding: '10px',
            marginBottom: '10px',
          }}
        /><br/>

        <select
          name="qualification"
          value={user.qualification}
          onChange={handleChange}
          style={{
            border: '2px solid black',
            width: '380px',
            padding: '10px',
            marginBottom: '10px',
          }}
        >
          <option value="qualification">Qualification</option>
          <option value="Btech">BTech</option>
          <option value="Degree">Degree</option>
          <option value="PG">PG</option>
        </select><br/>

        <input
          type="text"
          name="message"
          value={user.message}
          placeholder="Message"
          onChange={handleChange}
          style={{
            border: '2px solid black',
            width: '350px',
            padding: '10px',
          }}
        /><br/><br/>

        <button onClick={handleSubmit}
          type="button"
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px',
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default UserForm;
