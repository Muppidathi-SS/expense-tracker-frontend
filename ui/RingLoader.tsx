export const RingLoader = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4
        border-transparent border-t-[#4285F4]
        border-r-[#EA4335] border-b-[#FBBC05]
        border-l-[#34A853]"
      />
      <p className="text-md font-medium text-gray-500">Loading...</p>
    </div>
  );
};
