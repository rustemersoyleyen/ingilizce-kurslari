"use client";

import { useMemo, useState } from "react";
import { getCity } from "@/lib/cities";

// TODO: Şehre özel fiziksel şube kayıt ve oryantasyon illüstrasyon/görselleri e-teacher backend asset servisine bağlandığında güncellenecek.

const steps = [
  {
    title: "Seviye tespiti",
    short: "15 dakikalık ücretsiz analiz",
    body: "Kısa online seviye testi ve eğitim danışmanı görüşmesiyle mevcut İngilizce seviyenizi, konuşma rahatlığınızı ve hedeflerinizi belirliyoruz.",
    action: "Ücretsiz testi başlat",
    meta: "Sonuç aynı gün içinde hazır",
  },
  {
    title: "Kur seçimi",
    short: "Doğru başlangıç noktasını bulun",
    body: "CEFR standardına göre A1'den C2'ye kadar hedefinize en uygun konuşma kurunu ve ders programı türünü seçiyoruz.",
    action: "Kur programlarını incele",
    meta: "A1–C2 ve Speaking Club seçenekleri",
  },
  {
    title: "Program planı",
    short: "Takviminize uyan sınıfı seçin",
    body: "Seçtiğiniz ilçe, yüz yüze veya canlı online ders tercihinize göre hafta içi, akşam ya da hafta sonu takviminizi netleştiriyoruz.",
    action: "Program seçeneklerini gör",
    meta: "Esnek sınıf ve telafi seçenekleri",
  },
  {
    title: "Kayıt",
    short: "Yerinizi güvenle ayırın",
    body: "Seçtiğiniz sınıf kontenjanını onaylıyor, kayıt bilgilerinizi tamamlıyor ve dijital ders materyallerinize erişiminizi açıyoruz.",
    action: "Kayıt için görüş",
    meta: "Şeffaf ücret ve iade koşulları",
  },
  {
    title: "Derse başlama",
    short: "İlk günden konuşmaya başlayın",
    body: "Eğitmeniniz ve sınıf arkadaşlarınızla tanışın; kişisel öğrenme planınız ve ilk konuşma hedefinizle derse başlayın.",
    action: "İlk adımı at",
    meta: "Platform ve konuşma kulübü erişimi",
  },
];

function StepVisualGraphic({ active, city, step }: { active: number; city: string; step: typeof steps[0] }) {
  return (
    <div className="simpleVisualCard">
      <div className="cardStepHeader">
        <span className="cardStepBadge">Adım {String(active + 1).padStart(2, "0")} / 05</span>
        <span className="cardStepMeta">{step.meta}</span>
      </div>

      <div className="cardStepMain">
        <h3 className="cardStepTitle">{step.title}</h3>
        <p className="cardStepSubtitle">{step.short}</p>
      </div>

      <div className="cardStepFeature">
        {active === 0 && (
          <div className="cefrBar">
            <span className="cefrLabel">CEFR Seviyeleri:</span>
            <div className="cefrLevels">
              <span className="cLevel active">A1</span>
              <span className="cLevel active">A2</span>
              <span className="cLevel active">B1</span>
              <span className="cLevel">B2</span>
              <span className="cLevel">C1</span>
              <span className="cLevel">C2</span>
            </div>
          </div>
        )}

        {active === 1 && (
          <div className="courseTagsRow">
            <span>Genel İngilizce</span>
            <span>İş İngilizcesi</span>
            <span>IELTS / TOEFL</span>
            <span>Speaking Club</span>
          </div>
        )}

        {active === 2 && (
          <div className="schedulePillsRow">
            <span>📅 Hafta İçi Akşam</span>
            <span>☀️ Hafta Sonu Gündüz</span>
            <span>🔄 Esnek Telafi Dersi</span>
          </div>
        )}

        {active === 3 && (
          <div className="guaranteeList">
            <span>✓ {city} Kontenjanı Rezerve Edildi</span>
            <span>✓ Dijital Kütüphane & Mobil Uygulama</span>
            <span>✓ Şeffaf İade Koşulları</span>
          </div>
        )}

        {active === 4 && (
          <div className="firstLessonCard">
            <span className="firstLessonIcon">👩‍🏫</span>
            <div>
              <strong>Teacher ile İlk Canlı Konuşma</strong>
              <small>İlk günden itibaren özgüvenle konuşmaya başlayın</small>
            </div>
          </div>
        )}
      </div>

      <div className="cardStepFooter">
        <p className="cardStepTip">
          <strong>{city} Öğrencileri İçin:</strong> {step.body}
        </p>
      </div>
    </div>
  );
}

export function EnrollmentProcessSection({ city }: { city: string }) {
  const cityObj = useMemo(() => getCity(city), [city]);
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="enrollmentSection" id="kayit-sureci" aria-labelledby="enrollment-title">
      <header className="enrollmentHeader">
        <p className="sectionKicker">Beş adımda sınıfa katılın</p>
        <h2 id="enrollment-title">{cityObj.name} İngilizce Kursu Kayıt Süreci</h2>
        <p>
          {cityObj.locative} İngilizce kursuna kayıt olmak isteyen öğrencilerimiz için seviye tespitinden ilk derse kadar tüm süreç şeffaf ve hızlı ilerler. Hemen başlamak için <a href="#seviye-testi" className="contextualLink">ücretsiz seviye tespit sınavına</a> katılın.
        </p>
      </header>

      <div className="enrollmentExperience">
        <div className="processVisual" aria-label={`Kayıt süreci: ${active + 1}. adım`}>
          <div className="processVisualHeader">
            <div className="cityBadge">
              <span className="livePulse" />
              <span>{cityObj.name} Kayıt & Online Kabul</span>
            </div>
            <span className="speedBadge">24 Saatte İlk Ders</span>
          </div>

          <div className="processVisualBody">
            <StepVisualGraphic active={active} city={cityObj.name} step={step} />
          </div>

          <div className="processVisualFooter">
            <div className="processTrack">
              {steps.map((item, index) => (
                <button
                  key={item.title}
                  className={index === active ? "active" : index < active ? "done" : ""}
                  onClick={() => setActive(index)}
                  aria-label={`${index + 1}. adım: ${item.title}`}
                >
                  <span>{index < active ? "✓" : index + 1}</span>
                </button>
              ))}
            </div>
            <p className="processFooterMeta">
              <strong>{active + 1} / {steps.length}</strong> · {cityObj.name}&apos;de ortalama kayıt süresi 1 iş günü
            </p>
          </div>
        </div>

        <div className="processSteps">
          {steps.map((item, index) => (
            <article className={active === index ? "active" : ""} key={item.title}>
              <button onClick={() => setActive(index)} aria-expanded={active === index}>
                <span>Adım {String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
                <i>{active === index ? "−" : "+"}</i>
              </button>
              {active === index && (
                <div className="processDetail">
                  <p>{item.body}</p>
                  <small>
                    <span>✓</span>
                    {item.meta}
                  </small>
                  <a href={index === 1 ? "#seviyeler" : index === 2 ? "#ilceler" : "#seviye-testi"}>
                    {item.action}
                    <span>↗</span>
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
