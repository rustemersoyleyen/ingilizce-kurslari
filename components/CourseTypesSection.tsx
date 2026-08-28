import { getCourseTypesForCity, CourseType } from "@/lib/courseTypes";

function CourseIcon({ kind }: { kind?: string }) {
  switch (kind) {
    case "general":
      // Speech Bubble / Conversation Icon
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
          <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H5.2L4 15.2V4h16v10z" />
          <path fill="currentColor" d="M7 9h10v2H7zm0-3h10v2H7z" />
        </svg>
      );
    case "exam":
      // Academic Award / Certificate Icon
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
          <path fill="currentColor" d="M12 3L1 9l11 6l9-4.91V17h2V9L12 3zM5 13.18v4l7 3.82l7-3.82v-4L12 17l-7-3.82z" />
        </svg>
      );
    case "career":
      // Briefcase / Business Icon
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
          <path fill="currentColor" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
        </svg>
      );
    case "online":
      // Live Video / Monitor Icon
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
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
          İngilizceyi neden öğrenmek istediğini söyle; seviyene, zamanına ve hedeflerine uygun programı birlikte seçelim. Kur detayları için <a href="#seviyeler" className="contextualLink">İngilizce seviyelerini inceleyin ↗</a>.
        </p>
      </header>

      <div className="courseGrid">
        {courseTypes.map((course, index) => (
          <article className={`courseCard${course.featured ? " featured" : ""}`} id={`program-${index + 1}`} key={course.title}>
            <div className="courseTopline">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div className="courseIconWrapper" aria-hidden="true">
                <CourseIcon kind={course.iconKind} />
              </div>
              <strong>{course.code}</strong>
            </div>
            <h3>{course.title}</h3>
            <p className="coursePromise">{course.promise}</p>
            <p className="courseDescription">{course.description}</p>

            <ul className="courseAdvantages">
              {course.advantages.map((advantage) => <li key={advantage}><span>✓</span>{advantage}</li>)}
            </ul>

            <div className="courseActions">
              <a className="coursePrimary" href="#seviye-testi">Seviyeni belirle <span>↗</span></a>
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
          </article>
        ))}
      </div>

      <aside className="courseHelp">
        <div><span className="helpPulse" />Karar veremedin mi?</div>
        <p>Hedefini ve haftalık programını anlat; eğitim danışmanın sana en uygun rotayı ücretsiz oluştursun.</p>
        <a href="#seviye-testi">Programımı birlikte seçelim <span>→</span></a>
      </aside>
    </section>
  );
}
