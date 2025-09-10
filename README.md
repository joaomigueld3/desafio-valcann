# desafio-valcann

Questão 1, link do diagrama MER: https://dbdiagram.io/d/68c0e10861a46d388e4c1b05

## 🏗 Tech Stack

<img align="center" alt="Joao-Node" height="30" width="40" src="https://skillicons.dev/icons?i=nodejs&theme=light"> Node.js – Backend runtime  
<img align="center" alt="Joao-Express" height="30" width="40" src="https://skillicons.dev/icons?i=express&theme=light"> Express.js – Web framework

</div>

## 🚀 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/joaomigueld3/desafio-valcann.git
cd desafio-valcann
```

### 2️⃣ Install Dependencies  
```sh
npm install
```
### 3️⃣ Configure Environment Variables
#### Create a .env file based on .env.example
#### Fill in required environment variables (database, API keys, etc.)

### 4️⃣ Run the Application
```sh 
npm run dev      # Start the backend server
```
---

### 📖 Swagger docs available at http://localhost:3000/docs

## 🛠 Features

### List all users (page 1, 10 items per page)
curl -X GET "http://localhost:3000/users"

### List users with pagination
curl -X GET "http://localhost:3000/users?page=2&page_size=20"

### Search users by name or email
curl -X GET "http://localhost:3000/users?q=Bruno"

### Filter by role
curl -X GET "http://localhost:3000/users?role=admin"

### Filter by active status
curl -X GET "http://localhost:3000/users?is_active=true"

### Combine filters
curl -X GET "http://localhost:3000/users?q=lucas&role=admin&page=1&page_size=10"

### Get a specific user
curl -X GET "http://localhost:3000/users/1"
