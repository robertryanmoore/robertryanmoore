import React from 'react';
import csharp from '../images/c-sharp-logo.png';
import java from '../images/javalogo.png';
import css from '../images/csslogo.png';
import html from '../images/htmllogo.png';
import ionic from '../images/ionic-icon.png';
import js from '../images/javascriptlogo.png';
import jsp from '../images/jsp.png';
import maven from '../images/maven.png';
import selenium from '../images/selenium_logo.png';
import sql from '../images/sql.png';
import spring from '../images/spring.png'
import python from '../images/python.png'

function DigitalCV() {

    return (
        <div id="main">
            <section>
                <article className="post featured">
                    <h2>Robert Moore</h2>
                    <span className="email"><h2>robert@robertryanmoore.co.za</h2></span>

                    <p>
                        I am a young programmer with a strong desire to learn looking for new opportunities to write good, meaningful code
                        that makes a difference in the world.
                    </p>

                    <h3>WORK EXPERIENCE</h3>
                    <p>
                        <b>
                            November 2022<br />
                            Software Developer<br />
                            Paltrack<br />
                        </b>

                        Paltrack provides many kinds of software for the fruit industry. Scanner software used to track pallets in
                        fruit shipments. In this role I both maintain and upgrade our current Java based front end and backend and work
                        on developing a new scanner app with bluetooth and RFID capablies in Ionic framework.
                    </p>
                    <p>
                        <b>
                            December 2020<br />
                            DevOps<br />
                            XIB Solutions, outsourced to Vodacom<br />
                        </b>

                        Worked in a DevOps team, with a focus on automation. I headed up the project to overhaul and automate all system health
                        checks. This project gave me quite a wide scope of still being hands on with development while also getting a look at the infrastructure and
                        support side of things. It was very interesting seeing things from different perspective than I have before in my career as a developer.
                    </p>
                    <p>
                        <b>
                            2020<br />
                            Freelance Software Developer<br />
                            Raising Hope South Africa<br />
                        </b>

                        Developed a database and a desktop application for interacting with this database.
                        I have also given general computing advice to the CEO on occasion.
                    </p>

                    <p>
                        <b>
                            November 2019 – January 2020<br />
                            Junior Java Developer<br />
                            Real Estate Development Interactive<br />
                        </b>

                        For 3 months I was at REDI as a Junior Java Developer.
                        I worked on their Sales Information Management System, a tool for the property industry that basically allows
                        estate owners a robust way to keep track of their developments as well as interfacing with other parties involved in
                        the sales process. What I did was largely JSP work on the frontend such as updating pages to meet specific requirements
                        of a client who was unsatisfied with our templates. I also did some configuration work setting up new developments and
                        creating and modifying reports.
                    </p>

                    <p>
                        <b>
                            February 2018-January 2019<br />
                            IT Trainee<br />
                            Old Mutual<br />
                        </b>

                        From February 2018 until January 2019, I was an IT Trainee in Old Mutual’s Identity Access Management team.
                        My responsibilities in this team included performing daily system health checks on our Quality Assurance system,
                        providing various monthly and weekly statistical reports based on user data, supporting IT Support Specialists and
                        senior developers by logging service requests and occasionally verifying ID documents and approving user access.
                        I spent a fair deal of time in this role looking for opportunities to write desktop applications and tools to increase
                        efficiency and make life easier for the team.

                        Tools and programs I have created include:

                        A desktop application to merge CSV files on a common column.
                        Written in C#, with extensive use of DataTables.

                        A desktop application to remove cell phone numbers from test users.
                        Written in C# using Oracle’s official plugins to connect to Oracle databases, actual data is manipulated with SQL statements.

                        A background program to run automated system health checks at a set time.
                        Written in Java using Selenium web driver to control an instance of Google Chrome.
                        Added a feature to the above program to automatically register new test users.
                    </p>

                    <p>
                        <b>
                            August 2017-February 2018<br />
                            Intern<br />
                            Old Mutual<br />
                        </b>
                        On the 1st of August 2017 I started my first ever job as an intern in Old Mutual’s Identity Access Management team.
                        As an intern I assisted the team with anything that needed to be done. My responsibilities included formatting documents
                        in Word and Excel, logging requests and assisting the call centre with issues they were unable to resolve, including access
                        removals, suspicious account activity investigations and manual password resets. On one occasion I assisted a senior developer
                        with a JQuery update.
                    </p>


                    <h3>EDUCATION, TRAINING AND QUALIFICATIONS</h3>

                    <p>
                        <b>
                            2016<br />
                            National Senior Certificate<br />
                            Brackenfell High School<br />
                        </b>

                        Subjects: Information Technology, Computer Applications Technology, Tourism, Mathematics,
                        English Home Language, Afrikaans First Additional Language.
                    </p>

                    <p>
                        <b>
                            January 2017-July 2017<br />
                            CapaCiti Post Matric Oracle Course<br />
                        </b>

                        Received training in HTML, CSS, Java, and soft skills.
                    </p>

                    <h3>Skills</h3>
                        <table>
                            <tr>
                                <td>Java <img src={java} height="24px" width="24px" style={{ marginBottom: '-5px' }} /></td>
                                <td>HTML <img src={html} height="24px" width="24px" style={{ marginBottom: '-5px' }} /></td>
                            </tr>
                            <tr>
                                <td>C# <img src={csharp} height="24px" width="24p" style={{ marginBottom: '-5px' }} /></td>
                                <td>CSS <img src={css} height="24px" width="24px" style={{ marginBottom: '-5px' }} /></td>
                            </tr>
                            <tr>
                                <td>SQL <img src={sql} height="24px" width="24px" style={{ marginBottom: '-5px' }} /></td>
                                <td>JSP <img src={jsp} height="24px" width="24px" style={{ marginBottom: '-5px' }} /></td>
                            </tr>
                            <tr>
                                <td>Maven <img src={maven} height="24px" width="24px" style={{ marginBottom: '-5px' }} /></td>
                                <td>Selenium Web Driver <img src={selenium} height="24px" width="24px" style={{ marginBottom: '-5px' }} /></td>
                            </tr>
                            <tr>
                                <td>Python <img src={python} height="24px" width="24px" style={{ marginBottom: '-5px' }} /></td>
                                <td>JavaScript <img src={js} height="24px" width="24px" style={{ marginBottom: '-5px' }} /></td>
                            </tr>
                            <tr>
                                <td>Ionic <img src={ionic} height="24px" width="24px" style={{ marginBottom: '-5px' }} /></td>
                                <td>Spring Boot <img src={spring} width="24px" style={{ marginBottom: '-5px' }} /></td>
                            </tr>
                        </table>
                    <h3>Volunteer Work</h3>
                    <p>
                        <b>
                            Children’s Ministry leader<br />
                            Durbanville Baptist Church<br />
                        </b>


                        Children come and sing worship songs, play games and learn stories from the Bible.
                        As a leader in this ministry I am responsible for supervising children. From 2012 to 2016 I worked with
                        the grade 3 to 5 age group, as of 2017 I now work with the grade 2 and 3 age group.
                    </p>

                    <p>
                        <b>
                            Special Needs Ministry Leader<br />
                            Durbanville Baptist Church<br />
                        </b>

                        Children’s Ministry at Durbanville Baptist Church tries as far as possible to include and accommodate children with
                        special needs. The special needs ministry al  hosts other events especially for children with special needs.
                        Sometimes these are sports days for the families and sometimes we just watch a movie with the kids  to give
                        their parents a break.
                        I have been involved in this ministry since it started in 2014 and been a senior leader since 2016.
                        My responsibilities in this role include supervising other leaders, taking care of special needs children, and planning
                        and running activities.
                    </p>

                    <p>
                        <b>
                            Ministry Resourcing Team<br />
                            Durbanville Baptist Church<br />
                        </b>

                        Our focus is to equip all ministries at Durbanville Baptist Church with regards to physical equipment, such as sound, visuals, computers, video production,
                        musical instruments or any other resourcing need that may arise. We try to make the best use of what we already have and make sure that
                        we take a wise, holistic and informed approach to purchasing any new equipment. We also do our best to maintain equipment and weigh up what
                        can be fixed and what needs to be replaced.
                    </p>

                    <p>
                        <b>
                            Technical Team<br />
                            Durbanville Baptist Church<br />
                        </b>

                        I joined the church’s technical team in 2013, in this role I have been responsible for controlling the song lyrics during
                        worship, playing videos and putting on slide shows for the sermons. Since 2017 I have been trained as a sound engineer
                        and I am now in charge of sound for Sunday Services every third week, sound for Children’s Ministry every week and
                        occasionally other special events such as youth camps.
                    </p>

                    <p>
                        <b>
                            Holiday Bible Club leader<br />
                            Durbanville Baptist Church<br />
                            June every year, 2012-2019<br />
                        </b>

                        Like Children's ministry but on a larger scale. Hosted at the Church annually during the first week of the June-July
                        school holidays. My involvement includes serving on the technical team assisting with preparation and serving as a backup
                        sound engineer as well as a regular leader, taking care of the children. I have worked with the grade 2-3 age group
                        every year except 2013 when I was with the grade 0-1 group.
                    </p>

                    <p>
                        <b>
                            King's Kids Week leader<br />
                            Stilbaai Baptist Church<br />
                            June 2014, 2015, 2016<br />
                        </b>

                        From 2013 to 2016, Durbanville Baptist Church would send a team to a smaller church in Stilbaai to help them run
                        a holiday bible club of their own. In 2014, 2015 and 2016 I had the privilege of being part of this team.
                        In 2014 I worked with the grade 0-2 age group. In 2015 and 2016 I served on the video production team, recording footage
                        during the day and then editing it into two to four minute long clips to be shown the following day.
                    </p>

                    <p>
                        <b>
                            Helen O’Grady Drama Academy<br />
                            2012-2016<br />
                        </b>

                        During my high school years, I participated in extracurricular drama lessons at the Helen O’Grady Drama Academy.
                        Lesson were one hour once a week and each class put on a stage production at the end of each year.
                        I have two trophies and multiple certificates from the academy.
                    </p>


                    <h3>REFERENCES</h3>
                    <p><b>Contact information for references available  on request. <br />
                        This is a publicly accessible site therefore I cannot publish the contact details for other people here.</b></p>
                    <table>
                        <tr>
                            <td>
                                <b>Ruari Plint</b><br />
                                Lead Systems Analyst<br />
                                IAM Team<br />
                                Old Mutual<br />
                            </td>
                            <td>
                                <b>Mary Klinkradt</b><br />
                                CEO<br />
                                Raising Hope South Africa<br />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Ernst Kotzé</b><br />
                                Information Technology Teacher<br />
                                Brackenfell High School<br />
                            </td>
                            <td>
                                <b>Brett Taylor</b><br />
                                Worship Pastor<br />
                                Durbanville Baptist Church<br />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <b>Sylvester Gordon</b><br />
                                Manager<br />
                                Paltrack<br />
                            </td>
                        </tr>
                    </table>
                </article>
            </section>
        </div>
    );
}

export default DigitalCV;