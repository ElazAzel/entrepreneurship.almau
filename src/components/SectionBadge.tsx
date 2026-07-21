export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-brandOrange/30 bg-brandOrange/10 px-4 py-1 text-xs font-medium uppercase text-brandOrange" style={{ letterSpacing: "0.08em" }}>
      {children}
    </span>
  );
}
