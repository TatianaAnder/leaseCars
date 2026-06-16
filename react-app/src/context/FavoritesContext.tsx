import { createContext, useContext, useEffect, useReducer, type ReactNode } from 'react';

const STORAGE_KEY = 'leaseCars.favorites';

type State = string[];

type Action =
  | { type: 'TOGGLE'; id: string }
  | { type: 'HYDRATE'; ids: string[] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE':
      return state.includes(action.id)
        ? state.filter((id) => id !== action.id)
        : [...state, action.id];
    case 'HYDRATE':
      return action.ids;
    default:
      return state;
  }
}

interface FavoritesContextValue {
  favoriteIds: string[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, dispatch] = useReducer(reducer, []);

  // Restore favorites saved in a previous visit.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        dispatch({ type: 'HYDRATE', ids: JSON.parse(stored) as string[] });
      }
    } catch {
      // ignore malformed storage
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const value: FavoritesContextValue = {
    favoriteIds,
    isFavorite: (id) => favoriteIds.includes(id),
    toggleFavorite: (id) => dispatch({ type: 'TOGGLE', id }),
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return ctx;
}
