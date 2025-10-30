// src/components/ui/AnimatedButton.tsx
import Link from 'next/link';
import React from 'react';
import { cn } from "@/lib/utils"; 

interface AnimatedButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const AnimatedButton = React.forwardRef<HTMLAnchorElement, AnimatedButtonProps>(
  ({ children, href, className, ...props }, ref) => {
    return (
      // Use the 'animated-btn' class defined in globals.css
      <Link
        href={href}
        ref={ref}
        className={cn("animated-btn", className)} 
        {...props}
      >
        <span>{children}</span>
        {/* Spans for animation effect defined in globals.css */}
        <span></span><span></span><span></span><span></span>
      </Link>
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;