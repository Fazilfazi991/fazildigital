export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-fade-in">
      {children}
    </div>
  );
}
