import { SparklesIcon } from 'lucide-react';

interface ComingSoonOverlayProps {
  message?: string;
  subtext?: string;
}

const ComingSoonOverlay = ({
  message = 'PRÓXIMAMENTE',
  subtext = '¡Muy pronto disponible!',
}: ComingSoonOverlayProps) => (
  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center rounded-lg z-30 cursor-not-allowed select-none">
    <div className="text-center">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-pulse flex items-center gap-2 justify-center">
        <SparklesIcon className="h-4 w-4" />
        {message}
      </div>
      <p className="text-white text-xs mt-2 font-medium">{subtext}</p>
    </div>
  </div>
);

export default ComingSoonOverlay;