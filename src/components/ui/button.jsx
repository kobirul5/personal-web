import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-primaryColor text-background  hover:bg-transparent hover:border-primaryColor hover:border hover:text-primaryColor ",
          primary: "bg-primaryColor text-textColor",
          outline: "border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90"
      },
      size: {
        default: "h-[48px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[48px] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
