export const DotsLoader = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 animate-bounce rounded-full bg-[#4285F4] [animation-delay:0ms]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-[#EA4335] [animation-delay:150ms]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-[#FBBC05] [animation-delay:300ms]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-[#34A853] [animation-delay:450ms]" />
      </div>
      <p className="text-sm text-gray-500">Loading...</p>
    </div>
  );
};
