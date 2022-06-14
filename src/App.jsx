import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./Global.css";
import styles from "./styles/App.module.css";
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post/>
          <Post/>
        </main>
      </div>
    </>
  );
}
