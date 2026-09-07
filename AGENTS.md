# AGENTS.md

Bu dosya, bu repoda çalışan insan ve ajanlar için proje kurallarını tanımlar. Değişiklik yapmadan önce projeyi okuyun, mevcut mimariyi anlayın ve `DESIGN_SYSTEM.md` ile uyumu kontrol edin.

## 1. Projenin Amacı

Bu proje, Konuşarak Öğren marka referanslarıyla uyumlu şehir bazlı İngilizce kursu landing page şablonudur.

Ana hedefler:

- Şehir bazlı SEO landing page üretmek.
- Kullanıcıyı ücretsiz deneme/seviye tespit aksiyonuna yönlendirmek.
- Eğitim programları, eğitmenler, teknoloji araçları, mentörlük, yorumlar ve fiyat benzeri pazarlama içeriklerini tutarlı şekilde sunmak.

## 2. Teknoloji Stack'i

- Next.js App Router
- React 19
- TypeScript
- Vite
- vinext
- Cloudflare Vite Plugin
- Wrangler
- GitHub Pages static export desteği

Yeni dependency eklemeyin. Bir dependency gerçekten gerekiyorsa önce gerekçesini, alternatiflerini ve deployment etkisini yazılı olarak belirtin.

## 3. Klasör ve Mimari Kuralları

Mevcut klasör ayrımı korunmalıdır:

- `app/`: route, layout, metadata ve global CSS.
- `components/`: sayfa bölümleri ve yeniden kullanılabilir React componentleri.
- `lib/`: ortak veri, helper ve saf TypeScript fonksiyonları.
- `worker/`: Cloudflare/vinext runtime entry point.
- `.github/workflows/`: deployment workflow dosyaları.
- `.openai/`: hosting metadata dosyaları.

Mimariyi genişletirken mevcut basit yapıyı bozmayın. Yeni katman, context, state manager veya veri kütüphanesi eklemeden önce mevcut statik veri/component yapısıyla çözüm arayın.

## 4. App Router Kuralları

- Route dosyaları `app/` altında tutulur.
- Sayfa metadata'sı mümkünse route dosyasında `metadata` veya `generateMetadata` ile tanımlanır.
- Statik şehir sayfaları `generateStaticParams` üzerinden açıkça üretilir.
- `dynamicParams = false` davranışı değiştirilmeden önce static export ve GitHub Pages etkisi analiz edilmelidir.
- Server component varsayılan kabul edilir; client component sadece etkileşim gerekiyorsa kullanılmalıdır.

## 5. `components` / `lib` / `app` Ayrımı

- `app/` dosyaları routing ve sayfa orkestrasyonundan sorumludur.
- `components/` UI render eder; küçük component-local veri setleri mevcut pattern içinde kabul edilebilir.
- Bir veri seti birden fazla componentte kullanılacaksa `lib/` altına taşınmalıdır.
- `lib/` dosyaları UI bağımlılığı taşımamalıdır.
- `components/CityHero.tsx` ana sayfa kompozisyon noktasıdır; büyük sayfa sırası değişiklikleri burada dikkatle yapılmalıdır.

## 6. Şehir Bazlı Sayfa ve Veri Yönetimi

- Şehir verisinin ana kaynağı `lib/cities.ts` dosyasıdır.
- Yeni şehir eklendiğinde slug, görünen ad, lokatif ifade ve istatistik alanları birlikte tanımlanmalıdır.
- `app/[city]/page.tsx` içindeki `generateStaticParams` yeni şehir slug'ı ile güncellenmelidir.
- Türkçe karakterli slug davranışı manuel kontrol edilmelidir.
- Fallback şehir üretimi var olsa bile production/static export için açık şehir listesi esas alınmalıdır.

## 7. GitHub Pages Deployment Kuralları

- GitHub Pages build komutu `npm run build:pages` olmalıdır.
- `GITHUB_PAGES=true` iken `next.config.ts` içinde `output: "export"`, `basePath`, `assetPrefix`, `trailingSlash` ve `images.unoptimized` ayarları devreye girer.
- Internal linkler ve asset yolları base path uyumlu olmalıdır.
- `out/` build çıktısı repoya commit edilmemelidir.
- `.github/workflows/deploy-pages.yml` değiştirilmeden önce build çıktısı ve GitHub Pages URL etkisi analiz edilmelidir.

## 8. Cloudflare / vinext Kritik Noktaları

