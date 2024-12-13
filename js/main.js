import { fetchMenu } from "./api.js";
import { renderCards } from "./ui.js";

// Sayfanın yüklenme anını izleme
document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchMenu();
  // db.json dosyasından alınan veriler ile ekrana menü elemanı render eden fonksiyon
  renderCards(data.menu);
  // İnput elemanlşarına eriş

  const inputs = document.querySelectorAll("#buttons input");
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selected = input.id;

      // Eğer hepsi seçiliyse tüm ürünleri render et
      if (selected === "all") {
        renderCards(data.menu);
      } else {
       // İlgili categoryle aalkalı ürünleri filtrele
        const filtered = data.menu.filter((item) => item.category == selected);
 // Hepsi seçili değilse iligi category render et
        renderCards(filtered);
      }
    });
  });
});
