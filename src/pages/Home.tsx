import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { getPosts } from '../services/postsService';
import type { Post } from '../data/posts';

export default function Home() {
  const [recent, setRecent] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((list) => setRecent(list.slice(0, 3)));
  }, []);

  return (
    <div className="container">
      <section className="hero">
        <h1>생성형 AI와 글쓰기</h1>
        <p className="lead">생성형 AI를 글쓰기에 활용하는 방법, 확인할 점, 수업 사례를 정리해 공유합니다.</p>
      </section>
      <section aria-labelledby="recent-heading">
        <h2 id="recent-heading">최근 글</h2>
        <div className="card-list">
          {recent.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <p className="center">
          <Link to="/posts" className="btn">글 보러 가기</Link>
        </p>
      </section>
    </div>
  );
}
