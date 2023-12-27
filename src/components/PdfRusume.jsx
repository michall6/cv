import React, { useState, useContext, useRef } from 'react';
import { Rusume_Context } from '../context/RusumeContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



export default function PdfRusume() {

  const { resume } = useContext(Rusume_Context);
  const pdfRef = useRef();

  const savePdf = () => {
    const input2 = pdfRef.current;
    html2canvas(input2).then((canvas) => {
      const imageRusume = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', 'true');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgy = 30
      pdf.addImage(imageRusume, 'PNG', imgX, imgy, imgWidth * ratio, imgHeight * ratio);
      pdf.save('Rusume.pdf')
    })



  }

  return (
    <>
      <div ref={pdfRef}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card">

 {resume.image && <img src={resume.image} className="card-img-top" alt="Profile" />}

                <div className="card-body">
                  <h5 className="card-title">{resume.fullName}</h5>
                  <p className="card-text">
                    <strong>Experience Years:</strong> {resume.experienceYears}
                  </p>
                  <p className="card-text">
                    <strong>Current Company:</strong> {resume.currentCompany}
                  </p>
                  {resume.experienceYears > 0 && (
                    <p className="card-text">
                      <strong>Experience Years in Current Company:</strong>{' '}
                      {resume.currentExperienceYears}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Education & Study Details</h5>
                  <p className="card-text">
                    <strong>Study Details:</strong> {resume.studyDetails}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <button onClick={savePdf}>download</button>

      <div className='w-100 text-center mt-3'>
        <Link to="/managementRusume">
          <Button>View all resumes you've created</Button>
        </Link>
      </div>
    </>
  );

}


