import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/LoginPage";
import firebase from "firebase/compat/app";

const config = {
  apiKey: "AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM",
  authDomain: "myproject-1234.firebaseapp.com",
  // ...
};

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
