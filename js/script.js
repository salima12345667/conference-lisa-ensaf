/* =========================================================
   SITE DE LA JOURNEE SCIENTIFIQUE LISA - ENSAF
   Fichier : js/script.js

   MODIFICATIONS RAPIDES :
   - Membres des comités : tableaux `orgMembers` et `sciMembers` ci-dessous.
   ========================================================= */

const orgMembers = [
["BENNOUNA","Fatima"],["ChALH","Zakaria"],["CHAIBI","Yassine"],["EL HAINI","Jamila"],["EL KHATTABI","Souad"],["FEKAK","Fatima-Ezzahra"],["HIHI","Hicham"],["KHAISSIDI","Ghizlane"],["MELLOULI","El Mehdi"],["MONTASSIR","Soufiane"],["MOUSTABCHIR","Hassane"],["MRABTI","Mostafa"],["OUGHDIR","Lahcen"],["OUHAIBI","Salma"],["SAKA","Abdelmajid"],["SALHI","Mohamed"],["Tahiri","Mohamed Amine"],["SAYYOURI","M'hamed"]
];
const sciMembers = [
["BENNOUNA","Fatima"],["ChALH","Zakaria"],["CHAIBI","Yassine"],["EL HAINI","Jamila"],["EL KHATTABI","Souad"],["FEKAK","Fatima-Ezzahra"],["GARZIAD","Mouad"],["HIHI","Hicham"],["KHAISSIDI","Ghizlane"],["MELLOULI","El Mehdi"],["MONTASSIR","Soufiane"],["MOUSTABCHIR","Hassane"],["MRABTI","Mostafa"],["OUGHDIR","Lahcen"],["OUHAIBI","Salma"],["SAKA","Abdelmajid"],["SALHI","Mohamed"],["Tahiri","Mohamed Amine"],["SAYYOURI","M’hamed"]
];
function renderPeople(id,committeeMembers){document.getElementById(id).innerHTML=committeeMembers.map(([last,first])=>`<div class="person"><b>${first} ${last}</b><span>ENSAF</span></div>`).join("")}
renderPeople('org',orgMembers);renderPeople('sci',sciMembers);
document.querySelectorAll('#navlinks a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navlinks').classList.remove('open')));
