import stanImg from '../assets/stan.png';

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
                            <div className="box"><p><span>IT</span></p></div>
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
                                
                                <div className="heading-container">
                                    <p className="text">Hello.</p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="CARD">
                        <img src={stanImg} alt="stan" />
                    </div>
            </div>

            <div className="divider"></div>
            <section>
                section

                

            </section>


        </main>

    </>);
}