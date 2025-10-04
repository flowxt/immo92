export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  contained = true 
}) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
  };

  return (
    <section className={`py-16 sm:py-24 ${bgColors[background]} ${className}`}>
      {contained ? (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

