export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  const result = `${text.substring(0, maxLength - 3)}...`;
  return result;
}

export function formatDateString(dateString: string | undefined) {
  if (!dateString) {
    return '';
  }

  const date = new Date(dateString);

  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');

  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;

  return formattedDate;
}
