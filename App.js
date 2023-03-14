import React from "react";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import MovieContexProvider from "./src/context/MovieContex";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <MovieContexProvider>
        <AppRouter />
        <ToestContainer/>
        </MovieContexProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
