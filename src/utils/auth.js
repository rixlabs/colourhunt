export function checkAuth() {
  return !!localStorage.getItem('id_token')
}
