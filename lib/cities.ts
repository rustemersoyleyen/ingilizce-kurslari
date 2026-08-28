import { District, getDistrictsForCity } from "./districts";
import { Teacher, getTeachersForCity } from "./teachers";
import { Review, getReviewsForCity } from "./reviews";
import { CourseType, getCourseTypesForCity } from "./courseTypes";

export type City = {
  slug: string;
  name: string;
  locative: string;
  campusCount: string;
  studentCount: string;
  instructorCount: string;
  successRate: string;
};

export type FullCityData = City & {
  districts: District[];
  teachers: Teacher[];
  reviews: Review[];
  courseTypes: CourseType[];
};

const cities: Record<string, City> = {
  istanbul: {
    slug: "istanbul",
    name: "İstanbul",
    locative: "İstanbul'da",
    campusCount: "12 şube",
    studentCount: "8.400+",
    instructorCount: "146",
    successRate: "%94",
  },
  ankara: {
    slug: "ankara",
    name: "Ankara",
    locative: "Ankara'da",
    campusCount: "7 şube",
    studentCount: "4.200+",
    instructorCount: "82",
    successRate: "%93",
  },
  izmir: {
    slug: "izmir",
    name: "İzmir",
    locative: "İzmir'de",
    campusCount: "5 şube",
    studentCount: "3.100+",
    instructorCount: "64",
    successRate: "%95",
  },
};

const toTitleCase = (value: string) =>
  decodeURIComponent(value)
    .replaceAll("-", " ")
    .replace(/(^|\s)\S/g, (letter) => letter.toLocaleUpperCase("tr-TR"));

export function isValidCity(slug: string): boolean {
  const normalized = slug.toLocaleLowerCase("tr-TR");
  return Boolean(cities[normalized]);
}

export function getAllCitySlugs(): string[] {
  return Object.keys(cities);
}

export function getCity(slug: string): City {
  const normalized = slug.toLocaleLowerCase("tr-TR");
  if (cities[normalized]) return cities[normalized];

  const name = toTitleCase(slug);
  return {
    slug,
    name,
    locative: `${name}'da`,
    campusCount: "Yakında",
    studentCount: "8.400+",
    instructorCount: "146",
    successRate: "%94",
  };
}

export function getFullCityData(slug: string): FullCityData {
  const city = getCity(slug);
  return {
    ...city,
    districts: getDistrictsForCity(slug),
    teachers: getTeachersForCity(slug),
    reviews: getReviewsForCity(slug),
    courseTypes: getCourseTypesForCity(slug),
  };
}
