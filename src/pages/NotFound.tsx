import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container narrow">
      <h1>페이지를 찾을 수 없습니다</h1>
      <p>주소가 잘못되었거나 없어진 페이지입니다.</p>
      <p><Link to="/" className="btn">홈으로</Link></p>
    </div>
  );
}
