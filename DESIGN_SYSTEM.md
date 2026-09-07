# DESIGN_SYSTEM.md

Bu tasarım sistemi Konuşarak Öğren marka referanslarına göre hazırlanmıştır.

Kaynaklar:

- Ana marka sitesi: https://www.konusarakogren.com/
- Resmi tasarım dokümantasyonu: https://clickivo.com/tasarim/

Kaynakta doğrulanamayan değerler `TBD` olarak bırakılmıştır. `TBD` değerleri tahmin ederek uygulamayın.

## 1. Brand Identity

Konuşarak Öğren, online İngilizce konuşma kursu ve birebir canlı ders odağına sahip bir eğitim markasıdır. Marka iletişimi şu temalar üzerine kurulmalıdır:

- Online İngilizce konuşma kursu.
- Ana dili İngilizce olan eğitmenlerle hızlı ve etkili öğrenme.
- Ücretsiz deneme/seviye tespit aksiyonu.
- Kişiselleştirilmiş öğrenme planı.
- Teknolojik öğrenme araçları.
- Mentörlük ve gelişim takibi.
- Güven unsurları: KOSGEB desteği, öğrenci sayısı, başarı/iade garantisi.

Ton: sade, güven verici, eğitim odaklı, doğrudan aksiyona yönlendiren.

## 2. Logo Usage

Resmi tasarım dokümantasyonuna göre logo 3 şekilde kullanılabilir:

- Papağan ve yazı yanyana.
- Papağan üstte ve yazı altta.
- Yalnızca papağan.

Kurallar:

- Logo oranı, rengi, yapısı ve ikon/yazı ilişkisi değiştirilmez.
- Logo yeniden çizilmez.
- Logo asset'i resmi kaynaklardan alınmalı ve optimize edilirken görsel bütünlük korunmalıdır.
- Minimum clear space, minimum boyut ve alternatif zemin kullanımı kaynakta doğrulanamadı: `TBD`.

## 3. Color Palette

Doğrulanmış renkler:

| Token | HEX | RGB | Kullanım |
| --- | --- | --- | --- |
| `primary` | `#309DFF` | `rgb(48, 157, 255)` | Mavi buton, aktif input border, mavi outline button |
| `secondary` | `#F16C00` | `rgb(241, 108, 0)` | Turuncu buton, turuncu outline button |
| `accent` | `TBD` | `TBD` | Kaynakta ayrı accent rengi doğrulanmadı |
| `background` | `#FFFFFF` | `rgb(255, 255, 255)` | Genel zemin |
| `surface` | `#F5F5F5` | `rgb(245, 245, 245)` | Başlık zemin rengi |
| `text` | `#333333` | `rgb(51, 51, 51)` | Genel yazı ve outline ikon rengi |
| `text-dark` | `#1f2937` | `rgb(31, 41, 55)` | Yüksek kontrast gövde ve kart metni |
| `text-muted` | `#374151` | `rgb(55, 65, 81)` | Erişilebilir ikincil metin (soluk gri yerine) |
| `primary-accessible` | `#0b5fc9` | `rgb(11, 95, 201)` | Açık zemin üstü yüksek kontrast mavi vurgu/linkler |
| `muted-text` | `#C5C5C5` | `rgb(197, 197, 197)` | Pasif input metni/border |
| `border` | `#C5C5C5` | `rgb(197, 197, 197)` | Pasif input border |
| `success` | `TBD` | `TBD` | Kaynakta doğrulanmadı |
| `warning` | `TBD` | `TBD` | Kaynakta doğrulanmadı |
| `error` | `TBD` | `TBD` | Kaynakta doğrulanmadı |

Renk kuralları:

- Yeni marka dışı renk sistemi oluşturmayın.
- Primary CTA için `#309DFF`, secondary CTA için `#F16C00` kullanın.
- Genel metin ve outline ikonlar için `#333333` kullanın.
- Açık zeminlerde kontrast sorunu yaşayan açık gri veya soluk maviler yerine WCAG uyumlu koyu tonlar (`#1f2937`, `#374151`, `#0b5fc9`) tercih edilmelidir.
- Renk varyantları, tint/shade değerleri ve gradientler kaynakta doğrulanmadı: `TBD`.

