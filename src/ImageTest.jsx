import React, { useState } from "react";

const ImageTest = () => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    alert(`Your answer: ${answer}`);
  };

  return (
    <div>
      <h2>Psychological Image Test</h2>
      <img
        src="https://your-image-url.com/test-image.jpg"
        alt="Psychology Test"
        style={{ width: "300px", height: "auto" }}
      />
      <p>What do you see in the image?</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer..."
      />
      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
};

export default ImageTest;
