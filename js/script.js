
/* =========================================================
   SITE DE LA JOURNÉE SCIENTIFIQUE LISA - ENSAF
   Fichier : js/script.js

   MODIFICATIONS :
   - Mise à jour du comité d'organisation
   - Ajout de 9 nouveaux membres
   - Ajout des statuts doctorant / doctorante
   - Comité scientifique conservé
   ========================================================= */

const orgMembers = [
    ["BENNOUNA", "Fatima"],
    ["CHALH", "Zakaria"],
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
    ["TAHIRI", "Mohamed Amine"],
    ["SAYYOURI", "M'hamed"],

    // NOUVEAUX MEMBRES DU COMITÉ D'ORGANISATION
    ["HANDA", "Salima","doctorante"],
    ["EL AMRANI", "Mohamed", "doctorant"],
    ["KACIMI", "Sara", "doctorante"],
    ["SABOR", "Fatimazahra", "doctorante"],
    ["AZILA", "Rania", "doctorante"],
    ["OUYOUS", "Souhaila", "doctorante"],
    ["BAKKALI", "Fatimazahra", "doctorante"],
    ["ZIZI", "Fatimazahra", "doctorante"],
    ["FECHTALI", "Reda", "doctorant"]
];

const sciMembers = [
    ["BENNOUNA", "Fatima"],
    ["CHALH", "Zakaria"],
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
    ["TAHIRI", "Mohamed Amine"],
    ["SAYYOURI", "M'hamed"]
];

// AFFICHAGE DES MEMBRES
function renderPeople(id, committeeMembers) {
    const container = document.getElementById(id);

    if (!container) return;

    container.innerHTML = committeeMembers
        .map(([last, first, status]) => `
            <div class="person">
                <b>${last} ${first}${status ? ` (${status})` : ""}</b>
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
        document.getElementById("navlinks")?.classList.remove("open");
    });
});
