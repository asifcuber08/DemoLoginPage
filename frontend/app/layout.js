import "./globals.css";
import Navbar from "../components/Navbar";
import AuthProvider from "../context/AuthContext"; // import here

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>    {/* Wrap everything inside AuthProvider */}
          <Navbar />
          <main className="p-6">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
