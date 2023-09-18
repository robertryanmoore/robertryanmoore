import React from 'react';
import thisSite from '../images/thisSite.png';
import fileMerger from '../images/csvmerger.JPG'
import ann from '../images/ann.jpeg'
import healthCheck from '../images/selenium_logo.png'

function AboutMe() {
    return (
        <div id="main">
            {/* Posts */}
            <section>
                <article>
                    <h2>Robert Moore</h2>
                    <span className="email"><h2>robert@robertryanmoore.co.za</h2></span>

                    <h3>Who I am</h3>
                    <p>
                        I am a young programmer with a passion for learning and a
                        determination to write good meaningful code that will make a
                        difference in the workplace. I am open-minded to learning and
                        trying new techniques and technologies. Basically, I just want to
                        build cool stuff. I have worked at 3 different companies on
                        enterprise projects and done a little bit of freelance work
                        developing desktop software. My experience is mostly in Java and
                        C# though I have done some web automation and I consider myself
                        language agnostic as I am willing to work with any language and am
                        always grateful for the chance to pick up a new one.
                    </p>

                    <h3>Interests Outside Of Work</h3>
                    <p>
                        My interests cover quite a broad range, from a general interest in
                        technology to dramatic arts. I have a strong interest in
                        computers, building them and how they work. I also game very
                        casually. I volunteer as a sound engineer at my church. I am a
                        Children's Ministry leader as well and that often overlaps with my
                        sound engineering. I've dabbled in some video editing but that was
                        a while ago. I am extremely interested in cars. During my high
                        school years I did extracurricular drama lessons and loved every
                        moment. I haven't been on a stage for a while but those skills are
                        transferable hence I am not scared of things like giving
                        presentations. What's the difference between 4 people and 40
                        people anyway?
                    </p>
                </article>
            </section>
            <h2>My Projects</h2>
            <section className="posts">
                <article>
                    <header>
                        <h2 className="featuredProjectHeading">This Website</h2>
                    </header>
                    <img src={thisSite} alt="" className="image fit" />
                    <p className="featuredProjectDescription">
                        This portfolio website was built using ReactJS. And yes, I mostly stole the CSS from online and just changed the colours and few small things.
                    </p>
                    <ul className="actions special"><li><a class="button" href="https://github.com/robertryanmoore/robertryanmoore" target='_blank'>Source Code</a></li></ul>
                </article>
                <article>
                    <header>
                        <h2 className="featuredProjectHeading">FILE MERGER</h2>
                    </header>
                    <img src={fileMerger} alt="" className="image fit" />
                    <p className="featuredProjectDescription">
                        During my time at Old Mutual I noticed a need for CSV files to frequently be merged 
                        and that this was causing the team a lot of frustration so I took it upon myself to 
                        develop a tool to deal with that issue. Please click the link for more 
                        details and the source code.
                    </p>
                    <ul className="actions special"><li><a class="button" href="https://github.com/robertryanmoore/FileMerger" target='_blank'>Source Code</a></li></ul>
                </article>
                <article>
                    <header>
                        <h2 className="featuredProjectHeading">Aunty Ann's Home Bakes</h2>
                    </header>
                    <img src={ann} alt="" className="image fit" />
                    <p className="featuredProjectDescription">
                        My mother runs a small business selling cookies and such.  This a cute little website I made for her. It's hosted on my Oracle Cloud. 
                    </p>
                    <ul className="actions special"><li><a class="button" href="https://auntyannshomebakes.co.za/" target='_blank'>Buy Some Cookies</a></li></ul>
                </article>
                <article>
                    <header>
                        <h2 className="featuredProjectHeading">HEALTH CHECK</h2>
                    </header>
                    <img src={healthCheck} alt="" className="image fit" />
                    <p className="featuredProjectDescription">
                    One of my tasks at Old Mutual was to perform QA health checks 3 times a day. This got boring after about 2 days. I automated the task using Selenium Web Driver. The program automatically runs at the set times and checks that the system is up and if not, reports at which point it fails. The source code is available but for security reasons, links and user login information have been removed. Thus the program cannot run.
                    </p>
                    <ul className="actions special"><li><a class="button" href="https://github.com/robertryanmoore/HealthCheck" target='_blank'>Source Code</a></li></ul>
                </article>
            </section>
        </div>
    );
}

export default AboutMe;
