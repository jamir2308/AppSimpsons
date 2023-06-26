import { renderHook } from '@testing-library/react-hooks';
import useFetch from './useFetch';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ docs: [{_id: 1, Imagen: "imagen", Nombre: "nombre", Ocupacion: "ocupacion"}] }),
  })
);

describe('useFetch', () => {
  it('fetches successfully data from an API', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch());

    await waitForNextUpdate();

    expect(result.current.data).toEqual([{_id: 1, Imagen: "imagen", Nombre: "nombre", Ocupacion: "ocupacion"}]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('handles error', async () => {
    const errorMessage = 'API is down';
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: errorMessage,
      })
    );
  
    const { result, waitForNextUpdate } = renderHook(() => useFetch());
  
    await waitForNextUpdate();
  
    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(errorMessage);
  });
});
