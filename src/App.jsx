
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const handleSubmit = () => {
    alert("Submit button clicked!"); // for testing
  };

  const handleCancel = () => {
    alert("Cancel button clicked!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Custom Input & Button Example</h2>

      <Input label="Username" placeholder="Enter username" />
      <Input placeholder="No label input" />

      <Button buttonText="Submit" variant="primary" onClick={handleSubmit} />
      <Button buttonText="Cancel" variant="secondary" onClick={handleCancel} />
    </div>
  );
}

export default App;
