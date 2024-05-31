document.addEventListener("DOMContentLoaded", function () {
  const namaInput = document.getElementById("nama");
  const nomorWhatsAppInput = document.getElementById("nomor WhatsApp");
  const jkSelect = document.getElementById("jk");
  const kategoriSelect = document.getElementById("kategori");
  const alamatInput = document.getElementById("Alamat");
  const daftarList = document.getElementById("daftar-list");
  const btnCancel = document.getElementById("btn4");
  const btnDaftar = document.getElementById("btn");

  const daftarData = [];

  function renderDaftarList() {
      daftarList.innerHTML = "";

      daftarData.forEach(function (data, index) {
          const listItem = document.createElement("div");
          listItem.className = "daftar-item";
          listItem.innerHTML = `
              <span><b>Nama:</b> ${data.nama}</span>
              <span><b>Nomor WhatsApp:</b> ${data.nomorWhatsApp}</span>
              <span><b>Jenis Kelamin:</b> ${data.jenisKelamin}</span>
              <span><b>Kategori:</b> ${data.kategori}</span>
              <span><b>Alamat:</b> ${data.alamat}</span>
              <button class="btn-edit" data-index="${index}">Edit</button>
              <button class="btn-delete" data-index="${index}">Delete</button>
          `;
          daftarList.appendChild(listItem);
      });
  }

  function clearForm() {
      namaInput.value = "";
      nomorWhatsAppInput.value = "";
      jkSelect.value = "";
      kategoriSelect.value = "";
      alamatInput.value = "";
  }

  btnDaftar.addEventListener("click", function () {
    console.log("Button Daftar clicked");
      const nama = namaInput.value;
      const nomorWhatsApp = nomorWhatsAppInput.value;
      const jenisKelamin = jkSelect.value;
      const kategori = kategoriSelect.value;
      const alamat = alamatInput.value;
    

      if (nama && nomorWhatsApp && jenisKelamin && kategori && alamat) {
          const newData = {
              nama: nama,
              nomorWhatsApp: nomorWhatsApp,
              jenisKelamin: jenisKelamin,
              kategori: kategori,
              alamat: alamat,
          };
          
    
          daftarData.push(newData);
          renderDaftarList();
          clearForm();
      } else {
          alert("Harap lengkapi semua data sebelum mendaftar.");
      }
  });

  btnCancel.addEventListener("click", function () {
      clearForm();
  });

  // Add your code here to handle other functionalities or events
  console.log("Nama:", nama);
    console.log("Nomor WhatsApp:", nomorWhatsApp);
    console.log("Jenis Kelamin:", jenisKelamin);
    console.log("Kategori:", kategori);
    console.log("Alamat:", alamat);
});