// book-mapper.ts

export function mapToView(item: any): any {
  return {
    ...item,
    publishedDate: formatDateForInput(item.publishedDate),
  };
  // return {
  //   id: item.id,
  //   title: item.title,
  //   author: item.author,
  //   publishedDate: formatDateForInput(item.publishedDate),
  // };
}

export function mapFrom(item: any): any {
  return {
    ...item,
    publishedDate: formatDateForApi(item.publishedDate),
  };

  // return {
  //   id: item.id,
  //   title: item.title,
  //   author: item.author,
  //   publishedDate: formatDateForApi(item.publishedDate),
  // };
}

// Utility: format date for <input type="date">
export function formatDateForInput(dateValue: string | Date): string {
  const date = new Date(dateValue + 'Z');
  return date.toISOString().split('T')[0]; // "yyyy-MM-dd"
}

// Utility: format date for API (ISO string)
export function formatDateForApi(dateValue: string): string {
  const date = new Date(dateValue + 'T00:00:00Z');
  console.log(date);
  return date.toISOString(); // "yyyy-MM-ddTHH:mm:ss.sssZ"
}
