import React, { useState } from "react";
import { FloatingButton } from "react-floating-button";

const App: React.FC = () => {
  const [message, setMessage] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Signup Page</h1>
      <input type="text" placeholder="Enter your email" style={{ padding: "10px", width: "200px" }} />
      <br />
      <button style={{ marginTop: "10px", padding: "10px 20px", cursor: "pointer" }}>Sign Up</button>
      <FloatingButton label="Help" onClick={() => setMessage("Need help? Contact support!")} />
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
