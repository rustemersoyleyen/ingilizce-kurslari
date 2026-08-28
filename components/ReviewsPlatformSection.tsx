"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { getAssetPath } from "@/lib/basePath";
import { getReviewsForCity, Review } from "@/lib/reviews";
import { getDistrictsForCity } from "@/lib/districts";
import { getCity } from "@/lib/cities";

const platformScreens = [
  { label: "Bugünkü plan", title: "15 dakikada devam et", kind: "progress", detail: "Konuşma · Ünite 06" },
  { label: "Canlı sınıf", title: "Dersin 19.30'da", kind: "class", detail: "Teacher Alice · 6 kişi" },
  { label: "Kelime setin", title: "12 kelime tekrar bekliyor", kind: "words", detail: "İş İngilizcesi" },
  { label: "İlerleme", title: "B1 yolculuğun %68", kind: "score", detail: "Bu hafta +240 puan" },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="reviewStars" aria-label={`${count} üzerinden 5 yıldız`}>
      {"★★★★★".slice(0, count)}
      <i>{"★★★★★".slice(count)}</i>
    </span>
  );
}

export function ReviewsPlatformSection({ city }: { city: string }) {
  const cityObj = useMemo(() => getCity(city), [city]);
  const reviews = useMemo(() => getReviewsForCity(city), [city]);
  const districtList = useMemo(() => getDistrictsForCity(city).map((d) => d.name), [city]);
  const [filter, setFilter] = useState("Tümü");
  const filters = ["Tümü", ...districtList.slice(0, 3), "Genel İngilizce", "IELTS / TOEFL", "Online İngilizce"];

  // Dinamik Aggregate Hesaplama (Mevcut Şehir Yorum Verisinden)
  const totalReviews = reviews.length;
  const avgRating =
    totalReviews > 0
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1)
      : "0.0";

  const ratingCounts = useMemo(() => {
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach((r) => {
      if (r.rating in counts) {
        counts[r.rating as keyof typeof counts]++;
      }
    });
    return counts;
  }, [reviews]);

  const visibleReviews = useMemo(() => {
    return reviews.filter((review) => {
      if (filter === "Tümü") return true;
      return review.course === filter || review.districtName === filter;
    });
  }, [filter, reviews]);

  return (
    <>
      <section className="reviewsSection" id="yorumlar" aria-labelledby="reviews-title">
        <header className="reviewsHeader">
          <div>
            <p className="sectionKicker">Öğrenciler anlatıyor</p>
            <h2 id="reviews-title">{city} İngilizce Kursu Yorumları</h2>
          </div>
          <p>
            Farklı hedeflerle başlayan öğrencilerin sınıf, eğitmen ve program deneyimlerini inceleyin; size en yakın öğrenme yolunu görün.
          </p>
        </header>

        {/* Google Business Profile Benzeri Aggregate Rating + AI Summary Kartı */}
        <div className="reviewSummaryCard">
          <div className="summaryScoreBox">
            <strong>{avgRating}</strong>
            <Stars count={Math.round(Number(avgRating))} />
            <p>{totalReviews} doğrulanmış öğrenci değerlendirmesi</p>
          </div>

          <div className="summaryBarsBox">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = ratingCounts[star as keyof typeof ratingCounts];
              const pct = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
              return (
                <div key={star} className="summaryBarRow">
                  <span>{star} ★</span>
                  <div className="summaryBarBg">
                    <div className="summaryBarFill" style={{ width: `${pct}%` }} />
                  </div>
                  <small>{count}</small>
                </div>
              );
            })}
          </div>

          <div className="summaryAiBox">
            <span className="aiBadge">✨ AI Öğrenci Deneyim Özeti</span>
            <p>
              <strong>{city} İngilizce kursu öğrencilerimizin yorumlarında öne çıkanlar:</strong> Katılımcılarımız özellikle bire bir konuşma pratiklerini, iş hayatına uyarlanan sunum simülasyonlarını ve eğitmenlerin destekleyici yaklaşımını vurguluyor.
            </p>
          </div>
        </div>

        {/* Sözel Bağlantı / Natural Verbalization Alanı */}
        <p className="verbalizationContext">
          <span>Konuma ve programa göre filtreleyin:</span>{" "}
          <strong>
            {filter === "Tümü"
              ? `${city} İngilizce kurs yorumlarını ve deneyimlerini inceliyorsunuz.`
              : `${city} ${filter} İngilizce kursu yorumlarını inceliyorsunuz.`}
          </strong>
        </p>

        <div className="reviewFilters" aria-label="Yorumları filtrele">
          {filters.map((item) => (
            <button
              className={filter === item ? "active" : ""}
              key={item}
              onClick={() => setFilter(item)}
            >
              {item} {item !== "Tümü" ? "yorumları" : ""}
            </button>
          ))}
        </div>

        <p className="reviewResult">{visibleReviews.length} öğrenci deneyimi gösteriliyor</p>

        {visibleReviews.length ? (
          <div className="reviewRail">
            {visibleReviews.map((review) => (
              <article
                className="reviewCard"
                key={review.name + review.course}
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="reviewMeta">
                  <span>{review.course}</span>
                  <Stars count={review.rating} />
                </div>
                <h3 itemProp="name">“{review.title}”</h3>
                <p className="reviewBody" itemProp="reviewBody">
                  {review.body}
                </p>
                <div
                  className="reviewAuthor"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span className="reviewAvatar" aria-hidden="true">
                    {review.name.slice(0, 2)}
                  </span>
                  <div>
                    <strong itemProp="name">{review.name}</strong>
                    <small>
                      {review.role} · {review.districtName}
                    </small>
                  </div>
                </div>
                <p className="reviewSource">
                  <span>✓</span>
                  {review.source}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="reviewEmpty">
            Bu filtre için henüz yorum bulunmuyor. Başka bir bölge veya program seçin.
          </div>
        )}
      </section>

      <section className="platformSection" id="platform" aria-labelledby="platform-title">
        <div className="platformIntro">
          <p className="sectionKicker">Ders dışında da yanında</p>
          <h2 id="platform-title">{cityObj.name} İngilizce Kursu Mobil Uygulaması & Canlı Ders Takibi</h2>
          <p>
            {cityObj.locative} yüz yüze ve online İngilizce kursu alan öğrencilerimiz; canlı İngilizce derslerini, kişisel konuşma pratiği takvimini, kelime kartlarını ve eğitmen geri bildirimlerini mobil uygulamamız üzerinden 7/24 takip edebilir.
          </p>
          <div className="storeButtons">
            <a href="#seviye-testi" aria-label={`${cityObj.name} İngilizce kursu Android uygulaması için bilgi al`}>
              <span className="storeIcon">▶</span>
              <span>
                <small>Android için</small>Google Play
              </span>
            </a>
            <a href="#seviye-testi" aria-label={`${cityObj.name} İngilizce kursu iOS uygulaması için bilgi al`}>
              <span className="storeIcon apple">●</span>
              <span>
                <small>iPhone için</small>App Store
              </span>
            </a>
          </div>
          <p className="platformNote">
            <span>✓</span>{cityObj.name} kurslarımıza kayıtlı tüm öğrenciler için mobil platform erişimi ücretsizdir.
          </p>
        </div>

        <div className="phoneStage" aria-label="Eğitim platformundan örnek ekranlar">
          {platformScreens.map((screen, index) => (
            <div className={`phoneMock phone-${index + 1}`} key={screen.label}>
              <div className="phoneSpeaker" />
              <div className="phoneScreen">
                <div className="appTop">
                  <Image
                    src={getAssetPath("/logo/ko-logo-papagan.png")}
                    alt="Konuşarak Öğren"
                    width={24}
                    height={27}
                    style={{ height: "24px", width: "auto" }}
                  />
                  <i>{String(9 + index).padStart(2, "0")}:24</i>
                </div>
                <p>{screen.label}</p>
                <h3>{screen.title}</h3>
                <div className={`screenVisual ${screen.kind}`}>
                  {screen.kind === "progress" && (
                    <>
                      <span>6</span>
                      <i />
                      <i />
                      <i />
                    </>
                  )}
                  {screen.kind === "class" && (
                    <>
                      <span>AL</span>
                      <b>Katılmaya hazır</b>
                    </>
                  )}
                  {screen.kind === "words" && (
                    <>
                      <strong>pitch</strong>
                      <em>/pɪtʃ/</em>
                      <b>sunum · fikir</b>
                    </>
                  )}
                  {screen.kind === "score" && (
                    <>
                      <span>68%</span>
                      <i />
                    </>
                  )}
                </div>
                <small>{screen.detail}</small>
                <button type="button" tabIndex={-1}>
                  Devam et <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
