# Little Lemon Website - Coursera Assignment

This repository contains the final assignment **'Booking a table on the Little Lemon website'** for the ['Front-End Developer Capstone'](https://www.coursera.org/learn/meta-front-end-developer-capstone) course, part of ['Meta Front-End Developer Professional Certificate'](https://www.coursera.org/professional-certificates/meta-front-end-developer) on Coursera.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#screenshots">Screenshots</a></li>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#design-process">Design Process</a>
      <ul>
        <li><a href="#wireframes">Wireframes</a></li>
        <li><a href="#prototypes">Prototypes</a></li>
        <li><a href="#figma-project">Figma Project</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#unit-testing">Unit Testing</a></li>
    <li><a href="#helpful-resources">Helpful Resources</a></li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Demo: [Little Lemon](https://example.com)

**Introduction:** The 'Little Lemon Website' is a web development project created as a part of the 'Front-End Developer Capstone' course on Coursera. It represents a delightful online platform showcasing the flavors of Mediterranean cuisine. One of its features is the convenient online reservation system, that allows guests to effortlessly book a table for an unforgettable dining experience.

**Task Overview:** Our assignment entails crafting a modern and adaptable front-end interface for the Little Lemon application. A key addition to our task is integrating a bookings feature, enhancing the functionality of the app. Additionally, we are tasked with writing comprehensive tests to ensure the reliability of the system and creating design wireframes and prototypes using Figma to guide the development process.

> **NOTE:** Currently, the only functioning feature on this website is the 'Reserve a Table' function. The 'LogIn', 'Menu', and 'Online Order' functionalities are not essential for the assignment and are under construction. Temporary 'under construction' images are displayed on those pages.

### Screenshots

<details>
  <summary>View screenshots</summary>
<p align="center">
[![Product Name Screen Shot][product-screenshot]](https://example.com)
</p>
</details>

### Technologies Used

- HTML
- CSS
- JavaScript
- React
- React Router
- Formik
- Yup
- React Items Carousel
- UUID

### Features

- **Responsive Design**: The website is designed to be fully responsive, ensuring optimal viewing experience across a wide range of devices and screen sizes.
- **Interactive Elements**: Various interactive elements such as buttons, forms, and navigation menus enhance user engagement and experience.
- **Content Organization**: The website is structured logically, with clear navigation and well-organized content for easy access and readability.
- **FontAwesome Icons**: FontAwesome icons are used to enhance visual appeal and provide intuitive navigation.
- **Formik and Yup**: Formik and Yup are used for form validation to ensure data integrity and user input validation.
- **React Items Carousel**: React Items Carousel is used to create a responsive carousel component for showcasing 'Specials' items on 'Home' page.
- **UUID**: UUID is used for generating unique identifiers, ensuring data integrity and preventing conflicts.

<!-- DESIGN PROCESS -->

## Design Process

During the development of the 'Little Lemon Website', I invested time in creating comprehensive wireframes and prototypes to visualize the layout and functionality of the website. These wireframes and prototypes were created using Figma, a collaborative design tool that allowed for seamless iteration and refinement of the website's design.

### Wireframes

I began the design process by sketching rough wireframes to outline the basic structure and flow of the website. These wireframes served as a blueprint for the layout of each page, helping to ensure a clear and intuitive user experience.

<details>
  <summary>View wireframes</summary>

  <p align="center"><strong>Home Page Wireframe:</strong></p>
  <p align="center">
    <img src="/src/assets/images/readme/home-page-wireframe.jpg" alt="home-page-wireframe" width="350">
  </p>

  <p align="center"><strong>About Us Wireframe:</strong></p>
  <p align="center">
    <img src="/src/assets/images/readme/about-us-wireframe.jpg" alt="about-us-wireframe" width="350">
  </p>

  <p align="center"><strong>Reservation Wireframe:</strong></p>
  <p align="center">
    <img src="/src/assets/images/readme/reservation-wireframe.jpg" alt="reservation-wireframe" width="350">
  </p>
  
  <p align="center"><strong>Booking Confirmed Wireframe:</strong></p>
  <p align="center">
    <img src="/src/assets/images/readme/booking-confirmed-wireframe.jpg" alt="booking-confirmed-wireframe" width="350">
  </p>

</details>

### Prototypes

Once the wireframes were finalized, I transitioned to creating interactive prototypes in Figma. These prototypes provided a more detailed representation of the website's functionality, allowing for user interaction and navigation through the various pages and features.

### Figma Project

Screenshots of the wireframes and prototypes created in Figma are provided below. For a more interactive experience, you can access the full Figma project by following the link provided.

[View Figma Project](link_to_figma_project)

From my Figma account, you can also view the mobile version of the 'Little Lemon Website', which is my final assignment for ['Principles of UX/UI Design'](https://www.coursera.org/learn/principles-of-ux-ui-design?specialization=meta-front-end-developer) course, also part of ['Meta Front-End Developer Professional Certificate'](https://www.coursera.org/professional-certificates/meta-front-end-developer).

<!-- INSTALLATION -->

## Installation

To get a local copy up and running follow these simple example steps:

### 1. Prerequisites

Ensure you have the following installed:

- Web browser (e.g., Chrome, Firefox, Safari)
- Text editor or IDE (e.g., Visual Studio Code, Sublime Text)

### 2. Clone the repository

Clone the project repository to your local machine using the following command:

```bash
git clone https://github.com/RalitsaLefterova/little-lemon-coursera-capstone-assignment.git
```

### 3. Navigate into the project directory

```bash
cd little-lemon-coursera-capstone-assignment
```

### 4. Install the required dependencies

```bash
npm install
```

This command will install all the necessary packages and dependencies specified in the `package.json` file.

### 5. Start the application

Once the dependencies are installed, you can start the application using the following command:

```bash
npm start
```

This command will start the development server, and you should be able to access the application in your web browser at `http://localhost:3000`.

That's it! You're now ready to explore the project.

<!-- UNIT TESTING -->

## Unit Testing

### Overview

The 'Little Lemon Website' includes comprehensive testing to ensure the reliability and functionality of its features. The test suite covers various aspects of the application, including:

**_Routing:_** Ensuring that navigation between different components of the website functions as expected.

**_Booking Form Validation:_** Verifying that user input in the booking form is properly validated to maintain data integrity.

**_Booking Form Submission:_** Testing the submission process of the booking form to ensure that reservations are processed correctly.

### Running Tests

To run the tests, execute the following command in your terminal:

```bash
npm test
```

<!-- HELPFUL RESOURCES -->

## Helpful Resources

TODO: add the website for images

- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)

<!-- AUTHOR -->

## Author

Hi there! I'm Ralitsa Lefterova, a passionate Frontend Developer with a love for creating beautiful and functional web experiences. With a background in Graphic Design and Prepress, I'm dedicated to crafting user-centric solutions that make a positive impact. Feel free to connect with me on LinkedIn or explore my GitHub repositories to learn more about my work.

[![linkedin](https://img.shields.io/badge/Ralitsa_Lefterova-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ralitsalefterova/)
