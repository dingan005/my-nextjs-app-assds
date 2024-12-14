import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css"; // Optional: For additional styling

export default function Home() {
  return (
    <>
      <main>
        <header style={{
          backgroundColor: "green",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #ddd",
        }}>
          <h1 style={{ margin: 0 }}>My Website</h1>
          <nav>
            <ul style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}>
              <li style={{ margin: "0 10px" }}>
                <Link href="/" legacyBehavior>
                  <a style={{ textDecoration: "none", color: "white" }}>Home</a>
                </Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link href="/users" legacyBehavior>
                  <a style={{ textDecoration: "none", color: "white" }}>Users</a>
                </Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link href="/contact" legacyBehavior>
                  <a style={{ textDecoration: "none", color: "white" }}>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <section style={{ padding: "20px" }}>
          <h1 style={{ fontSize: "2.5rem", color: "#007bff", marginBottom: "10px" }}>Welcome to My Website</h1>
          <p style={{ fontSize: "1.2rem", color: "#555" }}>Explore the world of creativity and innovation with us. Navigate through our pages to learn more!</p>
        </section>
      </main>
      <footer style={{
        backgroundColor: "black",
        padding: "10px 20px",
        textAlign: "center",
        borderTop: "1px solid #ddd",
        marginTop: "500px",
      }}>
        <p style={{ margin: 0,color:"white" }}>© 2024 My Website. All rights reserved.</p>
      </footer>
    </>
  );
}
