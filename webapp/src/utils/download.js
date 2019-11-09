export default function download (url, name = '') {
  const link = document.createElement('a');
  // fix chrmoe not carry refere issue https://bugs.chromium.org/p/chromium/issues/detail?id=455987
  link.setAttribute('referrerpolicy', 'origin');
  link.setAttribute('download', name);
  link.setAttribute('href', url);

  Object.assign(link.style, {
    opacity: 0,
    position: 'absolute',
    top: 0
  });

  document.body.appendChild(link);
  link.click();
  setTimeout(() => document.body.removeChild(link), 1000);
}
