import * as React from "react";

const buttonVariants = {
  default: "bg-blue-500 text-white shadow hover:bg-blue-400",
  destructive: "bg-red-500 text-white shadow hover:bg-red-400",
  outline: "border border-gray-300 bg-transparent shadow hover:bg-gray-100 text-gray-700",
  teams: "border-2 border-yellow-500 bg-transparent shadow hover:bg-yellow-500 text-yellow-500",
  secondary: "bg-gray-500 text-white shadow hover:bg-gray-400",
  ghost: "hover:bg-gray-200 hover:text-gray-800",
  link: "text-blue-500 underline hover:text-blue-700",
};

const buttonSizes = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-10 rounded-md px-8",
  icon: "h-9 w-9",
};

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variantClass = buttonVariants[variant] || buttonVariants.default;
  const sizeClass = buttonSizes[size] || buttonSizes.default;

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantClass} ${sizeClass} ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
