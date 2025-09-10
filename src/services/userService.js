import * as userRepository from "../repositories/userRepository.js";

export async function getUsers({ page = 1, page_size = 10, q, role, is_active }) {
  const users = await userRepository.getAllUsers();

  let filtered = users;

  if (q) {
    const search = q.toLowerCase();
    // filtro name ou email
    filtered = filtered.filter(
      u => u.name.toLowerCase().includes(search) || u.email.toLowerCase().includes(search)
    );
  }

  if (role) {
    // filtro role
    filtered = filtered.filter(u => u.role === role);
  }

  if (is_active !== undefined) {
    // filtro ativo/inativo
    filtered = filtered.filter(u => u.is_active === (is_active === "true"));
  }

  // 10 é o padrão, max é 50
  const size = Math.min(Math.max(Number(page_size) || 10, 1), 50);
  const currentPage = Math.max(Number(page) || 1, 1);
  const total = filtered.length;
  // após a filtragem, extrai apenas os dados da pagina atual
  const data = filtered.slice((currentPage - 1) * size, currentPage * size);

  return {
    data,
    pagination: {
      total,
      page: currentPage,
      page_size: size,
      total_pages: Math.ceil(total / size),
    },
  };
}


export async function getUserById(id) {
  return userRepository.getUserById(id);
}
