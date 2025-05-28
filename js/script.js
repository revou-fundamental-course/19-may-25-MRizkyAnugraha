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
      const warning = document.getElementById("warning");

      // Fungsi sembunyikan warning
      function hideWarning() {
        warning.style.display = "none";
      }

      warning.style.display = "block";
      warning.innerHTML = "Masukkan angka yang valid!";

      setTimeout(hideWarning, 3000);
      // Setelah 3 detik, warning hilang
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
    hideWarning();
  });

  // Inside DOMContentLoaded event:

  const penjelasanContainer = document.getElementById("penjelasan-container");

  const explanationCtoF = `
    <p>
      Suhu <em>S</em> dalam derajat Fahrenheit (&deg;F) sama dengan suhu
      <em>S</em> dalam derajat Celcius (&deg;C) kali <b>9/5</b> tambah <b>32</b>.
    </p>

    <br />

    <p>
      <b><em>S</em><sub>(&deg;F)</sub> = (<em>S</em><sub>(&deg;C)</sub> x 9/5) + 32</b>
    </p>

    <br />

    <p>atau</p>

    <br />

    <p>
      <b><em>S</em><sub>(&deg;F)</sub> = (<em>S</em><sub>(&deg;C)</sub> x 1.8) + 32</b>
    </p>
  `;

  const explanationFtoC = `
    <p>
      Suhu <em>S</em> dalam derajat Celcius (&deg;C) sama dengan suhu
      <em>S</em> dalam derajat Fahrenheit (&deg;F) dikurangi <b>32</b> lalu dikali <b>5/9</b>.
    </p>

    <br />

    <p>
      <b><em>S</em><sub>(&deg;C)</sub> = (<em>S</em><sub>(&deg;F)</sub> - 32) × 5/9</b>
    </p>

    <br />

    <p>atau</p>

    <br />

    <p>
      <b><em>S</em><sub>(&deg;C)</sub> = (<em>S</em><sub>(&deg;F)</sub> - 32) × 0,55</b>
    </p>
  `;

  // Reverse button
  reverseBtn.addEventListener("click", () => {
    // Toggle input enabled/disabled
    const isCtoF = !inputC.disabled;

    inputC.disabled = isCtoF;
    inputF.disabled = !isCtoF;

    // Tukar urutan HTML
    cDiv.parentNode.insertBefore(fDiv, isCtoF ? cDiv : fDiv);

    // Update deskripsi
    document.getElementById("keterangan").innerText = isCtoF
      ? "Celcius ke Fahrenheit"
      : "Fahrenheit ke Celcius";

    penjelasanContainer.innerHTML = isCtoF ? explanationCtoF : explanationFtoC;

    caraKalkulasi.value = "";
    inputC.value = "";
    inputF.value = "";
    hideWarning();
  });

});
