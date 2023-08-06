import React from 'react';
import "./about.css"
const About = () => {
  return (
    <div className='about_container'>
        <header className=''>
            <h1 className='heading'>About This Website</h1>
            <h3>Hi there! I'm <span className='name'>Aditya Goel</span>, and I proudly present my React.js project.</h3>
        </header>
        <main className='main'>
            <section className=''>
                <h2 className='sub_heading'>About the Project</h2>
                <h3>Welcome to my React.js project! This application showcases my skills in React.js development, bringing
                    you a dynamic and interactive user experience.</h3>
                <h3>In this project, I've utilized various powerful React.js hooks such as useState, useEffect, useContext,
                    among others. Additionally, I've harnessed the flexibility of JavaScript functions like filter() and
                    map() to handle data efficiently and enhance user interactions.</h3>
            </section>
    
            <section>
                <h2 className='sub_heading'>Main Features</h2>
                <h3><strong>Use of local storage:</strong> One of the primary highlights of this project is the use of local
                    storage. By using it, you can store all your tasks in local storage and access them anytime.</h3>
            </section>
    
            <section>
                <h2 className='sub_heading'>Why I Built This</h2>
                <h3>This project has been an exciting opportunity for me to deepen my expertise in React.js and frontend web
                    development. I wanted to challenge myself to create a user-friendly application that demonstrates my
                    passion for building intuitive and visually appealing interfaces.</h3>
                <h3>I hope this project inspires and serves as a testament to my dedication to delivering top-notch web
                    solutions.</h3>
            </section>
        </main>
        <footer>
            <h3 className="footer">I am happy to connect with you! If you have any questions or feedback, please don't hesitate to reach out.
                Made with ❤️ by Aditya Goel.</h3>
        </footer>
    
        <div className='flex items-center justify-center  gap-5 m-5'>
            <a href="https://github.com/AdityaGoel0320" target="_blank" rel="noopener noreferrer" className='color-black'>
                <i id='i' className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aditya-goel-286245239" target="_blank" rel="noopener noreferrer"
                className='color-black'>
                <i id="i" className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/AdityaGoel0320?t=DWSov778bgHXMkyQxELrow&s=09" target="_blank"
                rel="noopener noreferrer" className='color-black'>
                <i id='i' className="fa-brands fa-x-twitter"></i>
            </a>
        </div>
    </div>
  );
};

export default About;