## 4. HEX/RGB Değerleri

- Beyaz: `#FFFFFF`, `rgb(255, 255, 255)`.
- Genel yazı: `#333333`, `rgb(51, 51, 51)`.
- Koyu okunabilir metin: `#1f2937`, `rgb(31, 41, 55)`.
- İkincil okunabilir metin: `#374151`, `rgb(55, 65, 81)`.
- Kontrast mavi: `#0b5fc9`, `rgb(11, 95, 201)`.
- Başlık zemini: `#F5F5F5`, `rgb(245, 245, 245)`.
- Pasif input/border: `#C5C5C5`, `rgb(197, 197, 197)`.
- Mavi: `#309DFF`, `rgb(48, 157, 255)`.
- Turuncu: `#F16C00`, `rgb(241, 108, 0)`.

## 5. Typography

Resmi font: `Quicksand`, `sans-serif`.

Doğrulanmış font weight'leri:

- Light: `300`
- Regular: `400`
- Medium: `500`
- Bold: `700`

Kurallar:

- Ana UI fontu Quicksand olmalıdır.
- Gövde metinlerinde (body) okunabilirlik ve font netliği için taban font weight `400` (Regular) kullanılmalıdır.
- Kaynakta doğrulanmayan serif, display veya dekoratif font eklemeyin.
- Font dosyası eklenirse lisans, kaynak ve preload davranışı kontrol edilmelidir.

## 6. Font Sizes

Doğrulanmış metin stilleri:

| Stil | Font Weight | Font Size | Line Height |
| --- | --- | --- | --- |
| Bölüm başlığı | `500` | `24px` | `40px` |
| Konu içi başlık | `700` | `18px` | `30px` |
| Konu içi yazı | `400` | `16px` | `25px` |
| Input | `TBD` | `16px` | `TBD` |
| Button | `700` | `16px` | `TBD` |

Hero/display ölçekleri kaynakta doğrulanmadı: `TBD`.

## 7. Font Weights

- Light body/copy: `300` (yalnızca çok büyük display/italik metinlerde).
- Regular metin: `400` (tüm gövde ve kart metinlerinde standart).
- Medium bölüm başlığı: `500`.
- Bold buton ve konu içi başlık: `700`.
- `800`, `900` gibi ekstra ağırlıklar kaynakta doğrulanmadı: `TBD`.

## 8. Line Heights

- Bölüm başlığı: `40px`.
- Konu içi başlık: `30px`.
- Konu içi yazı: `25px`.
- Button line-height: `TBD`.
- Input line-height: `TBD`.

## 9. Spacing System

Doğrulanmış ve standartlaştırılmış spacing:

- Input horizontal padding: `0 15px`.
- Button horizontal padding: `0 15px`.
- Hero vertical padding: `24px 0 28px` (above-the-fold form görünürlüğü için).
- Standart Section dikey boşlukları: `56px 0 36px` (tüm ana bölümler arasında tutarlı ritim).

Kurallar:

- Tüm sayfa bölümlerinde dikey ritim standart tutulmalı, kontrolsüz büyük boşluklardan kaçınılmalıdır.
- Input ve buton bileşen padding kurallarına sadık kalınmalıdır.

## 10. Border Radius

Doğrulanmış değerler:

- Input radius: `6px`.
- Button radius: `25px`.

Kart, modal, section ve image radius değerleri kaynakta doğrulanmadı: `TBD`.

## 11. Shadows

Resmi dokümantasyonda shadow değeri doğrulanmadı: `TBD`.

Kurallar:

- Yeni shadow token'ı üretmeyin.
- Shadow kullanılacaksa önce marka referansında veya tasarım dokümantasyonunda doğrulanmalıdır.
- Mevcut uygulamadaki shadowlar yeni marka standardı olarak kabul edilmemelidir.

## 12. Buttons

