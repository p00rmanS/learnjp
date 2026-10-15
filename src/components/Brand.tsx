interface BrandProps {
  size?: 'sm' | 'lg';
}

export default function Brand({ size = 'sm' }: BrandProps) {
  const seal = size === 'lg' ? 'h-14 w-14 text-3xl' : 'h-9 w-9 text-lg';
  const word = size === 'lg' ? 'text-4xl' : 'text-lg';
  return (
    <div className="flex items-center gap-3">
      <span className={`hanko ${seal}`} aria-hidden="true">
        道
      </span>
      <div className="leading-none">
        <div className={`display ${word}`}>Michi</div>
        {size === 'sm' && <div className="mt-1 text-[11px] tracking-wide text-ink-3">Japanese, step by step</div>}
      </div>
    </div>
  );
}
