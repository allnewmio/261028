import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { CATEGORIES, type Category, type Post } from '../data/posts';
import { getPosts } from '../services/postsService';

type Filter = '전체' | Category;
const FILTERS: Filter[] = ['전체', ...CATEGORIES];

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState<Filter>('전체');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  const keyword = query.trim().toLowerCase();
  const visible = posts.filter(
    (p) =>
      (filter === '전체' || p.category === filter) &&
      (keyword === '' || p.title.toLowerCase().includes(keyword)),
  );

  return (
    <div className="container">
      <h1>글</h1>
      <div className="toolbar">
        <div className="filters" role="group" aria-label="카테고리 필터">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`chip${filter === f ? ' active' : ''}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <label className="search">
          <span className="sr-only">제목 검색</span>
          <input
            type="search"
            placeholder="제목으로 검색"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <p className="count" aria-live="polite">{visible.length}개의 글</p>
      {visible.length === 0 ? (
        <p className="empty">조건에 맞는 글이 없습니다.</p>
      ) : (
        <div className="card-list">
          {visible.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
