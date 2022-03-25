import './DirectoriePage.css';
import { useParams } from 'react-router-dom';

export default function DirectoriePage() {
    const { courseID, directorieID } = useParams();
    const data = require('../data/data.json');
    const course = data.courses.find(course => course.link === courseID);
    const directorie = course.directories.find(e => e.link === directorieID);

    return (
        <div className="directoriePage">
            <div className='main-container'>
                <p>{`${course.title} - ${directorie.title}`}</p>
                <br />
                {directorie.files.length > 0 && (
                    <ul className="files">
                        {directorie.files.map(file => (
                            <li className="file">
                                <p>{file}</p>
                                <a
                                    href={`/data/${course.link}/${file}`}
                                    target="_blank"
                                    download
                                >
                                    <i className="fa-solid fa-download icon"></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
