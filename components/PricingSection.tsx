"use client";

import { useMemo, useState } from "react";
import { getCity } from "@/lib/cities";
import { getPricingComparison } from "@/lib/pricingComparison";

const offers = [
  { name: "Genel İngilizce", price: "₺4.900", period: "aylık", duration: "16–24 hafta", capacity: "8–12 kişi", description: "Dört temel dil becerisini birlikte geliştiren, seviyenize göre yapılandırılmış yüz yüze veya canlı online grup programı.", note: "Ders materyalleri ve konuşma kulübü dahil" },
  { name: "IELTS / TOEFL", price: "₺6.750", period: "aylık", duration: "12–20 hafta", capacity: "6–10 kişi", description: "Hedef puanınıza göre deneme sınavları, writing değerlendirmesi ve bireysel performans geri bildirimi içeren yoğun hazırlık.", note: "Deneme sınavları ve puan analizi dahil" },
  { name: "İş İngilizcesi", price: "₺5.900", period: "aylık", duration: "12–16 hafta", capacity: "6–10 kişi", description: "Toplantı, sunum, e-posta ve mülakat becerilerini sektörünüze uygun gerçek iş senaryolarıyla geliştirin.", note: "Sunum ve mülakat simülasyonları dahil" },
  { name: "Online İngilizce", price: "₺3.950", period: "aylık", duration: "16–24 hafta", capacity: "6–12 kişi", description: "Canlı dersler, dijital alıştırmalar ve haftalık eğitmen geri bildirimiyle bulunduğunuz yerden düzenli ilerleyin.", note: "Eğitim platformuna tam erişim dahil" },
  { name: "Bire Bir Eğitim", price: "₺1.450", period: "ders başına", duration: "Kişiye özel", capacity: "1 kişi", description: "Hedefinize, seviyenize ve takviminize göre tamamen kişiselleştirilmiş içerikle eğitmeninizle bire bir çalışın.", note: "Kişisel çalışma planı ve koçluk dahil" },
];

export function PricingSection({ city }: { city: string }) {
  const cityObj = useMemo(() => getCity(city), [city]);
  const comparisonList = useMemo(() => getPricingComparison(city), [city]);
  const [selected, setSelected] = useState(0);
  const offer = offers[selected];

  return (
    <section className="pricingSection" id="fiyatlar" aria-labelledby="pricing-title">
      <header className="pricingHeader">
        <p className="sectionKicker">Şeffaf program bilgisi</p>
        <h2 id="pricing-title">{cityObj.name} İngilizce Kursu Fiyatları</h2>
        <p>
          Program ücretleri ders yoğunluğu, sınıf yapısı ve eğitim süresine göre değişir. Size uygun planı seçmek için <a href="#programlar" className="contextualLink">kurs seçeneklerini</a> ve <a href="#seviyeler" className="contextualLink">CEFR eğitim seviyelerini</a> karşılaştırın.
        </p>
      </header>

      <div className="priceTabs" role="tablist" aria-label="Fiyatı görüntülenecek programı seçin">
        {offers.map((item, index) => (
          <button
            role="tab"
            id={`price-tab-${index}`}
            aria-controls="price-panel"
            aria-selected={selected === index}
            key={item.name}
            className={selected === index ? "active" : ""}
            onClick={() => setSelected(index)}
          >
            <strong>{item.name}</strong>
            <span>{item.price}</span>
            <small>{item.duration} · {item.capacity}</small>
          </button>
        ))}
      </div>

      <div className="priceSpotlight" id="price-panel" role="tabpanel" aria-labelledby={`price-tab-${selected}`}>
        <div className="priceIdentity">
          <span>Seçili program</span>
          <h3>{offer.name}</h3>
          <p>{offer.description}</p>
          <small><i>✓</i>{offer.note}</small>
        </div>
        <div className="priceNumber">
          <span>Başlangıç fiyatı</span>
          <strong>{offer.price}</strong>
          <small>{offer.period}</small>
        </div>
        <div className="priceSummary">
          <div><span>Program süresi</span><strong>{offer.duration}</strong></div>
          <div><span>Sınıf kontenjanı</span><strong>{offer.capacity}</strong></div>
          <a href="#seviye-testi">Kişisel teklif alın <span>↗</span></a>
        </div>
      </div>

      <p className="priceDisclaimer">
        Gösterilen tutarlar örnek başlangıç fiyatlarıdır. Güncel ücret; dönem, kampanya, ders saati ve programa göre kesinleşir.
      </p>

      {/* Online vs Fiziksel Kurs Karşılaştırma Bloğu */}
      <div className="pricingComparisonBlock">
        <header className="comparisonHeader">
          <h3>{cityObj.name} Online İngilizce Kursu ile Fiziksel Kurs Karşılaştırması</h3>
          <p>
            {cityObj.locative} İngilizce kursu seçeneklerini değerlendirirken ders formatı, konuşma pratiği süresi, ulaşım ve esneklik gibi kriterleri birlikte karşılaştırabilirsiniz.
          </p>
        </header>

        <div className="comparisonTableWrapper">
          <table className="comparisonTable" aria-label={`${cityObj.name} Online ve Fiziksel İngilizce Kursu Karşılaştırması`}>
            <thead>
              <tr>
                <th scope="col">Karşılaştırma Kriteri</th>
                <th scope="col" className="highlightHeader">Online Canlı Eğitim (Konuşarak Öğren)</th>
                <th scope="col">Geleneksel Fiziksel Şube Eğitimi</th>
              </tr>
            </thead>
            <tbody>
              {comparisonList.map((item) => (
                <tr key={item.id}>
                  <td className="criterionCell">
                    <strong>{item.category}</strong>
                  </td>
                  <td className="onlineCell">
                    <span aria-hidden="true">✓</span> {item.online}
                  </td>
                  <td className="physicalCell">
                    <span aria-hidden="true">•</span> {item.physical}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="comparisonFooter">
          <p>
            Fiziksel şube kurs fiyatları kurum, lokasyon ve ders saatine göre değişiklik gösterebilir. Size en uygun online veya yüz yüze eğitim seçeneği için ücretsiz seviye tespiti başlatın.
          </p>
          <a className="comparisonCta" href="#seviye-testi">
            Ücretsiz seviyeni belirle <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
