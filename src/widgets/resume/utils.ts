import type { DataBindingPath, ResumeData, ResumeDataValue } from './types';

export function resolvePath({
  data,
  path,
  fallback,
}: { data: ResumeData } & DataBindingPath): ResumeDataValue | Array<ResumeDataValue> {
  if (!path) {
    return data;
  }

  const pathArray = path
    .replace(/^data\./, '') // remove leading "data." if present
    .split('.');

  const value = pathArray.reduce((p, c) => {
    if (p[c]) {
      return p[c];
    }

    return undefined;
  }, data);

  return value ?? fallback;
}
