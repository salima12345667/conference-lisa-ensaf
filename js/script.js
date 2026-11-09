/* =========================================================
   SITE DE LA JOURNEE SCIENTIFIQUE LISA - ENSAF
   Fichier : js/script.js

   MODIFICATIONS RAPIDES :
   - Membres des comités : tableau `members` ci-dessous.
   - Ajouter un membre : ["NOM", "Prénom"].
   - Les deux comités utilisent actuellement la même liste,
     conformément au document PDF reçu.
   ========================================================= */

const members = [
["BENNOUNA","Fatima"],["ChALH","Zakaria"],["CHAIBI","Yassine"],["EL HAINI","Jamila"],["EL KHATTABI","Souad"],["FEKAK","Fatima-Ezzahra"],["HIHI","Hicham"],["KHAISSIDI","Ghizlane"],["MELLOULI","El Mehdi"],["MONTASSIR","Soufiane"],["MOUSTABCHIR","Hassane"],["MRABTI","Mostafa"],["OUGHDIR","Lahcen"],["OUHAIBI","Salma"],["SAKA","Abdelmajid"],["SALHI","Mohamed"],["Tahiri","Mohamed Amine"],["SAYYOURI","M’hamed"]
];
function renderPeople(id){document.getElementById(id).innerHTML=members.map(([last,first])=>`<div class="person"><b>${first} ${last}</b><span>ENSAF</span></div>`).join("")}
function showCommittee(id,btn){document.querySelectorAll('.committee-tabs .tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');document.getElementById('org').hidden=id!=='org';document.getElementById('sci').hidden=id!=='sci'}
renderPeople('org');renderPeople('sci');
document.querySelectorAll('#navlinks a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navlinks').classList.remove('open')));
