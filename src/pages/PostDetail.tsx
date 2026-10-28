import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { Post } from '../data/posts';
import { getPostById } from '../services/postsService';

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPostById(id ?? '').then((found) => {
      setPost(found);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div className="container narrow"><p>불러오는 중입니다.</p></div>;

  if (!post) {
    return (
      <div className="container narrow">
        <h1>글을 찾을 수 없습니다</h1>
        <p>주소가 잘못되었거나 삭제된 글입니다.</p>
        <p><Link to="/posts" className="btn">목록으로</Link></p>
      </div>
    );
  }

  return (
    <article className="container narrow">
      <header>
        <p className="meta">
          <span className="tag">{post.category}</span>
          <time dateTime={post.date}>{post.date}</time>
        </p>
        <h1>{post.title}</h1>
      </header>
      <div className="prose">
        {post.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
      <p><Link to="/posts" className="back-link">← 목록으로</Link></p>
    </article>
  );
}
