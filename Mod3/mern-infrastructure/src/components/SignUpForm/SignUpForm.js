import { useState } from "react";

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const disable = formData.password !== formData.confirm;

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        error: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required/>

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <label>Confirm Password</label>
          <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />

          <button type="submit" disabled={disable}>Sign Up</button>
        </form>
      </div>
      <p className="error-message">{formData.error}</p>
    </div>
  );
}

export default SignUpForm;
