"use client";
import { useState } from 'react';

export default function Rename() {
    const [image, setImage] = useState(null);
    const [newName, setNewName] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleRename = () => {
        if (image && newName) {
            const renamedImage = new File([image], newName, { type: image.type });
            const url = URL.createObjectURL(renamedImage);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = newName;
            link.click();
            URL.revokeObjectURL(url);
        }
    };

    return (
        <section id="Rename" className="p-4">
            
            <h2 className="mb-4 font-mono text-5xl text-center tracking-[15px] text-white self-top">
                Hier können Sie ihre Bilder umbennen
            </h2>
            <div className="flex flex-col justify-center items-center">
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                    className="mb-4" 
                />
                {image && (
                    <div className="flex flex-col items-center">
                        <img 
                            src={URL.createObjectURL(image)} 
                            alt="Preview" 
                            className="mb-4 max-w-xs" 
                        />
                        <input 
                            type="text" 
                            placeholder="Neuer Dateiname" 
                            value={newName} 
                            onChange={handleNameChange} 
                            className="mb-4 p-2 border border-gray-300 rounded text-black w-[300px]"
                        />
                        <button 
                            onClick={handleRename} 
                            className="px-4 py-2 bg-gray-500 text-white rounded w-[300px]"
                        >
                            Bild mit umbenant runterladen
                        </button>
                    </div>
                )}
                <button 
                    className="text-white rounded absolute bottom-[2%] right-[2%] hover:underline"
                >
                    <a href="/">Zurück</a>
                </button>
            </div>
        </section>
    );
}
