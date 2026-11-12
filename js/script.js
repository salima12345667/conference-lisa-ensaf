
/* =========================================================
   SITE DE LA JOURNEE SCIENTIFIQUE LISA - ENSAF
   Fichier : js/script.js

   MODIFICATIONS :
   - Mise à jour du comité d'organisation
   - Ajout de 9 nouveaux membres
   - Comité scientifique conservé
   ========================================================= */

const orgMembers = [
    ["BENNOUNA", "Fatima"],
    ["ChALH", "Zakaria"],
    ["CHAIBI", "Yassine"],
    ["EL HAINI", "Jamila"],
    ["EL KHATTABI", "Souad"],
    ["FEKAK", "Fatima-Ezzahra"],
    ["HIHI", "Hicham"],
    ["KHAISSIDI", "Ghizlane"],
    ["MELLOULI", "El Mehdi"],
    ["MONTASSIR", "Soufiane"],
    ["MOUSTABCHIR", "Hassane"],
    ["MRABTI", "Mostafa"],
    ["OUGHDIR", "Lahcen"],
    ["OUHAIBI", "Salma"],
    ["SAKA", "Abdelmajid"],
    ["SALHI", "Mohamed"],
    ["Tahiri", "Mohamed Amine"],
    ["SAYYOURI", "M'hamed"],

    // NOUVEAUX MEMBRES DU COMITÉ D'ORGANISATION
    ["HANDA", "Salima", "HANDA Salima (doctorante)"],
    ["EL AMRANI", "Mohamed", "EL AMRANI Mohamed (doctorant)"],
    ["KACIMI", "Sara", "KACIMI Sara (doctorante)"],
    ["SABOR", "Fatimazahra", "SABOR Fatimazahra (doctorante)"],
    ["AZILA", "Rania", "AZILA Rania (doctorante)"],
    ["OUYOUS", "Souhaila", "OUYOUS Souhaila (doctorante)"],
    ["BAKKALI", "Fatimazahra", "BAKKALI Fatimazahra (doctorante)"],
    ["ZIZI", "Fatimazahra", "ZIZI Fatimazahra (doctorante)"],
    ["FECHTALI", "Reda", "FECHTALI Reda (doctorant)"]
];

const sciMembers = [
    ["BENNOUNA", "Fatima"],
    ["ChALH", "Zakaria"],
    ["CHAIBI", "Yassine"],
    ["EL HAINI", "Jamila"],
    ["EL KHATTABI", "Souad"],
    ["FEKAK", "Fatima-Ezzahra"],
    ["GARZIAD", "Mouad"],
    ["HIHI", "Hicham"],
    ["KHAISSIDI", "Ghizlane"],
    ["MELLOULI", "El Mehdi"],
    ["MONTASSIR", "Soufiane"],
    ["MOUSTABCHIR", "Hassane"],
    ["MRABTI", "Mostafa"],
    ["OUGHDIR", "Lahcen"],
    ["OUHAIBI", "Salma"],
    ["SAKA", "Abdelmajid"],
    ["SALHI", "Mohamed"],
    ["Tahiri", "Mohamed Amine"],
    ["SAYYOURI", "M’hamed"]
];

// AFFICHAGE DES MEMBRES
function renderPeople(id, committeeMembers) {
    const container = document.getElementById(id);

    if (!container) return;

    container.innerHTML = committeeMembers
        .map(([last, first]) => `
            <div class="person">
                <b>${first} ${last}</b>
                <span>ENSAF</span>
            </div>
        `)
        .join("");
}

// AFFICHAGE DES DEUX COMITÉS
renderPeople("org", orgMembers);
renderPeople("sci", sciMembers);

// FERMETURE DU MENU MOBILE APRÈS NAVIGATION
document.querySelectorAll("#navlinks a").forEach(a => {
    a.addEventListener("click", () => {
        document.getElementById("navlinks").classList.remove("open");
    });
});
