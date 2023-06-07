import { image1project1, image2project1, image3project1, image4project1, image5project1, image6project1, image7project1 } from "./images-projects/index.js";
import { image1project2, image2project2, image3project2, image4project2, image5project2, image6project2, image7project2 } from "./images-projects/index.js";
import { image1project3, image2project3, image3project3, image4project3, image5project3, image6project3, image7project3, image8project3 } from "./images-projects/index.js";


export const myProjects = [
  {
    title: "Private Driving School Blog",
    mission: "I am assisting an independent driving instructor and his driving school in creating a web application that is a restricted access blog intended only for his private students. I have implemented features in response to my client's precise expectations.",
    features: ["Authentication system with refresh token and access token, to secure the data that should be access only by the members.", "Possibility to log in with a Google account, when the Google account email is registered in the database.", "Possibility to reset one's password. A token is issued and a unique expiring link is sent to the user's email to reset its password", "Once the user is validated by an admin, he receives a confirmation email.", "The newly accepted user can login, but can't access the blogs, he can only go to the subscription page to subscribe a plan.", "The user can choose the plan and pay by credit card with the integration of Stripe checkout.", "Possibility to cancel its subscription its account profile.", "Possibility to filter articles by tags.", "There is an access designed for administrators in the interface.", "A page allows administrators to manage blog articles and their visibility.", "A page allows administrators to control people who register to ensure their identity and validate or delete users.", "A editor page to create or modify an article.", "A built-in Quill text editor where customized text, images, and YouTube video links can be inserted.", "A title, a cover image and categories tags can be added to the article in the editor page", "Automatic emails sending setup with nodemailer.", "Sending an email to the user to confirm their registration.", "Sending an email to the administrator to notify a new registration request.", "Sending an email to the user to notify them of the validation of their registration.", "Sending an email with a unique location and token to reset a password.", "Possibility to contact the administrator via the interface, which will trigger an email sending."],
    pages: ["Intro", "Login", "Signup", "Forgot Password", "Reset Password", "Home", "Article", "Article Editor", "Manage Users", "Manage Articles", "Edit Article", "Profile", "Contact", "About", "Terms of Service", "Checkout", "Subscription", "404"],
    info: "This front-end code and the API code are private. The website is deployed, you can visit it but you won't be able to access the blog articles without being a member and taking a plan.",
    images: [image1project1, image2project1, image3project1, image4project1, image5project1, image6project1, image7project1],
    videos: ["https://www.youtube.com/embed/1Vu0O5FYA4I"],
    visit: "https://apprentissagedelaconduite.fr/",
    technologies: "Create React App, Nodejs, Express, MongoDB, Stripe API, Google Oauth API, Nodemailer, Imgbb, Quill, Redux, Bootstrap, Hostinger, Render.com",
  },
  {
    title: "Vacation Rentals Marketplace",
    mission : "I am creating an Airbnb clone with Next.js version 13, implementing new functionalities such as the router and API. The project aims to provide a platform for users to search for and book accommodations in various locations around the world.",
    features: ["User authentication with login and signup functionality.", "Listings page to display available rental properties.", "Individual listing page with detailed information about a specific property.", "Reservation system to allow users to book accommodations.", "Ability for property owners to add their homes for rent.", "Integration of Google Maps API to display listings on a map.", "Styling of the map, markers, and passing data within the maps.", "Trips page to show users their booked reservations.", "404 page for handling not found routes.", "Image upload with Cloudinary", "Tailwind design and animations"],
    pages: ["Listings", "Listing", "Reservations", "Add My Home", "Login", "Signup", "Trips", "404"],
    description: "An Airbnb clone with Next.js version 13. This project was interesting to get to implement the new functionnalities of Next13 such as the router, the api. The implementation of a Maps API, styling the map itself, the markers, and passing data, like the listings of the propreties within the maps. This project is a good example of how to use Next.js and how to implement a Maps API. The project is deployed on Vercel, a cloud platform for static sites, Jamstack deployments, and Serverless Functions. The project is also using Tailwind CSS, a utility-first CSS framework for rapidly building custom designs. The project is also using TypeScript, a statically-typed language that adds additional features to JavaScript. Overall, the Airbnb Clone is a robust and scalable application that provides an easy-to-use platform for users to search for and book accommodations in various locations around the world.",
    visit: "https://dylanp97-vacation-rental-clone.vercel.app/",
    images: [image1project2, image2project2, image3project2, image4project2, image5project2, image6project2, image7project2],
    videos: [],
    repoClient: "https://github.com/DylanP97/next13-airbnb-clone",
    repoServer: "",
    technologies: "Next13, TypeScript, Tailwind, Cloudinary, Vercel, Google Maps API, Google Oauth API, Github Oath, MongoDB",
  },
  {
    title: "Google Products Release Chronology",
    mission: "I am developing a web application using the Angular framework and NodeJS to track and display the release dates of products and updates from Google.",
    features: [
      "User authentication with login and signup functionality.",
      "Display of all products with their release dates and updates.",
      "Individual product pages to view detailed information and timeline of releases.",
      "Product form for users to contribute new product releases or updates.",
      "Image uploading with Firebase storage.",
      "Pagination of the product list",
      "Chronology by year page to browse products released in a specific year.",
      "404 page for handling not found routes."
    ],
    pages: ["All Products", "Product Page", "Product Form", "Login", "Signup", "Chronology By Year", "404"],
    description: "The Google Products project is a web application built using the Angular framework and NodeJS. The application allows users to view and track the release dates of products and updates from various companies. The front-end of the application is developed using Angular, a popular open-source web application framework, and TypeScript, a statically-typed language that adds additional features to JavaScript. Angular Material, a UI component library, is used to design and implement the user interface, providing a clean and intuitive design for users. The back-end of the application is powered by NodeJS and Express, a popular NodeJS web application framework. MongoDB, a NoSQL database, is used to store data related to product releases and updates. Firebase Storage is used for storing any media files used in the application. The application is deployed on Firebase Hosting, a scalable and secure web hosting platform provided by Google. Firebase Functions, a serverless compute service, is used to handle server-side logic for the application. Overall, this MEAN project is a robust and scalable application that provides an easy-to-use platform for tracking product releases and events on a slider.",
    visit: "",
    images: [image1project3, image2project3, image3project3, image4project3, image5project3, image6project3, image7project3, image8project3],
    videos: [],
    repoClient: "https://github.com/DylanP97/ng-google-products",
    repoServer: "https://github.com/DylanP97/api-google-products",
    technologies: "Angular, TypeScript, Angular Material UI, Rxjs, Firebase Storage, Firebase Hosting, Firebase Functions, Nodejs, Express, MongoDB",
  },
];
