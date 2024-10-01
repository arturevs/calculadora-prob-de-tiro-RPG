function calculateChance() {
    const distance = Number.parseFloat(document.getElementById("distance").value);
    const weaponMultiplier = Number.parseFloat(document.getElementById("weaponMultiplier").value);
    const bonus = Number.parseFloat(document.getElementById("bonus").value);
    const penalty = Number.parseFloat(document.getElementById("penalty").value);

    // Fórmula: 95 / (e^(0.1 * (d - 2) * w * b * t))
    const P = 95 / Math.exp(0.1 * (distance - 2) * weaponMultiplier * bonus * penalty);

    // Garantir que o valor máximo é 95
    const chance = Math.min(95, P).toFixed(2);

    // Atualizar a exibição do resultado
    document.getElementById("result").innerText = `Chance de Acerto: ${chance}%`;
}
