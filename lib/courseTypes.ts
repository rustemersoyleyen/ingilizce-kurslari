export type CourseType = {
  code: string;
  title: string;
  promise: string;
  description: string;
  advantages: string[];
  questions: { question: string; answer: string }[];
  featured?: boolean;
  iconKind?: "general" | "exam" | "career" | "online";
};

export const verifiedCourseTypes: CourseType[] = [
  {
    code: "A1—C2",
    title: "Genel İngilizce",
    promise: "Günlük hayatta özgürce konuş",
    description: "Konuşma, dinleme, okuma ve yazma becerilerini birlikte geliştiren; seviyen ilerledikçe seninle büyüyen kapsamlı program.",
    advantages: ["Avrupa Dil Portfolyosu ile uyumlu", "Bol konuşma pratiği", "Hafta içi ve hafta sonu sınıfları"],
    iconKind: "general",
    questions: [
      { question: "Hangi seviyeden başlamalıyım?", answer: "Ücretsiz seviye tespit sınavından sonra A1–C2 arasındaki doğru sınıfa yerleştirilirsin." },
      { question: "Program ne kadar sürer?", answer: "Her kurun süresi ders yoğunluğuna göre değişir; danışmanın sana uygun takvimi birlikte planlar." },
      { question: "Kaçırdığım dersleri telafi edebilir miyim?", answer: "Uygun sınıf ve saat bulunması halinde telafi planlaması yapılabilir." },
    ],
  },
  {
    code: "IELTS / TOEFL",
    title: "Sınav Hazırlık",
    promise: "Hedef puana stratejiyle ilerle",
    description: "Sınav formatını ezberlemek yerine, ölçülen dil becerilerini ve zaman yönetimini hedef puanına göre geliştiren yoğun hazırlık.",
    advantages: ["Deneme sınavları ve puan analizi", "Writing ve speaking geri bildirimi", "Kişiselleştirilmiş çalışma planı"],
    featured: true,
    iconKind: "exam",
    questions: [
      { question: "Hangi sınava hazırlanmalıyım?", answer: "Hedef okul, kurum veya vize şartına göre IELTS ya da TOEFL seçimini danışmanınla netleştirebilirsin." },
      { question: "Kaç puan artışı bekleyebilirim?", answer: "Sonuç başlangıç seviyene ve çalışma düzenine bağlıdır; ilk değerlendirmede gerçekçi bir hedef aralığı belirlenir." },
      { question: "Bire bir ders seçeneği var mı?", answer: "Evet, grup programına ek veya bağımsız bire bir hazırlık planlanabilir." },
    ],
  },
  {
    code: "CAREER",
    title: "İş İngilizcesi",
    promise: "Toplantıda, sunumda, mülakatta hazır ol",
    description: "Mesleki kelime bilgisini gerçek iş senaryolarıyla birleştiren; e-posta, toplantı ve sunum becerilerine odaklanan program.",
    advantages: ["Sektöre özel kelime çalışması", "Sunum ve mülakat simülasyonu", "Profesyonel yazışma pratiği"],
    iconKind: "career",
    questions: [
      { question: "Program sektörüm için uyarlanabilir mi?", answer: "Evet. İçerik rolüne, sektörüne ve İngilizceyi kullandığın gerçek durumlara göre özelleştirilebilir." },
      { question: "Şirket grupları için eğitim var mı?", answer: "Ekip seviyesi ve iş hedeflerine göre kurumsal grup programları hazırlanabilir." },
      { question: "Dersler İngilizce mülakata yardımcı olur mu?", answer: "Mülakat soruları, güçlü cevap yapıları ve prova çalışmaları programa dahil edilebilir." },
    ],
  },
  {
    code: "LIVE ONLINE",
    title: "Online İngilizce",
    promise: "Bulunduğun yerden canlı derse katıl",
    description: "Sınıf enerjisini ekrana taşıyan canlı dersler, dijital materyaller ve düzenli eğitmen geri bildirimiyle esnek öğrenme.",
    advantages: ["Canlı ve etkileşimli dersler", "Dijital kaynaklara sürekli erişim", "Şehirden bağımsız esnek program"],
    iconKind: "online",
    questions: [
      { question: "Online dersler canlı mı?", answer: "Evet. Dersler eğitmenle canlı yürütülür; soru sorabilir ve sınıf arkadaşlarınla pratik yapabilirsin." },
      { question: "Hangi ekipmana ihtiyacım var?", answer: "İnternet bağlantısı, kamera ve mikrofonu olan bir bilgisayar ya da tablet yeterlidir." },
      { question: "Yüz yüze programa geçebilir miyim?", answer: "Şube ve sınıf uygunluğuna göre program değişikliği danışmanınla planlanabilir." },
    ],
  },
];

// TODO: Şehre özel kampanya/müfredat içerik uyarlaması eklenebilir.
export function getCourseTypesForCity(citySlug?: string): CourseType[] {
  return verifiedCourseTypes;
}
