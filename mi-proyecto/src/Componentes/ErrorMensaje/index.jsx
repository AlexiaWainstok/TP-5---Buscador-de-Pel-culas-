export default function ErrorMessage({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="error-container">
      <div className="error-header">
        <span>[!] SYSTEM_FAILURE</span>
        <button onClick={onClose} className="error-close">X</button>
      </div>
      <div className="error-body">
        <p>{message}</p>
      </div>
    </div>
  );
}