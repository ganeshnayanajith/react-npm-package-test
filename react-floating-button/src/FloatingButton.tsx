import React from "react";

interface FloatingButtonProps {
  label: string;
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ label, onClick }) => {
  return (
    <button
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "50px",
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FloatingButton;
