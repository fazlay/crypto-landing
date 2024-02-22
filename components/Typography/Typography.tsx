import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const typography = cva(
  [
    //Common Properties will be here
  ],
  {
    variants: {
      intent: {
        paragraphTitle: ["text-2xl", "font-bold", "text-white"],
        subtitle: ["text-lg", "text-white"],
      },
      //   size: {
      //     sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
      //     lg: ["min-w-[176px]", "h-full", "min-h-[50px]", "text-[22px]", "py-2.5", "px-6"],
      //   },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "paragraphTitle",
    },
  }
)

export interface TypographyProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typography> {
  underline?: boolean
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
}

export function Typography({ tag: Tag, className, intent, underline, ...props }: TypographyProps) {
  return (
    <Tag className={twMerge(typography({ intent, className, underline }))} {...props}>
      {props.children}
    </Tag>
  )
}

// import { Slot } from "@radix-ui/react-slot";
// import { type VariantProps, cva } from "class-variance-authority";
// import React from "react";

// const typeVariants = cva("text-foreground", {
//   variants: {
//     variant: {
//       body: "text-foreground font-medium",
//     },
//     size: {
//       sm: "text-sm",
//       md: "text-md",
//       lg: "text-lg",
//     },
//   },
//   defaultVariants: {
//     variant: "body",
//   },
// });

// export interface TypographyProps
//   extends React.HTMLAttributes<HTMLElement>,
//     VariantProps<typeof typeVariants> {
//   asChild?: boolean;
// }

// export const Typography = React.forwardRef<
//   HTMLParagraphElement,
//   TypographyProps
// >(({ variant, className, asChild, ...rest }, ref) => {
//   const Comp = asChild ? Slot : "p";
//   return (
//     <Comp
//       ref={ref}
//       className={typeVariants({ variant, className })}
//       {...rest}
//     />
//   );
// });

// Typography.displayName = "Typography";
