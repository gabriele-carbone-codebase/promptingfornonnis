import { useLanguage } from "@/i18n";
import { Link, type LinkProps } from "react-router-dom";
import { forwardRef } from "react";

interface LocalizedLinkProps extends Omit<LinkProps, "to"> {
  to: string;
}

export const LocalizedLink = forwardRef<HTMLAnchorElement, LocalizedLinkProps>(
  ({ to, ...props }, ref) => {
    const { localePath } = useLanguage();
    return <Link ref={ref} to={localePath(to)} {...props} />;
  }
);

LocalizedLink.displayName = "LocalizedLink";
