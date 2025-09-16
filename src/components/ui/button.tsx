import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'hero' | 'ghost-gold' | 'outline' | 'ghost' | 'minimal' | 'destructive' | 'secondary' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Build CSS classes based on variant and size
    const baseClasses = 'btn'
    const variantClass = `btn-${variant}`
    const sizeClass = size !== 'default' ? `btn-${size}` : ''
    
    const classes = [baseClasses, variantClass, sizeClass, className].filter(Boolean).join(' ')
    
    return (
      <Comp
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
