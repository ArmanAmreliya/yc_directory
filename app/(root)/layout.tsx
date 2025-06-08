import { SessionProvider } from "next-auth/react";
import Navbar from "../../components/Navbar";

export default function Layout({children}:Readonly<{ children:React.ReactNode}>) {
  return (
    <main className="font-work-sans">
      <SessionProvider>
      <Navbar />
      </SessionProvider>
      {children}
    </main>
  );
}