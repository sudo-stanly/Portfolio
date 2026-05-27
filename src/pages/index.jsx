import stanImg from '../assets/stan.png';
import dividerImg from '../assets/polygon-background.jpg';

export default function IndexPage(){
    return(<>
    
        

       
{/* 
        <div className="img1">
            <div className="heading">Fixed</div>
        </div>

        <section>
            Fixed Background Website

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempora nihil mollitia ex dolores maiores culpa excepturi quam laborum ipsam, facilis iure tempore dicta repellat obcaecati quaerat. Fugit, quas recusandae?
            </p>
        </section>

        <div className="img2">
            <div className="heading">Fixed</div>
        </div>

        <section>
            Fixed Background Website

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempora nihil mollitia ex dolores maiores culpa excepturi quam laborum ipsam, facilis iure tempore dicta repellat obcaecati quaerat. Fugit, quas recusandae?
            </p>
        </section>

        <div className="img3">
            <div className="heading">Fixed</div>
        </div>
        */}

        

        <main>
            <div className="hero">
                    <div className="BOX">

                        <div className="card">
                            <div className="box"><p><span>STAN</span></p></div>
                            <div className="box">
                                <div className="slider"></div>
                            </div>
                            <div className="box"><p><span>2026</span></p></div>
                        </div>

                        <div className="card">
                           
                            <div className="card-content">

                                <div className="COUNTER">
                                    <div className="COUNTER-CONTENT">
                                        <p><span className="count-symbol">+</span></p>
                                    </div>
                                    <div className="COUNTER-CONTENT">
                                        <p><span className="count-heading">0</span></p>
                                        <p><span className="count-subtext">Projects Completed</span></p>
                                    </div>
                                </div>
                                <div className="COUNTER">
                                    <div className="COUNTER-CONTENT">
                                        <p><span className="count-symbol">+</span></p>
                                    </div>
                                    <div className="COUNTER-CONTENT">
                                        <p><span className="count-heading">0</span></p>
                                        <p><span className="count-subtext">Certificates</span></p>
                                    </div>
                                </div>

                            </div>

                            <div className="card-content">
                                
                                <div className="heading-container content-container">
                                    <p className="text">Hello.</p>
                                </div>
                                

                                <div className="subtext-container content-container">
                                    <p>
                                        <span>
                                            I’m Stanley Alerta a Programmer & Backend Developer from Albay, Legazpi City. Alongside 
                                            building robust server-side applications, I have a strong interest in Linux, networking, 
                                            and security. Outside of tech, I’m into sports, working out,and value 
                                            spending time with myself to recharge always balancing hands-on project 
                                            development with a focused, active lifestyle.
                                        </span>
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="CARD">
                        <img src={stanImg} alt="stan" />
                    </div>
            </div>

            <div className="divider-1">
                <div className="heading">
                    Technical Skills
                </div>
            </div>
            <section>
                content

            </section>

            <div className="divider-2">
                <div className="heading">
                    Projects
                </div>
            </div>
            <section>
                content

            </section>

            <div className="divider-3">
                <div className="heading">
                    Events
                </div>
            </div>
            <section>
                content

            </section>

            <div className="divider-4">
                <div className="heading">
                    Certificates
                </div>
            </div>
            <section>
                content

            </section>


        </main>

    </>);
}