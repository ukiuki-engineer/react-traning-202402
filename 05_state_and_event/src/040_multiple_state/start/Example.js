import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>ボタンを{count}回押しました！</p>
      <button onClick={() => setCount(count + 1)}>ボタン</button>
    </>
  );
};

export default Example;
