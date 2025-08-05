function komutuIsle() {
  const komut = document.getElementById("komut").value.toLowerCase();
  const cevap = document.getElementById("cevap");

  if (komut.includes("merhaba") || komut.includes("selam")) {
    cevap.innerText = "Merhabalar! Size nasıl hizmet verebilirim?";
  }

  else if (komut.includes("şarkı aç") || komut.startsWith("aç ")) {
    const arama = komut.replace("şarkı aç", "").replace("aç", "").trim();
    window.open(`https://www.youtube.com/results?search_query=${arama}`, '_blank');
    cevap.innerText = `YouTube'da "${arama}" aranıyor...`;
  }

  else if (komut.includes("hava durumu")) {
    window.open("https://www.mgm.gov.tr/tahmin/il-ve-ilceler.aspx", '_blank');
    cevap.innerText = "Hava durumu açılıyor...";
  }

  else if (komut.includes("saat kaç")) {
    const saat = new Date().toLocaleTimeString();
    cevap.innerText = `Şu an saat: ${saat}`;
  }

  else if (komut.includes("youtube")) {
    window.open("https://www.youtube.com", '_blank');
    cevap.innerText = "YouTube açılıyor...";
  }

  else if (komut.startsWith("google")) {
    const arama = komut.replace("google", "").trim();
    window.open(`https://www.google.com/search?q=${arama}`, '_blank');
    cevap.innerText = `"${arama}" için Google'da arama yapılıyor...`;
  }

  else {
    cevap.innerText = "Bu komutu anlayamadım. Lütfen tekrar deneyin.";
  }

  document.getElementById("komut").value = "";
}

  