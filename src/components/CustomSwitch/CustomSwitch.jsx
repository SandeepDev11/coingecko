import React, { useState } from "react";
import { Form } from "react-bootstrap";

const CustomSwitch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label={checked ? "Enabled" : "Disabled"}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </Form>
  );
};

export default CustomSwitch;
