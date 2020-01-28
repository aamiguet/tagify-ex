function showEvent(e) {
  console.log(e);
  console.log(e.detail.tagify);
}

function initTagify(obj) {
  const whitelist = [
    {value: 'statut', id: 1, searchBy: '%%'},
    {value: 'date de début', id: 2, searchBy: ['tata', '%%']}
  ];
  var tagify = new Tagify(obj, {enforceWhitelist: true, whitelist: whitelist});
  tagify.on('add', showEvent).on('remove', showEvent);
}

$('.tagify').each(function() { initTagify(this); });