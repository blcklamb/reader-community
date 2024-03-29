import Header from "@/components/layout/Header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main
        className={`flex flex-col px-4 max-h-[calc(100vh_-_3.75rem)] mt-14`}
      >
        {children}
      </main>
    </>
  );
}
