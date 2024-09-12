import NextLink, { LinkProps } from "next/link";
import { Button, ButtonProps } from "./button";

type Props = Omit<ButtonProps, "onClick" | "onMouseEnter" | "onTouchStart"> &
  LinkProps & {
    target?: React.HTMLAttributeAnchorTarget;
  };

const Link = ({
  href,
  children,
  width,
  font,
  variant,
  target = "_blank",
  className,
}: Props) => (
  <Button
    asChild
    width={width}
    font={font}
    variant={variant}
    className={className}
  >
    <NextLink href={href} target={target} rel="noopener noreferrer">
      {children}
    </NextLink>
  </Button>
);

export { Link };
