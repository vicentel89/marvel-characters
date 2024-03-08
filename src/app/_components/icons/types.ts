export type IconProps = {
  title?: string;
  titleId?: string;
  variant?: 'filled' | 'outlined';
} & React.ComponentProps<'svg'>;
