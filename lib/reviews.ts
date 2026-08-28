export type Review = {
  name: string;
  role: string;
  districtName: string;
  course: string;
  rating: number;
  title: string;
  body: string;
  source: string;
  citySlug: string;
};

export const cityReviews: Record<string, Review[]> = {
  istanbul: [
    {
      name: "Ece Y.",
      role: "Ürün Tasarımcısı",
      districtName: "Kadıköy",
      course: "İş İngilizcesi",
      rating: 5,
      title: "Toplantılarda artık sözü ben alıyorum",
      body: "Derslerin doğrudan iş hayatımdaki senaryolara göre ilerlemesi büyük fark yarattı. Sunum provaları sayesinde İngilizce konuşurken kendimi çok daha net ifade ediyorum.",
      source: "Kurs sonrası anket",
      citySlug: "istanbul",
    },
    {
      name: "Mert K.",
      role: "Yüksek Lisans Öğrencisi",
      districtName: "Beşiktaş",
      course: "IELTS / TOEFL",
      rating: 5,
      title: "Hedef puanımı ilk denemede geçtim",
      body: "Writing geri bildirimleri çok detaylıydı. Nerede zaman kaybettiğimi ve cevaplarımı nasıl yapılandırmam gerektiğini ilk haftadan itibaren anladım.",
      source: "Doğrulanmış kursiyer",
      citySlug: "istanbul",
    },
    {
      name: "Selin A.",
      role: "Pazarlama Uzmanı",
      districtName: "Bakırköy",
      course: "Genel İngilizce",
      rating: 5,
      title: "Konuşma korkum birkaç haftada azaldı",
      body: "Sınıf ortamı yargılayıcı değil; hata yaptığımda konuşmaya devam etmem için destekleniyorum. Artık seyahatlerde İngilizce kullanmaktan çekinmiyorum.",
      source: "Kurs sonrası anket",
      citySlug: "istanbul",
    },
    {
      name: "Can D.",
      role: "Yazılım Geliştirici",
      districtName: "Üsküdar",
      course: "Online İngilizce",
      rating: 4,
      title: "Yoğun programa gerçekten uyuyor",
      body: "Canlı online dersler ofis programıma uydu. Dijital alıştırmalar ve eğitmenin haftalık notları, dersten kopmadan düzenli ilerlememi sağladı.",
      source: "Doğrulanmış kursiyer",
      citySlug: "istanbul",
    },
    {
      name: "Zeynep T.",
      role: "Lise Öğrencisi",
      districtName: "Kadıköy",
      course: "Genel İngilizce",
      rating: 5,
      title: "Ders değil, gerçek bir konuşma gibi",
      body: "Konular ilgi alanlarıma göre seçiliyor. Yeni kelimeleri ezberlemek yerine cümle içinde kullandığım için daha uzun süre hatırlıyorum.",
      source: "Kurs sonrası anket",
      citySlug: "istanbul",
    },
  ],
  ankara: [
    {
      name: "Ahmet K.",
      role: "Kamu Çalışanı",
      districtName: "Çankaya",
      course: "İş İngilizcesi",
      rating: 5,
      title: "Uluslararası toplantılara rahatça katılıyorum",
      body: "Ankara Çankaya şubesindeki konuşma odaklı dersler ve terim çalışmaları kariyerimde özgüven sağladı.",
      source: "Doğrulanmış kursiyer",
      citySlug: "ankara",
    },
    {
      name: "Burcu M.",
      role: "Araştırma Görevlisi",
      districtName: "Kızılay",
      course: "IELTS / TOEFL",
      rating: 5,
      title: "Akademik makale ve mülakatlar için tam aradığım destek",
      body: "Kızılay şubesinde akademik speaking ve writing pratikleriyle hedef puana 2 ayda ulaştım.",
      source: "Kurs sonrası anket",
      citySlug: "ankara",
    },
    {
      name: "Deniz Y.",
      role: "Mühendis",
      districtName: "Bahçelievler",
      course: "Genel İngilizce",
      rating: 5,
      title: "Konuşma pratikleri harika",
      body: "Bahçelievler şubesinin akşam dersleri mesai sonrasına çok uygun. Eğitmenler son derece ilgili.",
      source: "Doğrulanmış kursiyer",
      citySlug: "ankara",
    },
  ],
  izmir: [
    {
      name: "Gözde T.",
      role: "İnsan Kaynakları Uzmanı",
      districtName: "Konak",
      course: "İş İngilizcesi",
      rating: 5,
      title: "Mülakat simülasyonları çok faydalı oldu",
      body: "Konak şubesinde yaptığımız bire bir mülakat provası sayesinde global bir firmadan kabul aldım.",
      source: "Doğrulanmış kursiyer",
      citySlug: "izmir",
    },
    {
      name: "Cem U.",
      role: "Yazılımcı",
      districtName: "Karşıyaka",
      course: "Online İngilizce",
      rating: 5,
      title: "Karşıyaka'dan canlı derslere katılmak çok konforlu",
      body: "Esnek saatler ve ana dili İngilizce öğretmenlerle pratik yapma imkanı harika.",
      source: "Kurs sonrası anket",
      citySlug: "izmir",
    },
    {
      name: "Ayşe N.",
      role: "Mimarlık Öğrencisi",
      districtName: "Bornova",
      course: "Genel İngilizce",
      rating: 5,
      title: "Bornova şubesinin enerjisi yüksek",
      body: "Öğrenci dostu atmosferi ve akıcı konuşma dersleri sayesinde konuşma tutukluğumu yendim.",
      source: "Doğrulanmış kursiyer",
      citySlug: "izmir",
    },
  ],
};

// TODO: Şehir ve ilçelere özel onaylı müşteri yorum veri seti genişletilecek.
export function getReviewsForCity(citySlug: string): Review[] {
  const normalized = citySlug.toLocaleLowerCase("tr-TR");
  return cityReviews[normalized] || cityReviews.istanbul;
}
