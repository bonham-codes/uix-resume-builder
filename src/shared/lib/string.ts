export function camelToHumanString(camelString: string) {
  return camelString.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
}
