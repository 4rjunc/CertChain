import React, { useState } from "react";
import Login from "./Login";
import Student from "./Student";

const Home = ({ onSubmit }) => {
  const [showStudentForm, setShowStudentForm] = useState(false);

  const handleShowStudentForm = () => {
    setShowStudentForm(true);
  };

  const handleSwitchToAdmin = () => {
    setShowStudentForm(false);
  };

  return (
    <div className="px-1">
      <div>
        {showStudentForm ? <Student onSwitchToAdmin={handleSwitchToAdmin} /> : <Login onShowStudentForm={handleShowStudentForm} onSubmit={onSubmit} />}
      </div>
    </div>
  );
};

export default Home;