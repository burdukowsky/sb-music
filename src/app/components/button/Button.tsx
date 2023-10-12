import { ButtonHTMLAttributes, CSSProperties, useMemo } from 'react';
import { Property } from 'csstype';
import classNames from 'classnames';

import { Icon, IconType } from '../icon/Icon.tsx';
import styles from './Button.module.scss';
import { FCC } from 'src/app/types.ts';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  iconSize?: Property.Width;
  loading?: boolean;
}

export const Button: FCC<Props> = ({
  type = 'button',
  loading = false,
  className,
  icon,
  iconSize = '40px',
  children,
  ...buttonProps
}) => {
  const computedClassName = useMemo(() => {
    return (
      classNames(styles.Button, {
        [styles.ButtonIcon as string]: icon != null,
        [styles.ButtonLoading as string]: loading,
      }) + ` ${className ?? ''}`
    );
  }, [className, icon, loading]);

  const style = useMemo<CSSProperties | undefined>(() => {
    if (icon == null) {
      return undefined;
    }
    const size = `calc(${iconSize} * 1.2)`;
    return { width: size, height: size };
  }, [icon, iconSize]);

  return (
    <button
      {...buttonProps}
      type={type}
      className={computedClassName}
      style={style}
    >
      {icon == null ? children : <Icon name={icon} size={iconSize} />}
    </button>
  );
};
