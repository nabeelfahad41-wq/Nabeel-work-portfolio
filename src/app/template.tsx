/** Route transition: a CSS curtain wipe followed by a content fade (no JS dependency, so it can't get stuck). */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="curtain" aria-hidden="true" />
      <div className="page-in">{children}</div>
    </>
  );
}
