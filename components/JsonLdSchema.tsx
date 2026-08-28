import { FullCityData, getFullCityData } from "@/lib/cities";
import { getFaqsForCity } from "@/lib/faqs";

type Props = {
  city: FullCityData | string;
};

export function JsonLdSchema({ city }: Props) {
  const cityData: FullCityData =
    typeof city === "string" ? getFullCityData(city) : city;

  const baseUrl = "https://rustemersoyleyen.github.io/ingilizce-kurslari";
  const cityUrl = `${baseUrl}/${cityData.slug}/`;

  // 1. EducationalOrganization (Ana Marka & Şehir Hizmet Alanı)
  const organizationSchema = {
    "@type": "EducationalOrganization",
    "@id": `${baseUrl}/#organization`,
    name: "Konuşarak Öğren",
    url: baseUrl,
    logo: `${baseUrl}/logo/ko-logo-yatay.png`,
    sameAs: ["https://www.konusarakogren.com/"],
    areaServed: {
      "@type": "City",
      name: cityData.name,
    },
  };

  // 2. WebPage Entity
  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${cityUrl}#webpage`,
    url: cityUrl,
    name: `${cityData.name} İngilizce Kursu | Konuşarak Öğren`,
    description: `${cityData.locative} yüz yüze ve canlı online İngilizce kursları. Seviyene uygun bire bir konuşma sınıfını seç, ücretsiz seviye tespit sınavına katıl.`,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      name: "Konuşarak Öğren",
      url: baseUrl,
    },
    about: {
      "@type": "EducationalOrganization",
      "@id": `${baseUrl}/#organization`,
    },
  };

  // 3. BreadcrumbList
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${cityUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${cityData.name} İngilizce Kursu`,
        item: cityUrl,
      },
    ],
  };

  // 4. Course List (Doğrulanmış Kurs Türleri)
  const courseSchemas = cityData.courseTypes.map((course, idx) => ({
    "@type": "Course",
    "@id": `${cityUrl}#course-${idx + 1}`,
    name: `${cityData.name} ${course.title}`,
    description: course.description,
    courseCode: course.code,
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${baseUrl}/#organization`,
      name: "Konuşarak Öğren",
      url: baseUrl,
    },
  }));

  // 5. Person List (Doğrulanmış Eğitmen Profilleri)
  const teacherSchemas = cityData.teachers.map((teacher) => ({
    "@type": "Person",
    "@id": `${cityUrl}#teacher-${teacher.id}`,
    name: `Teacher ${teacher.name}`,
    jobTitle: "İngilizce Eğitmeni",
    worksFor: {
      "@type": "EducationalOrganization",
      "@id": `${baseUrl}/#organization`,
      name: "Konuşarak Öğren",
      url: baseUrl,
    },
    alumniOf: teacher.university,
    description: teacher.bio,
  }));

  // 6. Review List (Şehre Özel Gerçek Müşteri Yorumları)
  const reviewSchemas = cityData.reviews.map((review, idx) => ({
    "@type": "Review",
    "@id": `${cityUrl}#review-${idx + 1}`,
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewBody: review.body,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "EducationalOrganization",
      "@id": `${baseUrl}/#organization`,
      name: "Konuşarak Öğren",
    },
  }));

  // 7. AggregateRating (Doğrulanmış Gerçek Şehir Yorumları Hesabı)
  const totalRating = cityData.reviews.reduce((acc, r) => acc + r.rating, 0);
  const avgRating =
    cityData.reviews.length > 0
      ? (totalRating / cityData.reviews.length).toFixed(1)
      : null;

  const aggregateRatingSchema =
    avgRating && cityData.reviews.length > 0
      ? {
          "@type": "EducationalOrganization",
          "@id": `${cityUrl}#aggregate-rating`,
          name: `Konuşarak Öğren ${cityData.name}`,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: avgRating,
            reviewCount: cityData.reviews.length,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : null;

  // 8. FAQPage (Şehre Özel Sıkça Sorulan Sorular)
  const faqs = getFaqsForCity(cityData.slug);
  const faqSchema =
    faqs.length > 0
      ? {
          "@type": "FAQPage",
          "@id": `${cityUrl}#faq`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  // Google Preferred Unified JSON-LD @graph Structure
  const graphNodes = [
    organizationSchema,
    webPageSchema,
    breadcrumbSchema,
    ...courseSchemas,
    ...teacherSchemas,
    ...reviewSchemas,
    ...(aggregateRatingSchema ? [aggregateRatingSchema] : []),
    ...(faqSchema ? [faqSchema] : []),
  ];

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": graphNodes,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
