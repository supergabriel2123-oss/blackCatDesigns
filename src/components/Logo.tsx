export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* 
        Changed object-cover to object-contain to prevent the browser 
        from cropping the outer edges of your blue circle logo.
      */}
      <img 
        src="/assets/Black_Cat_(1).png" 
        alt="Black Cat Designs logo" 
        className="h-9 w-9 rounded-full object-contain" 
      />
      
      <span className="text-[17px] font-bold tracking-tight text-white">
        Black Cat <span className="text-accent-400">Designs</span>
      </span>
    </div>
  );
}
