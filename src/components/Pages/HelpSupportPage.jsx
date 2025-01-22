import Footer from "../footer";
import Header from "../header";
import "../Styles/Help-Support-Page.css";

function Support() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="faqs">
          <div className="intro">
            <h2>FAQs</h2>
            <p>
              Everything you need to know about the services provided. Can't
              find an answer to a question you're looking for?{" "}
              <a href="#mail" className="send-us">
                Send an email
              </a>{" "}
              of your query and receive the response as soon as possible.
            </p>
          </div>
          <div className="main-faqs">
            <h2>Top 5 FAQs</h2>
            <div className="question-tab">
              <input type="checkbox" name="acc" id="acc1" />
              <label htmlFor="acc1">
                <h2>01</h2>
                <h2>Question 1</h2>
              </label>
              <div className="answers">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis enim fugit quidem suscipit voluptatum aliquid, nam
                  quibusdam rerum obcaecati dolore rem quo, in vel iste veniam
                  cum, pariatur nulla quis.
                </p>
              </div>
            </div>

            <div className="question-tab">
              <input type="checkbox" name="acc" id="acc2" />
              <label htmlFor="acc2">
                <h2>02</h2>
                <h2>Question 2</h2>
              </label>
              <div className="answers">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis enim fugit quidem suscipit voluptatum aliquid, nam
                  quibusdam rerum obcaecati dolore rem quo, in vel iste veniam
                  cum, pariatur nulla quis.
                </p>
              </div>
            </div>

            <div className="question-tab">
              <input type="checkbox" name="acc" id="acc3" />
              <label htmlFor="acc3">
                <h2>03</h2>
                <h2>Question 3</h2>
              </label>
              <div className="answers">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis enim fugit quidem suscipit voluptatum aliquid, nam
                  quibusdam rerum obcaecati dolore rem quo, in vel iste veniam
                  cum, pariatur nulla quis.
                </p>{" "}
              </div>
            </div>

            <div className="question-tab">
              <input type="checkbox" name="acc" id="acc4" />
              <label htmlFor="acc4">
                <h2>04</h2>
                <h2>Question 4</h2>
              </label>
              <div className="answers">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis enim fugit quidem suscipit voluptatum aliquid, nam
                  quibusdam rerum obcaecati dolore rem quo, in vel iste veniam
                  cum, pariatur nulla quis.
                </p>{" "}
              </div>
            </div>

            <div className="question-tab">
              <input type="checkbox" name="acc" id="acc5" />
              <label htmlFor="acc5">
                <h2>05</h2>
                <h2>Question 5</h2>
              </label>
              <div className="answers">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis enim fugit quidem suscipit voluptatum aliquid, nam
                  quibusdam rerum obcaecati dolore rem quo, in vel iste veniam
                  cum, pariatur nulla quis.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="mail-us" id="mail">
          <div className="support-form">
            <h2>Support Query Form</h2>
            <form>
              <p>
                <input type="text" required placeholder="Name" />
                <input type="email" required placeholder="Email" />
                <input type="tel" required placeholder="Phone" />
              </p>
              <p>
                <input type="text" required placeholder="Subject" />
                <input type="file" />
              </p>
              <textarea rows={15} cols={50} placeholder="Message" />
              <button>Submit Query</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Support;
