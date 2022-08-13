// NEW REACTDOM FORMATTING FOR REACT 18

import React from "react"
import ReactDOM from "react-dom/client"

// MOST OFTEN SEEN
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)

// THE OLD WAY
// ReactDOM.render(navbar, document.getElementById("root"))

// ESSENTIALLY, THE NEW WAY
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)