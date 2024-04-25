import './index.scss';
import AnimatedLetters from "../AnimatedLetters/index.jsx";

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1><AnimatedLetters strArray={["A", "b", "o", "u", "t", " ", "m", "e"]} idx={15}/></h1>
                <p>I have completed a 6-month JAVA programming course at SMK High School. There I gained knowledge of
                    programming in the JAVA language,
                    designing databases: SQL (MySQL, MariaDB) and NoSQL (MongoDB) and how to use them.
                    I had to program in the REACT environment. I can create HTML pages,use the JavaScript language to
                    make them dynamic and interactive, use CSS (Bootstrap) to style them.
                </p>
                <p>I am familiar with Spring, Spring-boot framework. I am learning how to use the Git versioning system. So I can work with both back-end and front-end.
                    Since artificial intelligence is becoming very important at the moment, so are its capabilities
                    I use it when necessary or out of curiosity. Of course, I deepen my programming
                    knowledge by being interested in the latest trends, creating and solving
                    emerging problems in their projects.</p>
            </div>
        </div>
    );
}

export default About;