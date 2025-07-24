import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

type ButtonVariants = 'primary' | 'outline';

type ButtonBaseProps = {
  variant?: ButtonVariants;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<LinkProps, 'to'> & {
    as: 'link';
    to: string;
  };

type ButtonAsAnchor = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
    href: string;
    target?: string;
    rel?: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'primary',
    className = '',
    children,
    ...rest
  } = props;

  const base =
    'px-8 py-3 rounded-xl font-bold text-base inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]';

  let styles = '';
  if (variant === 'primary') {
    styles =
      'bg-[#2C3E50] text-[#D4AF37] shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-102 hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#B8860B] hover:text-white';
  } else {
    styles =
      'bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#B8860B] hover:text-white hover:scale-102 focus:ring-2 focus:ring-[#D4AF37]';
  }

  const classes = `${base} ${styles} ${className}`;

  if (props.as === 'link') {
    const { to, ...linkProps } = rest as ButtonAsLink;
    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }
  if (props.as === 'a') {
    const { href, target, rel, ...anchorProps } = rest as ButtonAsAnchor;
    return (
      <a href={href} target={target} rel={rel} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }
  // Default: button
  return (
    <button type="button" className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;