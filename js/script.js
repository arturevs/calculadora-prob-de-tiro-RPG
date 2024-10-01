function calculateChance() {
    const distance = Number.parseFloat(document.getElementById("distance").value);
    const weaponMultiplier = Number.parseFloat(document.getElementById("weaponMultiplier").value);
    const bonus = Number.parseFloat(document.getElementById("bonus").value);
    const penalty = Number.parseFloat(document.getElementById("penalty").value);


    const P = 95 / Math.exp(0.1 * (distance - 2) * weaponMultiplier * bonus * penalty);


    const chance = Math.min(95, P).toFixed(2);


    document.getElementById("result").innerText = `Chance de Acerto: ${chance}%`;
}
