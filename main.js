const programData = [
  { name: "VIP Kilo Verme", img: "https://via.placeholder.com/90/3F51B5/FFFFFF?text=VIP" },
  { name: "Online Danışmanlık", img: "https://via.placeholder.com/90/3F51B5/FFFFFF?text=Online" },
  { name: "Karma Danışmanlık", img: "https://via.placeholder.com/90/3F51B5/FFFFFF?text=Karma" },
  { name: "Sporcu Beslenmesi", img: "https://via.placeholder.com/90/3F51B5/FFFFFF?text=Sporcu" },
  { name: "Emzirme Dönemi", img: "https://via.placeholder.com/90/3F51B5/FFFFFF?text=Emzirme" },
  { name: "Gebelik Dönemi", img: "https://via.placeholder.com/90/3F51B5/FFFFFF?text=Gebelik" },
  { name: "Hastalıklarda", img: "https://via.placeholder.com/90/3F51B5/FFFFFF?text=Hastalık" },
  { name: "Detoks Programı", img: "https://via.placeholder.com/90/3F51B5/FFFFFF?text=Detoks" }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("programList");
  programData.forEach(({ name, img }) => {
    const div = document.createElement("div");
    div.className = "circle-item";
    div.innerHTML = `
      <img src="${img}" alt="${name}">
      <p>${name}</p>
    `;
    container.appendChild(div);
  });
});
