import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="site-name">생성형 AI와 글쓰기</Link>
        <nav aria-label="주 메뉴" className="nav">
          <NavLink to="/" end>홈</NavLink>
          <NavLink to="/posts">글</NavLink>
          <NavLink to="/board">게시판</NavLink>
          <NavLink to="/about">소개</NavLink>
        </nav>
        {user ? (
          <button type="button" className="btn btn-small" onClick={signOut}>로그아웃</button>
        ) : (
          // 이번 단계에서는 비활성 상태. 마우스를 올리면 "준비 중" 표시
          <span className="login-wrap" title="준비 중">
            <button type="button" className="btn btn-small" disabled aria-describedby="login-tip">
              로그인
            </button>
            <span id="login-tip" role="tooltip" className="tooltip">준비 중</span>
          </span>
        )}
      </div>
    </header>
  );
}
