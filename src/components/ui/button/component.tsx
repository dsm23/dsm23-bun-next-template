"use client";

import type { FunctionComponent } from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "~/utils";
import buttonVariants from "./variants";

const Button: FunctionComponent<
  ButtonPrimitive.Props & VariantProps<typeof buttonVariants>
> = ({ className, variant = "default", size = "default", ...props }) => (
  <ButtonPrimitive
    data-slot="button"
    className={cn(buttonVariants({ variant, size, className }))}
    {...props}
  />
);

export default Button;
