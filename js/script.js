// Ambil button berdasarkan ID
window.addEventListener("DOMContentLoaded", () => {
  const inputC = document.getElementById("input-celcius");
  const inputF = document.getElementById("input-fahrenheit");
  const caraKalkulasi = document.getElementById("cara-kalkulasi");

  const cDiv = document.getElementById("celcius");
  const fDiv = document.getElementById("fahrenheit");

  const konversiBtn = document.querySelector(".button button:nth-child(1)");
  const resetBtn = document.querySelector(".button button:nth-child(2)");
  const reverseBtn = document.querySelector(".button button:nth-child(3)");

  // Mencegah tag <a> refreshing page
  document.querySelectorAll(".button a").forEach((a) => {
    a.addEventListener("click", (e) => e.preventDefault());
  });

  // Konversi button
  konversiBtn.addEventListener("click", () => {
    const isCtoF = !inputC.disabled;
    let val = isCtoF ? inputC.value : inputF.value;

    if (!val || isNaN(val)) {
      alert("Masukkan angka yang valid!");
      return;
    }

    val = parseFloat(val);
    if (isCtoF) {
      const fahrenheit = (val * 9) / 5 + 32;
      inputF.value = fahrenheit.toFixed(2);
      caraKalkulasi.value = `(${val} × 9/5) + 32 = ${fahrenheit.toFixed(2)} °F`;
    } else {
      const celcius = ((val - 32) * 5) / 9;
      inputC.value = celcius.toFixed(2);
      caraKalkulasi.value = `(${val} - 32) × 5/9 = ${celcius.toFixed(2)} °C`;
    }
  });

  // Reset button
  resetBtn.addEventListener("click", () => {
    inputC.value = "";
    inputF.value = "";
    caraKalkulasi.value = "";
  });

  // Reverse button
  reverseBtn.addEventListener("click", () => {
    // Toggle input enabled/disabled
    const isCtoF = !inputC.disabled;

    inputC.disabled = isCtoF;
    inputF.disabled = !isCtoF;

    // Tukar urutan HTML
    cDiv.parentNode.insertBefore(fDiv, isCtoF ? cDiv : fDiv);

    // Update deskripsi
    document.querySelector(".keterangan").innerText = isCtoF
      ? "Celcius ke Fahrenheit"
      : "Fahrenheit ke Celcius";

    caraKalkulasi.value = "";
    inputC.value = "";
    inputF.value = "";
  });

  // Set default state: inputF disabled
  inputF.disabled = true;
});
