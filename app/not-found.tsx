import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "120px 20px", textAlign: "center", fontFamily: "'Quicksand', sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "16px", color: "#1c55c7" }}>404 - Sayfa Bulunamadı</h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "32px", color: "#56637a" }}>
        Aradığınız İngilizce kursu şehir veya rehber sayfası bulunamadı.
      </p>
      <Link
        href="/istanbul/"
        style={{
          display: "inline-block",
          padding: "14px 28px",
          borderRadius: "24px",
          background: "#309DFF",
          color: "#ffffff",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        İstanbul İngilizce Kursu Sayfasına Dön ↗
      </Link>
    </main>
  );
}
