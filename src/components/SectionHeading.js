export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = true,
  dark = false 
}) {
  const textColor = dark ? 'text-white' : 'text-gray-900';
  const subtitleColor = dark ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : ''} mb-16`}>
      <h2 className={`text-3xl font-bold tracking-tight ${textColor} sm:text-4xl`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-8 ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

