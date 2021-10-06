import styles from '../styles/Post.module.css';

export default function Post({ post }) {
  const { title, content, createdAt } = post;
  return (
    <div className={styles.card}>
      <h2 className="title">{title}</h2>
      <p className="title">{content}</p>
      <div className="title">{createdAt}</div>
    </div>
  );
}
