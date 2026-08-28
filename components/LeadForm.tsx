"use client";

import { FormEvent, useState } from "react";

export function LeadForm({ city }: { city: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="leadForm" onSubmit={handleSubmit} aria-label="Ücretsiz seviye tespit formu">
      <div className="formHeading">
        <span className="formStep">01</span>
        <div>
          <p className="eyebrow">01 Adım · Ücretsiz Ders &amp; Tespit</p>
          <h2>Sana Özel Eğitim Planını Hemen Başlat</h2>
        </div>
      </div>

      <div className="fieldGrid">
        <label>
          <span>Adınız Soyadınız</span>
          <input name="name" autoComplete="name" placeholder="Örn. Ahmet Yılmaz" required />
        </label>
        <label>
          <span>Telefon Numaranız</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="05xx xxx xx xx" required />
        </label>
        <label>
          <span>İngilizce Seviyeniz</span>
          <select name="level" defaultValue="">
            <option value="" disabled>Seviyenizi seçin</option>
            <option>Başlangıç Seviyesi (A1-A2)</option>
            <option>Orta Seviye (B1-B2)</option>
            <option>İleri Seviye (C1-C2)</option>
            <option>Emin Değilim (Ücretsiz Tespit Et)</option>
          </select>
        </label>
        <label>
          <span>Hedeflediğiniz Program</span>
          <select name="course" defaultValue="">
            <option value="" disabled>Program türünü seçin</option>
            <option>Genel İngilizce (Pratik Odaklı)</option>
            <option>İş İngilizcesi (Kariyer &amp; Sunum)</option>
            <option>Sınav Preparasyon (IELTS / TOEFL)</option>
            <option>Çocuklar &amp; Gençler İçin</option>
          </select>
        </label>
      </div>

      <button className="primaryButton" type="submit">
        <span>{sent ? "Talebin Başarıyla Alındı ✓" : "Ücretsiz Seviye Tespitini Başlat"}</span>
        <span aria-hidden="true">↗</span>
      </button>
      <p className="formNote">
        {sent ? `${city} eğitim danışmanımız 15 dakika içinde seni arayacak.` : "⚡ 2 dakika sürer · Kredi kartı gerekmez · Taahhütsüz deneme"}
      </p>
    </form>
  );
}
