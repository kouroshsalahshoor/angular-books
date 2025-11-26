// book-mapper.ts

// Mapper: API → Form
export function mapToView(data: any): any {
  return {
    id: data.id,
    title: data.title,
    author: data.author,
    publishedDate: formatDateForInput(data.publishedDate),
  };
}

// Mapper: Form → API
export function mapFrom(formValue: any): any {
  return {
    id: formValue.id,
    title: formValue.title,
    author: formValue.author,
    publishedDate: formatDateForApi(formValue.publishedDate),
  };
}

// Utility: format date for <input type="date">
export function formatDateForInput(dateValue: string | Date): string {
  const date = new Date(dateValue);
  return date.toISOString().split('T')[0]; // "yyyy-MM-dd"
}

// Utility: format date for API (ISO string)
export function formatDateForApi(dateValue: string): string {
  const date = new Date(dateValue);
  return date.toISOString(); // "yyyy-MM-ddTHH:mm:ss.sssZ"
}
