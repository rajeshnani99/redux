import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();




// products: [
//   {
//     id: 1,
//     title: "Tshirt",
//     description: "best queality ever, pure cotton",
//     price: "2000",
//     offer: "1200",
//     image:
//       "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     id: 2,
//     title: "shirt",
//     description: "best queality ever, pure cotton",
//     price: "3000",
//     offer: "2000",
//     image:
//       "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     id: 3,
//     title: "Slim Fit Jeans",
//     description: "best queality ever, very comfortable",
//     price: "2500",
//     offer: "1500",
//     image:
//       "https://n1.sdlcdn.com/imgs/i/7/p/Cliths-Brown-Slim-Jeans-SDL261336682-1-0f59c.jpg",
//   },
// ],