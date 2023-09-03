export const cn = (...classnames: string[]) => {
  return classnames.filter(Boolean).join(' ');
};
