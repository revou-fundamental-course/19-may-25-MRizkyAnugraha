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

  // Fungsi sembunyikan warning
  function hideWarning() {
    warning.style.display = "none";
  }

  // Mencegah tag <a> refreshing page
  document.querySelectorAll(".button a").forEach((a) => {
    a.addEventListener("click", (e) => e.preventDefault());
  });

  // Konversi button
  konversiBtn.addEventListener("click", () => {
    const isCtoF = inputC.disabled;
    let val = isCtoF ? inputC.value : inputF.value;

    // Warning
    if (!val || isNaN(val)) {
      const warning = document.getElementById("warning");

      warning.style.display = "block";
      warning.innerHTML = "Masukkan angka yang valid!";

      setTimeout(hideWarning, 3000);
      // Setelah 3 detik, warning hilang
      return;
    }

    // Hasil convert suhu
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
    hideWarning();
    inputC.value = "";
    inputF.value = "";
    caraKalkulasi.value = "";
    
  });

  // Keterangan di bawah judul dinamis
  const keterangan = document.getElementById("keterangan");

  const keteranganCtoF = `Masukkan suhu derajat celcius (&deg;C) ke kotak dibawah, lalu klik
        tombol Konversi untuk mendapatkan hasil dalam bentuk fahrenheit
        (&deg;F).`;

  const keteranganFtoC = `Masukkan suhu derajat fahrenheit (&deg;F) ke kotak dibawah, lalu klik
        tombol Konversi untuk mendapatkan hasil dalam bentuk celcius
        (&deg;C).`;

  // Judul penjelasan celcius dan fahrenheit

  const judulPenjelasan = document.getElementById("judul-penjelasan");

  // Penjelasan celcius dan fahrenheit dinamis
  
  const penjelasanContainer = document.getElementById("penjelasan-container");

  const explanationFtoC = `
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

  const explanationCtoF = `
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
    cDiv.parentNode.insertBefore(fDiv, isCtoF ? fDiv : cDiv);

    // Update judul keterangan
    document.getElementById("judul-keterangan").innerText = isCtoF      
      ? "Fahrenheit ke Celcius"
      : "Celcius ke Fahrenheit";

    // Update keterangan
    keterangan.innerHTML = isCtoF ? keteranganFtoC : keteranganCtoF;

    // Update judul penjelasan
    document.getElementById("judul-penjelasan").innerText = isCtoF     
      ? "Cara Konversi Dari Fahrenheit(°F) ke Celcius (°C)"
      : "Cara Konversi Dari Celcius(°C) ke Fahrenheit (°F)";

    // Update penjelasan
    penjelasanContainer.innerHTML = isCtoF ? explanationFtoC : explanationCtoF;

    hideWarning();
    caraKalkulasi.value = "";
    inputC.value = "";
    inputF.value = "";
  });
});