Doğrulanmış button varyantları:

### Mavi Button

- `font-family: 'Quicksand', sans-serif`
- `padding: 0 15px`
- `background-color: #309DFF`
- `color: #FFFFFF`
- `font-size: 16px`
- `font-weight: 700`
- `height: 45px`
- `border-radius: 25px`
- `border: 0`

### Turuncu Button

- `font-family: 'Quicksand', sans-serif`
- `padding: 0 15px`
- `background-color: #F16C00`
- `color: #FFFFFF`
- `font-size: 16px`
- `font-weight: 700`
- `height: 45px`
- `border-radius: 25px`
- `border: 0`

### Mavi Kenarlı Beyaz Button

- `background-color: #FFFFFF`
- `color: #309DFF`
- `border: 1px solid #309DFF`
- Diğer ölçüler mavi button ile aynıdır.

### Turuncu Kenarlı Beyaz Button

- `background-color: #FFFFFF`
- `color: #F16C00`
- `border: 1px solid #F16C00`
- Diğer ölçüler turuncu button ile aynıdır.

Kurallar:

- Primary CTA genellikle ücretsiz deneme/seviye tespit aksiyonuna gitmelidir.
- Button metni kısa, eylem odaklı ve Türkçe olmalıdır.
- Hover/focus/disabled değerleri kaynakta doğrulanmadı: `TBD`.

## 13. Forms

Doğrulanmış input stilleri:

### Pasif Input

- `font-family: 'Quicksand', sans-serif`
- `padding: 0 15px`
- `color: #C5C5C5`
- `font-size: 16px`
- `border: 1px solid #C5C5C5`
- `height: 45px`
- `border-radius: 6px`

### Aktif Input

- `font-family: 'Quicksand', sans-serif`
- `padding: 0 15px`
- `color: #333333`
- `font-size: 16px`
- `border: 1px solid #309DFF`
- `height: 45px`
- `border-radius: 6px`

Kurallar:

- Formlar açık label kullanmalıdır.
- Kişisel veri toplayan formlarda KVKK, izin metni ve veri aktarımı netleştirilmelidir.
- Error/success state renkleri kaynakta doğrulanmadı: `TBD`.

