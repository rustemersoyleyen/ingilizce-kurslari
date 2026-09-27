import Image from "next/image";
import Link from "next/link";
import type { City } from "@/lib/cities";
import { getAssetPath } from "@/lib/basePath";
import { LeadForm } from "./LeadForm";
import { TeachersSection } from "./TeachersSection";
import { CourseTypesSection } from "./CourseTypesSection";
import { ReviewsPlatformSection } from "./ReviewsPlatformSection";
import { DistrictCoursesSection } from "./DistrictCoursesSection";
import { CefrProgramsSection } from "./CefrProgramsSection";
import { EnrollmentProcessSection } from "./EnrollmentProcessSection";
import { PricingSection } from "./PricingSection";
import { FAQSection } from "./FAQSection";
import { RelatedLinksSection } from "./RelatedLinksSection";

const DiplomaIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
    <path d="M6 6h10M6 10h10M6 14h6" />
  </svg>
);

const AwardIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="m15.4 12.5 2.1 8.5-5.5-3-5.5 3 2.1-8.5" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 5 6v5c0 4.7 2.8 8.5 7 10 4.2-1.5 7-5.3 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-5" />
  </svg>
);

export function CityHero({ city }: { city: City }) {
  const stats = [
    {
      value: city.studentCount,
      label: "aktif öğrenci",
      hoverText: city.activeStudentDetail ?? `${city.locative} ${city.studentCount} öğrencimiz aktif ders almaktadır.`,
      visualize: `${city.name} Aktif Öğrenci İngilizce Kursu`,
    },
    {
      value: city.localStudentCount ?? "1.000+",
      label: `${city.locative} öğrenci`,
      hoverText: `${city.locative} ${city.localStudentCount ?? "1.000+"} kayıtlı öğrencimiz bire bir konuşma okulu deneyimi yaşamaktadır.`,
      visualize: `${city.name} Kayıtlı Kursiyer İngilizce Kursu`,
    },
    {
      value: city.instructorCount,
      label: "uzman eğitmen",
      hoverText: `${city.locative} ${city.instructorCount} uzman ve ana dili İngilizce olan eğitmenimiz ders vermektedir.`,
      visualize: `${city.name} Uzman Eğitmen Kadrosu İngilizce Kursu`,
    },
    {
      value: city.successRate,
      label: "hedef başarı oranı",
      hoverText: `${city.locative} eğitim alan öğrencilerimizin ${city.successRate}'ü hedeflediği CEFR seviyesine ulaşmıştır.`,
      visualize: `${city.name} Ölçümlenen Konuşma Başarısı İngilizce Kursu`,
    },
  ];

  const trustItems = [
    {
      title: "MEB onaylı program",
      visualize: `${city.name} MEB Onaylı Konuşma Odaklı İngilizce Kursu`,
      icon: <DiplomaIcon />,
    },
    {
      title: "Uluslararası sertifika",
      visualize: `${city.name} CEFR ve Uluslararası Sertifikalı İngilizce Kursu`,
      icon: <AwardIcon />,
    },
    {
      title: "4,9 / 5 öğrenci puanı",
      visualize: `${city.name} 4,9 Yüksek Memnuniyetli İngilizce Kursu`,
      icon: <StarIcon />,
    },
    {
      title: "İlk 14 gün iade garantisi",
      visualize: `${city.name} Koşulsuz 14 Gün İade Garantili İngilizce Kursu`,
      icon: <ShieldCheckIcon />,
    },
  ];

  return (
    <main>
      <header className="siteHeader">
        <Link className="brand" href={`/${city.slug}/`} aria-label="Konuşarak Öğren ana sayfa">
          <Image
            src={getAssetPath("/logo/ko-logo-yatay.png")}
            alt={`${city.name} İngilizce Kursu - Konuşarak Öğren`}
            title={`${city.name} İngilizce Kursu - Konuşarak Öğren`}
            width={180}
            height={44}
            priority
            style={{ height: "44px", width: "auto" }}
          />
        </Link>
        <nav aria-label="Ana menü">
          <a href="#programlar">Programlar</a>
          <a href="#egitmenler">Eğitmenler</a>
          <a className="headerCta" href="#seviye-testi">Seviye testi</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="heroCopy">
          <p className="locationTag"><span>●</span> {city.locative} yüz yüze ve online konuşma eğitimi</p>
          <h1 id="page-title">
            {city.name} İngilizce Kursu
            <em>Konuşarak İngilizce Öğren, Özgüvenle Konuş.</em>
          </h1>
          <p className="lede">
            {city.locative} ezberci yöntemlerle vakit kaybetme! Birebir ana dili İngilizce uzman eğitmenlerle konuşma pratikleri yaparak akıcı İngilizceye ilk günden adım at.
          </p>
        </div>

        <div id="seviye-testi"><LeadForm city={city.name} /></div>

        <a href="#yorumlar" className="microProof" aria-label={`${city.name} öğrenci yorumlarını ve başarı hikayelerini inceleyin`}>
          <div className="avatars" aria-hidden="true"><i>EC</i><i>MK</i><i>SA</i></div>
          <p><strong>Bu ay {city.name}&apos;de 318 öğrenci derse başladı.</strong> · Ücretsiz seviye tespit ve deneme dersinde yerini ayır.</p>
        </a>
      </section>

      <section className="proofPanel" id="neden-biz" aria-label="Başarı ve güven göstergeleri">
        <div className="statsRow">
          {stats.map((stat) => (
            <div className="stat" key={stat.label} tabIndex={0} title={stat.visualize} aria-label={stat.visualize}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <div className="statTooltip" role="tooltip">
                <p>{stat.hoverText}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="trustRow" role="region" aria-label="Güven ve Kalite Standartları">
          {trustItems.map((item) => (
            <div className="trustItem" key={item.title} tabIndex={0} title={item.visualize} aria-label={item.visualize}>
              {item.icon}
              <span>{item.title}</span>
              <div className="trustTooltip" role="tooltip">
                <p>{item.visualize}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CourseTypesSection city={city.name} />
      <ReviewsPlatformSection city={city.name} />
      <DistrictCoursesSection city={city.name} />
      <TeachersSection city={city.name} />
      <CefrProgramsSection />
      <EnrollmentProcessSection city={city.name} />
      <PricingSection city={city.name} />
      <FAQSection city={city.name} />
      <RelatedLinksSection city={city.name} />
    </main>
  );
}
