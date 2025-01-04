function calculateChance() {
    const distance = Number.parseFloat(document.getElementById("distance").value || 0);
    const weaponMultiplier = Number.parseFloat(document.getElementById("weaponMultiplier").value || 0);
    const bonus = Number.parseFloat(document.getElementById("bonus").value || 0);
    const penalty = (getSelectedPenalties().length * 0.2) + 1
    const P = 95 / Math.exp(0.1 * (distance - 2) * weaponMultiplier * bonus * penalty);


    const chance = Math.min(95, P).toFixed(2);

    if(weaponMultiplier === 0 || bonus === 0)
    {
        document.getElementById("result").innerText = "Valores faltantes";
    }
    else
    {
        document.getElementById("result").innerText = `Valor necessário no D100: ${(100-parseInt(chance)) ?? 0}`;
    }
}   
  
  function getSelectedPenalties() {
    const checkboxes = document.querySelectorAll('.dropdown-content input[type="checkbox"]');
    const selectedPenalties = [];
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        selectedPenalties.push(checkbox.value);
      }
    });
    return selectedPenalties;
  }
  
  // Example usage
  document.querySelector('.dropdown button').addEventListener('click', function() {
    console.log(getSelectedPenalties());
  });
