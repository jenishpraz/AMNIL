
const Input = ({ placeholder, label }) => {
  const inputId = label ? label.replace(/\s+/g, "-").toLowerCase() : "input";

  return (
    <div style={{ marginBottom: "1rem" }}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        placeholder={placeholder}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "200px",
          display: "block",
          marginTop: label ? "4px" : "0"
        }}
      />
    </div>
  );
};

export default Input;