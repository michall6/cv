import React, { useState, useContext } from 'react';
import { Rusume_Context } from '../context/RusumeContext';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { UserContext } from '../context/Authentication';
import UpImage from './UpImage';




 export default function FormRusume() {

  const { createRusume } = useContext(Rusume_Context);
  const { currentUser } = useContext(UserContext);


  const [fullName, setFullName] = useState('');
  const [experienceYears, setExperienceYears] = useState('');
   const [currentCompany, setCurrentCompany] = useState('');
  const [currentExperienceYears, setCurrentExperienceYears] = useState('');
  const [studyDetails, setStudyDetails] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleImageUpload = (url) => {
    setImageUrl(url);  
};


 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const cuid = currentUser.uid
    const image=imageUrl
    createRusume({
      fullName,
      experienceYears,
      currentCompany,
      currentExperienceYears,
      studyDetails,
      cuid,
      image 
    });

    navigate('/PdfRusume')

  };
  return (
    <>
      <div className="container mt-5">
        <h2>Create Rusume</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">FullName:</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="experienceYears" className="form-label">Experience years:</label>
            <input
              type="number"
              className="form-control"
              id="experienceYears"
              value={experienceYears}
              onChange={(e) => setExperienceYears(e.target.value)}
              min="0"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="currentCompany" className="form-label">Name of current company:</label>
            <input
              type="text"
              className="form-control"
              id="currentCompany"
              value={currentCompany}
              onChange={(e) => setCurrentCompany(e.target.value)}
            />
          </div>
          {experienceYears > 0 && (
            <div className="mb-3">
              <label htmlFor="currentExperienceYears" className="form-label">Experience years in this company:</label>
              <input
                type="number"
                className="form-control"
                id="currentExperienceYears"
                value={currentExperienceYears}
                onChange={(e) => setCurrentExperienceYears(e.target.value)}
                min="0"
                max={experienceYears}
                required
              />
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="studyDetails" className="form-label">Study details (time and area):</label>
            <textarea
              className="form-control"
              id="studyDetails"
              value={studyDetails}
              onChange={(e) => setStudyDetails(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image:</label>
  
         <UpImage onImageUpload={handleImageUpload} />          
      
          </div>
          <button type="submit" className="btn btn-primary">Create Rusume</button>
        </form>
      </div>

      <div className='w-100 text-center mt-3'>
        <Link to="/managementRusume">
          <Button>View all resumes you've created</Button>
        </Link>
      </div>
    </>
  );
}

 