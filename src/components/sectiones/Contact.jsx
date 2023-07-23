import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ipjc1nl",
        "template_4z1ffkt",
        form.current,
        "81qxM9MDWIQLk3tSO"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="uppercase font-bold text-4xl ml-3 lg:ml-0">
        Contact With Me Throughout
      </h1>
      <div className="border border-b-2 border-sky-500 w-[216px] ml-3 lg:ml-0"></div>
      <div className="my-5 mx-4 lg:mx-0">
        <p>
          <span className="text-sky-500">Phone Or Whats App: </span>
          +8801846835641
        </p>
        <p>
          <span className="text-sky-500">Email: </span>
          kamrulhasanjaman79@gmail.com
        </p>
        <p>
          <span className="text-sky-500">LinkedIn: </span>
          <span>
            <a href="https://www.linkedin.com/in/kamrul-hasan-jaman-10168b278/">
              {" "}
              www.linkedin.com/in/kamrul-hasan-jaman
            </a>
          </span>
        </p>
      </div>

      {/* send me email with you message */}
      <h1 className="uppercase font-bold text-4xl ml-3 lg:ml-0">
        Send Me An Email{" "}
      </h1>
      <div className="border border-b-2 border-sky-500 w-[216px] ml-3 lg:ml-0"></div>
      <div className="my-4 mx-4 lg:mx-0" data-aos="flip-up" data-aos-duration="1000">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="your name"
              className="input input-bordered input-info w-[75%] lg:w-full focus:border-0  "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="your email"
              className="input input-bordered input-info w-[75%] lg:w-full focus:border-0  "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
            name="message"
            placeholder="write your valuable message here"
            className="textarea textarea-info focus:border-0 w-[75%] lg:w-full "
          />
          </div>
          <input type="submit" value="Send Email" className="btn btn-info mt-3 focus:border-0"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
