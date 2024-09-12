import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-start py-3 px-6 gap-2 rounded-lg hover:opacity-85 hover:transition hover:duration-300",
  {
    variants: {
      variant: {
        default: "text-white bg-grey",
        selected: "text-grey bg-yellow",
        unselected: "text-grey bg-white",
        ghost: "p-0 text-grey",
        filter: "text-grey border border-soft-grey-2 bg-white",
        grey: "text-grey border border-grey bg-soft-grey",
        small: "py-2 px-4 text-grey bg-yellow",
        "date-day": "px-2 py-1 text-grey",
      },
      font: {
        default: "text-base font-medium lg:text-lg",
        thin: "text-base font-normal lg:text-lg",
      },
      width: {
        default: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      font: "default",
      width: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, font, width, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, font, width, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
