function App() {
  return React.createElement(
    "div",
    {
      id: "divHai",
    },
    [heading, list, paragraph]
  );
}

const paragraph = React.createElement(
  "p",
  {
    class: "paraHai",
  },
  "Paragraph"
);

const heading = React.createElement(
  "h1",
  {
    class: "headingHai",
  },
  "Hello div, react"
);

const list = React.createElement(
  "li",
  {
    class: "listHai",
  },
  "Milk"
);

// JSX -> HTML LIKE SYNTAX

// function App() {
//   return Heading();
// }

// // Babel transpiler

// Bundler -> Vite, Parcel, Webpack, RollUp

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(App());
