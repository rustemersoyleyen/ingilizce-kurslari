import { getCourseTypesForCity, CourseType } from "@/lib/courseTypes";

function CourseIcon({ kind, city, courseTitle }: { kind?: string; city: string; courseTitle: string }) {
  const safeId = `${city.toLowerCase().replace(/[^a-z0-9]/g, "")}-${kind || "course"}`;
  const titleId = `icon-title-${safeId}`;
  const descId = `icon-desc-${safeId}`;
  const titleText = `${city} ${courseTitle} İngilizce Kursu`;
  const descText = `${city} için konuşma odaklı ${courseTitle} İngilizce eğitim programı`;

  switch (kind) {
    case "general":
      // Speech Bubble / Conversation Icon
      return (
        <svg viewBox="0 0 24 24" role="img" aria-labelledby={`${titleId} ${descId}`} width="20" height="20">
          <title id={titleId}>{titleText}</title>
          <desc id={descId}>{descText}</desc>
          <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H5.2L4 15.2V4h16v10z" />
          <path fill="currentColor" d="M7 9h10v2H7zm0-3h10v2H7z" />
        </svg>
      );
    case "exam":
      // Academic Award / Certificate Icon
      return (
        <svg viewBox="0 0 24 24" role="img" aria-labelledby={`${titleId} ${descId}`} width="20" height="20">
          <title id={titleId}>{titleText}</title>
          <desc id={descId}>{descText}</desc>
          <path fill="currentColor" d="M12 3L1 9l11 6l9-4.91V17h2V9L12 3zM5 13.18v4l7 3.82l7-3.82v-4L12 17l-7-3.82z" />
        </svg>
      );
    case "career":
      // Briefcase / Business Icon
      return (
        <svg viewBox="0 0 24 24" role="img" aria-labelledby={`${titleId} ${descId}`} width="20" height="20">
          <title id={titleId}>{titleText}</title>
          <desc id={descId}>{descText}</desc>
          <path fill="currentColor" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
        </svg>
      );
    case "online":
      // Live Video / Monitor Icon
      return (
        <svg viewBox="0 0 24 24" role="img" aria-labelledby={`${titleId} ${descId}`} width="20" height="20">
          <title id={titleId}>{titleText}</title>
          <desc id={descId}>{descText}</desc>
          <path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-10-7l4 2.5l-4 2.5v-5z" />
        </svg>
      );
    default:
      return null;
  }
}

export function CourseTypesSection({ city }: { city: string }) {
  const courseTypes = getCourseTypesForCity(city);
  return (
    <section className="coursesSection" id="programlar" aria-labelledby="courses-title">
      <header className="coursesHeader">
        <p className="sectionKicker">Hedefine göre doğru rota</p>
        <h2 id="courses-title">{city} İngilizce Kursu Türleri</h2>
        <p>
          İngilizceyi neden öğrenmek istediğini söyle; seviyene, zamanına ve hedeflerine uygun programı birlikte seçelim. Kur detayları için <a href="#seviyeler" className="contextualLink">İngilizce seviyelerini inceleyin</a>.
        </p>
      </header>

      <ul className="courseGrid">
        {courseTypes.map((course, index) => {
          const visualizeText = `${city} ${course.title} İngilizce Kursu (${course.code})`;
          return (
            <li className={`courseCard${course.featured ? " featured" : ""}`} id={`program-${index + 1}`} key={course.title}>
              <div className="courseTopline">
                <h3 title={`${index + 1}. ${course.title}`}>{index + 1}. {course.title}</h3>
                <div className="courseBadges" aria-label={visualizeText}>
                  <div
                    className="courseIconWrapper"
                    tabIndex={0}
                    title={`${city} ${course.title} İngilizce Kursu`}
                    aria-label={`${city} ${course.title} İngilizce Kursu`}
                  >
                    <CourseIcon kind={course.iconKind} city={city} courseTitle={course.title} />
                    <span className="badgeVisualizeTooltip" role="tooltip">
                      {city} {course.title} İngilizce Kursu
                    </span>
                  </div>
                  <strong
                    tabIndex={0}
                    title={`${city} ${course.title} Seviye Rozeti: ${course.code}`}
                    aria-label={`${city} ${course.title} Seviye Rozeti: ${course.code}`}
                  >
                    {course.code}
                    <span className="badgeVisualizeTooltip" role="tooltip">
                      {city} {course.title} Seviyesi ({course.code})
                    </span>
                  </strong>
                </div>
              </div>
              <p className="coursePromise">{course.promise}</p>
              <p className="courseDescription">{course.description}</p>

              <ul className="courseAdvantages">
                {course.advantages.map((advantage) => <li key={advantage}><span>✓</span>{advantage}</li>)}
              </ul>

              <div className="courseActions">
                <a className="coursePrimary" href="#seviye-testi">Seviyeni belirle</a>
                <a className="courseLink" href="#egitmenler">Eğitmenleri gör</a>
              </div>

              <div className="courseQuestions">
                {course.questions.map((item) => (
                  <details key={item.question}>
                    <summary>{item.question}<span aria-hidden="true">+</span></summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </li>
          );
        })}
      </ul>

      <aside className="courseHelp">
        <div className="helpHeading"><span className="helpPulse" />Karar veremedin mi?</div>
        <p>Hedefini ve haftalık programını anlat; eğitim danışmanın sana en uygun rotayı ücretsiz oluştursun.</p>
        <a className="helpCtaButton" href="#seviye-testi">
          <span>Programımı Birlikte Seçelim</span>
          <span className="ctaArrow" aria-hidden="true">→</span>
        </a>
      </aside>
    </section>
  );
}

