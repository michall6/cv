import { useContext, useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';  
import { v4 } from 'uuid';
import { Rusume_Context } from '../context/RusumeContext';

const UpImage = ({ onImageUpload }) => {
    const { createRusume, setImgUrl } = useContext(Rusume_Context);

    const [imageUpload, setImageUpload] = useState(null);

    const uploadImage = async (e) => {
        e.preventDefault();
        try {
            if (imageUpload === null) return;

            const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
            await uploadBytes(imageRef, imageUpload);


            const imageUrl = await getDownloadURL(imageRef);

            onImageUpload(imageUrl);


            alert(`Image uploaded successfully! URL: ${imageUrl}`);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImageUpload(selectedImage);
    };

    return (
        <div>
            <input
                type="file"
                className="form-control"
                id="image"
                onChange={handleImageChange}
            />
            <button onClick={uploadImage}>Upload Image</button>
        </div>
       
    );
};

export default UpImage;