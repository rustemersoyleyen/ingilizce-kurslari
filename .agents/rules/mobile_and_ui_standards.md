# Mobil, UI ve SEO Tasarım Standartları

Bu kural seti, tüm şehir iniş sayfalarında (landing page) geçerli olan 18 maddelik mobil UX, tipografi, semantik ve görsel yönergelerini tanımlar.

## 1. Hero & Above-The-Fold CTA Kuralı
- Mobilde sayfa açıldığında formun CTA butonu ("Sana Özel Eğitim Planını Hemen Başlat" / "Seviyeni Belirle") kaydırma (scroll) yapmadan ekranda (`100dvh` içinde) eksiksiz görünmelidir.
- Gerekirse üstteki lokasyon rozeti ("İstanbul'da Yüz Yüze...") formun altına veya başlık altına alınmalı; açıklama paragrafı mobilde kompakt tutulmalıdır.
- Hero form başlığı tok ve dikkat çekici bir fonta sahip olmalı; ancak mobilde asla tek satırı aşmayacak şekilde `clamp()` veya responsive font ile sınırlandırılmalıdır.

## 2. Numaralandırma Standardı (01 Yerine 1)
- Tüm sayfalarda, başlıklarda, adımlarda, kartlarda ve rozetlerde `01`, `02`, `03` gibi başına sıfır eklenen iki haneli numaralandırmalar YASAKTIR.
- Her zaman doğrudan tek haneli (`1`, `2`, `3`...) format kullanılmalıdır.

## 3. Çapraz Okların (↗) Kaldırılması
- Buton, link veya kartlardaki `↗` (yukarı-sağ çapraz ok) karakteri AI şablonu hissi verdiği için kesinlikle kullanılmamalıdır. Temiz, sade ve kurumsal tipografi tercih edilmelidir.

## 4. Kart Hover / Seçim Zeminleri (Mavi Ton Standardı)
- İlçe ve liste kartlarında hover veya seçim anında beliren standart gri (`#f3f4f6`) arka planlar YASAKTIR.
- Marka kimliğine uygun ferah açık mavi tonlar (`#f0f7ff` veya `#e0f2fe`) kullanılmalıdır.

## 5. Sosyal Kanıt & İstatistik (Proof) Paneli
- Tooltip/visualize alanları ferah boşluklarla ayrılmalı, kenarlara yapışık görünüm engellenmelidir. Panel dikeyde derli toplu olmalıdır.
- 4 Avantaj maddesi ("MEB onaylı program", "Uluslararası sertifika", "4,9 / 5 öğrenci puanı", "İlk 14 gün iade garantisi") tek satırda kaydırılabilir (slider / horizontal scroll) veya kompakt 2x2 grid düzeninde sunulmalıdır.
- **Farklı İkonlar:** Hepsi aynı kalkan ikonu olamaz. MEB için resmi belge/diploma, sertifika için rozet, puan için yıldız, iade için güvence kalkanı gibi amaca uygun SVG'ler kullanılmalıdır.
- Hover/visualize formülü: `[İl Adı] + [Anlamına Uygun İfade] + İngilizce Kursu` formülünde dinamik olmalıdır.

## 6. Kurs Türleri Şehir Bazlı Metin & Visualize Kuralları
- Kurs türü kartlarındaki açıklama metinleri içerisine doğal akışla `[İl Adı]` enjekte edilmeli, her il için ana özü koruyan farklı cümle varyasyonları kullanılmalıdır.
- Kurs türü ikonları ve seviye rozetleri (A1-C2 vb.) üzerine gelindiğinde `[İl Adı] + [Kurs Türü] İngilizce Kursu` formülüyle visualize/hover metni sunulmalıdır.
- SVG veya HTML `title`/`aria-label` etiketlerinde **asla "Simgesi" ifadesi kullanılmamalıdır** (örn: "Konuşma simgesi" yerine doğrudan "Genel İngilizce Pratiği").

## 7. "Karar Veremedin mi?" Kutusu
- Kutu dikkat çekici marka turuncusu (`#F16C00`) veya yüksek kontrastlı zemin ile öne çıkarılmalı; içerideki buton daha büyük font, belirgin highlight ve güçlü görsel hiyerarşiyle desteklenmelidir.

## 8. Fiyatlar (Pricing) Bölümü
- Fiyatlar bölümünde mobilde fiyat ve hemen altındaki "Satın Al / Hemen Başla" CTA butonu ekran kaydırılmadan tek bakışta görünür olmalıdır.
- Büyük fiyat yazısı (`₺4.900`) dikkat çekici olmalı, turuncu/kırmızı canlı highlight ile vurgulanmalıdır.

## 9. İlçe Sekmeleri ve Buton Simetrisi
- Üstteki ilçe sekmeleri mobilde otomatik/dokunmatik kaydırılabilir olmalı ve aktif ilçe seçildiğinde ortalanmalıdır (`scrollIntoView({ inline: 'center' })`).
- "Ücretsiz seviyeni belirle" ve "[İlçe] İngilizce Kursu" butonları tam simetrik, eşit yükseklik ve dengeli hiyerarşide olmalıdır.
- "Avantajlar" ve "Kimler için uygun" alanları mobilde aynı ekranda (kompakt) yer almalıdır.

## 10. Eğitmenler (TeachersSection)
- Eğitmen fotoğraflarında yüzler net ve belirgin olmalı (uygun kadraj/oran).
- Mobilde her eğitmen için net bir visualize/bilgi alanı ("Teacher Louis is from Atlanta...", uzmanlık, ilgi alanları) sunulmalıdır.

## 11. CEFR Seviyeleri (CefrSection) Slider
- Mobilde seviyeler slider yapısında gezilebilir olmalı, kazanımlar ve ders içerikleri rahatça okunabilmelidir.

## 12. Kayıt Süreci (EnrollmentSection) Mobil Deneyimi
- Mobilde üstteki görsel alan oklu (Arrow) bir slider, açıklamalar ise akordiyon yapısıyla birebir senkronize çalışmalıdır (aktif slayt hangisi ise görseli ve içeriği eşleşmelidir).

## 13. Görsel ve SVG Title/Alt Standardı
- Mobil banner ve sayfa genelindeki tüm `<img>` ve `<svg>` etiketlerinde `title` ve `alt` nitelikleri `[İl Adı] + [Bağlam/Konu] + İngilizce Kursu` formülüne uygun olmalıdır.
