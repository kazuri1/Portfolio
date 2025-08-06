import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#666" }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "2rem",
          padding: "12px 24px",
          backgroundColor: "#007AFF",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "500",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}
