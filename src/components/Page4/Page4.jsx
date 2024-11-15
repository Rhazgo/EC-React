import React, { useState, useEffect } from "react";
import whitearrowup from "../../assets/White arrow up.svg";
import extendarrow from "../../assets/Extend arrow.svg";
import phoneicon from "../../assets/phoneicon.svg";
import bluearrow from "../../assets/bluearrow.svg";
import greenarrow from "../../assets/greenarrow.svg";
import messageicon from "../../assets/messageicon.svg";

export const Page4 = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);


  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("https://win24-assignment.azurewebsites.net/api/faq");
        if (!response.ok) {
          throw new Error("Failed to fetch FAQ data");
        }
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page" id="page4">
      <div className="FAQ">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-grid-cell">
              <div className="questions-introduction">
                <h2>Any questions? Check out the FAQs</h2>
                <p>Still have unanswered questions and need to get in touch?</p>
              </div>
            </div>
            <div className="faq-grid-cell">
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={faq.id} className={`question ${openIndex === index ? "open" : "closed"}`}>
                    <div className="faq-header" onClick={() => toggleQuestion(index)}>
                      <h3>{faq.title}</h3>
                      <div className="arrow-container">
                        <img
                          className="faq-buttons"
                          src={openIndex === index ? whitearrowup : extendarrow}
                          alt="Toggle FAQ"
                        />
                      </div>
                    </div>
                    {openIndex === index && (
                      <div className="answer">
                        <p>{faq.content}</p>
                      </div>
                    )}
                  </div>
                ))}
                <div className="contact">
                  <div className="btn-container">
                    <div className="contact-btn" type="button">
                      Contact us now
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-grid-cell">
              <div className="contact-tablet">
                <div className="contact-phone">
                  <img src={phoneicon} alt="Phone Icon" />
                  <h4 className="h4">Still have questions?</h4>
                  <div className="contact-us">
                    <a href="" className="contact-us-blue">
                      Contact us
                    </a>
                    <img src={bluearrow} alt="Blue arrow" />
                  </div>
                </div>
                <div className="contact-message">
                  <img src={messageicon} alt="Green message icon" />
                  <h4 className="h4">Don't like phone calls?</h4>
                  <div className="contact-us">
                    <a href="" className="contact-us-green">
                      Contact us
                    </a>
                    <img src={greenarrow} alt="Green arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
