import { MyElement } from "shared-ui";
import * as React from "react";
import { createComponent } from "@lit/react";

import "./App.css";

export const MyElementComponent = createComponent({
  tagName: "my-element",
  elementClass: MyElement,
  react: React,
  events: {
    onactivate: "activate",
    onchange: "change",
  },
});

function App() {
  return (
    <>
      <MyElementComponent docsHint="123" />
    </>
  );
}

export default App;
