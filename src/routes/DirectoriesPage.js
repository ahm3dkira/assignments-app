import './DirectoriesPage.css';
import { useParams } from 'react-router-dom';
const data = require('../data/data.json');

export default function DirectoriesPage() {
    const { courseID } = useParams();
    const course = data.courses.find(course => course.link === courseID);
    return (
        <div className="directoriesPage">
            {/* <div class="main-container">
      <p><%= data.course.title %></p>
      <br />
      <% if (data.course.directories.length > 0) { %>
      <ul class="content">
        <% data.course.directories.forEach(function(directory){ %>
        <li class="directory-link">
          <a
            href="<%= `/${data.course.link}/${directory.link}` %> "
            class="special-link"
          >
            <%= directory.title %>
          </a>
        </li>
        <!--  -->
        <% }); %>
      </ul>
      <% } %>
      <!--  -->
    </div> */}
            <div className='main-container'>
                <p>{course.title}</p>
                <br />
                {course.directories.length > 0 && (
                    <ul className="content">
                        {course.directories.map(directory => (
                            <li className="directory-link">
                                <a
                                    href={`/${course.link}/${directory.link}`}
                                    className="special-link"
                                >
                                    {directory.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>


        </div>
    );
}
