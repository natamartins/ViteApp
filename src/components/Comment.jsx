import { ThumbsUp, Trash } from "phosphor-react";
import styles from "../styles/comment.module.css";

export function Comment() {
  return (
    <>
      <section className={styles.comment}>
        <img src="https://github.com/natamartins.png" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <div className={styles.author}>
              <strong>Devon(você)</strong>
              <time title="09 de junho ás 10:09">Cerca de 1h átraz</time>
              <p>Muito Obrigado Devon, parabéns</p>
            </div>
            <button title="Deletar Comntario">
              <Trash size={24} />
            </button>
          </div>
          <div className={styles.boxButtonComment}>
            <button>
              <ThumbsUp size={20} />
              Aplaudir <span>20</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
