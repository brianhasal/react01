/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

import React from "react";
import ReactDOM from "react-dom";

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" width="40px" />
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      <footer>© 2022 Hasal development. All rights reserved.</footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));

// /**
// Challenge:

// Part 1: Create a page of your own using a custom Page component

// It should return an ordered list with the reasons why you're
// excited to be learning React :)

// Render your list to the page

//  */

// import React from "react";
// import ReactDOM from "react-dom";

// function TemporaryName() {
//   return (
//     <div>
//       <ol>
//         <li>Its next</li>
//         <li>Its fun</li>
//         <li>Its fast</li>
//         <li>Its here</li>
//       </ol>
//     </div>
//   );
// }

// ReactDOM.render(<TemporaryName />, document.getElementById("root"));

// /*
// Challenge: Starting from scratch, build and render the
// HTML for our section project. Check the Google slide for
// what you're trying to build.

// We'll be adding styling to it later.

// Hints:
// * The React logo is a file in the project tree, so you can
//   access it by using `src="./react-logo.png" in your image
//   element
// * You can also set the `width` attribute of the image element
//   just like in HTML. In the slide, I have it set to 40px
//  */

// import React from "react";
// import ReactDOM from "react-dom";

// const page = (
//   <div>
//     <img src="./react-logo.png" width="40px"></img>
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on gitHub</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

// ReactDOM.render(page, document.getElementById("root"));

// import React from "react"
// import ReactDOM from "react-dom"

// /**
// Challenge: fix our code!

// Don't forget, you're not using CDNs anymore, so there's no
// global "ReactDOM" variable to use anymore.
//  */

// const page = (
//     <div>
//         <h1>My awesome website in React</h1>
//         <h3>Reasons I love React</h3>
//         <ol>
//             <li>It's composable</li>
//             <li>It's declarative</li>
//             <li>It's a hireable skill</li>
//             <li>It's actively maintained by skilled people</li>
//         </ol>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))

// import React from "react"

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// const newPage = (
//   <div className="root">
//       <h1>Hello</h1>
//       <p>Things in a paragraph</p>
//       <h2>Sub Title</h2>
//       <p>Things in a paragraph</p>
//   </div>
// )

// document.getElementById("root").append(JSON.stringify(newPage))

// // If I remove the CDNs in index.html, I have to import React and ReactDOM here
// import React from "react"
// import ReactDOM from "react-dom"

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

// const navbar = (
//   <nav>
//     <h1>Chewbacca Enterprises</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// )

// ReactDOM.render(navbar, document.getElementById("root"));

// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// const h1 = document.createElement("h1")
// h1.textContent = "This is the imperative way of coding"
// h1.className = "header"
// document.getElementById("root").append(h1)

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         Navbar
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">
//               Home <span className="sr-only">(current)</span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Link
//             </a>
//           </li>
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="navbarDropdown"
//               role="button"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Dropdown
//             </a>
//             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//               <div className="dropdown-divider"></div>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </div>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link disabled" href="#">
//               Disabled
//             </a>
//           </li>
//         </ul>
//         <form className="form-inline my-2 my-lg-0">
//           <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
//             Search
//           </button>
//         </form>
//       </div>
//     </nav>
//   );
// }

// function MainContent() {
//   return (
//     <div>
//       <h1>Hello butthead!</h1>
//     </div>
//   );
// }

// // Challenge: Create your own custom React component!
// // Call it "MainContent", and have it return a simple
// // h1 element that says "I'm learning React!"

// // Afterward, render it below the Navbar (which
// // you can do inside the ReactDOM.render call below)

// ReactDOM.render(
//   <div>
//       <Navbar />
//       <MainContent />
//   </div>,
//   document.getElementById("root"));
