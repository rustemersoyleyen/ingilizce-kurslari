import { getDistrictsForCity } from "./districts";
import { getCourseTypesForCity } from "./courseTypes";
import { getCity } from "./cities";

export type InternalLinkItem = {
  title: string;
  detail: string;
  href: string;
  category?: string;
};

export type InternalLinkGroup = {
  label: string;
  links: InternalLinkItem[];
};

export function getInternalLinksForCity(citySlug: string): InternalLinkGroup[] {
  const currentCityObj = getCity(citySlug);
  const cityDistricts = getDistrictsForCity(citySlug);
  const courseTypes = getCourseTypesForCity(citySlug);

  // 1. Diğer Şehir Sayfaları (Gerçek Next.js Route'ları: /istanbul/, /ankara/, /izmir/)
  const otherCities = ["istanbul", "ankara", "izmir"].filter(
    (slug) => slug !== currentCityObj.slug
  );

  const cityLinks: InternalLinkItem[] = otherCities.flatMap((slug) => {
    const cityObj = getCity(slug);
    return [
      {
        title: `${cityObj.name} İngilizce Kursu`,
        detail: `${cityObj.name} şehir ve şube rehberi`,
        href: `/${slug}/`,
      },
      {
        title: `${cityObj.name} İngilizce Kursu Fiyatları`,
        detail: "Program ve ödeme seçenekleri",
        href: `/${slug}/#fiyatlar`,
      },
      {
        title: `${cityObj.name} İngilizce Kursu Yorumları`,
        detail: "Doğrulanmış öğrenci deneyimleri",
        href: `/${slug}/#yorumlar`,
      },
    ];
  });

  // 2. Şehir × İlçe × Kurs Türü Matrisi (Gerçek Section Anchor'ları: #ilceler, #programlar)
  const districtMatrixLinks: InternalLinkItem[] = [];

  // Her ilçe için Ana İlçe Kurs Linki ve Kurs Türü Linkleri
  cityDistricts.slice(0, 4).forEach((district) => {
    // İlçe Ana Bağlantısı
    districtMatrixLinks.push({
      title: `${district.name} İngilizce Kursu`,
      detail: `${currentCityObj.name} ${district.name} şube & ulaşım bilgisi`,
      href: `/${currentCityObj.slug}/#ilceler`,
      category: district.name,
    });

    // İlçe × Kurs Türü Matris Bağlantıları
    courseTypes.slice(0, 2).forEach((course) => {
      districtMatrixLinks.push({
        title: `${district.name} ${course.title} Kursu`,
        detail: `${course.promise} (${currentCityObj.name})`,
        href: `/${currentCityObj.slug}/#programlar`,
        category: district.name,
      });
    });
  });

  // 3. Mevcut Doğrulanmış Konu Rehberleri
  const topicGuides: InternalLinkGroup[] = [
    {
      label: "Sınav hazırlığı",
      links: [
        { title: "IELTS hazırlığına hangi seviyede başlanır?", detail: "Seviye ve hedef planı", href: `#programlar` },
        { title: "IELTS ve TOEFL arasındaki fark nedir?", detail: "Sınav programları", href: `#programlar` },
        { title: "Writing puanı nasıl yükseltilir?", detail: "Eğitmen geri bildirimleri", href: `#egitmenler` },
        { title: "Sınav hazırlık kursu ne kadar sürer?", detail: "Süre ve fiyatlar", href: `#fiyatlar` },
        { title: "Online sınav hazırlığı verimli mi?", detail: "Dijital platform", href: `#platform` },
        { title: "Deneme sınavı neden önemlidir?", detail: "IELTS / TOEFL programı", href: `#programlar` },
        { title: "Hedef puana göre program nasıl seçilir?", detail: "Ücretsiz seviye analizi", href: `#seviye-testi` },
        { title: "Sınav kursunda sınıf mevcudu kaçtır?", detail: "Kontenjan bilgisi", href: `#fiyatlar` },
      ],
    },
    {
      label: "Kariyer İngilizcesi",
      links: [
        { title: "İş İngilizcesi kimler için uygundur?", detail: "Program rehberi", href: `#programlar` },
        { title: "İngilizce mülakata nasıl hazırlanılır?", detail: "Kariyer pratiği", href: `#programlar` },
        { title: "Toplantılarda daha akıcı nasıl konuşulur?", detail: "Speaking Club", href: `#seviyeler` },
        { title: "Profesyonel e-posta nasıl yazılır?", detail: "B1–B2 kazanımları", href: `#seviyeler` },
        { title: "Şirketlere özel İngilizce eğitimi var mı?", detail: "Kurumsal seçenekler", href: `#fiyatlar` },
        { title: "Bire bir İş İngilizcesi alınabilir mi?", detail: "Kişisel teklif", href: `#fiyatlar` },
        { title: "Sunum İngilizcesi nasıl geliştirilir?", detail: "Eğitmen ve içerik", href: `#egitmenler` },
        { title: "İş İngilizcesi kursu ne kadar sürer?", detail: "Süre ve kontenjan", href: `#fiyatlar` },
      ],
    },
    {
      label: "Öğrenme ipuçları",
      links: [
        { title: "İngilizce konuşma korkusu nasıl aşılır?", detail: "Öğrenci deneyimleri", href: `#yorumlar` },
        { title: "Her gün kaç dakika İngilizce çalışılmalı?", detail: "Online çalışma planı", href: `#platform` },
        { title: "Kelime öğrenmenin en etkili yolu nedir?", detail: "Dijital tekrar sistemi", href: `#platform` },
        { title: "Speaking Club akıcılığı geliştirir mi?", detail: "Konuşma programı", href: `#seviyeler` },
        { title: "Seviye tespit sınavı nasıl yapılır?", detail: "Ücretsiz analiz", href: `#seviye-testi` },
        { title: "Ders kaçırınca telafi yapılabilir mi?", detail: "Program seçenekleri", href: `#programlar` },
        { title: "Doğru eğitmen öğrenmeyi nasıl etkiler?", detail: "Eğitmenleri tanıyın", href: `#egitmenler` },
        { title: "İngilizce öğrenme planı nasıl kurulur?", detail: "Kayıt ve başlangıç", href: `#kayit-sureci` },
      ],
    },
  ];

  return [
    {
      label: `${currentCityObj.name} İlçeleri & Kurslar`,
      links: districtMatrixLinks,
    },
    {
      label: "Diğer şehirler",
      links: cityLinks,
    },
    ...topicGuides,
  ];
}
