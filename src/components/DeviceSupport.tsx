
import { Smartphone, Laptop, Gamepad } from "lucide-react";

const DeviceSupport = () => {
  return (
    <div className="mt-4 pt-4 border-t border-white/10">
      <p className="text-xs text-white/70 mb-2 text-center">SUPPORTED DEVICES</p>
      <div className="flex justify-center gap-6">
        <div className="flex flex-col items-center">
          <Gamepad className="h-5 w-5 text-white/70 mb-1" />
          <span className="text-xs text-white/70">Console</span>
        </div>
        <div className="flex flex-col items-center">
          <Laptop className="h-5 w-5 text-white/70 mb-1" />
          <span className="text-xs text-white/70">PC</span>
        </div>
        <div className="flex flex-col items-center">
          <Smartphone className="h-5 w-5 text-white/70 mb-1" />
          <span className="text-xs text-white/70">Mobile</span>
        </div>
      </div>
    </div>
  );
};

export default DeviceSupport;
