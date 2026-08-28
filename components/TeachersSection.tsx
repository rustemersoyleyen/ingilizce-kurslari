"use client";

import { useMemo, useState } from "react";
import { getTeachersForCity, Teacher } from "@/lib/teachers";
import { getCity } from "@/lib/cities";

const filters = ["Başlangıç", "Konuşma", "Dilbilgisi", "Çocuklar", "İleri seviye"];
const colors = ["#309DFF"];

const interestContextMap: Record<string, string> = {
  Müzik: "müzik ve sahne sanatları",
  Tarih: "tarih ve genel kültür",
  Doğa: "doğa ve açık alan yaşamı",
  "Doğa yürüyüşü": "doğa yürüyüşleri ve aktif yaşam",
  Basketbol: "spor ve takım oyunları",
  Dans: "sanat ve dans kültürü",
  Yazı: "yaratıcı yazarlık ve edebiyat",
  Şiir: "edebiyat ve şiir sohbetleri",
  Seyahat: "seyahat ve günlük İngilizce diyaloglar",
  Kitaplar: "kitap incelemeleri ve fikir tartışmaları",
  Fotoğraf: "fotoğrafçılık ve görsel sanatlar",
  Çizim: "tasarım ve görsel sanatlar",
  Sanat: "kültür ve çağdaş sanat",
  Eğitim: "akademik gelişim ve eğitim",
  Yemek: "gastronomi ve mutfak kültürü",
  Bilim: "bilim ve popüler teknoloji",
};

function TeacherCard({ teacher, index, cityName }: { teacher: Teacher; index: number; cityName: string }) {
  const [imageFailed, setImageFailed] = useState(false);
  const accent = colors[index % colors.length];

  const primaryInterests = teacher.interests.slice(0, 2);
  const contextPhrases = primaryInterests
    .map((interest) => interestContextMap[interest] || interest.toLocaleLowerCase("tr-TR"))
    .join(" ve ");

  return (
    <article className="teacherCard" itemScope itemType="https://schema.org/Person" style={{ "--teacher-accent": accent } as React.CSSProperties}>
      <div className="teacherPhoto">
        {!imageFailed ? (
          <img
            src={`https://e-teacher.org/users.profile/${teacher.id}.jpg`}
            alt={`İngilizce eğitmeni ${teacher.name}`}
            onError={() => setImageFailed(true)}
            itemProp="image"
            loading="lazy"
            width={120}
            height={120}
          />
        ) : (
          <span aria-hidden="true">{teacher.name.slice(0, 2).toUpperCase()}</span>
        )}
        <span className="teacherStatus"><i /> Ders veriyor</span>
      </div>
      <div className="teacherBody">
        <p className="teacherIndex">Eğitmen dosyası · {String(index + 1).padStart(2, "0")}</p>
        <h3 itemProp="name">Teacher {teacher.name}</h3>
        <p className="teacherOrigin">{teacher.from}</p>
        <p className="teacherDegree" itemProp="alumniOf"><strong>{teacher.degree}</strong><br />{teacher.university}</p>
        <p className="teacherBio" itemProp="description">{teacher.bio}</p>
        <ul className="teacherTags" aria-label="Öğretim tarzları">
          {teacher.styles.map((style) => <li key={style}>{style}</li>)}
        </ul>
        <p className="teacherInterests"><span>İlgi alanları</span>{teacher.interests.join(" · ")}</p>
        
        {/* Doğal Sözel Bağlantı / Verbalization Kutu */}
        <div className="teacherPracticeNote">
          <span>💬 Konuşma Odaklı Ders:</span>
          Teacher {teacher.name} ile <strong>{contextPhrases}</strong> hakkında {cityName}&apos;de bire bir İngilizce konuşma pratiği yapın.
        </div>
      </div>
    </article>
  );
}

export function TeachersSection({ city }: { city: string }) {
  const cityObj = useMemo(() => getCity(city), [city]);
  const teachers = useMemo(() => getTeachersForCity(city), [city]);
  const [filter, setFilter] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const visibleTeachers = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");
    return teachers.filter((teacher) => {
      const matchesFilter = !filter || teacher.styles.includes(filter);
      const haystack = [teacher.name, teacher.degree, teacher.university, ...teacher.interests].join(" ").toLocaleLowerCase("tr-TR");
      return matchesFilter && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [teachers, filter, query]);

  return (
    <section className="teachersSection" id="egitmenler" aria-labelledby="teachers-title">
      <div className="teachersHeader">
        <div>
          <p className="sectionKicker">Ana dili İngilizce · Bire bir destek</p>
          <h2 id="teachers-title">{cityObj.name} İngilizce Kursu Eğitmenleri</h2>
        </div>
        <p>
          {cityObj.locative} akıcı İngilizce konuşma pratiği yapmak isteyen öğrencilerimiz için anadili İngilizce olan uzman eğitmen kadromuzu inceleyin. Her eğitmen konuşma pratiğini kendi uzmanlığıyla birleştirir. Program detayları için <a href="#programlar" className="contextualLink">kurs türlerini inceleyin ↗</a>.
        </p>
      </div>

      <div className="teacherTools">
        <div className="teacherFilters" aria-label="Eğitmenleri öğretim tarzına göre filtrele">
          <button className={!filter ? "active" : ""} onClick={() => setFilter(null)}>Tümü <span>{teachers.length}</span></button>
          {filters.map((item) => {
            const count = teachers.filter((teacher) => teacher.styles.includes(item)).length;
            return <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(filter === item ? null : item)}>{item} <span>{count}</span></button>;
          })}
        </div>
        <label className="teacherSearch">
          <span className="srOnly">Eğitmen ara</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="İsim, bölüm veya ilgi alanı ara" />
          <i aria-hidden="true">⌕</i>
        </label>
      </div>

      <p className="teacherCount">{teachers.length} eğitmenden {visibleTeachers.length} tanesi gösteriliyor</p>
      {visibleTeachers.length ? (
        <div className="teacherRail">
          {visibleTeachers.map((teacher, index) => (
            <TeacherCard key={teacher.id} teacher={teacher} index={index} cityName={cityObj.name} />
          ))}
        </div>
      ) : (
        <div className="teacherEmpty">Bu aramaya uygun eğitmen bulunamadı. Aramayı temizleyin veya başka bir öğretim tarzı seçin.</div>
      )}
    </section>
  );
}
