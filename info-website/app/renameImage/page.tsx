"use client";
import Image from 'next/image';
import { useState, ChangeEvent } from 'react';

export default function Rename() {
    const [image, setImage] = useState<File | null>(null);
    const [newName, setNewName] = useState<string>('');

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
        }
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setNewName(event.target.value);
    };

    const handleRename = (): void => {
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
                        <Image 
                            src={URL.createObjectURL(image)} 
                            alt="Preview" 
                            width={300} 
                            height={300} 
                            className="mb-4 max-w-xs rounded" 
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
                            className="px-4 py-2 bg-gray-500 text-white rounded w-[300px] hover:bg-gray-700 transition duration-300"
                        >
                            Bild mit umbenant runterladen
                        </button>
                    </div>
                )}
                <button 
                    className="text-white rounded absolute bottom-[2%] right-[2%] hover:underline hover:text-gray-300 transition duration-300"
                >
                    <a href="/">Zurück</a>
                </button>
            </div>
        </section>
    );
}
