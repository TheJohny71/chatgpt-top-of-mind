module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // Ensure dynamic color classes work
    'bg-blue-100', 'bg-blue-200', 'bg-blue-500', 'bg-blue-600', 'bg-blue-800',
    'border-blue-500', 'text-blue-500', 'text-blue-600', 'text-blue-700', 'text-blue-800',
    'bg-purple-100', 'bg-purple-200', 'bg-purple-500', 'bg-purple-600',
    'border-purple-500', 'text-purple-500', 'text-purple-600', 'text-purple-700', 'text-purple-800',
    'bg-green-100', 'bg-green-200', 'bg-green-500', 'bg-green-600',
    'border-green-500', 'text-green-500', 'text-green-600', 'text-green-700', 'text-green-800',
    'bg-indigo-100', 'bg-indigo-200', 'bg-indigo-500', 'bg-indigo-600',
    'border-indigo-500', 'text-indigo-500', 'text-indigo-600', 'text-indigo-700', 'text-indigo-800',
  ]
}