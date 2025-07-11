
# 🎬 Movie Search App

A responsive React app to search movies using the OMDB API. Includes movie details, filters by type, pagination, and clean UI with Tailwind CSS.

---

## 🔍 Features

- Search movies by title or keyword
- View detailed movie info (poster, genre, plot, rating, cast)
- Filter results by movie type (movie, series, episode) — **no `.filter()` used**
- Pagination support
- Reusable components (SearchBar, MovieCard, Pagination)
- Responsive design with Tailwind CSS
- Error handling for failed API calls or no results

---

## 🚀 Live Demo

👉 [**View the App on Netlify**](https://your-netlify-site.netlify.app)  
*(Replace with your actual Netlify URL)*

---

## 📦 Tech Stack

- React JS
- React Router
- Axios (for API calls)
- Tailwind CSS
- OMDB API

---

## 📁 Folder Structure

```
src/
├── api/
│   └── omdb.js
├── components/
│   ├── MovieCard.jsx
│   ├── Pagination.jsx
│   └── SearchBar.jsx
├── pages/
│   ├── Home.jsx
│   └── MovieDetails.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Setup Instructions

1. **Clone the repo:**

   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Add your OMDB API key:**

   Open `src/api/omdb.js` and replace:

   ```js
   const API_KEY = 'your_api_key_here'; // Example: 70c0eba5
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:5173](http://localhost:5173)

---

## 🌐 OMDB API Usage

- Base URL: `http://www.omdbapi.com/`
- Example:  
  `http://www.omdbapi.com/?apikey=your_key&s=batman&type=movie&page=1`

👉 Get your key here: [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)

---

## 📤 Deployment (Netlify)

1. Push code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New Site from Git"
4. Connect your GitHub repo
5. Set build command: `npm run build`  
   Publish directory: `dist`
6. Click **Deploy Site**

---

## 📸 Screenshots

| Search Page             | Movie Details             |
|-------------------------|---------------------------|
| ![Search](screenshots/search.png) | ![Details](screenshots/details.png) |

*(Place your screenshots inside a `/screenshots` folder)*

---

## 📃 License & Terms

- This project is **non-commercial & educational only**
- You must **not include company names** in your GitHub repo
- You may open-source your version
- OMDB data is used under fair use policy for testing

---

## 🙏 Acknowledgements

- [OMDB API](http://www.omdbapi.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
