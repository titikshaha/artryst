
# artryst - Personal Website for Art and Writeups

artryst is a personal  website designed to showcase artworks and writeups. It features a dynamic interface with smooth navigation and interactive components for an immersive user experience. The project is built using React and leverages modern web development practices.

---

## Features



### 1. **Interactive Components**
- **Splash Screen**: Engages users with a fade-out animation.
- **Dynamic Banners**: Showcase featured artworks and writeups with visually appealing layouts.
- **Intersection Observer**: Animates components when they come into view.

### 2. **Writeups and Artworks Pages**
- Dedicated pages to display writeups and artworks with dynamic routing.
- Notebook-style layout for writeups, with a snippet on the right and cover art on the left.
- Background images corresponding to the specific writeup or artwork.

### 3. **Responsive Design**
- Fully responsive layout for seamless usage across devices.
- Adaptive styles for navigation, banners, and content grids.

### 4. **Global State Management**
- Centralized search state using React Context API for efficient state sharing across components.

---

## Tech Stack

### Frontend
- **React**: Component-based UI development.
- **React Router**: For navigation and dynamic routing.


### Styling
- **CSS**: Custom styling for all components.
- **Flexbox/Grid**: Responsive and flexible layouts.

### Data Management
- **JSON**: Static data for artworks and writeups.
- **Context API**: Global state management for search functionality.

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/titikshaha/artryst.git
   cd artryst
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm start
   ```
   - The application will be available at https://artryst.netlify.app/

4. **Build for Production**
   ```bash
   npm run build
   ```

---

## File Structure

```
src/
├── components/         # Reusable components (Header, Footer, Banners, etc.)
├── pages/              # Page-level components (Home, Artworks, Writeups, etc.)
├── css/                # CSS files for styling
├── App.js              # Main App component
├── index.js            # Entry point of the application
```

---

## Key Files

### 1. **Header.jsx**
Manages navigation with dynamic active links.

### 2. **WriteBanner.jsx**
Displays writeups with interactive layouts, pulling data dynamically from JSON.

### 3. **App.js**
Wraps the application manages routing, and includes global components like the header and footer.

---

## Deployment

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Deploy to a Hosting Service**
   - **Netlify**:
     - https://artryst.netlify.app/

---

## Features in Development
- **Admin Dashboard**: Manage artworks and writeups dynamically.
- **Enhanced Analytics**: Track user interactions and popular items.
- **User Submissions**: Allow visitors to submit their own writeups and artworks.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes.
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the branch and create a Pull Request.

---


## Acknowledgments
- **React** for providing a robust framework for frontend development.
- **You** for contributing to the growth of this project!

