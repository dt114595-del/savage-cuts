export default function AcmeLogo() {
  return (
    <div className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c59d5f"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12l9-9 9 9-9 9-9-9z" />
      </svg>
      <span className="text-xl font-bold tracking-widest text-[var(--accent)]">
        SAVAGE CUTS
      </span>
    </div>
  );
}