## 14. Cards
 
 Kart stilleri kaynakta doğrulanmadı: `TBD`.
 
 Standart kurallar:
 
 - Kartlar içerik yoğunluğunu artırmak için kullanılmalı, dekoratif amaçla çoğaltılmamalıdır.
 - Kurs tipleri semantik olarak `<ul>` ve `<li>` liste yapısı içinde render edilmelidir.
 - Yorum kartlarında `<h3>` yerine semantik `<blockquote>` ve `<cite>` etiketleri kullanılmalıdır.
 - Kart radius, shadow, border ve padding değerleri tahmin edilmemelidir.
 - Mevcut uygulama kartları marka standardı değil, uygulama içi mevcut implementation olarak değerlendirilmelidir.
 
 ## 15. CTA Sections
 
 Ana marka sitesinden doğrulanan CTA ve mesaj patternleri:
 
 - `Ücretsiz Dene`
 - Seviye tespit sınavı
 - Kişiselleştirilmiş öğrenme planı
 - Mobil uygulamayı ücretsiz indirme
 
 Kurallar:
 
 - Ana CTA ücretsiz deneme veya seviye tespit aksiyonuna bağlanmalıdır.
 - CTA çevresinde güven unsurları kullanılabilir: öğrenci sayısı, uzman eğitmenler, KOSGEB desteği, mentörlük, başarı/iade garantisi.
 - CTA section spacing ve background değerleri kaynakta doğrulanmadı: `TBD`.
 
 ## 16. Responsive Breakpoints
 
 Resmi dokümantasyonda numeric breakpoint değerleri doğrulanmadı: `TBD`.
 
 Doğrulanan yön:
 
 - Mobil tasarımlarda üst navbar ve bottom bar yapıları referans gösterilir.
 
 Kurallar:
 
 - Breakpoint değeri tasarım sistemi standardı gibi eklenmeden önce kaynak veya kullanıcı onayı gerekir.
 - Mevcut uygulamadaki responsive değerler implementation detayıdır; marka standardı kabul edilmemelidir.
 
 ## 17. Image Usage
 
 Ana marka sitesinde kullanılan görsel dil:
 
 - Uygulama ekran görüntüleri.
 - Eğitmen görselleri.
 - Teknolojik öğrenme araçları görselleri.
 - Mentörlük ve eğitim paketleri görselleri.
 - Mobil uygulama tanıtımı.
 
 Kurallar:
 
 - Görseller gerçek ürünü, eğitmeni, uygulama ekranını veya eğitim deneyimini desteklemelidir.
 - Logo görseli deforme edilmemelidir.
 - Stok hissi veren, marka dışı ve bağlamsız görsellerden kaçının.
 - Görsel oranları ve minimum çözünürlükler kaynakta doğrulanmadı: `TBD`.
 
 ## 18. Icons
 
 Doğrulanmış ikon kuralı:
 
 - Outline ikonlar kullanılmalıdır.
 - Tek renk olmalıdır.
 - Renk: `#333333`.
 
 Kurallar:
 
 - Çok renkli dekoratif ikonlar kullanılmamalıdır.
 - İkonlar anlamlı label, aria-label veya görünür metinle desteklenmelidir.
 - İkon stroke width ve boyutları kaynakta doğrulanmadı: `TBD`.
 
 ## 19. Accessibility
 
 Kurallar:
 
 - Semantic HTML kullanın (`<ul>`/`<li>`, `<blockquote>`, `<cite>`).
 - Button, tab, accordion ve form kontrollerinde doğru `aria-*` attribute'ları kullanılmalıdır.
 - Form inputları label ile eşleşmelidir.
 - Renk tek başına anlam taşıyıcı olmamalıdır; açık arka planda düşük kontrastlı açık gri/mavi yazılardan kaçının.
 - Focus stilleri görünür olmalıdır; fakat resmi focus rengi kaynakta doğrulanmadı: `TBD`.
 - Türkçe sayfalarda `lang="tr"` korunmalıdır.
 
 ## 20. Do / Don't Rules
 
 Do:
 
 - Quicksand kullan (gövde metinlerinde font weight `400`).
 - `#309DFF`, `#F16C00`, `#333333`, `#FFFFFF`, `#F5F5F5`, `#C5C5C5` değerlerini doğrulanmış token olarak kullan.
 - Okunabilirlik için açık zeminlerde WCAG uyumlu koyu metin renkleri (`#1f2937`, `#374151`) ve yüksek kontrast mavi (`#0b5fc9`) tercih et.
 - CTA'ları ücretsiz deneme, seviye tespit veya öğrenme planı etrafında kur.
 - Formu ve CTA'yı masaüstünde ilk bakışta (above the fold) görünür kıl.
 - Sosyal kanıt (proof panel) istatistiklerini 4 sütunlu ve aydınlık tooltip ile sun.
 - Outline ve tek renk ikon kullan.
 - Logo assetlerini resmi yapısıyla koru.
 - Belirsiz değerleri `TBD` olarak bırak.
 
 Don't:
 
 - Yeni, bağımsız marka paleti oluşturma.
 - Logo oranını, rengini veya yapısını değiştirme.
 - Açık zemin üstünde okunması zor soluk gri veya düşük kontrastlı açık mavi metinler kullanma.
 - Kurs kartlarında gereksiz çift numaralandırma yapma.
 - Yorum kartlarında gereksiz `<h3>` kullanma (`<blockquote>` ve `<cite>` kullan).
 - Kaynakta olmayan shadow, radius veya breakpoint değerlerini kesin standart gibi yazma.
 - Formu gerçek veri topluyor gibi gösterip backend/KVKK akışını boş bırakma.
 - Türkçe karakterleri bozacak encoding değişikliği yapma.
 - Mevcut deployment dosyalarını tasarım değişikliği bahanesiyle değiştirme.

