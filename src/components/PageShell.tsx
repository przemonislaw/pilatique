import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="md:ml-80 flex flex-col min-h-screen relative pt-[72px] md:pt-0">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
