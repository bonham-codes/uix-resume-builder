async function fetcher<T>(url: string, { options }: { options: RequestInit }): Promise<T> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${url}`, options);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export { fetcher as fetch };
