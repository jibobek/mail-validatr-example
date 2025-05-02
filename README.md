# mail-validatr Examples

This repository contains example projects demonstrating how to use the [`mail-validatr`](https://www.npmjs.com/package/mail-validatr) library in real-world applications.

---

## 📁 Project Structure

```bash
mail-validatr-example/
├── mail-validatr-example-client/   # Frontend-only email validation demo (React + Next.js + Tailwind)
├── mail-validatr-example-server/   # Demo with backend validation (React + Next.js)
```

---

## 📦 Requirements

* Node.js **v18+**
* npm **v9+** (or `pnpm` / `yarn`)

---

## 🚀 Getting Started

### 1. Clone the repo and install dependencies

```bash
git clone https://github.com/jibobek/mail-validatr-example.git
cd mail-validatr-example
```

Install dependencies for both apps:

```bash
cd mail-validatr-example-client
npm install

cd ../mail-validatr-example-server
npm install
```

---

### 2. Run the examples

#### 🔹 Client-only App

A simple email input form using basic validation logic (syntax and warnings):

```bash
cd mail-validatr-example-client
npm run dev
```

Access it at [http://localhost:3000](http://localhost:3000)

#### 🔹 Full App with DNS check

Uses server routes (API or server actions) to run full validation including DNS/MX checks:

```bash
cd mail-validatr-example-server
npm run dev
```

Access it at [http://localhost:3000](http://localhost:3000)

---

## 🧱 Technologies Used

* [Next.js 15](https://nextjs.org/)
* [React 19](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/) (client example)
* [mail-validatr](https://www.npmjs.com/package/mail-validatr)

---

## 📄 License

MIT © 2025
Made with ❤️ by [Jindrich Bobek](https://github.com/jibobek)
