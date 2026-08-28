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
| `muted-text` | `#C5C5C5` | `rgb(197, 197, 197)` | Pasif input metni/border |
| `border` | `#C5C5C5` | `rgb(197, 197, 197)` | Pasif input border |
| `success` | `TBD` | `TBD` | Kaynakta doğrulanmadı |
| `warning` | `TBD` | `TBD` | Kaynakta doğrulanmadı |
| `error` | `TBD` | `TBD` | Kaynakta doğrulanmadı |

Renk kuralları:

- Yeni marka dışı renk sistemi oluşturmayın.
- Primary CTA için `#309DFF`, secondary CTA için `#F16C00` kullanın.
- Genel metin ve outline ikonlar için `#333333` kullanın.
- Renk varyantları, tint/shade değerleri ve gradientler kaynakta doğrulanmadı: `TBD`.

## 4. HEX/RGB Değerleri

- Beyaz: `#FFFFFF`, `rgb(255, 255, 255)`.
- Genel yazı: `#333333`, `rgb(51, 51, 51)`.
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
- Kaynakta doğrulanmayan serif, display veya dekoratif font eklemeyin.
- Font dosyası eklenirse lisans, kaynak ve preload davranışı kontrol edilmelidir.

## 6. Font Sizes

Doğrulanmış metin stilleri:

| Stil | Font Weight | Font Size | Line Height |
| --- | --- | --- | --- |
| Bölüm başlığı | `500` | `24px` | `40px` |
| Konu içi başlık | `700` | `18px` | `30px` |
| Konu içi yazı | `300` | `16px` | `25px` |
| Input | `TBD` | `16px` | `TBD` |
| Button | `700` | `16px` | `TBD` |

Hero/display ölçekleri kaynakta doğrulanmadı: `TBD`.

## 7. Font Weights

- Light body/copy: `300`.
- Regular metin: `400`.
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

Doğrulanmış spacing:

- Input horizontal padding: `0 15px`.
- Button horizontal padding: `0 15px`.

Genel spacing scale kaynakta doğrulanmadı: `TBD`.

Geçici kural:

- Yeni layout spacing değeri eklemeden önce mevcut sayfa ritmini ve kaynakları kontrol edin.
- Kaynakta olmayan spacing token'ı tasarım sistemi değeri gibi adlandırmayın.

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

Geçici kurallar:

- Kartlar içerik yoğunluğunu artırmak için kullanılmalı, dekoratif amaçla çoğaltılmamalıdır.
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

- Semantic HTML kullanın.
- Button, tab, accordion ve form kontrollerinde doğru `aria-*` attribute'ları kullanılmalıdır.
- Form inputları label ile eşleşmelidir.
- Renk tek başına anlam taşıyıcı olmamalıdır.
- Focus stilleri görünür olmalıdır; fakat resmi focus rengi kaynakta doğrulanmadı: `TBD`.
- Türkçe sayfalarda `lang="tr"` korunmalıdır.

## 20. Do / Don't Rules

Do:

- Quicksand kullan.
- `#309DFF`, `#F16C00`, `#333333`, `#FFFFFF`, `#F5F5F5`, `#C5C5C5` değerlerini doğrulanmış token olarak kullan.
- CTA'ları ücretsiz deneme, seviye tespit veya öğrenme planı etrafında kur.
- Outline ve tek renk ikon kullan.
- Logo assetlerini resmi yapısıyla koru.
- Belirsiz değerleri `TBD` olarak bırak.

Don't:

- Yeni, bağımsız marka paleti oluşturma.
- Logo oranını, rengini veya yapısını değiştirme.
- Kaynakta olmayan shadow, radius, spacing veya breakpoint değerlerini kesin standart gibi yazma.
- Formu gerçek veri topluyor gibi gösterip backend/KVKK akışını boş bırakma.
- Türkçe karakterleri bozacak encoding değişikliği yapma.
- Mevcut deployment dosyalarını tasarım değişikliği bahanesiyle değiştirme.
