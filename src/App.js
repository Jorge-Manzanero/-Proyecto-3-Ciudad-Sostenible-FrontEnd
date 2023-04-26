import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { NewPostPage } from "./pages/NewPostPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PostPage } from "./pages/PostPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/post" element={<NewPostPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
