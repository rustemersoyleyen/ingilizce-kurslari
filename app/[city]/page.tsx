import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityHero } from "@/components/CityHero";
import { JsonLdSchema } from "@/components/JsonLdSchema";
import { getCity, getFullCityData, getAllCitySlugs, isValidCity } from "@/lib/cities";

type Props = { params: Promise<{ city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const citySlug = (await params).city;
  if (!isValidCity(citySlug)) {
    return {
      title: "Sayfa Bulunamadı | Konuşarak Öğren",
    };
  }

  const city = getCity(citySlug);
  const baseUrl = "https://rustemersoyleyen.github.io/ingilizce-kurslari";
  const canonicalUrl = `${baseUrl}/${city.slug}/`;

  const title = `${city.name} İngilizce Kursu | Konuşarak Öğren`;
  const description = `${city.locative} yüz yüze ve canlı online İngilizce kursları. Seviyene uygun bire bir konuşma sınıfını seç, ücretsiz seviye tespit sınavına katıl.`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Konuşarak Öğren",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function CityPage({ params }: Props) {
  const citySlug = (await params).city;
  if (!isValidCity(citySlug)) {
    notFound();
  }

  const cityData = getFullCityData(citySlug);
  return (
    <>
      <JsonLdSchema city={cityData} />
      <CityHero city={cityData} />
    </>
  );
}
