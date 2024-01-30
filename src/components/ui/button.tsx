import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex gap-x-[8px] items-center justify-center whitespace-nowrap rounded-[8px] text-base font-semibold",
  {
    variants: {
      variant: {
        default: "bg-[#0F172A] hover:bg-[#334155] active:bg-[#627084] disabled:bg-[#C6C8CC] text-[#fff]",
        outline:
          "border border-[#A7ABB2] bg-[#F6F6F6] text-[#0F172A] hover:bg-[#DBE1EA] active:bg-[#BBC3CF] disabled:bg-[#F6F6F7] disabled:text-[#878B94]",
        ghost: "text-[#0F172A] hover:bg-[#0F172A] hover:bg-opacity-10 active:bg-[#0F172A] active:bg-opacity-20",
      },
      size: {
        default: "h-[48px] pt-[11px] px-[24px] pb-[13px]",
        sm: "h-[40px] pt-[7px] px-[20px] pb-[9px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
