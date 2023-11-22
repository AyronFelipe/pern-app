export default function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  const result = `${text.substring(0, maxLength - 3)}...`;
  return result;
}
