import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://regicore.com';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleManualRedirect = () => {
    window.location.href = 'https://regicore.com';
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-white to-[#E6E6FA]">
      <div className="flex flex-col items-center gap-8">
        {/* Spinning Loader Icon */}
        <Loader2 
          className="size-12 text-slate-700 animate-spin" 
          style={{ animationDuration: '2s' }}
        />
        
        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-2xl text-slate-700 font-light tracking-wide">
            Connecting to Regicore...
          </h1>
        </motion.div>

        {/* Manual Redirect Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          onClick={handleManualRedirect}
          className="mt-4 px-6 py-3 bg-[#E6E6FA] text-slate-700 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#D8BFD8] hover:shadow-lg hover:scale-105 active:scale-95"
        >
          Click here if not redirected
        </motion.button>
      </div>
    </div>
  );
}
