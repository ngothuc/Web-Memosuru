import './App.css'

export default function App() {
  return (
    <div className="container">
      <div className="menu">
        <div className="menu-item">HOME</div>
        <div className="menu-item">Reports</div>
        <div className="menu-item">Product</div>
      </div>

      <div className='content'>
        <p>
        Computer science is the study of computation, information, and automation.[1][2][3] Computer science spans theoretical disciplines (such as algorithms, theory of computation, and information theory) to applied disciplines (including the design and implementation of hardware and software).[4][5][6] Though more often considered an academic discipline, computer science is closely related to computer programming.[7]
        </p>
        <p>
        Algorithms and data structures are central to computer science.[8] The theory of computation concerns abstract models of computation and general classes of problems that can be solved using them. The fields of cryptography and computer security involve studying the means for secure communication and for preventing security vulnerabilities. Computer graphics and computational geometry address the generation of images. Programming language theory considers different ways to describe computational processes, and database theory concerns the management of repositories of data. Human–computer interaction investigates the interfaces through which humans and computers interact, and software engineering focuses on the design and principles behind developing software. Areas such as operating systems, networks and embedded systems investigate the principles and design behind complex systems. Computer architecture describes the construction of computer components and computer-operated equipment. Artificial intelligence and machine learning aim to synthesize goal-orientated processes such as problem-solving, decision-making, environmental adaptation, planning and learning found in humans and animals. Within artificial intelligence, computer vision aims to understand and process image and video data, while natural language processing aims to understand and process textual and linguistic data.
        </p>
      </div>

      <div className='advertisement'>
        <div className='advertisement-item'>Adv. 1</div>
        <div className='advertisement-item'>Adv. 2</div>
        <div className='advertisement-item'>Adv. 3</div>
      </div>
    </div>
  )
}