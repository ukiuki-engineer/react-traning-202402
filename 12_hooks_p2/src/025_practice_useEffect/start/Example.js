import { useState, useEffect } from "react";

const Example = () => {
  const [checked, setChecked] = useState(false);

  useEffect(
    () => {
      checked && window.alert("checked");
      console.log(checked);
    },
    [checked] // NOTE: ここに入れたstateが変化したら呼ばれる
  );

  return (
    <label>
      <input
        type={"checkbox"}
        value={checked}
        onClick={() => setChecked((checked) => !checked)}
      />
      click me
    </label>
  );
};

export default Example;
