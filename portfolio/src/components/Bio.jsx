import './Bio.css';
import profile_pic from '../assets/images/profile_pic.jpg';

function Bio(){

    return(
        <div className='Bio' id='About Me'>
            <h2>About Me</h2>
                <div className='container'>
                    <article className='Information'>

                        <section className='BioField'>
                            <h3>Name: </h3>
                            <p>Pedro Vicente</p>
                        </section>
                        <section className='BioField'>
                            <h3>Telephone Number: </h3>
                            <p>*********</p>
                        </section>
                        <section className='BioField'>
                            <h3>E-mail: </h3>
                            <p>******@email.com</p>
                        </section>
                        <section className='BioField'>
                            <p>Hey, I'm Pedro Vicente
                            <br/>
                            <br/>
                            I love building things, solving real problems, and diving deep into how stuff works. I'm driven by curiosity and the challenge of turning ideas into something useful, meaningful, or just plain cool.
                            <br/>
                            <br/>
                            Tech is my playground. Whether I'm coding, experimenting with new tools, or bringing a concept to life, I'm always looking for that spark — the moment when something clicks. I care about creating things that not only work, but make a difference.
                            <br/>
                            <br/>
                            I believe learning never really stops, and the best projects are the ones that push you to grow. I'm here to stay inspired, keep improving, and hopefully inspire a few others along the way.
                            </p>
                        </section>
                    </article>
                    <article className='Picture'>
                        <img src={profile_pic} alt="A picture of me" width={400} height={400}/>
                    </article>
                </div>
        </div>
    );
}

export default Bio;