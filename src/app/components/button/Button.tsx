import { ButtonHTMLAttributes, useMemo } from 'react';
import { Property } from 'csstype';
import classNames from 'classnames';

import { Icon, IconType } from '../icon/Icon.tsx';
import styles from './Button.module.scss';
import { FCC } from 'src/app/types.ts';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  iconSize?: Property.Width;
}

export const Button: FCC<Props> = ({
  type = 'button',
  className,
  icon,
  iconSize = '18px',
  children,
  ...buttonProps
}) => {
  const computedClassName = useMemo(() => {
    return (
      classNames(styles.Button, {
        [styles.ButtonIcon as string]: icon != null,
      }) + ` ${className ?? ''}`
    );
  }, [className, icon]);

  return (
    <button {...buttonProps} type={type} className={computedClassName}>
      {icon == null ? children : <Icon name={icon} size={iconSize} />}
    </button>
  );
};
