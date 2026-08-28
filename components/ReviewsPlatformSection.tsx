"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Review = {
  name: string;
  role: string;
  districtIndex: number;
  course: string;
  rating: number;
  title: string;
  body: string;
  source: string;
};

const reviews: Review[] = [
  { name: "Ece Y.", role: "Ürün Tasarımcısı", districtIndex: 0, course: "İş İngilizcesi", rating: 5, title: "Toplantılarda artık sözü ben alıyorum", body: "Derslerin doğrudan iş hayatımdaki senaryolara göre ilerlemesi büyük fark yarattı. Sunum provaları sayesinde İngilizce konuşurken kendimi çok daha net ifade ediyorum.", source: "Kurs sonrası anket" },
  { name: "Mert K.", role: "Yüksek Lisans Öğrencisi", districtIndex: 1, course: "IELTS / TOEFL", rating: 5, title: "Hedef puanımı ilk denemede geçtim", body: "Writing geri bildirimleri çok detaylıydı. Nerede zaman kaybettiğimi ve cevaplarımı nasıl yapılandırmam gerektiğini ilk haftadan itibaren anladım.", source: "Doğrulanmış kursiyer" },
  { name: "Selin A.", role: "Pazarlama Uzmanı", districtIndex: 2, course: "Genel İngilizce", rating: 5, title: "Konuşma korkum birkaç haftada azaldı", body: "Sınıf ortamı yargılayıcı değil; hata yaptığımda konuşmaya devam etmem için destekleniyorum. Artık seyahatlerde İngilizce kullanmaktan çekinmiyorum.", source: "Kurs sonrası anket" },
  { name: "Can D.", role: "Yazılım Geliştirici", districtIndex: 3, course: "Online İngilizce", rating: 4, title: "Yoğun programa gerçekten uyuyor", body: "Canlı online dersler ofis programıma uydu. Dijital alıştırmalar ve eğitmenin haftalık notları, dersten kopmadan düzenli ilerlememi sağladı.", source: "Doğrulanmış kursiyer" },
  { name: "Zeynep T.", role: "Lise Öğrencisi", districtIndex: 0, course: "Genel İngilizce", rating: 5, title: "Ders değil, gerçek bir konuşma gibi", body: "Konular ilgi alanlarıma göre seçiliyor. Yeni kelimeleri ezberlemek yerine cümle içinde kullandığım için daha uzun süre hatırlıyorum.", source: "Kurs sonrası anket" },
];

const districts: Record<string, string[]> = {
  İstanbul: ["Kadıköy", "Beşiktaş", "Bakırköy", "Üsküdar"],
  Ankara: ["Çankaya", "Kızılay", "Bahçelievler", "Keçiören"],
  İzmir: ["Konak", "Karşıyaka", "Bornova", "Buca"],
};

const platformScreens = [
  { label: "Bugünkü plan", title: "15 dakikada devam et", kind: "progress", detail: "Konuşma · Ünite 06" },
  { label: "Canlı sınıf", title: "Dersin 19.30'da", kind: "class", detail: "Teacher Alice · 6 kişi" },
  { label: "Kelime setin", title: "12 kelime tekrar bekliyor", kind: "words", detail: "İş İngilizcesi" },
  { label: "İlerleme", title: "B1 yolculuğun %68", kind: "score", detail: "Bu hafta +240 puan" },
];

function Stars({ count }: { count: number }) {
  return <span className="reviewStars" aria-label={`${count} üzerinden 5 yıldız`}>{"★★★★★".slice(0, count)}<i>{"★★★★★".slice(count)}</i></span>;
}

