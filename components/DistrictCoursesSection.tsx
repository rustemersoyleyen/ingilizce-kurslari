"use client";

import { useEffect, useRef, useState } from "react";
import { getDistrictsForCity, District } from "@/lib/districts";

export function DistrictCoursesSection({ city }: { city: string }) {
  const districts = getDistrictsForCity(city);
  const [selected, setSelected] = useState(0);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const district = districts[selected] || districts[0];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleSelect(index: number) {
    setSelected(index);
    const tabEl = tabRefs.current[index];
    if (tabEl) {
      tabEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }

  function handlePrev() {
    const prev = selected > 0 ? selected - 1 : districts.length - 1;
    handleSelect(prev);
  }

  function handleNext() {
    const next = selected < districts.length - 1 ? selected + 1 : 0;
    handleSelect(next);
  }

  useEffect(() => {
    if (isPaused || districts.length <= 1) return;
    const timer = setInterval(() => {
      setSelected((prev) => {
        const next = (prev + 1) % districts.length;
        tabRefs.current[next]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        return next;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, districts.length]);

  return (
    <section
      className="districtSection"
      id="ilceler"
      aria-labelledby="district-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
    >
      <header className="districtHeader">
        <p className="sectionKicker">Size en yakın sınıfı bulun</p>
        <h2 id="district-title">{city} İlçelerinde İngilizce Kursları</h2>
        <p>{city} genelindeki eğitim noktalarını ulaşım, program ve öğrenci profiline göre karşılaştırın; günlük rutininize en uygun sınıfı seçin.</p>
      </header>

      <div className="districtSliderWrapper">
        <button
          type="button"
          className="sliderArrowBtn prev"
          onClick={handlePrev}
          aria-label="Önceki ilçe"
        >
          ‹
        </button>
        <div className="districtFilters" role="tablist" aria-label={`${city} ilçelerini seçin`}>
          {districts.map((item, index) => (
            <button
              key={item.name}
              ref={(el) => { tabRefs.current[index] = el; }}
              role="tab"
              aria-selected={selected === index}
              className={selected === index ? "active" : ""}
              onClick={() => handleSelect(index)}
              aria-pressed={selected === index}
            >
              <span>{index + 1}</span>{item.name}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="sliderArrowBtn next"
          onClick={handleNext}
          aria-label="Sonraki ilçe"
        >
          ›
        </button>
      </div>

      <article className="districtCard">
        <div className="districtTopline">
          <div><span>Seçili bölge</span><h3>{district.name}</h3></div>
          <p><strong>{district.students}</strong><i />{district.branches}<i />{district.access}</p>
        </div>
        <div className="districtBody">
          <div className="districtSummary">
            <p className={`districtDescText ${showFullDesc ? "expanded" : "clamped"}`}>
              {district.description}
            </p>
            {district.description.length > 90 && (
              <button
                type="button"
                className="districtReadMoreBtn"
                onClick={() => setShowFullDesc(!showFullDesc)}
                aria-expanded={showFullDesc}
              >
                {showFullDesc ? "Daha Az Göster ▲" : "Devamını Oku ▼"}
              </button>
            )}
            <div className="districtActions">
              <a className="districtBtn districtBtnPrimary" href="#seviye-testi">Ücretsiz Seviyeni Belirle</a>
              <a className="districtBtn districtBtnSecondary" href="#programlar">{district.name} İngilizce Kursu</a>
            </div>
          </div>
          
          <div className="districtTwinLists">
            <div className="districtList">
              <div className="districtListHeader">
                <svg viewBox="0 0 24 24" role="img" aria-labelledby={`adv-title-${district.name} adv-desc-${district.name}`} className="districtHeaderIcon" width="20" height="20">
                  <title id={`adv-title-${district.name}`}>{`${city} ${district.name} İngilizce Kursu Avantajları`}</title>
                  <desc id={`adv-desc-${district.name}`}>{`${city} ${district.name} bölgesinde konuşma odaklı İngilizce kursunun sağladığı avantajlar`}</desc>
                  <path fill="currentColor" d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z"/>
                </svg>
                <span>Bu ilçenin avantajları</span>
              </div>
              <ul>{district.advantages.map((item) => <li key={item}><i>✓</i>{item}</li>)}</ul>
            </div>

            <div className="districtList audience">
              <div className="districtListHeader">
                <svg viewBox="0 0 24 24" role="img" aria-labelledby={`aud-title-${district.name} aud-desc-${district.name}`} className="districtHeaderIcon" width="20" height="20">
                  <title id={`aud-title-${district.name}`}>{`${city} ${district.name} İngilizce Kursu Kimler İçin Uygun`}</title>
                  <desc id={`aud-desc-${district.name}`}>{`${city} ${district.name} İngilizce kursunun katılımcı profili`}</desc>
                  <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
                <span>Kimler için uygun?</span>
              </div>
              <ul>{district.audience.map((item) => <li key={item}><i>→</i>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
