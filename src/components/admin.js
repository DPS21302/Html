import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import handleDarkMode from "./Darkmode";

const Admin = () => {
  useEffect(() => {
    handleDarkMode();
  }, []);

  // Sample data
  const semesters = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5'];
  const subjectsBySemester = {
    'Sem 1': [
        'Fundamental Of Programming', 
        'Engineering Mathematics – 1', 
        'Elements Of Civil Engineering', 
        'Engineering Graphics', 
        'Engineering Physics', 
        'Enviromental Science'
    ],
    'Sem 2': [
        "Object Oriented Programming Using 'C++'", 
        'Engineering Mathematics – 2', 
        'Basic Electrical and Electronics Engineering', 
        'Fundamental Of Mechanical Engineering', 
        'Business communication and presentation skills', 
        'Workshop [Only Labs]', 
        'Introduction To Information & Communication Technology'
    ],
    'Sem 3': [
        'Data Structures & Algorithms', 
        'Discrete Mathematics - 3', 
        'Database Management Systems', 
        'Digital Electronics', 
        'IT Workshop'
    ],
    'Sem 4': [
        'Object Oriented Programming Using Java', 
        'Probability, Statistics and Numerical Methods', 
        'Operating Systems', 
        'Computer Organization & Architecture', 
        'Principles of Management'
    ],
    'Sem 5': [
        'Advanced Java Programming', 
        'Python', 
        'Design & Analysis of Algorithms/Fundamentals of Algorithms', 
        'Software Engineering', 
        'Theory of Computation/Formal Language and Automata Theory', 
        'Computer Networks/Data Communication and Networking', 
        'Microprocessor Architecture and Programming', 
        'Service Oriented Architecture'
    ]
  };

  const unitsBySubjects = {
    //Semester 1
    'Fundamental Of Programming': [
    'Introduction to computer', 'Introduction to Programming', 
    'Fundamentals of ‘C’', 
    'Control Structures in ‘C’', 
    'Array & String', 'Functions', 'Structure and Union, Pointers, File Management'],
    'Engineering Mathematics – 1': [
        'Differential Calculus', 
        'Partial differentiation and its applications', 
        'Curve Tracing', 
        'Beta & Gamma function', 
        'Integral Calculus', 
        'Multiple Integrals and its applications', 
        'Infinite Series'
    ],
    'Elements Of Civil Engineering': [
        'Introduction and Scope of Civil Engineering',
        'Surveying',
        'Linear measurements',
        'Angular Measurements',
        'Elevation measurements','Modern Tools of Surveying and Mapping',
        'Construction Materials',
        'Elements of Building Construction',
        'Water Resources Development',
        'Transportation Engineering'
    ],
    'Engineering Graphics': [
        'Introduction',
        'Scales',
        'Engineering Curves',
        'Loci of Points',
        'Projections of Points & Lines',
        'Projections of Planes',
        'Projections of Solids',
        'Section of Solids',
        'Development of Lateral Surfaces',
        'Orthographic Projections',
        'Isometric Projections and Isometric View or Drawing',
        'Machine Drawing'
    ],
    'Engineering Physics': [
        'Ultrasonics & Architectural Acoustic',
        'Elasticity',
        'Laser',
        'Fibre Optics',
        'Optoelectronic devices',
        'Artificial Radioactivity',
        'Crystal Structure And X-rays Diffraction',
        'Instrumentation',
        'Band Theory Of Solids',
        'Nanomaterials And NDT'
    ],
    'Environmental Science': [
        'Introduction to environment, Ecology and Ecosystem',
        'Ecology & Ecosystem',
        'Population & Natural Resources',
        'Environmental Pollution',
        'Social Issues'
    ],
    //Semester 2
    "Object Oriented Programming Using 'C++'": [
        'Elaborated understanding of Essentials C Programming', 
        'Fundamental Concepts of OOP with C++', 
        'C++ Programming Syntactical Basics', 
        'C++ Functions', 
        'Objects and Class', 
        'Operator Overloading', 
        'Inheritance', 
        'Polymorphism & Virtual Functions', 
        'Templates and Exception Handling', 
        'Introduction to Streams and Files'
    ],
    'Engineering Mathematics – 2': [
        'Matrix Theory and Application of Matrices', 
        'Eigen value and Eigenvector and Applications', 
        'Vectors in R^n', 
        'Vector Space', 
        'Linear Transformation', 
        'Vector differential Calculus', 
        'Vector Integral Calculus'
    ],
    'Basic Electrical and Electronics Engineering': [
        'An Introduction to D.C. Circuits', 
        'Work, Power and energy', 
        'Electrostatics & Capacitance', 
        'Electromagnetic', 
        'AC Fundamentals', 
        'Analysis of A.C. Circuit', 
        'Polyphase Circuits', 
        'Basics of Electronics'
    ],
    'Fundamental Of Mechanical Engineering': [
        'Introduction', 
        'Properties of Gases', 
        'Heat Engines', 
        'Properties of Steam', 
        'Steam and Steam Generator', 
        'Refrigeration and Air conditioning', 
        'I.C. Engine', 'Air Compressor', 
        'Speed Control', 
        'Fuels and Combustion', 
        'Power Transmission Methods and Devices', 
        'Pump', 
        'Engineering Materials', 'Mechanical Working of Metals and Press Operations', 
        'Heat Transfer & Turbines'
    ],
    'Business communication and presentation skills': [
        'Soon', 
        'Soon', 
        'Soon'
    ],
    'Workshop': [
        'Soon...', 
        'Soon...', 
        'Soon...'
    ],
    'Introduction To Information & Communication Technology': [
        'All Units'
    ],
    //Semester 3
    'Database Management Systems': [
        'Database system architecture',
        'Data models', 
        'Relational query languages', 
        'Relational database design', 
        'Query processing and optimization', 
        'Storage strategies', 
        'Transaction processing', 
        'Database Security', 
        'Advanced topics'
    ],
    'Data Structures & Algorithms': [
        'Introduction', 
        'Linear Data Structures', 
        'Nonlinear Data Structures', 
        'Sorting and searching', 
        'Hashing', 
        'File Structures'
    ],
    'Discrete Mathematics - 3': [
        'Set, Relation & Function', 
        'Lattices', 
        'Propositional Logic', 
        'Algebraic Structures and Morphism', 
        'Graphs and Trees'
    ],
    'Digital Electronics': [
        'Number Systems and Codes', 
        'Boolean Algebra and Logic Gates', 
        'Combinational Logic Circuit', 
        'Flip Flops and Sequential Logic and Circuits', 
        'Introduction to State Machines', 
        'Programmable Logic Devices', 
        'D/A and A/D Converters'
    ],
    'IT Workshop': [
        'Introduction to WWW', 
        'Introduction to HTML', 
        'CSS', 
        'JavaScript', 
        'XML and Ajax', 
        'PHP', 
        'SciLab'
    ],
    //Semester 4
    'Object Oriented Programming Using Java': [
        'Introduction to Java', 
        'Objects and Classes', 
        'Inheritance and Polymorphism', 
        'Collection Interface and classes', 
        'Exception Handling in Java', 
        'Multithreading in java', 
        'I/O programming', 
        'Event and GUI programming'
    ],
    'Probability, Statistics and Numerical Methods': [
        'Probability Axioms', 
        'Discrete Random Variables', 
        'Continuous Random Variables', 
        'Correlation and Regression', 
        'Interpolation', 
        'Numerical Integration', 
        'Solution of non-linear and Linear equation'
    ],
    'Operating Systems': [
        'Introduction', 
        'Process', 
        'Inter-process Communication', 
        'Deadlock', 
        'Memory Management', 
        'I/O Hardware'
    ],
    'Computer Organization & Architecture': [
        'Overview of Register Transfer And Micro-operations', 
        'Basic Computer Organization And Design', 
        'Programming the Basic Computer', 
        'Central Processing Unit', 
        'Pipeline Processing', 
        'Memory Organization'
    ],
    'Principles of Management': ['Soon...', 
    'Soon...', 
    'Soon...', 
    'Soon...', 
    'Soon...'
    ],
    //Semester 5
    'Advanced Java Programming': [
        'Swing', 
        'JDBC', 
        'Java Networking and J2EE', 
        'Servlets, Event Listeners and Filters', 
        'Java Server Pages and JSTL', 
        'Hibernet 4.0', 
        'Spring MVC'
    ],
    'Computer Networks': [
        'Overview of Networks and Data Communications',
        'Physical layer',
        'Data Link layer',
        'Medium Access control sub layer',
        'Network layer',
        'Transport layer',
        'Application layer'
      ],
      'Design & Analysis of Algorithms': [
        'Basics of Algorithms & Mathematics',
        'Analysis of Algorithms',
        'Divide and conquer algorithms',
        'Greedy algorithms',
        'Dynamic programming',
        'Graph Algorithms',
        'Backtracking and Branch and Bound',
        'Introduction to Complexity Theory',
      ],
      'Microprocessor Architecture and Programming': [
        'Introduction of 8085/80x86/8088',
        'Programming of 8085/8086',
        'Interrupts and Interrupt processing',
        'Memories',
        'Interfacing peripherals and applications',
        'Intel microprocessors',
        'ARM Processor',
      ],
      'Software Engineering': [
        'Software and Software Engineering',
        'Software Process Model',
        'Software Requirement Analysis and Specification',
        'Software Design',
        'Coding',
        'Software Testing Strategies',
        'Estimation',
        'Risk Management',
        'Quality Management',
        'Current trends in Software Engineering',
      ],
      'Theory of Computation': [
        'Introduction',
        'Regular Languages',
        'Finite Automata',
        'Context-Free Languages',
        'Pushdown Automata',
        'Pumping Lemma',
        'Context-Sensitive Languages',
        'Turing Machines',
      ],
  };

  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');

  const handleSemesterChange = (e) => {
    const selectedSemester = e.target.value;
    setSelectedSemester(selectedSemester);
    setSelectedSubject('');
    setSelectedUnit('');
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setSelectedUnit('');
  };

  const handleUnitChange = (e) => {
    setSelectedUnit(e.target.value);
  };
    // State to hold the link input value
    const [linkInput, setLinkInput] = useState('');

    // Function to handle changes in the link input field
    const handleLinkInputChange = (event) => {
        setLinkInput(event.target.value);
    };

  return (
    <>
      {/* Your existing form code */}
      <Header />
      <Sidebar />

      <section className="form-container">
        <form action="" method="post" enctype="multipart/form-data">
          <h3>Register Now</h3>
          {/* Your other form fields */}
          {/* ... */}
          <p>Code <span>*</span> </p>
          <input type="text" placeholder="Enter Code" required className="box" />
          <p>Semester <span>*</span></p>
          <select name="semester" placeholder="Select your semester" required maxLength="20" className="box" onChange={handleSemesterChange} value={selectedSemester}>
            <option value="">Select Semester</option>
            {semesters.map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
          {/* Always show the Subject field, but only show options if a semester is selected */}
          <div>
            <p>Subject <span>*</span></p>
            <select name="subject" placeholder="Select your subject" required maxLength="20" className="box" onChange={handleSubjectChange} value={selectedSubject}>
              <option value="">Select Subject</option>
              {selectedSemester && subjectsBySemester[selectedSemester].map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
          {/* Always show the Unit field, but only show options if a subject is selected */}
          <div>
            <p>Unit <span>*</span></p>
            <select name="unit" placeholder="Select your unit" required maxLength="20" className="box" onChange={handleUnitChange} value={selectedUnit}>
              <option value="">Select Unit</option>
              {selectedSubject && unitsBySubjects[selectedSubject].map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
          {/* Your other form fields */}
          {/* ... */}
          <p>Link <span>*</span> </p>
          <input
                type="url"
                placeholder="Enter link"
                className="box"
                value={linkInput}
                onChange={handleLinkInputChange}
                required
            />
          <Link to="/OTP"><input type="submit" value="register new" name="submit" className="btn" /></Link>
          <p>Already have an account? </p>
          <Link to='/login'> <a className="btn">Login</a> </Link>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Admin;