- `vite.config.ts` içinde vinext, OpenAI Sites plugin ve Cloudflare plugin birlikte çalışır.
- `worker/index.ts` Cloudflare Worker entry point'idir.
- `/_vinext/image` path'i image optimization için ayrılmıştır.
- `env.ASSETS` ve `env.IMAGES` binding varsayımları bozulmamalıdır.
- `compatibility_flags: ["nodejs_compat"]` ayarı değiştirilmeden önce vinext ve Next runtime etkisi kontrol edilmelidir.
- Wrangler log/cache ayarları local geliştirme davranışını etkiler; gereksiz dosya üretimine dikkat edilmelidir.

## 9. TypeScript Kuralları

- `strict: true` korunmalıdır.
- `any` kullanmayın; zorunluysa kısa gerekçe ekleyin.
- Props tipleri explicit olmalıdır.
- Ortak tipler ilgili veri/helper dosyasına yakın tutulmalıdır.
- Alias olarak `@/*` kullanılabilir.
- Server/client sınırı tip ve import seviyesinde temiz kalmalıdır.

## 10. Client Component Kullanım Kuralları

- `"use client"` sadece state, event handler, browser API veya client-only etkileşim gerektiğinde kullanılmalıdır.
- Client componentlerde veri fetch veya kalıcı kullanıcı verisi işlemi eklenmeden önce API/backend ihtiyacı analiz edilmelidir.
- Mevcut pattern: `useState`, gerektiğinde `useMemo`, accessible button/tab/accordion state.
- Client componentlerin kapsamını küçük tutun; tüm sayfayı gereksiz yere client component yapmayın.

## 11. CSS Kuralları

- Global stiller `app/globals.css` içindedir; değişiklikler yan etki yaratabilir.
- Yeni tasarım kararları `DESIGN_SYSTEM.md` ile uyumlu olmalıdır.
- Kaynaklarda doğrulanmayan renk, spacing, shadow, radius veya typography değeri üretmeyin; `TBD` bırakın veya kullanıcıdan onay alın.
- CSS class isimlerinde mevcut okunabilir camelCase patterni korunabilir.
- Responsive değişiklikler mobile ve desktop davranışı düşünülerek yapılmalıdır.

## 12. Türkçe İçerik ve UTF-8 Kuralları

- Tüm dosyalar UTF-8 kaydedilmelidir.
- Türkçe karakterler bozulmamalıdır.
- Metinlerde marka dili sade, güven verici ve konuşma pratiği odaklı olmalıdır.
- SEO başlıkları şehir, hedef ve aksiyon bilgisini açık taşımalıdır.
- Encoding bozukluğu görülürse önce kök neden analiz edilmeli, toplu düzeltme yapılmadan önce kullanıcı bilgilendirilmelidir.

## 13. Form ve Kullanıcı Verisi Kuralları

- Mevcut lead form gerçek backend'e gönderim yapmaz; sadece local UI state değiştirir.
- Kullanıcı verisi toplanacaksa KVKK, açık rıza, güvenli aktarım ve veri saklama kuralları netleşmeden implementation yapılmamalıdır.
- Telefon, ad soyad veya seviye bilgisi gibi alanlar loglara yazılmamalıdır.
- Yeni API/form endpoint'i eklenecekse doğrulama, hata state'i, loading state'i ve abuse/rate-limit ihtiyacı analiz edilmelidir.

## 14. Yeni Şehir Ekleme Prosedürü

1. `lib/cities.ts` içinde şehir verisini ekle.
2. `app/[city]/page.tsx` içindeki `generateStaticParams` listesine slug ekle.
3. Şehir adının lokatif kullanımını kontrol et.
4. Şehir linkleri, related links ve ilçe verisi gerekiyorsa ilgili component veri setlerini güncelle.
5. Static export ve internal link davranışını kontrol et.

## 15. Build/Test Kontrol Prosedürü

- Mevcut repoda test runner veya test script'i yoktur.
- Kod değişikliğinden sonra en azından `npm run build:next` veya hedefe göre `npm run build:pages` değerlendirilmelidir.
- Cloudflare/vinext davranışı etkileniyorsa `npm run build` ayrıca düşünülmelidir.
- Build komutları `.next`, `out` veya `.wrangler` gibi çıktı üretebilir; kullanıcı "dosya değiştirme" dediyse çalıştırmayın.

## 16. Değişiklik Yapmadan Önce Analiz Etme Zorunluluğu

Her değişiklikten önce:

- İlgili dosyaları okuyun.
- Mevcut patterni tespit edin.
- Deployment etkisini düşünün.
- `DESIGN_SYSTEM.md` uyumunu kontrol edin.
- Sadece istenen kapsamda değişiklik yapın.

## 17. Production/Deployment Dosyalarına İlişkin Kurallar

Aşağıdaki dosyalar kritik kabul edilir:

