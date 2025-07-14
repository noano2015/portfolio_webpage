import "./Projects.css";
import c_logo from "../assets/images/c_logo.jpg";
import cpp_logo from "../assets/images/cpp_logo.png";
import pytorch_logo from "../assets/images/pytorch.logo.jpg";
import java_logo from "../assets/images/java_logo.png";


function Projects(){

    return(
        <div className="Projects" id="Projects">
            <h2>Projects</h2>
            <article className="ProjectsGrid">
                <section className="ProjectCard" id="Java">
                    <img src={java_logo} alt="java logo" width={75} height={75}/>
                    <p>This project is a Minesweeper game developed in Java using the Swing framework for the graphical user interface. It features an interactive grid where players uncover cells to locate hidden mines based on numerical clues representing adjacent mines. The game supports essential functionalities like cell revealing, flagging suspected mines, and automatic expansion of safe areas.

                    Leveraging Java Swing, the game provides a responsive and visually intuitive interface, including menus, dialogs, and real-time updates. This project highlights key Java programming concepts such as event-driven design, GUI development, and game logic implementation, offering an engaging puzzle experience for users of varying skill levels.</p>
                </section>
                <section className="ProjectCard" id="C">
                    <img src={c_logo} alt="c logo" width={75} height={75}/>
                    <p>This project implements a multithreaded Key-Value Store (KVS) system in C, designed for efficient and concurrent data storage and retrieval. It leverages multithreading to handle multiple client requests simultaneously, improving throughput and responsiveness. Inter-process communication is achieved using FIFOs (named pipes) and pipes, enabling seamless data exchange between different processes or threads.

                    Key features include:

                        Thread-safe operations to prevent data races and ensure consistency.

                        Use of FIFOs and pipes to implement client-server communication in a concurrent environment.

                        Low-level memory management for optimized performance.

                        Modular design following C programming best practices.

                    This system demonstrates the effective combination of IPC mechanisms and concurrency in C for building high-performance storage solutions.</p>
                </section>
                <section className="ProjectCard" id="PyTorch">
                    <img src={pytorch_logo} alt="pytorch logo" width={75} height={75}/>
                    <p>This project implements a deep learning model using PyTorch to detect cracks in concrete walls from images. The model leverages convolutional neural networks (CNNs) to automatically identify and localize cracks, enabling early structural damage detection and maintenance planning. Trained on labeled datasets, it achieves high accuracy in distinguishing crack patterns from normal concrete textures. The system aims to assist civil engineers and inspectors by providing an efficient, automated tool for monitoring infrastructure integrity.</p>
                </section>
                <section className="ProjectCard" id="Cpp">
                    <img src={cpp_logo} alt="cpp logo" width={75} height={75}/>
                    <p>This project focuses on solving complex algorithmic problems in C++, with a strong emphasis on dynamic programming, graph algorithms, and linear programming techniques. It features implementations of advanced data structures and algorithms such as shortest paths, network flows, memoization, and optimization methods. The project aims to develop efficient, scalable solutions for computational problems, enhance algorithmic expertise, and prepare for competitive programming and real-world applications in optimization and decision-making.</p>
                </section>
            </article>
        </div>
    );
}

export default Projects;