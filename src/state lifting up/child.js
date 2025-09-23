// Child.js
function Child({ onSend }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => onSend(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}

export default Child;
