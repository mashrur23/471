
import React from 'react';
import '../InstructorsList.css'; 

const instructors = [
    {
        name: "John Doe",
        expertise: "Hatha Yoga",
        experience: "10 years",
        bio: "John is an experienced instructor specializing in Hatha Yoga. His classes focus on improving strength and flexibility.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Jane Smith",
        expertise: "Vinyasa Yoga",
        experience: "8 years",
        bio: "Jane brings a dynamic flow of postures to her Vinyasa Yoga classes, perfect for improving balance and coordination.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Alex Johnson",
        expertise: "Ashtanga Yoga",
        experience: "12 years",
        bio: "Alex focuses on the power and precision of Ashtanga Yoga, guiding students toward mastery of the primary series.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Emily Davis",
        expertise: "Yin Yoga",
        experience: "7 years",
        bio: "Emily teaches calming Yin Yoga, which emphasizes long holds and deep stretches to release tension.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Michael Brown",
        expertise: "Kundalini Yoga",
        experience: "15 years",
        bio: "Michael's Kundalini Yoga classes focus on energy and mindfulness through breathing techniques and meditation.",
        image: "https://via.placeholder.com/150"
    }
];

const InstructorsList = () => {
    return (
        <div className="instructors-container">
            <h2>Meet Our Instructors</h2>
            
            <div className="instructors-grid">
                
                {instructors.map((instructor, index) => (
                    <div key={index} className="instructor-card">
                        <img src={instructor.image} alt={`${instructor.name}`} />
                        <h3>{instructor.name}</h3>
                        <p><strong>Expertise:</strong> {instructor.expertise}</p>
                        <p><strong>Experience:</strong> {instructor.experience}</p>
                        <p>{instructor.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default InstructorsList;
