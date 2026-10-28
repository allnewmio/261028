# 생성형 AI와 글쓰기

생성형 AI를 글쓰기에 활용하는 방법, 확인할 점, 수업 사례를 정리해 공유하는 정보·자료 사이트입니다.
Vite + React + TypeScript로 만든 정적 사이트이며, GitHub에 올려 Netlify에서 배포합니다.
이번 단계(MVP)에는 Firebase가 연결되어 있지 않습니다.

> **안내:** `src/data/posts.ts`에 들어 있는 5개 글은 **샘플 글**입니다. 제작자가 나중에 실제 글로 교체합니다.

## 1. 내 컴퓨터에서 실행하는 방법

1. [Node.js](https://nodejs.org) 20 이상(LTS)을 설치합니다. 설치 후 터미널에서 `node -v`를 입력해 버전을 확인합니다.
2. 터미널에서 이 프로젝트 폴더로 이동합니다.
3. 필요한 패키지를 설치합니다(처음 한 번만 합니다).
   ```bash
   npm install
   ```
4. 개발 서버를 실행합니다.
   ```bash
   npm run dev
   ```
5. 터미널에 나온 주소(보통 `http://localhost:5173`)를 브라우저에서 엽니다.
6. 끄려면 터미널에서 `Ctrl + C`를 누릅니다.
7. 배포용 파일이 잘 만들어지는지 확인하려면 다음을 실행합니다. 오류 없이 끝나면 정상입니다.
   ```bash
   npm run build
   ```

## 2. 글을 추가하거나 수정하는 방법

글은 모두 `src/data/posts.ts` 파일 한 곳에 있습니다.

1. `src/data/posts.ts`를 엽니다.
2. 글을 수정하려면 해당 글의 `title`(제목), `summary`(카드에 보이는 요약), `paragraphs`(본문 문단 목록)를 고칩니다. 문단 하나는 따옴표로 감싼 한 줄이며, 문단 사이에는 쉼표를 둡니다.
3. 글을 추가하려면 `posts` 배열 안의 글 하나(`{ ... },`)를 복사해 붙여 넣고 내용을 바꿉니다.
   - `id`: 주소에 쓰이는 영문 이름입니다. 글마다 달라야 합니다(예: `my-new-post`).
   - `date`: `2025-06-01`처럼 `연-월-일` 형식으로 씁니다. 날짜가 늦을수록 먼저 보입니다.
   - `category`: `'활용 가이드'`, `'확인할 점'`, `'수업 사례'` 중 하나만 쓸 수 있습니다.
4. 파일을 저장하면 `npm run dev` 화면에 바로 반영됩니다.
5. 글을 지우려면 해당 글의 `{ ... },` 전체를 삭제합니다.

## 3. GitHub에 올리는 방법

1. [GitHub](https://github.com)에 로그인하고 오른쪽 위 `+` → `New repository`를 눌러 빈 저장소를 만듭니다. README나 .gitignore 추가 항목은 **체크하지 않습니다**.
2. 만든 저장소 화면에 나온 주소(예: `https://github.com/내아이디/저장소이름.git`)를 복사합니다.
3. 터미널에서 프로젝트 폴더로 이동한 뒤 차례로 입력합니다. 이미 첫 커밋은 만들어져 있습니다.
   ```bash
   git remote add origin https://github.com/내아이디/저장소이름.git
   ```
   ```bash
   git branch -M main
   ```
   ```bash
   git push -u origin main
   ```
4. 이후 글을 고친 뒤에는 다음 세 줄로 다시 올립니다.
   ```bash
   git add .
   ```
   ```bash
   git commit -m "글 수정"
   ```
   ```bash
   git push
   ```

## 4. Netlify에서 GitHub 저장소를 연결해 배포하는 방법

1. [Netlify](https://www.netlify.com)에 가입하고 로그인합니다(GitHub 계정으로 가입하면 편합니다).
2. `Add new site` → `Import an existing project`를 선택합니다.
3. `GitHub`를 선택하고, 안내에 따라 Netlify의 저장소 접근을 허용한 뒤 위에서 만든 저장소를 고릅니다.
4. 빌드 설정은 `netlify.toml`에 들어 있으므로 그대로 둡니다(빌드 명령 `npm run build`, 게시 폴더 `dist`, Node 20).
5. `Deploy` 버튼을 누릅니다. 1~2분 뒤 `https://무작위이름.netlify.app` 주소가 생깁니다.
6. 주소를 바꾸려면 `Site configuration` → `Change site name`에서 원하는 이름을 입력합니다.
7. 이후 GitHub에 `git push`를 하면 Netlify가 자동으로 다시 배포합니다.
8. 주소창에서 `/posts` 같은 경로를 직접 열거나 새로고침해도 404가 나오지 않도록 `netlify.toml`에 리디렉션이 설정되어 있습니다.

## 폴더 구조

| 경로 | 역할 |
| --- | --- |
| `src/pages/` | 화면(홈, 글 목록, 글 상세, 소개, 게시판, 404) |
| `src/components/` | 공통 조각(헤더, 푸터, 글 카드) |
| `src/data/posts.ts` | 샘플 글과 글 형식(Post 타입) |
| `src/services/postsService.ts` | 글을 가져오는 함수. 화면은 글을 이 파일로만 가져옵니다 |
| `src/auth/AuthContext.tsx` | 로그인 껍데기. 지금은 항상 로그아웃 상태입니다 |
| `src/styles/global.css` | 전체 디자인(색상 변수 포함) |
| `netlify.toml` | Netlify 배포 설정 |
| `.env.example` | 다음 단계에서 쓸 Firebase 변수 이름(값은 비어 있음) |

## 다음 단계 Firebase 연동 원칙

- Spark(무료) 요금제 안에서 Authentication(구글 로그인)과 Firestore만 사용한다.
- Cloud Functions, Cloud Storage, Firebase Hosting과 유료 기능은 사용하지 않는다.
- 목록 조회에는 limit를 두고, 실시간 구독(onSnapshot)은 꼭 필요한 곳에만 쓴다.
- Firestore 보안 규칙을 작성하고, Firebase 콘솔의 승인된 도메인에 Netlify 주소를 추가한다.
- Firebase 설정값은 Netlify의 환경 변수에 입력한다.
