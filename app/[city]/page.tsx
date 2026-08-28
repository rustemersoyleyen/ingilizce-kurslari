import type { Metadata } from "next";
import { CityHero } from "@/components/CityHero";
import { getCity } from "@/lib/cities";

type Props = { params: Promise<{ city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ["istanbul", "ankara", "izmir"].map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCity((await params).city);
  return {
    title: `${city.name} İngilizce Kursu | Konuşarak Öğren`,
    description: `${city.locative} yüz yüze ve online İngilizce kursları. Ücretsiz seviye tespit sınavına katıl.`,
  };
}

export default async function CityPage({ params }: Props) {
  const city = getCity((await params).city);
  return <CityHero city={city} />;
}
