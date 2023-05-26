// Đăng nhập
export const login = (username, password) => ({
  type: 'LOGIN',
  payload: { username, password },
});

// Đăng xuất
export const logout = () => ({
  type: 'LOGOUT',
});

// Đăng ký
export const register = (newUsername, newPassword) => ({
  type: 'REGISTER',
  payload: { username: newUsername, password: newPassword },
});

// Các hành động khác liên quan đến auth...
