export function localStorageCartWrite(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function localStorageCartRead(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function initialStateRead(key) {
  const eskiNotlar = localStorageCartRead(key);

  if (eskiNotlar) {
    return eskiNotlar;
  } else {
    return [];
  }
}
