import axios from 'axios';

const BASE = 'https://prodapi.classiolabs.com/';
const instId = 120;

const get = async (url) => (await axios.get(BASE + url)).data;

const sanitizeHtml = (html) => {
  if (typeof html !== 'string') return html || '';
  let out = html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '');
  const firstTag = out.indexOf('<');
  if (firstTag > 0) out = out.slice(firstTag);
  return out.trim();
};

(async () => {
  const coursesRes = await get('admin/course/fetch-public/' + instId);
  const courses = coursesRes?.courses || [];
  const target = courses.find(
    (c) => (c?.name || c?.title || '').trim().toLowerCase() === 'verified results 2026'
  );
//   console.log('COURSES:', courses.map((c) => c.name || c.title));
  if (!target) { console.log('NO TARGET COURSE'); return; }

  const l1 = await get('admin/course/fetchContent-public/' + target.id + '/0');
  const level1 = (l1?.contentList || []).filter((i) => i?.active !== false);
  console.log('LEVEL1:', level1.map((i) => i.title || i.name));

  const l1First = level1[0];
  const l2 = await get('admin/course/fetchContent-public/' + target.id + '/' + l1First.id);
  const level2 = (l2?.contentList || []).filter((i) => i?.active !== false);
//   console.log('LEVEL2:', level2.map((i) => i.title || i.name));

  const l2First = level2[0];
  const l3 = await get('admin/course/fetchContent-public/' + target.id + '/' + l2First.id);
  const level3 = (l3?.contentList || []).filter((i) => i?.active !== false);
//   console.log('LEVEL3 count:', level3.length);

  const item = level3[0];
  const raw = item?.title || item?.name || '';
//   console.log('RAW TITLE (JSON):', JSON.stringify(raw));
//   console.log('HAS </style>:', /<\/style>/i.test(raw));
//   console.log('SANITIZED:', JSON.stringify(sanitizeHtml(raw)));
})().catch((e) => console.error('ERR', e.message));
