
import "./App.css";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="center">
      <Header />

      <main>
        <h2>Posts</h2>

        <PostCard
          title="Learning React"
          excerpt="React makes UI easy"
          author="Milton"
          date="2026"
        />

        <PostCard
          title="JavaScript Basics"
          excerpt="JS is powerful"
          author="Milton"
          date="2026"
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;