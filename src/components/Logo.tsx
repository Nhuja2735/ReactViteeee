const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center w-12 h-12 bg-white rounded-full border-2 border-primary ${className}`}>
      <div className="text-primary font-bold text-lg">P</div>
    </div>
  );
};

export default Logo;