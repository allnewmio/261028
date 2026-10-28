import { posts, type Post } from '../data/posts';

// 화면은 글 데이터를 이 파일의 함수로만 가져온다.
// 다음 단계에서 이 파일만 Firestore 호출로 교체한다.

export async function getPosts(): Promise<Post[]> {
  // 최신 글이 먼저 오도록 날짜 내림차순 정렬
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find((post) => post.id === id);
}
