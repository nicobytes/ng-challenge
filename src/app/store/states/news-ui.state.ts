export interface NewsUIState {
  stateNews: {
    status: 'loading' | 'success' | 'error' | 'init';
    error: string | null;
  };
}
