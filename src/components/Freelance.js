function Freelance() {
    return (
        <div id="main">
            <section>
                <article className="post featured">
                    <h2>Robert Moore</h2>
                    <span className="email"><h2>robert@robertryanmoore.co.za</h2></span>

                    <h3>FREELANCE SERVICES</h3>
                    <br></br>
                    <p>
                        <b>
                            Websites, Android Apps, Desktop Software<br />
                            R250 per hour<br />
                            Does not include hosting or management fees<br />
                        </b>
                        Hosting and management/maintenance fees are not included as those are
                        likely to differ on a per project basis and will be influenced by any
                        pre-existing systems or hosting you may have.<br />
                        Some of my previous work.
                        <ul>
                            <li><a href="https://auntyannshomebakes.co.za/" target="_blank">Aunty Ann's Home Bakes - A home business website for custom cookies.</a></li>
                            <li><a href="https://quaiderumble.co.za/" target="_blank">Quaide Rumble - A portfolio website for a young journalist.</a></li>
                            <li><a href="https://hbc.robertryanmoore.co.za/" target="_blank">Holiday Bible Club Registration 2023 - Mirror of a custom registration site for a church event.</a></li>
                        </ul>
                    </p>
                    <p>
                        <b>
                            HDD To SSD Upgrades<br />
                            Price dependent on capacity<br />
                            Expected Timeframe 2-3 Business days<br />
                        </b>
                        Mechanical Hard Disk Drives are often the thing holding back otherwise powerful
                        computers and laptop. Upgrading to a Solid State Drive is the fast way to breathe
                        new life into a machine that has become a bit sluggish. SSDs better performing,
                        lighter, and less delicate than HDDs. Other capacities and M.2/Msata drives are
                        available on custom quote basis.
                    </p>
                </article>
                <hr></hr>
                <h3>Contact Me</h3>
                <form id="userform">
                    <label for="name">Name: </label>
                    <input type="text" name="name" />
                    <label for="email">Email: </label>
                    <input type="text" name="email" />
                    <label for="subject">subject: </label>
                    <input type="text" name="subject" />
                </form>
                <label for="message">Message: </label>
                <textarea name="message" form="userform"></textarea>
                <br></br>
                <p id="response"></p>
                <button id="submitbutton" type="button" value="Submit" onClick={() => {
                    sendMail();
                }}>Submit</button>
            </section>
        </div>
    );
}

function sendMail(){
    var formData = {
        'name' : document.querySelector('[name=name]').value,
        'email' : document.querySelector('[name=email]').value,
        'subject' : document.querySelector('[name=subject]').value,
        'message' : document.querySelector('[name=message]').value
    }

    fetch('https://api.robertryanmoore.co.za:8080/api/email', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
        name : document.querySelector('[name=name]').value,
        email : document.querySelector('[name=email]').value,
        subject : document.querySelector('[name=subject]').value,
        body : document.querySelector('[name=message]').value
  })
})

    

}

export default Freelance;