# 개인 소개 웹사이트 · vibe_me_archplot

장정현의 소개와 외부 프로필·연락처를 한 페이지로 보여 주는 개인 웹사이트입니다.

[사이트 보기](https://introduce-junghyeon.netlify.app/) · [GitHub 프로필](https://github.com/JungHyeon-archplot)

## 구현한 내용

- HTML·CSS·JavaScript로 만든 자기소개 화면
- 모바일과 데스크톱에 맞춘 반응형 스타일
- 연락처 모달과 소셜 프로필 링크
- Open Graph 이미지, 사이트맵, robots.txt 등 검색·공유 설정
- 웹앱 매니페스트와 앱 아이콘
- Netlify 정적 사이트 배포

## 기술 스택

`HTML` `CSS` `JavaScript` `Netlify`

프레임워크나 별도 빌드 과정 없이 정적 파일로 구성했습니다.

## 로컬 확인

`index.html`을 브라우저에서 열거나, 사용하는 편집기의 정적 웹 서버로 프로젝트 루트를 열면 됩니다. 패키지 설치는 필요하지 않습니다.

## 구조

| 파일 | 역할 |
| --- | --- |
| `index.html` | 소개 화면과 메타데이터 |
| `style.css` | 레이아웃·반응형 스타일 |
| `script.js` | 연락처 모달 등 화면 동작 |
| `manifest.json` | 웹앱 정보와 아이콘 |
| `sitemap.xml`, `robots.txt` | 검색엔진 설정 |
| `og.png`, `image/` | 공유 이미지와 화면 자산 |

환경 변수·개인 인증 파일은 저장소에 올리지 않도록 `.gitignore`와 커밋·PR 비밀값 검사를 사용합니다.
