const partener = ['federation de Togolaise Boxe  ', 'WWE', 'bill', 'bill', 'bill', 'bill', 'bill', 'bill'];

const ScrollComponent = () => {
  return (
    <div className="overflow-hidden mt-28">
      <div className="flex items-center gap-4 animate-infinite-scroll whitespace-nowrap">
        {/* Première duplication */}
        {partener.map((item, idx) => (
          <div
            key={idx}
            className="  text-2xl font-bold py-4 px-24 border border-gray-900 rounded-md"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollComponent;