- `next.config.ts`
- `vite.config.ts`
- `worker/index.ts`
- `.github/workflows/deploy-pages.yml`
- `.openai/hosting.json`
- `package.json`
- `package-lock.json`

Bu dosyalarda değişiklik yapmadan önce gerekçe ve risk açık olmalıdır. Deployment davranışını etkileyen değişiklikler build doğrulaması olmadan tamamlanmış sayılmamalıdır.

## 18. `DESIGN_SYSTEM.md` Dosyasına Uyma Zorunluluğu

Tüm UI ve içerik değişiklikleri `DESIGN_SYSTEM.md` ile uyumlu olmalıdır.

- Doğrulanmış marka değerleri aynen kullanılmalıdır.
- Kaynakta doğrulanmayan değerler tahmin edilmemelidir.
- Logo oranı, rengi veya yapısı değiştirilmemelidir.
- Tasarım referanslarıyla çelişki varsa önce referanslar tekrar kontrol edilmelidir.
- `TBD` olarak işaretlenen alanlar kullanıcı onayı veya yeni kaynak olmadan kesin değer gibi uygulanmamalıdır.

## 19. Hero & Form Above-The-Fold Kuralları

- Hero bölümü **merkezi tek sütun (single-column)** kompozisyonuna sahip olmalıdır.
- Form alanları (input) ve CTA butonu masaüstü ekranda ilk bakışta (above the fold) kaydırma yapmadan görünür olmalıdır.
- Bu görünürlüğü sağlamak için hero vertical padding (`24px 0 28px`), header yüksekliği (`72px`), hero içerik gap (`16px`) ve lede paragraf uzunluğu kompakt tutulmalıdır.

## 20. Proof Panel (Sosyal Kanıt & İstatistikler) Standartları

- İstatistik barı tam **4 sütundan** oluşmalıdır:
  1. Toplam öğrenci sayısı (Örn: `8.400+`)
  2. Şehre özel dinamik aktif öğrenci sayısı (Örn: `${city.name}'de 1.000+`)
  3. Ana dili İngilizce uzman eğitmen sayısı (Örn: `1.200+`)
  4. Ölçümlenen konuşma başarı oranı (Örn: `%98`)
- Şube/fiziki erişim gibi online modelle çelişen veriler kullanılmamalıdır.
- Hover/Tooltip bileşenleri **aydınlık (light) tema** olmalıdır: `#ffffff` arkaplan, `#bfdbfe` border ve koyu renkli okunabilir metin. Koyu/dark mode tooltip veya gereksiz "BİLGİ" etiketleri kullanılmamalıdır.
- Tooltip metni dinamik şehir verisini içermelidir (Örn: `${city.locative} ${city.studentCount} öğrencimiz aktif ders almaktadır.`).

## 21. Semantik HTML ve Bileşen Standartları

- **Kurs Tipleri (Course Types):**
  - Kartlar semantik olarak `<ul className="courseGrid">` ve `<li className="courseCard">` içinde listelenmelidir.
  - Başlıkta çift numaralandırma yapılmamalı; doğrudan `courseTopline` h3 içerisinde `{index + 1}. {course.title}` formatında tekil olmalıdır (Örn: `1. Genel İngilizce`).
- **Kullanıcı Yorumları (Reviews):**
  - Yorum kartlarında gereksiz `<h3>` etiketi yerine doğrudan alıntı semantiği (`<blockquote className="reviewQuote" itemProp="reviewBody">`) kullanılmalıdır.
  - Başlık `.reviewTitle` (`<strong>`), yorum metni `.reviewBody` (`<p>`) olarak blockquote içerisinde yer almalıdır.
  - Yorum yazarı semantik `<cite className="reviewAuthor" itemProp="author">` etiketi ile tanımlanmalıdır.
  - Kart gridi 4 sütunlu düzende tutulmalıdır.
- **Fiyat / Karşılaştırma Tablosu:**
  - Tablo başlığında ve kriter satırlarında `${city.name}'deki Geleneksel Kurslar` ifadesi dinamik şehir enjeksiyonuyla kullanılmalıdır.

## 22. Standart Bölüm Boşlukları (Section Spacing)

- Sayfadaki tüm ana içerik bölümleri (`.coursesSection`, `.reviewsSection`, `.districtSection`, `.teachersSection`, `.cefrSection`, `.enrollmentSection`, `.pricingSection`, `.faqSection`, `.relatedSection`) standart olarak `padding: 56px 0 36px;` dikey boşluk ritmine uymalıdır.
- Bölümler arasında görsel ritim ve dikey denge tutarlı olmalıdır.

