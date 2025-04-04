// fetch("data/data.json")
//   .then((response) => response.json()) // Mengambil data JSON
//   .then((data) => {
//     // Asumsikan data adalah array
//     data.forEach((item) => {
//       // Dapatkan elemen-elemen yang ingin diubah
//       const summaryList = document.querySelector(".summary-list");
//       const img = summaryList.querySelector("img");
//       const name = summaryList.querySelector(".summary-name");
//       const result = summaryList.querySelector(".result");
//       const total = summaryList.querySelectorAll("p")[2]; // /100

//       // Update elemen dengan data dari JSON
//       img.src = item.img;
//       name.textContent = item.name;
//       result.textContent = item.result;
//       total.textContent = item.total;
//     });
//   })
//   .catch((error) => console.error("Error:", error)); // Tangani jika ada error

async function fetchData() {
  try {
    const res = await fetch("data.json");
    const data = await res.json();

    // Loop untuk memproses setiap item dalam data
    data.map((item) => {
      // Dapatkan elemen container tempat kamu ingin menambahkan elemen baru
      const summaryListContainer = document.querySelector(
        ".summary-list-container"
      ); // Misalnya, kamu punya container dengan class 'summary-list-container'

      // Buat elemen baru yang akan ditambahkan ke dalam container
      const summaryListItem = document.createElement("div");
      summaryListItem.classList.add("summary-list"); // Tambahkan class yang sesuai

      // Isi konten HTML dengan data dari JSON
      summaryListItem.innerHTML = `
        <figure>
          <img src="${item.img}" alt="summary-icon">
        </figure>

        <p class="summary-name">${item.name}</p>

        <div class="summary-item-score">
          <p>${item.result}</p>
          <p>/</p>
          <p>${item.total}</p>
        </div>
      `;

      // Tambahkan elemen baru ke dalam container
      summaryListContainer.appendChild(summaryListItem);
    });
  } catch (error) {
    alert("Gagal mengambil data: " + error);
  }
}

fetchData();
