"use client";

import { useState } from "react";
import { getFaqsForCity, CityFAQ } from "@/lib/faqs";

export function FAQSection({ city }: { city: string }) {
  const faqs = getFaqsForCity(city);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqSection" id="sss" aria-labelledby="faq-title">
      <header className="faqHeader">
        <p className="sectionKicker">Aklınıza takılan tüm yanıtlar</p>
        <h2 id="faq-title">{city} İngilizce Kursu Hakkında Sıkça Sorulan Sorular</h2>
        <p>
          {city} özelinde seviye tespiti, ders içerikleri, taksit seçenekleri ve kayıt süreçleri hakkında en çok merak edilen sorular.
        </p>
      </header>

      <div className="faqList">
        {faqs.map((faq: CityFAQ, index: number) => {
          const isOpen = openIndex === index;
          const HeadingTag = faq.headingLevel === 4 ? "h4" : "h3";

          return (
            <article key={faq.id || index} className={`faqItem${isOpen ? " active" : ""}`}>
              <button
                type="button"
                className="faqQuestionButton"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
              >
                <HeadingTag className="faqQuestionTitle">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {faq.question}
                </HeadingTag>
                <span className="faqIcon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="faqContent">
                  {faq.context && <p className="faqContext">{faq.context}</p>}
                  <p className="faqAnswer">{faq.answer}</p>
                  {faq.ctaLabel && faq.ctaHref && (
                    <a className="faqCta" href={faq.ctaHref}>
                      {faq.ctaLabel}
                    </a>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
