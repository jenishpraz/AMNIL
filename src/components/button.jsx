

const Button = ({ buttonText, variant, onClick }) => {
  const styles = {
    base: {
      padding: "8px 16px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      marginRight: "8px" // optional spacing between buttons
    },
    primary: { 
      backgroundColor: "#007bff", color: "white"
     },
    secondary: { 
      backgroundColor: "#6c757d", color: "white"
     }
  };

  const appliedStyle = {
    ...styles.base,
    ...(variant === "secondary" ? styles.secondary : styles.primary)
  };

  return (
    <button style={appliedStyle} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
