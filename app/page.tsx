"use client";

export default function Home() {
  
  const handleGetTesting = async () => {
    const response = await fetch("http://localhost:5000/api/testing");
    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleGetTesting}
        className="bg-black text-white font-bold px-3 py-2 rounded-md"
      >
        GET
      </button>
    </div>
  );
}
