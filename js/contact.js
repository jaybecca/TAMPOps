// Contact helpers: keep phone and WhatsApp links consistent with the public TAMPOps number.
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.setAttribute('href', 'tel:+2349152345734');
});
document.querySelectorAll('a[href*="wa.me/"]').forEach(link => {
  link.href = link.href.replace(/wa\.me\/\d+/, 'wa.me/2349152345734');
});
