"use client";

import { SELECT_PLAN_EVENT } from "./BookingForm";

// "Aanvragen"-knop bij een pakket: springt naar het boekingsformulier en
// selecteert daar alvast het gekozen pakket.
export default function PlanCta({
  plan,
  className,
  children,
}: {
  plan: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#booking"
      className={className}
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent(SELECT_PLAN_EVENT, { detail: plan })
        )
      }
    >
      {children}
    </a>
  );
}
