import styles from "../styles/post.module.css";
import { Comment } from "./Comment";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.Header}>
        <div className={styles.boxAvatarPost}>
          <img
            src="https://images.unsplash.com/photo-1600267185393-e158a98703de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50"
            alt=""
          />
          <ul>
            <li>
              <p>Caroli M.</p>
            </li>
            <li>Dev Front End.</li>
          </ul>
        </div>
        <time title="11 de Maio ás 09:20">Públicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala Galera 👏</p>
        <p>
          Acabei de subir mais um projeto no meu portfolio. Èum projeto que fiz
          no NLW , evento da Rocktseat. O nome e projeto
        </p>
        <p>
          <a href="#">jane.desing/projeto</a>
        </p>
        <p>
          <a href="#">#novoprojeto #nlw #rocktseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="deixe seu comentario" />
        <div>
          <button type="submit">Comentar</button>
        </div>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
