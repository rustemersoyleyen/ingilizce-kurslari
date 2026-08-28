"use client";

import { useMemo, useState } from "react";

type Teacher = {
  id: number;
  name: string;
  from: string;
  university: string;
  degree: string;
  styles: string[];
  interests: string[];
  bio: string;
};

const teachers: Teacher[] = [
  { id: 147, name: "Louis", from: "Atlanta, Georgia", university: "University of Georgia", degree: "İngiliz Dili ve Edebiyatı", styles: ["İleri seviye", "Esnek program", "Nazik yönlendirme"], interests: ["Tarih", "Müzik", "Doğa"], bio: "Asya ve Avrupa'dan öğrencilerle çalışan, konuşma pratiğini kültür ve gündelik hayatla birleştiren deneyimli bir ESL eğitmeni." },
  { id: 152, name: "Perry", from: "Memphis, Tennessee", university: "University of Memphis", degree: "İngilizce Öğretmenliği", styles: ["Başlangıç", "Çocuklar", "Dilbilgisi"], interests: ["Müzik", "Basketbol", "Dans"], bio: "Müzik ve ritmi derslerine taşıyan Perry, ilk dersten itibaren öğrencinin rahatça konuşmasına odaklanır." },
  { id: 223, name: "Alice", from: "Orlando, Florida", university: "University of Central Florida", degree: "İletişim ve Konaklama Yönetimi", styles: ["Başlangıç", "Konuşma", "Yavaş anlatım"], interests: ["Yazı", "Şiir", "Doğa yürüyüşü"], bio: "Misafirperverlik deneyimini dil eğitimine taşıyarak gerçek hayattaki konuşmalar için güvenli ve neşeli bir alan kurar." },
  { id: 257, name: "Kellin", from: "Cambridge, Massachusetts", university: "MCPHS University", degree: "Sağlık Bilimleri", styles: ["Her seviye", "Esnek program", "Dilbilgisi"], interests: ["Seyahat", "Kitaplar", "Doğa"], bio: "Her öğrenciden yeni bir şey öğrenildiğine inanan Kellin, açık anlatımı ve sabırlı geri bildirimleriyle ilerlemeyi görünür kılar." },
  { id: 260, name: "Gareth", from: "New York", university: "New York School of the Arts", degree: "Güzel Sanatlar", styles: ["Başlangıç", "Yaratıcı öğretim", "Çocuklar"], interests: ["Fotoğraf", "Çizim", "Sanat"], bio: "Sanat ve görsel hikâye anlatımını kullanarak kelimeleri hatırlamayı ve doğal cümle kurmayı kolaylaştırır." },
  { id: 1026, name: "Harleigh", from: "Tennessee", university: "Tennessee State University", degree: "İngilizce Öğretmenliği", styles: ["İleri seviye", "Dilbilgisi", "Yavaş anlatım"], interests: ["Kitaplar", "Eğitim", "Seyahat"], bio: "Güçlü kelime ve dilbilgisi bilgisiyle özellikle akademik hedefleri olan öğrencilere sakin, yapılandırılmış bir yol sunar." },
  { id: 1457, name: "Hunter", from: "Memphis, Tennessee", university: "University of Tennessee", degree: "Sosyal Bilimler", styles: ["Her seviye", "Konuşma", "Nazik yönlendirme"], interests: ["Basketbol", "Kitaplar", "Yemek"], bio: "Meraklı ve arkadaş canlısı yaklaşımıyla öğrencilerin hata yapma kaygısını azaltır, konuşmayı günlük bir alışkanlığa dönüştürür." },
  { id: 12635, name: "Shelby", from: "Nashville, Tennessee", university: "Trevecca Nazarene University", degree: "İngilizce Öğretmenliği", styles: ["Başlangıç", "İleri seviye", "Yavaş anlatım"], interests: ["Yazı", "Bilim", "Seyahat"], bio: "Beş yıllık özel ders deneyimiyle karmaşık konuları sadeleştirir ve başlangıç seviyesindeki öğrenciler için net bir rota çizer." },
];

const filters = ["Başlangıç", "Konuşma", "Dilbilgisi", "Çocuklar", "İleri seviye"];
const colors = ["#309DFF"];

function TeacherCard({ teacher, index }: { teacher: Teacher; index: number }) {
  const [imageFailed, setImageFailed] = useState(false);
  const accent = colors[index % colors.length];

  return (
    <article className="teacherCard" itemScope itemType="https://schema.org/Person" style={{ "--teacher-accent": accent } as React.CSSProperties}>
      <div className="teacherPhoto">
        {!imageFailed ? (
          <img src={`https://e-teacher.org/users.profile/${teacher.id}.jpg`} alt={`İngilizce eğitmeni ${teacher.name}`} onError={() => setImageFailed(true)} itemProp="image" />
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
      </div>
    </article>
  );
}

export function TeachersSection({ city }: { city: string }) {
  const [filter, setFilter] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const visibleTeachers = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");
    return teachers.filter((teacher) => {
      const matchesFilter = !filter || teacher.styles.includes(filter);
      const haystack = [teacher.name, teacher.degree, teacher.university, ...teacher.interests].join(" ").toLocaleLowerCase("tr-TR");
      return matchesFilter && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [filter, query]);

  return (
    <section className="teachersSection" id="egitmenler" aria-labelledby="teachers-title">
      <div className="teachersHeader">
        <div>
          <p className="sectionKicker">Ana dili İngilizce · Bire bir destek</p>
          <h2 id="teachers-title">{city} İngilizce Kursu Eğitmenleri</h2>
        </div>
        <p>Öğrenme hızınıza ve hedefinize uygun eğitmeni seçin. Her eğitmen konuşma pratiğini, yapılandırılmış geri bildirimi ve gerçek yaşam İngilizcesini kendi uzmanlığıyla birleştirir.</p>
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
        <div className="teacherRail">{visibleTeachers.map((teacher, index) => <TeacherCard key={teacher.id} teacher={teacher} index={index} />)}</div>
      ) : (
        <div className="teacherEmpty">Bu aramaya uygun eğitmen bulunamadı. Aramayı temizleyin veya başka bir öğretim tarzı seçin.</div>
      )}
    </section>
  );
}
