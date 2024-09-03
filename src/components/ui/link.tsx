import NextLink, { LinkProps } from "next/link";
import { Button, ButtonProps } from "./button";

type Props = Omit<ButtonProps, "onClick" | "onMouseEnter" | "onTouchStart"> &
  LinkProps;

export function Link({ href, children }: Props) {
  return (
    <Button asChild>
      <NextLink href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </NextLink>
    </Button>
  );
}