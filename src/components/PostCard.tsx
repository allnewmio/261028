import { Link } from 'react-router-dom';
import type { Post } from '../data/posts';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="card">
      <p className="meta">
        <span className="tag">{post.category}</span>
        <time dateTime={post.date}>{post.date}</time>
      </p>
      <h3 className="card-title">
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <p className="card-summary">{post.summary}</p>
    </article>
  );
}
