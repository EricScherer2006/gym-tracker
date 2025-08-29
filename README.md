# 🏋️‍♂️ Gym Tracker

A simple, lightweight weekly gym progress tracker. Designed to help users log daily exercises and weights without needing an account or database.


🟢 Live: [https://eric-gym-tracker.netlify.app](https://eric-gym-tracker.netlify.app)

---

## 🖼️ Demo

Here’s how it looks in action:

![Demo](frontend/src/assets/gym-tracker-demo.gif)

---

## 📌 Features

- Weekly calendar view with editable weight entries per day.
- Add multiple exercises per day, each with its own name and weight.
- **Collapsible exercise list per day** — toggle visibility to keep the interface clean.
- Responsive design supporting screens **250 pixels wide and above**, with custom Tailwind breakpoints for fine layout control (notably between 1536px and 1773px)
- All data is saved in the browser using `localStorage` — no backend required.
- Reset week button clears all current progress (non-persistent).
- **Planned in 2.0 Version**: Backend with progress analytics to track reps and weight increases over time.

## 🚀 How It Works

- Built with **React** and simple HTML/CSS.
- User data (exercise name and weight per day) is stored in the browser's `localStorage`.
- No external APIs or tracking — privacy-focused by default.

## 💼 Note to Recruiters

This is my **first frontend project**, created as a learning exercise to understand React, browser storage, and UI design. While basic in functionality, it's actively being expanded and serves as the foundation for more advanced full-stack features. I'm focused on writing clean, modular code and gradually improving UX responsiveness and visual consistency.

## 🛠️ Tech Stack

- React
- HTML/CSS
- JavaScript
- LocalStorage
- Tailwind

## 📱 Responsiveness

This app is responsive for screens **250 pixels wide and above**.

- Input fields, buttons, and text dynamically resize and reposition to maintain usability on various device sizes.
- Wrapping of elements is enabled where necessary to avoid overflow while keeping the UI clean and accessible.
- Important action buttons adapt by showing icons only in tighter layouts to save space and prevent awkward line breaks.
- Custom Tailwind CSS breakpoints provide precise control over layout adjustments, especially between **1536px and 1773px**.

## 📋 License

This project is licensed under the **Apache 2.0 License** — see `LICENSE` for details.

---

## 💡 Development Notes

> This project is under active development.
>
> Future versions will include:
> - Persistent backend storage (e.g., Springboot + DB).
> - User login and profiles.
> - Graphs and insights showing weight/reps progress over time.

Clone and run locally (Node.js and Vite required):

```bash
git clone https://github.com/EricScherer2006/gym-tracker.git
cd gym-tracker
npm install
npm run dev