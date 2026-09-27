"use client";

import { useMemo, useState } from "react";
import { getTeachersForCity, Teacher } from "@/lib/teachers";
import { getCity } from "@/lib/cities";
import { getDistrictsForCity } from "@/lib/districts";

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

function TeacherCard({ teacher, index, cityName, districtName }: { teacher: Teacher; index: number; cityName: string; districtName: string }) {
  const [imageFailed, setImageFailed] = useState(false);
  const accent = colors[index % colors.length];

  const primaryInterests = teacher.interests.slice(0, 2);
  const contextPhrases = primaryInterests
    .map((interest) => interestContextMap[interest] || interest.toLocaleLowerCase("tr-TR"))
    .join(" ve ");

  const teacherVisualTitle = `${cityName} İngilizce Kursu Uzman Eğitmeni Teacher ${teacher.name} (${teacher.from}) - ${teacher.degree}`;

  return (
    <article
      className="teacherCard"
      itemScope
      itemType="https://schema.org/Person"
      style={{ "--teacher-accent": accent } as React.CSSProperties}
      title={teacherVisualTitle}
      aria-label={teacherVisualTitle}
      tabIndex={0}
    >
      <div className="teacherFullCardVisualize" role="tooltip">
        <div className="teacherVisualizeHeader">
          <span className="teacherVisualizePulse" aria-hidden="true" />
          <strong>{cityName} İngilizce Kursu Eğitmen Dosyası</strong>
        </div>
        <p>
          Teacher {teacher.name} ({teacher.from}) · {teacher.degree} mezunu olup {primaryInterests.join(" ve ")} konularında konuşma pratiği sunar.
        </p>
      </div>
      <div className="teacherPhoto">
        {!imageFailed ? (
          <img
            src={`https://e-teacher.org/users.profile/${teacher.id}.jpg`}
            alt={`${cityName} İngilizce Kursu Eğitmeni Teacher ${teacher.name}`}
            title={`${cityName} İngilizce Kursu Eğitmeni Teacher ${teacher.name} - ${teacher.from}`}
            onError={() => setImageFailed(true)}
            itemProp="image"
            loading="lazy"
            width={280}
            height={260}
          />
        ) : (
          <span aria-hidden="true">{teacher.name.slice(0, 2).toUpperCase()}</span>
        )}
        <span className="teacherStatus"><i /> Ders veriyor</span>
      </div>
      <div className="teacherBody">
        <div className="teacherTopInfo">
          <p className="teacherIndex">Eğitmen Dosyası · {index + 1}</p>
          <div className="teacherVisualizeBadge" title={teacherVisualTitle} aria-label={teacherVisualTitle}>
            <span>{cityName} · {teacher.from}</span>
          </div>
        </div>

        <h3 itemProp="name">Teacher {teacher.name}</h3>
        <p className="teacherOrigin"><strong>Memleket:</strong> {teacher.from}</p>
        <p className="teacherDegree" itemProp="alumniOf"><strong>{teacher.degree}</strong><br />{teacher.university}</p>
        <p className="teacherBio" itemProp="description">{teacher.bio}</p>
        
        <ul className="teacherTags" aria-label="Öğretim tarzları">
          {teacher.styles.map((style) => <li key={style}>{style}</li>)}
        </ul>
        <div className="teacherInterests">
          <span className="teacherInterestsTitle">İlgi alanları</span>
          <ul className="teacherInterestsList" aria-label={`Teacher ${teacher.name} ilgi alanları`}>
            {teacher.interests.map((interest, idx) => {
              const infoText = `${cityName} ${districtName} şubesinde Teacher ${teacher.name} ile ${interest} üzerine konuşun`;
              return (
                <li key={interest}>
                  {idx > 0 && <span aria-hidden="true" className="interestSeparator"> · </span>}
                  <span
                    className="interestTag"
                    title={infoText}
                    aria-label={infoText}
                    tabIndex={0}
                  >
                    {interest}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        
        {/* Doğal Sözel Bağlantı / Verbalization Kutu */}
        <div className="teacherPracticeNote">
          <span>💬 Konuşma Odaklı Ders:</span>
          Teacher {teacher.name} ({teacher.from}) ile <strong>{contextPhrases}</strong> hakkında {cityName}&apos;de bire bir İngilizce konuşma pratiği yapın.
        </div>
      </div>
    </article>
  );
}

export function TeachersSection({ city }: { city: string }) {
  const cityObj = useMemo(() => getCity(city), [city]);
  const districts = useMemo(() => getDistrictsForCity(city), [city]);
  const primaryDistrictName = districts[0]?.name || "Merkez";
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
          {cityObj.locative} akıcı İngilizce konuşma pratiği yapmak isteyen öğrencilerimiz için anadili İngilizce olan uzman eğitmen kadromuzu inceleyin. Her eğitmen konuşma pratiğini kendi uzmanlığıyla birleştirir. Program detayları için <a href="#programlar" className="contextualLink">kurs türlerini inceleyin</a>.
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
            <TeacherCard key={teacher.id} teacher={teacher} index={index} cityName={cityObj.name} districtName={primaryDistrictName} />
          ))}
        </div>
      ) : (
        <div className="teacherEmpty">Bu aramaya uygun eğitmen bulunamadı. Aramayı temizleyin veya başka bir öğretim tarzı seçin.</div>
      )}
    </section>
  );
}
