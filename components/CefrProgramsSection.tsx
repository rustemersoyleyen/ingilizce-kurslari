"use client";

import { useEffect, useState } from "react";

const programs = [
  {
    filter: "A1–A2",
    label: "Temel kullanıcı",
    title: "Günlük İngilizcenin temelini kur",
    description: "Kendinizi tanıtmayı, temel ihtiyaçlarınızı anlatmayı ve tanıdık konularda kısa konuşmalar yapmayı adım adım öğrenin.",
    duration: "16–20 hafta",
    pace: "Haftada 6 ders",
    content: ["Temel kelime ve cümle yapıları", "Dinleme ve doğru telaffuz", "Günlük hayat diyalogları", "Kısa yazılı anlatım"],
    outcomes: ["Basit sorular sorup cevaplama", "Günlük ihtiyaçları ifade etme", "Kısa metinleri anlayabilme", "Konuşma kaygısını azaltma"],
  },
  {
    filter: "B1–B2",
    label: "Bağımsız kullanıcı",
    title: "Akıcı ve kendinden emin iletişime geç",
    description: "İş, eğitim ve seyahat ortamlarında düşüncelerinizi ayrıntılı aktarın; doğal konuşmaları takip edip aktif biçimde katılın.",
    duration: "20–24 hafta",
    pace: "Haftada 6 ders",
    content: ["Akıcılık ve aktif kelime kullanımı", "Sunum ve tartışma teknikleri", "Orta–ileri dilbilgisi", "E-posta ve rapor yazımı"],
    outcomes: ["Hazırlıksız konuşmaya katılma", "Fikirleri gerekçelendirme", "İş görüşmelerinde iletişim", "Daha doğal telaffuz ve ritim"],
  },
  {
    filter: "C1–C2",
    label: "Yetkin kullanıcı",
    title: "İngilizceyi profesyonel hassasiyetle kullan",
    description: "Karmaşık fikirleri nüanslarıyla ifade edin; akademik ve profesyonel ortamlarda doğru ton, kelime ve yapı seçiminde ustalaşın.",
    duration: "20–28 hafta",
    pace: "Haftada 4–6 ders",
    content: ["İleri söylem ve üslup", "Akademik ve profesyonel yazım", "Müzakere ve ikna dili", "Deyimler ve kültürel bağlam"],
    outcomes: ["Karmaşık konuları yapılandırma", "Ton ve üslubu hedefe uyarlama", "Yüksek doğrulukla yazma", "Doğal ve esnek iletişim"],
  },
  {
    filter: "Speaking Club",
    label: "Canlı konuşma pratiği",
    title: "İngilizceyi düşünmeden konuşmaya başla",
    description: "Küçük gruplarda güncel konuları tartışın, gerçek hayat senaryolarını canlandırın ve eğitmen geri bildirimiyle akıcılığınızı güçlendirin.",
    duration: "Sürekli katılım",
    pace: "Haftada 2 buluşma",
    content: ["Tema odaklı grup sohbetleri", "Rol oyunları ve simülasyonlar", "Telaffuz geri bildirimi", "Kelime aktivasyon çalışmaları"],
    outcomes: ["Daha hızlı cümle kurma", "Aktif kelime haznesi", "Topluluk önünde rahatlık", "Farklı aksanları anlama"],
  },
];

export function CefrProgramsSection() {
  const [selected, setSelected] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const program = programs[selected];

  function handlePrev() {
    setSelected((prev) => (prev > 0 ? prev - 1 : programs.length - 1));
  }

  function handleNext() {
    setSelected((prev) => (prev < programs.length - 1 ? prev + 1 : 0));
  }

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSelected((prev) => (prev < programs.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      className="cefrSection"
      id="seviyeler"
      aria-labelledby="cefr-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
    >
      <header className="cefrHeader">
        <p className="sectionKicker">Ortak Avrupa Dil Referans Çerçevesi</p>
        <h2 id="cefr-title">İngilizce Kur Programı <em>(CEFR Seviyeleri)</em></h2>
        <p>Başlangıçtan ileri seviyeye kadar her kur; ne öğrenmeniz gerektiğini, hangi becerileri kazanacağınızı ve bir sonraki aşamaya nasıl geçeceğinizi açıkça gösterir.</p>
      </header>

      <div className="cefrNavWrapper">
        <button type="button" className="cefrNavArrow prev" onClick={handlePrev} aria-label="Önceki Seviye">‹</button>
        <div className="cefrFilters" aria-label="İngilizce seviyesini seçin">
          {programs.map((item, index) => (
            <button key={item.filter} className={selected === index ? "active" : ""} onClick={() => setSelected(index)} aria-pressed={selected === index}>
              <span>{item.filter}</span><small>{item.label}</small>
            </button>
          ))}
        </div>
        <button type="button" className="cefrNavArrow next" onClick={handleNext} aria-label="Sonraki Seviye">›</button>
      </div>

      <article className="cefrProgram">
        <div className="cefrOverview">
          <div className="cefrLevel"><span>{program.filter}</span><i>{program.label}</i></div>
          <h3>{program.title}</h3>
          <p>{program.description}</p>
          <div className="cefrFacts"><span><small>Tahmini süre</small>{program.duration}</span><span><small>Önerilen tempo</small>{program.pace}</span></div>
          <div className="cefrActions"><a href="#seviye-testi">Seviyeni ücretsiz belirle</a><a href="#programlar">Kurs türlerini incele</a></div>
        </div>
        <div className="cefrColumn content">
          <span className="cefrColumnLabel">Ders içeriği</span>
          <ol>{program.content.map((item, index) => <li key={item}><i>{index + 1}</i>{item}</li>)}</ol>
        </div>
        <div className="cefrColumn outcomes">
          <span className="cefrColumnLabel">Kazanımlar</span>
          <ul>{program.outcomes.map((item) => <li key={item}><i>✓</i>{item}</li>)}</ul>
        </div>
      </article>
    </section>
  );
}
