/**
 * Tipos de datos para las noticias
 */
export interface NewsItem {
  imageUrl: string;
  title: string;
  subtitle: string;
  slug: string;
  type: string;
  publishedAt: string;
  content?: string;
  author?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface NewsAPIResponse {
  data: NewsItem[];
  page?: number;
  totalPages?: number;
}

/**
 * Opciones de configuración para el fetch de noticias
 */
export interface FetchNewsOptions {
  baseUrl?: string;
  delayMs?: number;
  maxRetries?: number;
}

/**
 * Delay helper para no saturar el servidor
 */
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetch de una página específica de noticias
 */
async function fetchNewsPage(
  page: number,
  baseUrl: string,
  retries: number = 3
): Promise<NewsAPIResponse> {
  const url = `${baseUrl}?page=${page}`;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 404) {
          // No hay más páginas
          return { data: [] };
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Si la respuesta es un array vacío, no hay más páginas
      if (!data || (Array.isArray(data) && data.length === 0)) {
        return { data: [] };
      }

      // Si la respuesta tiene una propiedad data (estructura con metadata)
      if (data.data && Array.isArray(data.data)) {
        return {
          data: data.data,
          page: data.page || page,
          totalPages: data.totalPages
        };
      }

      // Si la respuesta es directamente un array
      if (Array.isArray(data)) {
        return { data };
      }

      // Formato desconocido
      console.warn('Formato de respuesta desconocido:', data);
      return { data: [] };

    } catch (error) {
      if (attempt === retries) {
        console.error(`Error fetching page ${page} after ${retries} attempts:`, error);
        throw error;
      }
      // Esperar antes de reintentar (exponential backoff)
      await delay(1000 * attempt);
    }
  }

  return { data: [] };
}

/**
 * Obtiene la URL base del API
 */
function getApiBaseUrl(): string {
  // En el cliente, usar import.meta.env
  if (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_API_URL) {
    return import.meta.env.PUBLIC_API_URL;
  }
  // Fallback
  return 'https://judicial-backend.koyeb.app/api';
}

/**
 * Fetch de todas las páginas de noticias disponibles
 */
export async function fetchAllNews(
  options: FetchNewsOptions = {}
): Promise<NewsItem[]> {
  const {
    baseUrl = `${getApiBaseUrl()}/news/public`,
    delayMs = 500,
    maxRetries = 3
  } = options;

  const allNews: NewsItem[] = [];
  let currentPage = 1;
  let hasMorePages = true;

  console.log('Iniciando fetch de noticias...');

  while (hasMorePages) {
    try {
      console.log(`Fetching página ${currentPage}...`);

      const pageResponse = await fetchNewsPage(currentPage, baseUrl, maxRetries);
      const pageNews = pageResponse.data;

      if (pageNews.length === 0) {
        console.log(`No hay más noticias en página ${currentPage}`);
        hasMorePages = false;
        break;
      }

      allNews.push(...pageNews);
      console.log(`Página ${currentPage}: ${pageNews.length} noticias obtenidas`);

      currentPage++;

      // Delay entre peticiones para no saturar el servidor
      if (hasMorePages) {
        await delay(delayMs);
      }

    } catch (error) {
      console.error(`Error al obtener página ${currentPage}:`, error);
      hasMorePages = false;
    }
  }

  console.log(`Total de noticias obtenidas: ${allNews.length}`);
  return allNews;
}

/**
 * Fetch de noticias con paginación para UI
 * Retorna solo una página específica
 */
export async function fetchNewsPaginated(
  page: number = 1,
  options: FetchNewsOptions = {}
): Promise<{ news: NewsItem[], hasMore: boolean, totalPages?: number, currentPage?: number }> {
  const {
    baseUrl = `${getApiBaseUrl()}/news/public`,
    maxRetries = 3
  } = options;

  try {
    const response = await fetchNewsPage(page, baseUrl, maxRetries);
    const news = response.data;
    const totalPages = response.totalPages;
    const currentPage = response.page;

    // Si el API proporciona totalPages, úsalo
    if (totalPages !== undefined) {
      return {
        news,
        hasMore: page < totalPages,
        totalPages,
        currentPage
      };
    }

    // Si no, explorar varias páginas hacia adelante para calcular total
    let calculatedTotal: number | undefined = undefined;
    let hasMore = false;

    // Explorar hasta 5 páginas hacia adelante para encontrar el final
    for (let i = 1; i <= 5; i++) {
      const nextPageResponse = await fetchNewsPage(page + i, baseUrl, maxRetries);

      if (nextPageResponse.data.length === 0) {
        // Encontramos el final
        calculatedTotal = page + i - 1;
        hasMore = false;
        break;
      } else if (i === 5) {
        // Aún hay más páginas después de 5
        hasMore = true;
        break;
      }
    }

    return {
      news,
      hasMore,
      totalPages: calculatedTotal,
      currentPage: page
    };
  } catch (error) {
    console.error(`Error al obtener noticias de página ${page}:`, error);
    throw error;
  }
}

/**
 * Fetch de una noticia individual por slug
 */
export async function fetchNewsBySlug(
  slug: string,
  options: FetchNewsOptions = {}
): Promise<NewsItem | null> {
  const {
    baseUrl = getApiBaseUrl(),
    maxRetries = 3
  } = options;

  const url = `${baseUrl}/news/public/slug/${slug}`;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 404) {
          console.warn(`Noticia no encontrada: ${slug}`);
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Si la respuesta tiene una propiedad data
      if (data.data) {
        return data.data;
      }

      // Si la respuesta es directamente el objeto
      return data;

    } catch (error) {
      if (attempt === maxRetries) {
        console.error(`Error fetching news by slug ${slug} after ${maxRetries} attempts:`, error);
        throw error;
      }
      // Esperar antes de reintentar (exponential backoff)
      await delay(1000 * attempt);
    }
  }

  return null;
}

/**
 * Formatea la fecha de publicación
 */
export function formatPublishedDate(publishedAt: string): string {
  try {
    const date = new Date(publishedAt);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('es-ES', options);
  } catch (error) {
    console.error('Error al formatear fecha:', error);
    return publishedAt;
  }
}
