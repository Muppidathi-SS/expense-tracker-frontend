"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import WelcomeCard from "@/components/welcome/Welcome";
import GuestProfileForm from "@/components/guest-pofile-form/GuestProfileForm";
import Loading from "@/ui/Loading";
import SuccessProfile from "@/components/guest-pofile-form/SuccessProfile";

type Step = "welcome" | "profile" | "loading" | "success";

export default function Home() {
  const [step, setStep] = useState<Step>("welcome");
  const router = useRouter();

  const handleProfileSubmit = async () => {
    setStep("loading");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setStep("success");
  };

  const pageVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  const pageTransition = {
    duration: 0.4,
    ease: "easeInOut" as const,
  };

  return (
    <div className="relative min-h-screen bg-[#EEF2F7] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="min-h-screen"
        >
          {step === "welcome" && (
            <WelcomeCard onLogin={() => setStep("profile")} />
          )}

          {step === "profile" && (
            <GuestProfileForm onSubmit={handleProfileSubmit} />
          )}

          {step === "loading" && <Loading />}

          {step === "success" && (
            <SuccessProfile onContinue={() => router.push("/dashboard")} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
