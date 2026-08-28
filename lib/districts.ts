export type District = {
  name: string;
  students: string;
  branches: string;
  access: string;
  description: string;
  advantages: string[];
  audience: string[];
  question: string;
  answer: string;
};

export const cityDistricts: Record<string, District[]> = {
  istanbul: [
    {
      name: "Kadıköy",
      students: "1.240+ kursiyer",
      branches: "2 şube",
      access: "metro ve vapura 6 dk.",
      description: "Anadolu Yakası'nda okul, iş ve sosyal hayatın kesiştiği noktada; konuşma pratiği yoğun sınıflarla İngilizceyi günlük rutininize taşır.",
      advantages: ["Akşam ve hafta sonu sınıfları", "Vapur ve metroya yakın konum", "Ücretsiz konuşma kulübü"],
      audience: ["Üniversite öğrencileri", "Genç profesyoneller", "Konuşma pratiği arayanlar"],
      question: "Kadıköy İngilizce kursuna hangi seviyeden başlayabilirim?",
      answer: "Ücretsiz seviye tespitinden sonra A1–C2 arasındaki uygun sınıfa yerleşebilirsiniz.",
    },
    {
      name: "Beşiktaş",
      students: "980+ kursiyer",
      branches: "2 şube",
      access: "iskeleye 5 dk.",
      description: "İş ve üniversite hayatının merkezinde, yoğun programlara uyum sağlayan kısa ders blokları ve kariyer odaklı İngilizce seçenekleri sunar.",
      advantages: ["İş çıkışı ders saatleri", "İş İngilizcesi atölyeleri", "Bire bir geri bildirim"],
      audience: ["Beyaz yakalı çalışanlar", "Sınava hazırlananlar", "Yoğun programı olanlar"],
      question: "Beşiktaş şubesinde IELTS hazırlık var mı?",
      answer: "Evet. Grup ve bire bir IELTS/TOEFL hazırlık seçenekleri sunulur.",
    },
    {
      name: "Bakırköy",
      students: "760+ kursiyer",
      branches: "1 şube",
      access: "Marmaray'a 4 dk.",
      description: "Avrupa Yakası'nın ulaşımı kolay merkezlerinden birinde, yetişkinler ve gençler için dengeli sınıf programlarıyla düzenli ilerleme sağlar.",
      advantages: ["Marmaray ile kolay ulaşım", "Genç ve yetişkin grupları", "Telafi dersi seçeneği"],
      audience: ["Lise öğrencileri", "Yetişkin başlangıç grupları", "Düzenli program isteyenler"],
      question: "Bakırköy'de hafta sonu İngilizce kursu var mı?",
      answer: "Evet. Cumartesi ve pazar günleri farklı seviyelerde sınıflar açılır.",
    },
    {
      name: "Üsküdar",
      students: "690+ kursiyer",
      branches: "1 şube",
      access: "metroya 3 dk.",
      description: "Sakin sınıf ortamını merkezi ulaşım avantajıyla birleştirir; özellikle konuşma güveni kazanmak ve temelden ilerlemek isteyenlere uygundur.",
      advantages: ["Küçük sınıf yapısı", "Başlangıç seviyesi desteği", "Online dersle hibrit geçiş"],
      audience: ["İngilizceye yeniden başlayanlar", "Anadolu Yakası çalışanları", "Hibrit eğitim isteyenler"],
      question: "Üsküdar sınıflarında kaç öğrenci oluyor?",
      answer: "Sınıflar programa göre değişmekle birlikte ortalama 8–12 kişiden oluşur.",
    },
    {
      name: "Şişli",
      students: "840+ kursiyer",
      branches: "2 şube",
      access: "metrobüse 7 dk.",
      description: "Ofis bölgelerine yakın konumuyla kariyer hedeflerine odaklanan, sunum ve profesyonel iletişim pratiğini öne çıkaran bir öğrenme noktasıdır.",
      advantages: ["Kurumsal eğitim seçenekleri", "Sunum ve mülakat pratiği", "Esnek sınıf değişikliği"],
      audience: ["Profesyoneller", "İş arayanlar", "Kurumsal ekipler"],
      question: "Şişli'de kurumsal İngilizce eğitimi veriliyor mu?",
      answer: "Evet. Şirket hedeflerine ve ekip seviyesine göre özel program oluşturulur.",
    },
  ],
  ankara: [
    {
      name: "Çankaya",
      students: "1.080+ kursiyer",
      branches: "2 şube",
      access: "metroya 5 dk.",
      description: "Üniversite ve iş merkezlerine yakın, akademik ve profesyonel hedeflere uygun yoğun İngilizce programları sunar.",
      advantages: ["Akademik İngilizce", "Akşam sınıfları", "Konuşma kulübü"],
      audience: ["Üniversite öğrencileri", "Kamu çalışanları", "Profesyoneller"],
      question: "Çankaya'da hangi programlar var?",
      answer: "Genel İngilizce, sınav hazırlık ve İş İngilizcesi programları bulunur.",
    },
    {
      name: "Kızılay",
      students: "920+ kursiyer",
      branches: "2 şube",
      access: "metroya 2 dk.",
      description: "Şehrin ulaşım merkezinde, günün farklı saatlerinde başlayan sınıflarla yoğun tempoya kolayca uyum sağlar.",
      advantages: ["Merkezi konum", "Geniş saat seçeneği", "Seviye garantisi"],
      audience: ["Çalışanlar", "Öğrenciler", "Sınava hazırlananlar"],
      question: "Kızılay şubesine ulaşım kolay mı?",
      answer: "Şube metro ve ana otobüs duraklarına birkaç dakikalık yürüme mesafesindedir.",
    },
    {
      name: "Bahçelievler",
      students: "610+ kursiyer",
      branches: "1 şube",
      access: "Ankaray'a 6 dk.",
      description: "Öğrenci yaşamının merkezinde, uygun tempolu ve bol pratikli sınıflarla sürdürülebilir bir öğrenme deneyimi sağlar.",
      advantages: ["Öğrenci grupları", "Hafta sonu dersleri", "Dijital kaynak erişimi"],
      audience: ["Lise ve üniversite öğrencileri", "Başlangıç seviyeleri", "Hafta sonu öğrenenler"],
      question: "Bahçelievler'de öğrenci grupları var mı?",
      answer: "Evet. Yaşa ve seviyeye uygun genç yetişkin sınıfları düzenli olarak açılır.",
    },
    {
      name: "Keçiören",
      students: "480+ kursiyer",
      branches: "1 şube",
      access: "metroya 8 dk.",
      description: "Mahalleye yakın eğitim avantajını, canlı online ders ve telafi seçenekleriyle bir araya getirir.",
      advantages: ["Ulaşılabilir program", "Online telafi", "Küçük sınıflar"],
      audience: ["Yetişkin başlangıç grupları", "Lise öğrencileri", "Yakın çevrede yaşayanlar"],
      question: "Keçiören'de online telafi yapılabilir mi?",
      answer: "Uygun derslerde kaçırılan oturumlar online sınıfla telafi edilebilir.",
    },
    {
      name: "Ümitköy",
      students: "530+ kursiyer",
      branches: "1 şube",
      access: "metroya 7 dk.",
      description: "Modern sınıfları ve esnek saatleriyle bireysel hedeflere göre ilerlemek isteyen yetişkinlere odaklanır.",
      advantages: ["Modern sınıflar", "Bire bir seçenek", "Otopark kolaylığı"],
      audience: ["Profesyoneller", "Bire bir ders isteyenler", "Esnek saat arayanlar"],
      question: "Ümitköy'de bire bir İngilizce dersi var mı?",
      answer: "Evet. Hedefinize göre yüz yüze veya online bire bir program planlanabilir.",
    },
  ],
  izmir: [
    {
      name: "Konak",
      students: "970+ kursiyer",
      branches: "2 şube",
      access: "metroya 4 dk.",
      description: "İzmir'in merkezinde sınav, kariyer ve günlük konuşma hedeflerini farklı sınıf seçenekleriyle buluşturur.",
      advantages: ["Merkezi ulaşım", "Sınav hazırlık", "Akşam sınıfları"],
      audience: ["Çalışanlar", "Öğrenciler", "IELTS adayları"],
      question: "Konak'ta akşam sınıfları var mı?",
      answer: "Evet. İş çıkışına uygun hafta içi akşam sınıfları açılır.",
    },
    {
      name: "Karşıyaka",
      students: "820+ kursiyer",
      branches: "2 şube",
      access: "vapura 5 dk.",
      description: "Sahil hattındaki merkezi konumunda sosyal, konuşma ağırlıklı ve topluluk destekli bir İngilizce deneyimi sunar.",
      advantages: ["Konuşma kulübü", "Vapura yakın", "Sosyal etkinlikler"],
      audience: ["Genç yetişkinler", "Konuşma odaklı öğrenenler", "Sosyal sınıf isteyenler"],
      question: "Karşıyaka'da konuşma kulübü var mı?",
      answer: "Evet. Aktif kursiyerler haftalık konuşma etkinliklerine ücretsiz katılabilir.",
    },
    {
      name: "Bornova",
      students: "740+ kursiyer",
      branches: "1 şube",
      access: "metroya 6 dk.",
      description: "Üniversite çevresinde akademik hedefleri, sınav hazırlığını ve uygun tempolu genel İngilizce sınıflarını bir araya getirir.",
      advantages: ["Öğrenci dostu saatler", "Akademik İngilizce", "Deneme sınavları"],
      audience: ["Üniversite öğrencileri", "Erasmus adayları", "Sınava hazırlananlar"],
      question: "Bornova'da Erasmus hazırlığı yapılabilir mi?",
      answer: "Genel ve akademik İngilizce programları Erasmus hedefinize göre uyarlanabilir.",
    },
    {
      name: "Buca",
      students: "560+ kursiyer",
      branches: "1 şube",
      access: "ana duraklara 5 dk.",
      description: "Başlangıçtan orta seviyeye ilerleyen öğrenciler için düzenli takip ve öğretmen desteği sunan ulaşılabilir bir program merkezidir.",
      advantages: ["Başlangıç desteği", "Düzenli ilerleme raporu", "Hafta sonu seçeneği"],
      audience: ["Başlangıç seviyeleri", "Lise öğrencileri", "Hafta sonu öğrenenler"],
      question: "Buca'da başlangıç sınıfı açılıyor mu?",
      answer: "Evet. A1 seviyesinde hafta içi ve hafta sonu sınıfları düzenli olarak açılır.",
    },
    {
      name: "Balçova",
      students: "490+ kursiyer",
      branches: "1 şube",
      access: "aktarma merkezine 7 dk.",
      description: "Yetişkinler ve profesyoneller için esnek ders planını, iş hayatına dönük konuşma pratikleriyle tamamlar.",
      advantages: ["Esnek ders planı", "İş İngilizcesi", "Bire bir koçluk"],
      audience: ["Profesyoneller", "Yetişkin öğrenciler", "Kariyer hedefi olanlar"],
      question: "Balçova'da İş İngilizcesi var mı?",
      answer: "Evet. Mesleğinize ve iletişim ihtiyaçlarınıza göre program seçebilirsiniz.",
    },
  ],
};

// TODO: Yeni eklenecek şehirler için gerçek ilçe ve şube verileri entegre edilecek.
export function getDistrictsForCity(citySlug: string): District[] {
  const normalized = citySlug.toLocaleLowerCase("tr-TR");
  return cityDistricts[normalized] || cityDistricts.istanbul;
}
