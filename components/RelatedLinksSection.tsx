"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getInternalLinksForCity } from "@/lib/internalLinks";
import { getCity } from "@/lib/cities";

export function RelatedLinksSection({ city }: { city: string }) {
  const cityObj = useMemo(() => getCity(city), [city]);
  const tabs = useMemo(() => getInternalLinksForCity(city), [city]);
  const [selected, setSelected] = useState(0);

  const active = tabs[selected] || tabs[0];

  return (
    <section className="relatedSection" id="rehberler" aria-labelledby="related-title">
      <header className="relatedHeader">
        <p className="sectionKicker">İç Bağlantılar & Rehberler</p>
        <h2 id="related-title">{cityObj.name} İngilizce Kursu İçin İlgili Sayfalar</h2>
        <p>
          {cityObj.name} İngilizce kursu seçeneklerini araştırırken ilçelere ve eğitim programlarına göre ilgili iç bağlantılara ve rehberlere göz atabilirsiniz.
        </p>
      </header>

      <div className="relatedTabs" role="tablist" aria-label="İlgili bağlantı konusunu seçin">
        {tabs.map((tab, index) => (
          <button
            role="tab"
            id={`related-tab-${index}`}
            aria-selected={selected === index}
            aria-controls="related-panel"
            className={selected === index ? "active" : ""}
            key={tab.label}
            onClick={() => setSelected(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relatedGrid" id="related-panel" role="tabpanel" aria-labelledby={`related-tab-${selected}`}>
        {active.links.map((link, index) => (
          <Link href={link.href} key={link.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{link.title}</strong>
              <small>{link.detail}</small>
            </div>
            <i>↗</i>
          </Link>
        ))}
      </div>
    </section>
  );
}
