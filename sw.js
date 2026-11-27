const CACHE = 'smilehouse-v7';
const PRECACHE = [
'./',
  './01_red.jpg',
  './02_orange.jpg',
  './03_yellow.jpg',
  './04_green.jpg',
  './05_cyan.jpg',
  './06_blue.jpg',
  './07_purple.jpg',
  './book_hall_wide.jpg',
  './craft_heal_wide.jpg',
  './diary_room_wide.jpg',
  './door_brave_5s.mp4',
  './door_brave_wide.jpg',
  './door_confident_wide.jpg',
  './door_free_wide.jpg',
  './door_growth_wide.jpg',
  './door_growth.mp4',
  './door_heal_wide.jpg',
  './door_passion_wide.jpg',
  './door_relax_wide.jpg',
  './door_tender_wide.jpg',
  './drinks_wide.jpg',
  './ep1_wide.jpg',
  './ep2_wide.jpg',
  './ep3_wide.jpg',
  './ep4_wide.jpg',
  './ep5_wide.jpg',
  './ep6.jpg',
  './ep7.jpg',
  './ep9_wide.jpg',
  './floor2_origami_wide.jpg',
  './garden_autumn.jpg',
  './garden_pano_wide.jpg',
  './garden_spring.jpg',
  './garden_summer.jpg',
  './garden_winter.jpg',
  './hero_aesthetic.jpg',
  './hero_door.jpg',
  './hero_floor1.jpg',
  './hero_home.jpg',
  './hero_noise.jpg',
  './home_wide.jpg',
  './icon-192.png',
  './icon-512.png',
  './index.html',
  './lele_ip.png',
  './lele_life.jpg',
  './lele_v2.png',
  './life_doors_wide.jpg',
  './manifest.webmanifest',
  './mv_01_wide.jpg',
  './mv_02_wide.jpg',
  './mv_03_wide.jpg',
  './mv_04_wide.jpg',
  './quiet_music_wide.jpg',
  './scene_chef.jpg',
  './scene_community.jpg',
  './scene_counselor.jpg',
  './scene_doctor.jpg',
  './scene_entrepreneur.jpg',
  './scene_painter.jpg',
  './scene_police.jpg',
  './scene_teacher.jpg',
  './scene_writer.jpg',
  './treehole_wide.jpg'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE).catch(() => {})));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(req).then(hit => hit || caches.match('./')))
  );
});