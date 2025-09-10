# desafio-valcann

Questão 1, link do diagrama MER: https://dbdiagram.io/d/68c0e10861a46d388e4c1b05

# Listar todos os usuários (página 1, 10 itens por página)
curl -X GET "http://localhost:3000/users"

# Listar usuários com paginação
curl -X GET "http://localhost:3000/users?page=2&page_size=20"

# Buscar usuários por nome ou email
curl -X GET "http://localhost:3000/users?q=Bruno"

# Filtrar por role
curl -X GET "http://localhost:3000/users?role=admin"

# Filtrar por status ativo
curl -X GET "http://localhost:3000/users?is_active=true"

# Combinar filtros
curl -X GET "http://localhost:3000/users?q=lucas&role=admin&page=1&page_size=10"

# Obter usuário específico
curl -X GET "http://localhost:3000/users/1"