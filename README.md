# 독서 모임 커뮤니티

## Getting Started

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 애플리케이션 실행을 확인할 수 있습니다.

## 프로젝트 기능 상세

- [ ] 회원 가입
- [ ] 로그인
- [ ] 독서 게시글 CRUD
      (독후감, 토론 발제, 인상깊은 구절)
- [ ] 게시글에 대한 댓글 CRUD
- [ ] 마이페이지
- [ ] 도서 검색

## 구현 스택

- [x] TypeScript
- [x] Next.js(14)
- [x] Prisma
- [x] Supabase
- [x] TailwindCSS
- [x] Shadcn
- [x] Next-Auth(v5)

## 프로젝트 기술 상세

- [ ] 모든 서버 통신은 API(Route Handler) 대신, SSR 또는 Server Action 이용
- [ ] 클라이언트 컴포넌트(use client) 범위 최소화. page.tsx에는 use client 사용 금지
- [ ] 회원이 아닌 경우, 게시글 목록은 볼 수 있지만 게시글의 상세 내용 확인은 불가
