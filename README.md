# RN-JobSearch 🔍

A modern, feature-rich job search mobile application built with React Native and TypeScript. Browse thousands of job listings, search for your dream position, and explore detailed job information - all in a clean, intuitive interface.

## 📱 Screenshots

<img width="300" alt="Screenshot_20260119_103901" src="https://github.com/user-attachments/assets/fc41f144-9cde-4f9a-a3be-47e249094f90" />
<img width="300" alt="Screenshot_20260119_104031" src="https://github.com/user-attachments/assets/3cdce0f5-9add-4003-9f41-1df7d8dc333a" />
<img width="300" alt="Screenshot_20260119_104056" src="https://github.com/user-attachments/assets/91cec377-ca7a-4fd8-ba13-8d56d41f57df" />
<img width="300" alt="Screenshot_20260119_104121" src="https://github.com/user-attachments/assets/e0e21df5-b8b4-4665-b784-3320cc023122" />
<img width="300" alt="Screenshot_20260119_114826" src="https://github.com/user-attachments/assets/a173c223-32b4-4c3f-8d04-c3b8e3ce3fc6" />
<img width="300" alt="Screenshot_20260119_114916" src="https://github.com/user-attachments/assets/f1e00375-1426-452c-b995-ee2d1cdd23ab" />



## ✨ Features

- **Browse Job Listings**: Explore curated job opportunities on the home screen
- **Detailed Job View**: Access comprehensive information about each position including requirements, responsibilities, and company details
- **Smart Search**: Find jobs by title, keyword, or company with real-time results
- **Pagination Support**: Seamlessly browse through multiple pages of search results
- **Clean UI/UX**: Modern, responsive design optimized for mobile devices
- **Fast Navigation**: Smooth transitions between screens using Expo Router

## 🛠️ Tech Stack

- **React Native**: Cross-platform mobile development framework
- **TypeScript**: Type-safe code for better development experience
- **Expo**: Development platform and toolchain
- **Expo Router**: File-based routing for navigation
- **JSearch API**: Real-time job data from multiple sources

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Expo Go app on your mobile device (optional, for physical device testing)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AndreOpollo/RN-JobSearch.git
cd RN-JobSearch
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up API Key

1. Sign up for a free API key at [RapidAPI - JSearch](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch)
2. Create a `.env` file in the root directory
3. Add your API key:

```env
EXPO_PUBLIC_RAPID_API_KEY=your_api_key_here
```

### 4. Start the Development Server

```bash
npm start
# or
yarn start
```

### 5. Run the App

- **iOS Simulator**: Press `i` in the terminal
- **Android Emulator**: Press `a` in the terminal
- **Physical Device**: Scan the QR code with Expo Go app

## 📂 Project Structure

```
RN-JobSearch/
├── app/                    # Application screens (Expo Router file-based routing)
│   ├── index.tsx          # Home screen
│   ├── search/            # Search screen
│   └── details/       # Job details screen
├── components/            # Reusable React components
├── constants/             # App constants (colors, sizes, etc.)
├── hook/                  # Custom React hooks (API integration)
├── assets/                # Images, fonts, and static resources
├── scripts/               # Utility scripts
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## 🎯 Core Functionality

### Home Screen
- Displays featured and popular job listings
- Quick access to different job categories
- Search bar for immediate job search

### Job Details Screen
- Complete job description and requirements
- Company information and logo
- Qualifications and responsibilities
- Application link/button

### Search Screen
- Real-time job search functionality
- Filter by job title, keywords, or location
- Pagination controls for browsing multiple pages
- Results counter and loading states

## 🔧 Available Scripts

```bash
# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on web
npm run web

# Type check
npm run type-check
```

## 📦 Key Dependencies

- `expo`: ~51.x
- `expo-router`: File-based navigation
- `react-native`: Latest stable version
- `typescript`: ^5.x
- `axios`: HTTP client for API requests

## 🌐 API Integration

This app uses the [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) from RapidAPI, which aggregates job listings from multiple sources including:
- LinkedIn
- Indeed
- Glassdoor
- ZipRecruiter
- And many more

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**AndreOpollo**

- GitHub: [@AndreOpollo](https://github.com/AndreOpollo)

## 🙏 Acknowledgments

- [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) for providing job data
- [Expo](https://expo.dev/) for the amazing development platform
- React Native community for continuous support

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

⭐ Star this repo if you find it helpful!
