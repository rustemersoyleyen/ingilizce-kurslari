export type Teacher = {
  id: number;
  name: string;
  from: string;
  university: string;
  degree: string;
  styles: string[];
  interests: string[];
  bio: string;
  citySlugs?: string[]; // TODO: Şehir/kampüs bazlı fiziksel eğitmen ataması backend API entegrasyonu ile sağlanacak.
};

export const verifiedTeachers: Teacher[] = [
  {
    id: 147,
    name: "Louis",
    from: "Atlanta, Georgia",
    university: "University of Georgia",
    degree: "İngiliz Dili ve Edebiyatı",
    styles: ["İleri seviye", "Esnek program", "Nazik yönlendirme"],
    interests: ["Tarih", "Müzik", "Doğa"],
    bio: "Asya ve Avrupa'dan öğrencilerle çalışan, konuşma pratiğini kültür ve gündelik hayatla birleştiren deneyimli bir ESL eğitmeni.",
    citySlugs: ["istanbul", "ankara", "izmir"],
  },
  {
    id: 152,
    name: "Perry",
    from: "Memphis, Tennessee",
    university: "University of Memphis",
    degree: "İngilizce Öğretmenliği",
    styles: ["Başlangıç", "Çocuklar", "Dilbilgisi"],
    interests: ["Müzik", "Basketbol", "Dans"],
    bio: "Müzik ve ritmi derslerine taşıyan Perry, ilk dersten itibaren öğrencinin rahatça konuşmasına odaklanır.",
    citySlugs: ["istanbul", "ankara", "izmir"],
  },
  {
    id: 223,
    name: "Alice",
    from: "Orlando, Florida",
    university: "University of Central Florida",
    degree: "İletişim ve Konaklama Yönetimi",
    styles: ["Başlangıç", "Konuşma", "Yavaş anlatım"],
    interests: ["Yazı", "Şiir", "Doğa yürüyüşü"],
    bio: "Misafirperverlik deneyimini dil eğitimine taşıyarak gerçek hayattaki konuşmalar için güvenli ve neşeli bir alan kurar.",
    citySlugs: ["istanbul", "ankara", "izmir"],
  },
  {
    id: 257,
    name: "Kellin",
    from: "Cambridge, Massachusetts",
    university: "MCPHS University",
    degree: "Sağlık Bilimleri",
    styles: ["Her seviye", "Esnek program", "Dilbilgisi"],
    interests: ["Seyahat", "Kitaplar", "Doğa"],
    bio: "Her öğrenciden yeni bir şey öğrenildiğine inanan Kellin, açık anlatımı ve sabırlı geri bildirimleriyle ilerlemeyi görünür kılar.",
    citySlugs: ["istanbul", "ankara", "izmir"],
  },
  {
    id: 260,
    name: "Gareth",
    from: "New York",
    university: "New York School of the Arts",
    degree: "Güzel Sanatlar",
    styles: ["Başlangıç", "Yaratıcı öğretim", "Çocuklar"],
    interests: ["Fotoğraf", "Çizim", "Sanat"],
    bio: "Sanat ve görsel hikâye anlatımını kullanarak kelimeleri hatırlamayı ve doğal cümle kurmayı kolaylaştırır.",
    citySlugs: ["istanbul", "ankara", "izmir"],
  },
  {
    id: 1026,
    name: "Harleigh",
    from: "Tennessee",
    university: "Tennessee State University",
    degree: "İngilizce Öğretmenliği",
    styles: ["İleri seviye", "Dilbilgisi", "Yavaş anlatım"],
    interests: ["Kitaplar", "Eğitim", "Seyahat"],
    bio: "Güçlü kelime ve dilbilgisi bilgisiyle özellikle akademik hedefleri olan öğrencilere sakin, yapılandırılmış bir yol sunar.",
    citySlugs: ["istanbul", "ankara", "izmir"],
  },
  {
    id: 1457,
    name: "Hunter",
    from: "Memphis, Tennessee",
    university: "University of Tennessee",
    degree: "Sosyal Bilimler",
    styles: ["Her seviye", "Konuşma", "Nazik yönlendirme"],
    interests: ["Basketbol", "Kitaplar", "Yemek"],
    bio: "Meraklı ve arkadaş canlısı yaklaşımıyla öğrencilerin hata yapma kaygısını azaltır, konuşmayı günlük bir alışkanlığa dönüştürür.",
    citySlugs: ["istanbul", "ankara", "izmir"],
  },
  {
    id: 12635,
    name: "Shelby",
    from: "Nashville, Tennessee",
    university: "Trevecca Nazarene University",
    degree: "İngilizce Öğretmenliği",
    styles: ["Başlangıç", "İleri seviye", "Yavaş anlatım"],
    interests: ["Yazı", "Bilim", "Seyahat"],
    bio: "Beş yıllık özel ders deneyimiyle karmaşık konuları sadeleştirir ve başlangıç seviyesindeki öğrenciler için net bir rota çizer.",
    citySlugs: ["istanbul", "ankara", "izmir"],
  },
];

// TODO: Şehir/kampüs bazlı eğitmen eşleşmesi e-teacher API verisi ile dinamikleştirilecek.
export function getTeachersForCity(citySlug: string): Teacher[] {
  const normalized = citySlug.toLocaleLowerCase("tr-TR");
  const filtered = verifiedTeachers.filter((t) => !t.citySlugs || t.citySlugs.includes(normalized));
  return filtered.length > 0 ? filtered : verifiedTeachers;
}
