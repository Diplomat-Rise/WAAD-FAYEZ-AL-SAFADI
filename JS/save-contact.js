
// function downloadVCard() {
//   const vCardData = `
// BEGIN:VCARD
// VERSION:3.0
// FN:Afaf Mohammad Marouf
// TITLE:Sales Manager
// ORG:RISE Properties
// TEL;TYPE=WORK,VOICE:+971521977368
// TEL;TYPE=WORK,VOICE:+971568809032
// TEL;TYPE=WORK,VOICE:+97145665109
// EMAIL:Afaf@riseproperties.ae
// URL:http://www.riseproperties.ae
// ADR;TYPE=WORK:;;PO Box No 455979, Office NO.1607, Opal Tower, Business Bay;Dubai;;UAE
// END:VCARD
//   `.trim();

//   const blob = new Blob([vCardData], { type: 'text/vcard' });
//   const url = URL.createObjectURL(blob);

//   const a = document.createElement('a');
//   a.href = url;
//   a.download = 'Afaf-Mohammad-Marouf.vcf';
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
//   URL.revokeObjectURL(url);
// }

// // Attach to button
// document.querySelector('.action-button[onclick*="download-vcard"]').addEventListener('click', function (e) {
//   e.preventDefault();
//   downloadVCard();
// });


function downloadVCard() {
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:WAAD FAYEZ AL SAFADI
TITLE:Sales Manager
ORG:RISE Properties
TEL;TYPE=WORK,VOICE:+971588608631‬‬
TEL;TYPE=WORK,VOICE:+971542142246‬‬
TEL;TYPE=WORK,VOICE:+97145665109
EMAIL:Waad.Alsafadi@riseproperties.ae
URL:http://www.riseproperties.ae
ADR;TYPE=WORK:;;PO Box No 181702, Office NO.1607, Opal Tower, Business Bay;Dubai;;UAE
END:VCARD
  `.trim();

  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'WAAD FAYEZ AL SAFADI.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

document.querySelector('.save-contact-button').addEventListener('click', function (e) {
  e.preventDefault();
  downloadVCard();
});

