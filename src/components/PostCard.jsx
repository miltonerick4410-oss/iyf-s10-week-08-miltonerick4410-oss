
export default function PostCard({ title, excerpt, author, date }) {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <small>{author} • {date}</small>
    </div>
  );
}