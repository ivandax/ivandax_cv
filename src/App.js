import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/Home";
import ErrorPage from "./views/ErrorPage";
import Content from "./views/Content";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBH6Eixd4YI9Pd-KJHczujVqSp1DFM2i3o",
  authDomain: "ivandax-cv.firebaseapp.com",
  projectId: "ivandax-cv",
  storageBucket: "ivandax-cv.appspot.com",
  messagingSenderId: "349019642640",
  appId: "1:349019642640:web:07da3c46304b302038a395",
  measurementId: "G-X6NGRCE119",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/content",
    element: <Content />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
