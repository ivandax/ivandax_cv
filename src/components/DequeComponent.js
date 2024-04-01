import { Deque } from "../utils/algorithms/deque";
import { useState } from "react";
import { deepCopy } from "../utils/deepCopy";

function DequeComponent() {
  const newDeque = new Deque();
  const [deque, setDeque] = useState(newDeque);

  const handleAddAtStart = () => {
    const copy = deepCopy(deque);
    const length = copy.toArray().length + 1;
    copy.addFirst(length);
    setDeque(copy);
  };

  return (
    <div style={{ padding: "10px", width: "100%", display: "flex" }}>
      <div style={{ width: "50%" }}>
        <p style={{ wordWrap: "break-word" }}>
          The Deque is a data structure like a queue where we can:
        </p>
        <ul>
          <li>Add item at the start</li>
          <li>Add item at the end</li>
          <li>Remove item from the start</li>
          <li>Remove item from the end</li>
        </ul>
        <p style={{ wordWrap: "break-word" }}>
          This UI aims to show us how the deque works dynamically, showing the
          inner state of the data structure.
        </p>
      </div>
      <div style={{ width: "50%" }}>
        <div style={{ display: "flex" }}>
          <button onClick={handleAddAtStart}>Add at start</button>
        </div>
        <div>
          {deque.toArray().length === 0 ? (
            <span>No items yet</span>
          ) : (
            <div style={{ display: "flex", padding: "4px" }}>
              {deque.toArray().map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      padding: "4px",
                      border: "1px solid black",
                      borderRadius: "4px",
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { DequeComponent };