export function ReviewsPlatformSection({ city }: { city: string }) {
  const cityDistricts = districts[city] ?? ["Merkez", "Kuzey", "Güney", "Online"];
  const [filter, setFilter] = useState("Tümü");
  const filters = ["Tümü", ...cityDistricts.slice(0, 3), "Genel İngilizce", "IELTS / TOEFL", "Online İngilizce"];

  const visibleReviews = useMemo(() => reviews.filter((review) => {
    if (filter === "Tümü") return true;
    return review.course === filter || cityDistricts[review.districtIndex] === filter;
  }), [filter, cityDistricts]);

  return (
    <>
      <section className="reviewsSection" id="yorumlar" aria-labelledby="reviews-title">
        <header className="reviewsHeader">
          <div>
            <p className="sectionKicker">Öğrenciler anlatıyor</p>
            <h2 id="reviews-title">{city} İngilizce Kursu Yorumları</h2>
          </div>
          <p>Farklı hedeflerle başlayan öğrencilerin sınıf, eğitmen ve program deneyimlerini inceleyin; size en yakın öğrenme yolunu görün.</p>
        </header>

        <div className="reviewFilters" aria-label="Yorumları filtrele">
          {filters.map((item) => (
            <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>

        <p className="reviewResult">{visibleReviews.length} öğrenci deneyimi gösteriliyor</p>
        {visibleReviews.length ? (
          <div className="reviewRail">
            {visibleReviews.map((review) => (
              <article className="reviewCard" key={review.name + review.course} itemScope itemType="https://schema.org/Review">
                <div className="reviewMeta"><span>{review.course}</span><Stars count={review.rating} /></div>
                <h3 itemProp="name">“{review.title}”</h3>
                <p className="reviewBody" itemProp="reviewBody">{review.body}</p>
                <div className="reviewAuthor" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span className="reviewAvatar" aria-hidden="true">{review.name.slice(0, 2)}</span>
                  <div><strong itemProp="name">{review.name}</strong><small>{review.role} · {cityDistricts[review.districtIndex]}</small></div>
                </div>
                <p className="reviewSource"><span>✓</span>{review.source}</p>
              </article>
            ))}
          </div>
        ) : <div className="reviewEmpty">Bu filtre için henüz yorum bulunmuyor. Başka bir bölge veya program seçin.</div>}
      </section>

      <section className="platformSection" id="platform" aria-labelledby="platform-title">
        <div className="platformIntro">
          <p className="sectionKicker">Ders dışında da yanında</p>
          <h2 id="platform-title">Online İngilizce Eğitim Platformu</h2>
          <p>Canlı derslerini, kişisel çalışma planını, kelime tekrarlarını ve eğitmen geri bildirimlerini tek yerde takip et. Öğrenme ritmin cebinde seninle devam etsin.</p>
          <div className="storeButtons">
            <a href="#seviye-testi" aria-label="Android uygulaması için bilgi al"><span className="storeIcon">▶</span><span><small>Android için</small>Google Play</span></a>
            <a href="#seviye-testi" aria-label="iOS uygulaması için bilgi al"><span className="storeIcon apple">●</span><span><small>iPhone için</small>App Store</span></a>
          </div>
          <p className="platformNote"><span>✓</span>Kursa kayıtlı öğrenciler için ücretsiz erişim</p>
        </div>

        <div className="phoneStage" aria-label="Eğitim platformundan örnek ekranlar">
          {platformScreens.map((screen, index) => (
            <div className={`phoneMock phone-${index + 1}`} key={screen.label}>
              <div className="phoneSpeaker" />
              <div className="phoneScreen">
                <div className="appTop">
                  <Image
                    src="/logo/ko-logo-papagan.png"
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
                  {screen.kind === "progress" && <><span>6</span><i /><i /><i /></>}
                  {screen.kind === "class" && <><span>AL</span><b>Katılmaya hazır</b></>}
                  {screen.kind === "words" && <><strong>pitch</strong><em>/pɪtʃ/</em><b>sunum · fikir</b></>}
                  {screen.kind === "score" && <><span>68%</span><i /></>}
                </div>
                <small>{screen.detail}</small>
                <button type="button" tabIndex={-1}>Devam et <span>→</span></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
