/* SmileHouse 微笑小屋 · 离线缓存（扁平版） */
const CACHE = 'smilehouse-v3';
const PRECACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./hero_aesthetic.jpg",
  "./hero_door.jpg",
  "./hero_floor1.jpg",
  "./hero_home.jpg",
  "./hero_library.jpg",
  "./hero_noise.jpg",
  "./lele_ip.png",
  "./mv_01_wide.jpg",
  "./mv_02_wide.jpg",
  "./mv_03_wide.jpg",
  "./mv_04_wide.jpg",
  "./成长之门_wide.jpg",
  "./热爱之门_wide.jpg",
  "./松弛之门_wide.jpg",
  "./温柔之门_wide.jpg",
  "./勇敢之门_wide.jpg",
  "./自信之门_wide.jpg",
  "./自由之门_wide.jpg",
  "./自愈之门_wide.jpg",
  "./scene_厨师.jpg",
  "./scene_创业家.jpg",
  "./scene_画家.jpg",
  "./scene_警察.jpg",
  "./scene_老师.jpg",
  "./scene_社区服务.jpg",
  "./scene_心理咨询师.jpg",
  "./scene_医生.jpg",
  "./scene_作家.jpg",
  "./ui_diary_wide.jpg",
  "./ui_door_life_wide.jpg",
  "./ui_drinks_wide.jpg",
  "./ui_floor2_folding_wide.jpg",
  "./ui_garden_wide.jpg",
  "./ui_handcraft_wide.jpg",
  "./ui_home_wide.jpg",
  "./ui_library_wide.jpg",
  "./ui_quiet_music_wide.jpg",
  "./ui_treehole_wide.jpg"
];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => Promise.all(PRECACHE.map((url) => cache.add(url).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
  event.respondWith(caches.match(req, { ignoreSearch: true }).then((cached) => {
    if (cached) return cached;
    return fetch(req).then((res) => {
      if (res && res.status === 200) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => null); }
      return res;
    }).catch(() => (req.mode === 'navigate') ? caches.match('./index.html').then((r) => r || Response.error()) : Response.error());
  }));
});