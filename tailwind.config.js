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
    // New colors for Prompt Library tab
    'bg-amber-50', 'bg-amber-500', 'border-amber-500', 'text-amber-500', 'text-amber-700', 'text-amber-800',
    'bg-emerald-50', 'bg-emerald-500', 'border-emerald-500', 'text-emerald-500', 'text-emerald-700', 'text-emerald-800',
    'bg-teal-50', 'bg-teal-100', 'border-teal-100', 'text-teal-700', 'text-teal-800',
    'bg-yellow-50', 'bg-yellow-100', 'border-yellow-100', 'text-yellow-700', 'text-yellow-800',
    'bg-red-50', 'bg-red-100', 'border-red-100', 'text-red-500', 'text-red-700', 'text-red-800',
    'border-indigo-500', 'border-l-4', 'border-amber-500', 'border-emerald-500', 'border-purple-500'
  ]
}