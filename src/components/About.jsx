import React from 'react';
import './about.css'
import girlImg from './images/beautiful-european-woman-portrait-worth-office-background-smiling-beauty-fashion-style-curly-hair-white-strands-view-134460672.webp'

function About() {
  return (
    <div className="container text-center">
      <div className="row aboutMe-container">
        <div className="col myCol" style={{ backgroundImage: `url(${girlImg})` }}>
        {/* <img src={girlImg} alt="" /> */}
        
        </div>
        <div className="col myCol1">
            <div>
                <h6 className='gradient-text'>Read About Me</h6>
                <h2>My About</h2>
                <p>
                    There are many variations of passages of Lorem Ipsum available, <br/>but the majority have suffered alteration in some form, <br/>by injected humour, or randomised words which dont look even slightly <br/>believable. If you are going to use a passage.
                </p>
                <table>
                    <tr>
                        <td>
                            <h3>Educational Skill</h3>
                            <p>Lorem ipsum dolor sit <br />amet, onecis et mollis.</p>
                        </td>
                        <td style={{padding: '2%'}}>
                            <h3>My Strategy</h3>
                            <p>Sed ut perspiciatis unde <br />omnis iste natus error.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>Development Skill</h3>
                            <p>But I must explain to <br/>you how all this mistaken.</p>
                        </td>
                        <td style={{padding: '2%'}}>
                            <h3>My Quality</h3>
                            <p>At vero eos et accusamus et iusto odio dignissimos.</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default About;
