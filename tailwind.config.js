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
    'bg-blue-50', 'bg-blue-100', 'bg-blue-200', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900',
    'border-blue-100', 'border-blue-200', 'border-blue-500', 'border-blue-700',
    'text-blue-500', 'text-blue-600', 'text-blue-700', 'text-blue-800',
    
    'bg-purple-50', 'bg-purple-100', 'bg-purple-200', 'bg-purple-500', 'bg-purple-600', 'bg-purple-700',
    'border-purple-100', 'border-purple-500', 'border-purple-700',
    'text-purple-500', 'text-purple-600', 'text-purple-700', 'text-purple-800',
    
    'bg-green-50', 'bg-green-100', 'bg-green-200', 'bg-green-500', 'bg-green-600', 'bg-green-700',
    'border-green-100', 'border-green-500', 'border-green-700',
    'text-green-500', 'text-green-600', 'text-green-700', 'text-green-800',
    
    'bg-indigo-50', 'bg-indigo-100', 'bg-indigo-200', 'bg-indigo-500', 'bg-indigo-600', 'bg-indigo-700', 'bg-indigo-800',
    'border-indigo-100', 'border-indigo-500', 'border-indigo-700',
    'text-indigo-500', 'text-indigo-600', 'text-indigo-700', 'text-indigo-800',
    
    'bg-teal-50', 'bg-teal-100', 'bg-teal-200', 'bg-teal-500', 'bg-teal-600', 'bg-teal-700',
    'border-teal-100', 'border-teal-500', 'border-teal-700',
    'text-teal-500', 'text-teal-600', 'text-teal-700', 'text-teal-800',
    
    'bg-amber-50', 'bg-amber-100', 'bg-amber-200', 'bg-amber-500', 'bg-amber-700',
    'border-amber-100', 'border-amber-500', 'border-amber-700',
    'text-amber-500', 'text-amber-600', 'text-amber-700', 'text-amber-800',
    
    // Colors for wake words component
    'bg-yellow-50', 'bg-yellow-100', 'bg-yellow-200', 'bg-yellow-600',
    'border-yellow-100', 'border-yellow-200', 'border-yellow-600', 'border-l-yellow-600',
    'text-yellow-700', 'text-yellow-800',
    
    'bg-red-50', 'bg-red-100', 'bg-red-500',
    'border-red-100', 'border-red-500', 'border-l-red-600',
    'text-red-500', 'text-red-600', 'text-red-700', 'text-red-800',
    
    'bg-pink-50', 'bg-pink-100', 'bg-pink-500',
    'border-pink-100', 'border-pink-200', 'border-l-pink-600',
    'text-pink-500', 'text-pink-700', 'text-pink-800',
    
    // Border styles
    'border-l-4', 'border-l-blue-500', 'border-l-blue-600',
    'border-l-green-500', 'border-l-green-600',
    'border-l-purple-500', 'border-l-purple-600',
    'border-l-indigo-500', 'border-l-indigo-600',
    'border-l-teal-500', 'border-l-teal-600',
    'border-l-amber-500', 'border-l-amber-600',
    'border-l-red-500', 'border-l-red-600',
    'border-l-pink-500', 'border-l-pink-600',
    'border-l-yellow-500', 'border-l-yellow-600'
  ]
}