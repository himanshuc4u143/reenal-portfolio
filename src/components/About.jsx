import React from 'react';
import girlImg from '../images/beautiful-european-woman-portrait-worth-office-background-smiling-beauty-fashion-style-curly-hair-white-strands-view-134460672.webp';
import './about.css'

function About() {
  return (
    <div className="container text-center" id='about'>
      <div className="row justify-content-center" style={{paddingTop: '100px'}}>
        <div className="col-md-5 mb-3">
          <div className="myCol bg-transparent" style={{height: '600px', width: '500px'}}>
            {/* <img src={girlImg} alt="Girl" className="img-fluid" style={{height: '600px', width: '500px'}} /> */}
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="myCol1">
            <h6 className="gradient-text">Read About Me</h6>
            <h2>About Me</h2>
            <p>
            Experienced technologist with a strong background in software development and data science, adept at crafting chatbots and virtual assistants, with a proven track record of quickly adapting to emerging technologies and translating business requirements into technical solutions. Motivated team player with excellent interpersonal skills, dedicated to collaborating effectively to achieve optimal outcomes while applying advanced data science techniques to address complex business and engineering challenges.
            </p>
            <table className="table table-transparent">
              <tbody>
                <tr>
                  <td style={{ backgroundColor: 'transparent' }}>
                    <h3>Educational Skill</h3>
                    {/* <p>Lorem ipsum dolor sit <br />amet, onecis et mollis.</p> */}
                    <ul>
                      <li>M.TECH (Industrial Mathematics with Computer
Applications), Pune University, India, 2011.
                      </li>
                      <li>
                      B.Sc. (Electronics), Pune University, India, 2008. 
                      </li>
                    </ul>
                  </td>
                  <td style={{ padding: '2%', backgroundColor: 'transparent' }}>
                    <h3>CERTIFICATE COURSES</h3>
                    {/* <p>Sed ut perspiciatis unde <br />omnis iste natus error.</p> */}
                    <ul>
                      <li>
                        <a href="https://ineuron.ai/" target="_blank" rel="noopener noreferrer">Deep Learning Master</a>
                      </li>
                      <li>
                        <a href="https://ineuron.ai/" target="_blank" rel="noopener noreferrer">Stats For Data Science</a>
                      </li>
                      <li>
                        <a href="http://cdac.in/index.aspx" target="_blank" rel="noopener noreferrer">DAC (Diploma in Advance Computing) from C-DAC,
Pune, India</a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: 'transparent' }}>
                    <h3>Soft Skills</h3>
                    <p>Analytical thinking, problem-solving, teamwork,
effective communication and collaborating with cross-functional teams.</p>
                  </td>
                  <td style={{ padding: '2%', backgroundColor: 'transparent' }}>
                    <h3>My Quality</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos.</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
