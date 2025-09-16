async function fetcher<T>(url: string, { options }: { options: RequestInit }): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export { fetcher as fetch };
