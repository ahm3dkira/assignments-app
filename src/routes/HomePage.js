import './HomePage.css';
const data = require('../data/data.json');

export default function HomePage() {
    return (
        <div className="homePage">
            <div className="main-container">
            <div className="content">
                {data.courses.map(course => (
                    <a href={course.link} className="special-link">
                        {course.title}
                    </a>
                ))}
            </div>
            </div>
        </div>
    );
}