
/* =========================================================
   SITE DE LA JOURNÉE SCIENTIFIQUE LISA - ENSAF
   Fichier : js/script.js

   MODIFICATIONS :
   - Ajout du comité d'honneur
   - Comité d'honneur affiché avant le comité d'organisation
   - BENNOUNA, SAKA et MOUSTABCHIR en tête des deux listes
   - Correction du statut de FECHTALI Reda
   ========================================================= */

// =========================================================
// COMITÉ D'HONNEUR
// =========================================================

const honorMembers = [
    ["Pr. Mustapha Ijjaali", "Président de l'USMBA"],
    ["Pr. Mestapha El Hadrami", "Vice-président de l'USMBA chargé du pôle recherche scientifique"],
    ["Pr. Abderrahim Lahrach", "Directeur de l'ENSA de Fès"],
    ["Pr. Abdelmjid Saka", "Directeur Adjoint chargé de la recherche scientifique de l'ENSA de Fès"],
    ["Pr. Moustabchir Hassane", "Directeur du laboratoire LISA"]
];

// =========================================================
// COMITÉ D'ORGANISATION
// =========================================================

const orgMembers = [
    ["BENNOUNA", "Fatima"],
    ["SAKA", "Abdelmajid"],
    ["MOUSTABCHIR", "Hassane"],

    ["CHALH", "Zakaria"],
    ["CHAIBI", "Yassine"],
    ["EL HAINI", "Jamila"],
    ["EL KHATTABI", "Souad"],
    ["FEKAK", "Fatima-Ezzahra"],
    ["HIHI", "Hicham"],
    ["KHAISSIDI", "Ghizlane"],
    ["MELLOULI", "El Mehdi"],
    ["MONTASSIR", "Soufiane"],
    ["MRABTI", "Mostafa"],
    ["OUGHDIR", "Lahcen"],
    ["OUHAIBI", "Salma"],
    ["SALHI", "Mohamed"],
    ["TAHIRI", "Mohamed Amine"],
    ["SAYYOURI", "M'hamed"],

    // Membres du comité d'organisation
    ["HANDA", "Salima", "doctorante"],
    ["EL AMRANI", "Mohamed", "doctorant"],
    ["KACIMI", "Sara", "doctorante"],
    ["SABOR", "Fatimazahra", "doctorante"],
    ["AZILA", "Rania", "doctorante"],
    ["OUYOUSS", "Souhaila", "doctorante"],
     ["OUYOUSSEF", "Nouhaila", "Docteur"],
    ["BAKKALI", "Fatimazahra", "doctorante"],
    ["ZIZI", "Fatimazahra", "doctorante"],
    ["FECHTALI", "Reda", "élève ingénieur"]
];

// =========================================================
// COMITÉ SCIENTIFIQUE
// =========================================================

const sciMembers = [
    ["BENNOUNA", "Fatima"],
    ["SAKA", "Abdelmajid"],
    ["MOUSTABCHIR", "Hassane"],

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
    ["MRABTI", "Mostafa"],
    ["OUGHDIR", "Lahcen"],
    ["OUHAIBI", "Salma"],
    ["SALHI", "Mohamed"],
    ["TAHIRI", "Mohamed Amine"],
    ["SAYYOURI", "M'hamed"]
];

// =========================================================
// AFFICHAGE DES MEMBRES DES COMITÉS
// =========================================================

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

// =========================================================
// AFFICHAGE DU COMITÉ D'HONNEUR
// =========================================================

function renderHonorMembers(id, members) {
    const container = document.getElementById(id);

    if (!container) return;

    container.innerHTML = members
        .map(([name, role]) => `
            <div class="person">
                <b>${name}</b>
                <span>${role}</span>
            </div>
        `)
        .join("");
}

// =========================================================
// AFFICHAGE DES TROIS COMITÉS
// =========================================================

renderHonorMembers("honor", honorMembers);
renderPeople("org", orgMembers);
renderPeople("sci", sciMembers);

// =========================================================
// FERMETURE DU MENU MOBILE APRÈS NAVIGATION
// =========================================================

document.querySelectorAll("#navlinks a").forEach(a => {
    a.addEventListener("click", () => {
        document.getElementById("navlinks")?.classList.remove("open");
    });
});
