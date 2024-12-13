// Javascript deki url parametrelerini URLSearchParams clsasıyla dah akolay şekilde yönetebiliriz. bu class örneği kendine url in parametre olarak girilmesini ister.Devamında get metoduyla ilgigli parametre alınır.

import { renderDetailPage, renderNotFoundPage } from "./ui.js";

const params = new URLSearchParams(window.location.search);

// Yukaridaki class tan örnek alınarak url deki parametreye ulaşıldı.
const id = parseInt(params.get("id"));

// Ürün detayının aktarılacağı Html elemanı

const outlet = document.getElementById("outlet");

// sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener("DOMContentLoaded", async () => {
  // db.json dosyasına istek at

  const res = await fetch("../db.json");
  // verileri js nesnesine çevir
  const data = await res.json();
  // id ye göre iligili elemanı bul
  const product = data.menu.find((item) => item.id === id);
  //Eğer ürün yoksa ürün bulunamadı sayfasına git
  if (!product) {
    // Ürün bulnumadı içeriğini render et
    renderNotFoundPage(outlet);
  } else {
    renderDetailPage(product, outlet);
  }
});
