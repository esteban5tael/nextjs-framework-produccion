"use client"

import { useState } from "react"


export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-900 rounded-xl shadow-lg p-8">
      <div className="mb-6">
        <span className="text-5xl font-bold text-white drop-shadow-lg">{count}</span>
      </div>
      <div className="flex gap-4">
        <button
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700 shadow"
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition-colors border border-blue-700 shadow"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700 shadow"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
      </div>
    </div>
  )
}
