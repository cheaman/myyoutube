// 나만의 유튜브 — 폰 앱 껍데기의 작은 일꾼 (2026-10-04 · 껍데기판 5 — 10-08 유튜브 «공유» 받기 · 떠 있으면 새로 안 엶)
// 크롬이 «앱 설치» 를 보여 주는 조건을 맞추려고 둔다. 아무것도 담아 두지 않는다 —
// 담아 두면 껍데기를 고쳐도 폰에 옛것이 남는다 (34번 문서보기 웹앱에서 겪음). 받는 것은 늘 인터넷에서 그대로.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});   // 가로채지 않음 → 브라우저가 평소대로 받음
