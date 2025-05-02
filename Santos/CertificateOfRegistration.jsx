import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';

const CertificateOfRegistration = () => {
  const [studentInfo, setStudentInfo] = useState({
    studentNo: '234-04102M',
    name: 'SANTOS, JUSTINE ESTUESTA SANTOS',
    college: 'College of Computing Studies',
    program: 'Bachelor of Science in Information Technology',
    gender: 'Male',
    major: 'AI and Robotics',
    curriculum: '2018-2019',
    age: '19',
    yearLevel: 'Second Year-Regular',
    scholarship: 'UNIFAST-FHE',
    email: 'justinesantos102305@gmail.com',
    registrationNo: '2147483647',
    academicYear: 'Second Semester AY 2024-2025',
  });
  const [subjects, setSubjects] = useState([
    {
      code: 'GELEECCP',
      title: 'Communicative Proficiency in Business Correspondence and Research Writing',
      lec: '3',
      lab: '0',
      credit: '3',
      tuition: '3',
      section: 'BSINFOTEC H2A',
      schedule: 'W 07:00AM-10:00AM',
      faculty: 'Partido, Ranilo'
    },
    {
      code: 'WEBDVL2LB2',
      title: 'Web Development 2 (Laboratory)',
      lec: '0',
      lab: '2',
      credit: '1',
      tuition: '1',
      section: 'BSINFOTEC H2AETC',
      schedule: 'T 07:00AM-09:00AM',
      faculty: 'Sison, Edgardo'
    },
    {
      code: 'NETW1KLC1',
      title: 'Networking 1 (Lecture)',
      lec: '2',
      lab: '0',
      credit: '2',
      tuition: '2',
      section: 'BSINFOTEC H2AETC',
      schedule: 'M 01:00PM-03:00PM',
      faculty: 'Almazan, Edmund'
    },
    {
      code: 'NETW1KLB1',
      title: 'Networking 1 (Laboratory)',
      lec: '0',
      lab: '1',
      credit: '1',
      tuition: '1',
      section: 'BSINFOTEC H2A',
      schedule: 'T 11:00AM-02:00PM',
      faculty: 'San Jose, Dhani'
    },
    {
      code: 'IPATLEC1',
      title: 'Integrative Programming and Technologies 1 (Lecture)',
      lec: '2',
      lab: '0',
      credit: '2',
      tuition: '2',
      section: 'BSINFOTEC H2A',
      schedule: 'W 11:00AM-01:00PM',
      faculty: 'San Jose, Dhani'
    },
    {
      code: 'GESC1ETS',
      title: 'Science, Technology and Society',
      lec: '3',
      lab: '0',
      credit: '3',
      tuition: '3',
      section: 'BSINFOTEC H2A',
      schedule: 'F 06:00PM-09:00PM',
      faculty: 'Anuncio, Hazel'
    },
    {
      code: 'GEPPEHEF2',
      title: 'Physical Activity Towards Health and Fitness II',
      lec: '2',
      lab: '0',
      credit: '2',
      tuition: '2',
      section: 'BSINFOTEC H2A',
      schedule: 'T 03:00PM-05:00PM',
      faculty: 'Tolentino, Ferdinand'
    },
    {
      code: 'INTHCLIB',
      title: 'Introduction to Human Computer Interaction (Laboratory)',
      lec: '0',
      lab: '1',
      credit: '1',
      tuition: '1',
      section: 'BSINFOTEC H2A',
      schedule: 'W 05:00PM-06:00PM',
      faculty: 'Macasil, Ma. Jasmine Rose'
    },
    {
      code: 'IPATLAB1',
      title: 'Integrative Programming and Technologies 1 (Laboratory)',
      lec: '0',
      lab: '2',
      credit: '1',
      tuition: '1',
      section: 'BSINFOTEC H2A',
      schedule: 'W 02:00PM-03:00PM',
      faculty: 'San Jose, Dhani'
    },
    {
      code: 'DBMSLEC2',
      title: 'Database Management System 2 (Lecture)',
      lec: '2',
      lab: '0',
      credit: '2',
      tuition: '2',
      section: 'BSINFOTEC H2A',
      schedule: 'T 11:00AM-01:00PM',
      faculty: 'Carlos, Ernaine'
    },
    {
      code: 'INTHCL1C',
      title: 'Introduction to Human Computer Interaction (Lecture)',
      lec: '2',
      lab: '0',
      credit: '2',
      tuition: '2',
      section: 'BSINFOTEC H2A',
      schedule: 'M 04:00PM-06:00PM',
      faculty: 'Macasil, Ma. Jasmine Rose'
    },
    {
      code: 'DBMSLAB2',
      title: 'Database Management System 2 (Laboratory)',
      lec: '0',
      lab: '1',
      credit: '1',
      tuition: '1',
      section: 'BSINFOTEC H2A',
      schedule: 'M 06:00PM-09:00PM',
      faculty: 'Carlos, Ernaine'
    },
    {
      code: 'WEBDVL2LC2',
      title: 'Web Development 2 (Lecture)',
      lec: '2',
      lab: '0',
      credit: '2',
      tuition: '2',
      section: 'BSINFOTEC H2A',
      schedule: 'M 08:00AM-10:00AM',
      faculty: 'Sison, Edgardo'
    }
  ]);



    const [fees, setFees] = useState({
      tuition: '2,300.00',
      athleticFee: '50.00',
      culturalFee: '50.00',
      developmentFee: '80.00',
      guidanceFee: '30.00',
      libraryFee: '100.00',
      medicalDentalFee: '130.00',
      registrationFee: '50.00',
      computerFee: '500',
      totalAssessment: '3,290.00',
      lessFinancialAid: '3,290.00',
      netAssessed: '0.00',
      creditMemo: '0.00',
      totalDiscount: '0.00',
      totalPayment: '0.00',
      outstandingBalance: '0.00'
    });
    const [paymentSchedule, setPaymentSchedule] = useState({
      firstPayment: '0.00',
      secondPayment: '0.00',
      thirdPayment: '0.00'
    });

  const [image, setImage] = useState(null);

  const corRef = useRef();

  const handleStudentInfoChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (index, e) => {
    const { name, value } = e.target;
    const newSubjects = [...subjects];
    newSubjects[index][name] = value;
    setSubjects(newSubjects);
  };

  const handleFeeChange = (e) => {
    const { name, value } = e.target;
    setFees(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentScheduleChange = (e) => {
    const { name, value } = e.target;
    setPaymentSchedule(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addSubject = () => {
    if (subjects.length < 10) {
      setSubjects([...subjects, { code: '', title: '', lec: '', lab: '', credit: '', tuition: '', section: '', schedule: '', faculty: '' }]);
    }
  };

  const handleDownloadPdf = () => {
    const element = corRef.current;
    html2pdf()
      .from(element)
      .set({
        margin: [0.1, 0.1, 0.1, 0.1],
        filename: 'Certificate_of_Registration.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'legal', orientation: 'portrait' }
      })
      .save();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '20px', padding: '10px', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
      <div style={{ width: '320px', maxHeight: '10in', overflowY: 'auto', padding: '10px', border: '1px solid #ccc', borderRadius: '6px', backgroundColor: '#f9f9f9' }}>
        <h4>Student Information</h4>
        {Object.keys(studentInfo).map((field) => (
        field === 'gender' ? (
            <select
            key={field}
            name={field}
            value={studentInfo[field]}
            onChange={handleStudentInfoChange}
            style={{ marginBottom: '5px', width: '100%', fontSize: '10px', padding: '5px', boxSizing: 'border-box' }}
            >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            </select>
        ) : (
            <input
            key={field}
            name={field}
            placeholder={field.toUpperCase()}
            value={studentInfo[field]}
            onChange={handleStudentInfoChange}
            style={{ marginBottom: '5px', width: '100%', fontSize: '10px', padding: '5px', boxSizing: 'border-box' }}
            />
        )
        ))}
        <h4>Upload Image</h4>
        <input type="file" accept="image/*" onChange={handleImageUpload} style={{ marginBottom: '10px' }} />

        <h4>Subjects</h4>
        {subjects.map((subject, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            {Object.keys(subject).map((field) => (
              <input
                key={field}
                name={field}
                placeholder={field.toUpperCase()}
                value={subject[field]}
                onChange={(e) => handleSubjectChange(index, e)}
                style={{ marginBottom: '3px', width: '100%', fontSize: '10px', padding: '5px', boxSizing: 'border-box' }}
              />
            ))}
          </div>
        ))}
        <button onClick={addSubject} style={{ fontSize: '10px', padding: '5px 10px', marginBottom: '10px' }}>+ Add Subject</button>

        <h4>Fees</h4>
        {Object.keys(fees).map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field.toUpperCase()}
            value={fees[field]}
            onChange={handleFeeChange}
            style={{ marginBottom: '5px', width: '100%', fontSize: '10px', padding: '5px', boxSizing: 'border-box' }}
          />
        ))}

        <h4>Payment Schedule</h4>
        {['firstPayment', 'secondPayment', 'thirdPayment'].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field.toUpperCase()}
            value={paymentSchedule[field]}
            onChange={handlePaymentScheduleChange}
            style={{ marginBottom: '5px', width: '100%', fontSize: '10px', padding: '5px', boxSizing: 'border-box' }}
          />
        ))}

        <button onClick={handleDownloadPdf} style={{ marginTop: '10px', padding: '8px 12px', fontSize: '11px', width: '100%' }}>Download COR as PDF</button>
      </div>

      <div ref={corRef} 
      style={{ padding: '15px', backgroundColor: 'white', color: 'black', fontSize: '9px', lineHeight: '1.2', width: '8in', minHeight: '14in', position: 'relative' }}>
      <div style={{ padding: '20px', position: 'relative', textAlign: 'center' }}>
        {/* Right-side image if provided */}
        {image && (
            <img
            src={image}
            alt="Logo"
            style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: '120px',
                height: '120px',
            }}
            />
        )}

        {/* School logo on the left */}
        <img
            src="logo.jpg"
            alt="School Logo"
            style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            width: '120px',
            height: '120px',
            }}
        />

        {/* Header content */}
        <h3 >
            
           Republic of the Phillipines
        </h3>
        <h3 style={{ marginBottom: '1px', fontSize: '10'}}>
            
            Eulogio "Amang" Rodriguez
         
        </h3>
        <h3 style={{ marginBottom: '1px' }}>
            
      Institute of Science and Technology
         
        </h3>
       
        <p style={{ margin: '0' }}>Nagtahan St. Sampaloc, Manila</p>
        <h2 style={{ marginTop: '10px' }}>CERTIFICATE OF REGISTRATION</h2>

        {/* Reg. No and AY/Term */}
        <div
            style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
            fontSize: '9px',
            }}
        >
            <p>
            <strong>Reg. No:</strong> {studentInfo.registrationNo}
            </p>
            <p>
            <strong>AY/Term:</strong> {studentInfo.academicYear}
            </p>
        </div>
        </div>
    <hr/>
    {/* Student Info Table */}
    <table style={{
      width: '100%',
      marginBottom: '20px',
      fontSize: '10px',
      borderCollapse: 'separate',
      borderSpacing: '0 8px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <tbody>
        <tr>
          <td><strong>Student No:</strong> {studentInfo.studentNo}</td>
          <td><strong>College:</strong> {studentInfo.college}</td>
        </tr>
        <tr>
          <td><strong>Name:</strong> {studentInfo.name}</td>
          <td><strong>Program:</strong> {studentInfo.program}</td>
        </tr>
        <tr>
          <td><strong>Gender:</strong> {studentInfo.gender}</td>
          <td><strong>Major:</strong> {studentInfo.major}</td>
        </tr>
        <tr>
          <td><strong>Age:</strong> {studentInfo.age}</td>
          <td><strong>Year Level:</strong> {studentInfo.yearLevel}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong> {studentInfo.email}</td>
          <td><strong>Scholarship:</strong> {studentInfo.scholarship}</td>
        </tr>
      </tbody>
    </table>

    {/* Subject List Table */}
    {(() => {
      const totalLec = subjects.reduce((sum, s) => sum + (Number(s.lec) || 0), 0);
      const totalLab = subjects.reduce((sum, s) => sum + (Number(s.lab) || 0), 0);
      const totalCredit = subjects.reduce((sum, s) => sum + (Number(s.credit) || 0), 0);
      const totalTuition = subjects.reduce((sum, s) => sum + (Number(s.tuition) || 0), 0);

      return (
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '8px', 
          fontFamily: 'Arial, sans-serif',
          marginBottom: '5px', 
        }}>
          <thead>
            <tr style={{
              backgroundColor: '#2c3e50',
              color: '#ecf0f1',
              textTransform: 'uppercase',
            }}>
              {['Code', 'Title', 'Lec', 'Lab', 'CR', 'Tuition', 'Section', 'Schedule', 'Faculty'].map((header, i) => (
                <th key={i} style={{ padding: '4px' }}>{header}</th> // smaller padding
              ))}
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff' }}>
                <td style={{ padding: '3px', textAlign: 'center' }}>{subject.code}</td>
                <td style={{ padding: '3px' }}>{subject.title}</td>
                <td style={{ padding: '3px', textAlign: 'center' }}>{subject.lec}</td>
                <td style={{ padding: '3px', textAlign: 'center' }}>{subject.lab}</td>
                <td style={{ padding: '3px', textAlign: 'center' }}>{subject.credit}</td>
                <td style={{ padding: '3px', textAlign: 'center' }}>{subject.tuition}</td>
                <td style={{ padding: '3px', textAlign: 'center' }}>{subject.section}</td>
                <td style={{ padding: '3px', textAlign: 'center' }}>{subject.schedule}</td>
                <td style={{ padding: '3px', textAlign: 'center' }}>{subject.faculty}</td>
              </tr>
            ))}
            <tr style={{ fontWeight: 'bold', backgroundColor: '#ecf0f1' }}>
              <td colSpan={1} style={{ padding: '3px' }}>Note: Subject marked with "*" is Special Subject.</td>
              <td style={{ padding: '3px', textAlign: 'center' }}>Total</td>
              <td style={{ padding: '3px', textAlign: 'center' }}>{totalLec}</td>
              <td style={{ padding: '3px', textAlign: 'center' }}>{totalLab}</td>
              <td style={{ padding: '3px', textAlign: 'center' }}>{totalCredit}</td>
              <td style={{ padding: '3px', textAlign: 'center' }}>₱{totalTuition.toLocaleString()}</td>
              <td colSpan={3}></td>
            </tr>
          </tbody>
        </table>
        
      );
    })()}


            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '49%' }}>
                <h4>ASSESSED FEES</h4>
                <table style={{ width: '100%', fontSize: '7px', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: '2px 4px', borderBottom: '1px solid #999' }}>Fee Type</th>
          <th style={{ textAlign: 'right', padding: '2px 4px', borderBottom: '1px solid #999' }}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(fees).map(([key, value]) => (
          <tr key={key}>
            <td style={{
              padding: '2px 4px', 
              border: '1px solid #ccc',
              fontWeight: 'normal',
              whiteSpace: 'nowrap', 
            }}>
              {key.replace(/([A-Z])/g, ' $1').toUpperCase()}:
            </td>
            <td style={{
              padding: '2px 4px',
              border: '1px solid #ccc',
              textAlign: 'right',
              whiteSpace: 'nowrap'
            }}>
              ₱{value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>


              <h4 style={{   textAlign: 'center' ,marginBottom: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000' }}>
                Schedule of Payment
              </h4>

              <table
                style={{
                    width: '100%',
                    fontSize: '8px',
                    marginBottom: '8px',
                    borderCollapse: 'collapse',
                    textAlign: 'center'
                }}
                >
                <thead>
                    <tr>
                    <th style={{ border: '1px solid #999', color: 'white', padding: '4px', backgroundColor: '#2c3e50' }}>1st Payment</th>
                    <th style={{ border: '1px solid #999', color: 'white', padding: '4px', backgroundColor: '#2c3e50' }}>2nd Payment</th>
                    <th style={{ border: '1px solid #999', color: 'white', padding: '4px', backgroundColor: '#2c3e50' }}>3rd Payment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td style={{ border: '1px solid #ccc', padding: '4px' }}>₱{paymentSchedule.firstPayment}</td>
                    <td style={{ border: '1px solid #ccc', padding: '4px' }}>₱{paymentSchedule.secondPayment}</td>
                    <td style={{ border: '1px solid #ccc', padding: '4px' }}>₱{paymentSchedule.thirdPayment}</td>
                    </tr>
                </tbody>
              </table>

                {/* Schedule of Payment Section */}
                <div style={{ marginTop: '30px' }}>
                {/* Replace this comment with your Schedule of Payment JSX */}
                {/* Payment/Validation Date and Official Receipt Line */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '10px',
                    fontFamily: 'Arial, sans-serif',
                    marginTop: '20px'
                }}>
                    <div>
                      <strong>Payment/Validation Date :</strong> 
                    </div>
                    
                    <div>
                      <strong>February 21, 2025__________ </strong> 
                    </div>
          
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '10px',
                    fontFamily: 'Arial, sans-serif',
                    marginTop: '20px'
                }}>
                    <div>
                    <strong>Official Receipt :</strong> 
                    </div>
                    
                  
                    
                    <div>
                    <strong> Scholar </strong> 
                    </div>
                </div>
                </div>        
              </div>

              <div style={{ width: '49%' }}>
                <h4 style={{ textAlign: 'center' }}>RULES OF REFUND</h4>
                <ol style={{ fontSize: '8px', paddingLeft: '15px' }}>
                  <li>1. Full refund of tuition fee - Before the start of classes. 1. Full refund of tuition fee - Before the start of classes.</li>
                  <li>2. 80% refund of tuition fee - within 1 week from the start of classes. 2. 80% refund of tuition fee - within 1 week from the start of classes.</li>
                  <li>3. 50% refund - within 2 weeks from the start of classes. 3. 50% refund - within 2 weeks from the start of classes.</li>
                  <li>4. No refund - after the 2nd week of classes.</li>
                </ol>

                <h4 style={{ textAlign: 'center' }}>PLEDGE UPON ADMISSION</h4>
                <p style={{ fontSize: '8px' }}>
                  "As a student of EARIST, I do solemnly promise that I will comply with the rules and regulations of the Institution."
                </p>

                <p style={{ textAlign: 'center' }}>______________________________<br />Student Signature</p>
                <p>APPROVED BY :</p>
                <p style={{ textAlign: 'center' }}>______________________________<br />Registrar<br /><strong>Julie Ann O. Espiritu</strong></p>
              </div>
            </div>

            <p style={ { textAlign: 'right' } }><strong>Timestamp:</strong> 02/24/2025 02:30:45 PM</p>
            <br/>
            <br/>
                {/* Tuition Info and QR Code Images */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
            }}>
                {/* Left Side: Free Tuition Image */}
                <img
                src="discount.jpg"
                alt="Free Tuition and Miscellaneous"
                style={{ maxWidth: '90px', height: 'auto' }}
                />
                {/* Right Side: QR Code Image with timestamp above*/}
                <div style={{ textAlign: 'center' }}>
                <img
                    alt="QR Code"
                    src="QR2.png"
                    style={{ width: '90px', height: '90px' }}
                />
                <div style={{ fontSize: '8px', marginTop: '4px' }}>04 30, 2025 04:13:09 PM</div>
                </div>
            </div>

            <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '9px', fontWeight: 'bold' }}>
              KEEP THIS CERTIFICATE. YOU WILL BE REQUIRED TO PRESENT THIS IN ALL YOUR DEALINGS WITH THE COLLEGE.
            </p>
          </div>
        </div>
      );
    };

    export default CertificateOfRegistration;
