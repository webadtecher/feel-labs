export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h1>Feel Labs – Starter</h1>
      <p>Next.js is running on Vercel.</p>
      <p>
        Test Supabase connection:{" "}
        <a
          href="/api/test-supabase"
          style={{ color: "cyan", textDecoration: "underline" }}
        >
          /api/test-supabase
        </a>
      </p>
    </main>
  );
}
