# Little Lemon Website - Coursera Assignment

This repository contains the final assignment 'Booking a table on the Little Lemon website' for the ['Front-End Developer Capstone'](https://www.coursera.org/learn/meta-front-end-developer-capstone) course, part of ['Meta Front-End Developer Professional Certificate'](https://www.coursera.org/professional-certificates/meta-front-end-developer) on Coursera.

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
    <li><a href="#instalation">Instalation</a></li>
    <li><a href="#unit-testing">Unit Testing</a></li>
    <li><a href="#helpful-resources">Helpful Resources</a></li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Demo: [Little Lemon](https://example.com)

[![Product Name Screen Shot][product-screenshot]](https://example.com)
![little-lemon-restaurant-mockup](https://user-images.githubusercontent.com/example.png)

The 'Little Lemon Website' is a web development project created as a part of the 'Front-End Developer Capstone' course on Coursera. It represents a delightful online platform showcasing the flavors of Mediterranean cuisine. One of its features is the convenient online reservation system, that allows guests to effortlessly book a table for an unforgettable dining experience.

Introduction: Little Lemon is a Mediterranean eatery, owned and operated by a close-knit family. We pride ourselves on infusing traditional Mediterranean recipes with contemporary flair, offering our patrons a one-of-a-kind dining adventure through the flavors of the Mediterranean.

Task Overview: Our assignment entails crafting a modern and adaptable front-end interface for the Little Lemon application. A key addition to our task is integrating a bookings feature, enhancing the functionality of the app. Additionally, we are tasked with writing comprehensive tests to ensure the reliability of the system and creating design wireframes and prototypes using Figma to guide the development process.

Please note: Currently, the only functioning feature on this website is the 'Reserve a Table' function. The 'LogIn', 'Menu', and 'Online Order' functionalities are not essential for the assignment and are under construction. Temporary 'under construction' images are displayed on those pages.

### Screenshots

<!-- <table>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/image1.png" alt="home-page" /></td>
    <td><img src="https://user-images.githubusercontent.com/image2.png" alt="home-page" /></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/image3.png" alt="reservation" /></td>
    <td><img src="https://user-images.githubusercontent.com/image4.png" alt="reservation" /></td>
  </tr>
</table> -->

<details>
  <summary>View screenshots</summary>
    [![Product Name Screen Shot][product-screenshot]](https://example.com)
    [![Product Name Screen Shot][product-screenshot]](https://example.com)
</details>

### Technologies Used

- HTML
- CSS
- JavaScript
- React
- [![React][React.js]][React-url]
- Formik
- Yup
- React Router
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

<p id="readme-top" style="text-align: right;">(<a href="#readme-top">back to top</a>)</p>

## Design Process

During the development of the 'Little Lemon Website', I invested time in creating comprehensive wireframes and prototypes to visualize the layout and functionality of the website. These wireframes and prototypes were created using Figma, a collaborative design tool that allowed for seamless iteration and refinement of the website's design.

### Wireframes

I began the design process by sketching rough wireframes to outline the basic structure and flow of the website. These wireframes served as a blueprint for the layout of each page, helping to ensure a clear and intuitive user experience.

<style>
  table {
    width: 100%; /* Ensure table takes up full width of parent */
    border-collapse: collapse; /* Collapse border spacing */
  }
  td {
    width: 50%; /* Each cell takes up 50% of the table width */
    vertical-align: top; /* Align content to the top of the cell */
    padding: 10px; /* Add some padding for spacing */
  }
</style>

<details>
  <summary>View wireframes</summary>

  <table>
  <tr>
    <td><p><strong>Home Page Wireframe:</strong></p><img src="https://github.com/RalitsaLefterova/little-lemon-coursera-capstone-assignment/assets/11258085/2881aca0-d02a-4309-b60d-00666013becb" alt="home-page-wireframe" width="250"></td>
    <td><p><strong>About Us Wireframe:</strong></p><img src="https://github.com/RalitsaLefterova/little-lemon-coursera-capstone-assignment/assets/11258085/c609df6b-ce9f-4437-8a74-a6e8db8ec269" alt="about-us-wireframe" width="250"></td>
  </tr>
  <tr>
    <td><p><strong>Reservation Wireframe:</strong></p><img src="https://github.com/RalitsaLefterova/little-lemon-coursera-capstone-assignment/assets/11258085/2f993ae4-fc1c-4d1b-b192-7cb598f1beaf" alt="reservation-wireframe" width="250"></td>
    <td><p><strong>Booking Confirmed Wireframe:</strong></p><img src="https://github.com/RalitsaLefterova/little-lemon-coursera-capstone-assignment/assets/11258085/a511f9ea-9e97-4cc9-b89e-1aade3513fdc" alt="booking-confirmed-wireframe" width="250"></td>
  </tr>
</table>

  <!-- <div style="display: flex; flex-wrap: wrap;">
    <div style="flex: 1 1 50%;">
      <p><strong>Home Page Wireframe:</strong></p>
      <img src="https://github.com/RalitsaLefterova/little-lemon-coursera-capstone-assignment/assets/11258085/2881aca0-d02a-4309-b60d-00666013becb" alt="home-page-wireframe" width="250">
    </div>
    <div style="flex: 1 1 50%;">
      <p><strong>About Us Wireframe:</strong></p>
      <img src="https://github.com/RalitsaLefterova/little-lemon-coursera-capstone-assignment/assets/11258085/c609df6b-ce9f-4437-8a74-a6e8db8ec269" alt="about-us-wireframe" width="250">
    </div>
    <div style="flex: 1 1 50%; margin-top: 20px;">
      <p><strong>Reservation Wireframe:</strong></p>
      <img src="https://github.com/RalitsaLefterova/little-lemon-coursera-capstone-assignment/assets/11258085/2f993ae4-fc1c-4d1b-b192-7cb598f1beaf" alt="reservation-wireframe" width="250">
    </div>
    <div style="flex: 1 1 50%; margin-top: 20px;">
      <p><strong>Booking Confirmed Wireframe:</strong></p>
      <img src="https://github.com/RalitsaLefterova/little-lemon-coursera-capstone-assignment/assets/11258085/a511f9ea-9e97-4cc9-b89e-1aade3513fdc" alt="booking-confirmed-wireframe" width="250">
    </div>
  </div> -->
</details>

### Prototypes

Once the wireframes were finalized, I transitioned to creating interactive prototypes in Figma. These prototypes provided a more detailed representation of the website's functionality, allowing for user interaction and navigation through the various pages and features.

### Figma Project

Screenshots of the wireframes and prototypes created in Figma are provided below. For a more interactive experience, you can access the full Figma project by following the link provided.

[View Figma Project](link_to_figma_project)

From my Figma account, you can also view the mobile version of the 'Little Lemon Website', which is my final assignment for ['Principles of UX/UI Design'](https://www.coursera.org/learn/principles-of-ux-ui-design?specialization=meta-front-end-developer) course, also part of ['Meta Front-End Developer Professional Certificate'](https://www.coursera.org/professional-certificates/meta-front-end-developer).

<!-- INSTALATION -->

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

<p id="readme-top" style="text-align: right;">(<a href="#readme-top">back to top</a>)</p>

## Unit Testing

### Overview

The 'Little Lemon Website' includes comprehensive testing to ensure the reliability and functionality of its features. The test suite covers various aspects of the application, including:

Routing: Ensuring that navigation between different components of the website functions as expected.
Booking Form Validation: Verifying that user input in the booking form is properly validated to maintain data integrity.
Booking Form Submission: Testing the submission process of the booking form to ensure that reservations are processed correctly.

### Running Tests

To run the tests, execute the following command in your terminal:

```bash
npm test
```

<!-- Helpful Resources -->

## Helpful Resources

TODO: add the website for images

- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)

<p id="readme-top" style="text-align: right;">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHOR -->

## Author

Hi there! I'm Ralitsa Lefterova, a passionate Frontend Developer with a love for creating beautiful and functional web experiences. With a background in Graphic Design and Prepress, I'm dedicated to crafting user-centric solutions that make a positive impact. Feel free to connect with me on LinkedIn or explore my GitHub repositories to learn more about my work.

[![linkedin](https://img.shields.io/badge/Ralitsa_Lefterova-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ralitsalefterova/)

<!-- [![Github](https://img.shields.io/badge/Ralitsa_Lefterova-20232A?style=for-the-badge&logo=Github&logoColor=white)](https://github.com/RalitsaLefterova) -->
<p id="readme-top" style="text-align: right;">(<a href="#readme-top">back to top</a>)</p>
