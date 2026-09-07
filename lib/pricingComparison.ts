export type ComparisonCriterion = {
  id: string;
  category: string;
  online: string;
  physical: string;
  onlineAdvantage?: boolean;
};

export const verifiedPricingComparison: ComparisonCriterion[] = [
  {
    id: "format",
    category: "Ders Formatı",
    online: "Ana dili İngilizce eğitmenle bire bir canlı konuşma pratiği",
    physical: "Şube ortamında yüz yüze grup veya bire bir ders",
    onlineAdvantage: true,
  },
  {
    id: "access",
    category: "Platform & Materyal Erişimi",
    online: "Mobil uygulama üzerinden 7/24 kelime kartları ve ders takibi",
    physical: "Ders saatlerinde basılı materyal ve şube derslik kullanımı",
    onlineAdvantage: true,
  },
  {
    id: "scheduling",
    category: "Ders Planlama & Esneklik",
    online: "İstediğin gün ve saatte esnek ders randevusu ve kolay online telafi",
    physical: "Sabit şube ders programı ve şube kontenjanına bağlı telafi",
    onlineAdvantage: true,
  },
  {
    id: "transportation",
    category: "Ulaşım & Lokasyon",
    online: "Evden, ofisten veya yoldan katılım; sıfır ulaşım zamanı ve maliyeti",
    physical: "Şubeye gidiş-geliş ulaşım süresi ve lokasyona bağlılık",
    onlineAdvantage: true,
  },
  {
    id: "speaking_time",
    category: "Konuşma Süresi",
    online: "Ders boyunca eğitmeninizle bire bir %100 konuşma odağı",
    physical: "Sınıf mevcuduna bağlı olarak öğrenciler arasında paylaşılan konuşma süresi",
    onlineAdvantage: true,
  },
  {
    id: "cost_structure",
    category: "Fiyatlandırma Şeffaflığı",
    online: "₺3.950/ay'dan başlayan net örnek paketler (Platform ve materyal dahil)",
    physical: "Kurum, ilçe, şube ve ders yoğunluğuna göre değişen fiyatlandırma",
    onlineAdvantage: true,
  },
];

export function getPricingComparison(cityName: string = "İstanbul"): ComparisonCriterion[] {
  return [
    {
      id: "format",
      category: "Ders Formatı",
      online: `${cityName}'da ana dili İngilizce uzman eğitmenle bire bir canlı konuşma pratiği`,
      physical: `${cityName} şubelerinde yüz yüze kalabalık sınıf veya sınırlı ders saati`,
      onlineAdvantage: true,
    },
    {
      id: "access",
      category: "Platform & Materyal Erişimi",
      online: `Mobil uygulama ile ${cityName}'ın her yerinden 7/24 kelime kartları ve ders takibi`,
      physical: `Yalnızca ${cityName} şube ders saatlerinde basılı materyal ve derslik kullanımı`,
      onlineAdvantage: true,
    },
    {
      id: "scheduling",
      category: "Ders Planlama & Esneklik",
      online: `${cityName}'da dilediğin gün ve saatte esnek ders randevusu ve kolay online telafi`,
      physical: `Sabit ${cityName} şube ders programı ve şube kontenjanına bağlı telafi`,
      onlineAdvantage: true,
    },
    {
      id: "transportation",
      category: "Ulaşım & Lokasyon",
      online: `${cityName}'da evden veya iş yerinden katılım; sıfır yol süresi ve trafik stresi`,
      physical: `${cityName} trafiğinde şubeye gidiş-geliş yol süresi, yol masrafı ve lokasyon zorunluluğu`,
      onlineAdvantage: true,
    },
    {
      id: "speaking_time",
      category: "Konuşma Süresi",
      online: `${cityName} öğrencilerine özel derste %100 bire bir kesintisiz konuşma pratiği`,
      physical: `${cityName} şube sınıflarında öğrenciler arasında paylaşılan sınırlı konuşma süresi`,
      onlineAdvantage: true,
    },
    {
      id: "cost_structure",
      category: "Fiyatlandırma Şeffaflığı",
      online: `${cityName}'a özel ₺3.950/ay'dan başlayan net örnek paketler (Platform ve materyal dahil)`,
      physical: `${cityName} ilçelerine, şube kira maliyetine ve kuruma göre değişen yüksek ücretler`,
      onlineAdvantage: true,
    },
  ];
}
