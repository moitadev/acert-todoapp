# acert-todoapp

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Testing](#testing)

---

## Installation

To get started with the acert-todoapp, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/moitadev/acert-todoapp.git
   ```

2. Change into the project directory:

   ```bash
   cd acert-todoapp
   ```

3. Install the dependencies using your preferred package manager:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

---

## Usage

Once the installation is complete, you can run the application using the following commands:

```bash
npm run dev
```

or

```bash
yarn dev
```

This will start the development server, and you can access the app at http://localhost:5173 in your web browser.

---

## Technologies

This to-do app is built using the following technologies:

- [React](https://reactjs.org/)
- [Testing Library for React](https://testing-library.com/react/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Tailwind CSS](https://tailwindcss.com/)
  - [clsx](https://www.npmjs.com/package/clsx)
  - [cva](https://cva.style/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/) (Authentication)

### Additional Features

- **Firebase Authentication:** User authentication and login are handled using Firebase Authentication.

### Error Handling and Translation

The application includes:

- **Error Humanization:** Some of the error messages are humanized for better user understanding.
- **Error Translation:** Error messages are translated to brazillian portuguese to keep the application localized 🇧🇷.

---

## Testing

I use Jest and Testing Library for React for testing. Run the following command to execute the tests:

```bash
npm run test
```

or

```bash
yarn test
```

This will run the test suite and provide you with feedback on the test results.

---

If you run into any problems, feel free to reach me out!