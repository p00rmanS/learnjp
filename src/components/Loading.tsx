import Brand from './Brand';

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="animate-rise">
        <Brand size="lg" />
      </div>
      <div className="h-1 w-40 overflow-hidden rounded-full bg-paper-deep">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-ai-600" />
      </div>
    </div>
  );
}
