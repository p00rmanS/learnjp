export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-4xl font-bold jp-text mb-4">道</div>
      <div className="text-xl text-gray-600 mb-8">Michi — Loading your path...</div>
      <div className="w-12 h-12 border-4 border-brand-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
