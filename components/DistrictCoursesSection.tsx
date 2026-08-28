"use client";

import { useState } from "react";
import { getDistrictsForCity, District } from "@/lib/districts";

export function DistrictCoursesSection({ city }: { city: string }) {
  const districts = getDistrictsForCity(city);
  const [selected, setSelected] = useState(0);
  const district = districts[selected] || districts[0];

  return (
    <section className="districtSection" id="ilceler" aria-labelledby="district-title">
      <header className="districtHeader">
        <p className="sectionKicker">Size en yakın sınıfı bulun</p>
        <h2 id="district-title">{city} İlçelerinde İngilizce Kursları</h2>
        <p>{city} genelindeki eğitim noktalarını ulaşım, program ve öğrenci profiline göre karşılaştırın; günlük rutininize en uygun sınıfı seçin.</p>
      </header>

      <div className="districtFilters" aria-label={`${city} ilçelerini seçin`}>
        {districts.map((item, index) => (
          <button key={item.name} className={selected === index ? "active" : ""} onClick={() => setSelected(index)} aria-pressed={selected === index}>
            <span>{String(index + 1).padStart(2, "0")}</span>{item.name}
          </button>
        ))}
      </div>

      <article className="districtCard">
        <div className="districtTopline">
          <div><span>Seçili bölge</span><h3>{district.name}</h3></div>
          <p><strong>{district.students}</strong><i />{district.branches}<i />{district.access}</p>
        </div>
        <div className="districtBody">
          <div className="districtSummary">
            <p>{district.description}</p>
            <div className="districtActions">
              <a className="districtPrimary" href="#seviye-testi">Ücretsiz seviyeni belirle <span>↗</span></a>
              <a href="#programlar">{district.name} programları</a>
            </div>
          </div>
          <div className="districtList">
            <span>Bu ilçenin avantajları</span>
            <ul>{district.advantages.map((item) => <li key={item}><i>✓</i>{item}</li>)}</ul>
          </div>
          <div className="districtList audience">
            <span>Kimler için uygun?</span>
            <ul>{district.audience.map((item) => <li key={item}><i>→</i>{item}</li>)}</ul>
          </div>
        </div>
      </article>
    </section>
  );
}
