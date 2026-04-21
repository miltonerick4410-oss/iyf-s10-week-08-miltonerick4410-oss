// src/components/PostCard.jsx

function PostCard({ title, excerpt, author, date }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <small>
        By {author} | {date}
      </small>
    </div>
  );
}

export default PostCard;