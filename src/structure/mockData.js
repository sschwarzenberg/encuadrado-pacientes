export const mockEventData = [
    {
      id: 1,
      title: 'Nutrition Workshop',
      modality: 'Online Event',
      description: 'Learn about healthy eating habits.',
      date: '2023-12-15',
      time: '14:00',
      duration: '75 mins',
      location: '123 Main Street',
      professional: 'John Doe (Nutritionist)',
    },
    {
      id: 2,
      title: 'Art Therapy Session',
      modality: 'Online Event',
      description: 'Express yourself through art.',
      date: '2023-12-20',
      time: '16:30',
      duration: '60 mins',
      location: '456 Art Avenue',
      professional: 'Jane Smith (Art Therapist)',
    },
    {
        id: 3,
        title: 'Paper Mache',
        modality: 'In-Person Workshop',
        description: 'Join a hands-on crafting workshop for beginners.',
        date: '2023-12-25',
        time: '10:00',
        duration: '90 mins',
        location: '101 Craft Street',
        professional: 'Bob Lee (Craft Teacher)',
      },
  ];

  export const mockProfessionalData = [
    {
      id: 1,
      name: 'John Doe',
      profession: 'Nutritionist',
      bio: 'Passionate about promoting healthy eating habits and overall well-being.',
      location: '123 Main Street',
      contact: 'john.doe@example.com',
      rating: 4.8,
      specialties: ['Weight Management', 'Nutritional Counseling'],
      appointments: [
        {
            id: 100,
            title: 'Nutrition Workshop',
            description: 'Best foods for weight loss.',
            date: '2023-01-15',
            time: '8:00 AM',
            location: '123 Main Street',
            professional: 'John Doe (Nutritionist)',
          },
        {
          id: 101,
          title: 'Nutrition Workshop',
          description: 'Learn about healthy eating habits.',
          date: '2023-01-15',
          time: '10:00 AM',
          location: '123 Main Street',
          professional: 'John Doe (Nutritionist)',
          patient: 'Alice Johnson',
        },
        {
          id: 102,
          title: 'Diet Consultation',
          description: 'Personalized diet plan for weight management.',
          date: '2023-02-20',
          time: '2:30 PM',
          location: '123 Main Street',
          professional: 'John Doe (Nutritionist)',
          patient: 'Bob Thompson',
        },
        {
          id: 103,
          title: 'Healthy Cooking Class',
          description: 'Hands-on cooking class for nutritious meals.',
          date: '2023-03-05',
          time: '4:45 PM',
          location: '123 Main Street',
          professional: 'John Doe (Nutritionist)',
          patient: 'Jane Smith',
        },
        // Add more appointments as needed
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      profession: 'Psychologist',
      bio: 'Dedicated to helping individuals navigate life challenges and improve mental health.',
      location: '456 Therapy Lane',
      contact: 'jane.smith@example.com',
      rating: 4.9,
      specialties: ['Stress Management', 'Behavioral Therapy'],
      appointments: [
        {
          id: 201,
          title: 'Stress Management Session',
          description: 'Effective techniques to manage stress.',
          date: '2023-03-10',
          time: '3:15 PM',
          location: '456 Therapy Lane',
          professional: 'Jane Smith (Psychologist)',
        },
        {
          id: 202,
          title: 'Cognitive Behavioral Therapy',
          description: 'Individualized therapy for behavioral change.',
          date: '2023-04-05',
          time: '11:45 AM',
          location: '456 Therapy Lane',
          professional: 'Jane Smith (Psychologist)',
        },
        {
          id: 203,
          title: 'Mindfulness Meditation',
          description: 'Guided meditation for mental well-being.',
          date: '2023-05-20',
          time: '1:30 PM',
          location: '456 Therapy Lane',
          professional: 'Jane Smith (Psychologist)',
        },
        // Add more appointments as needed
      ],
    },
    {
      id: 3,
      name: 'Alice Johnson',
      profession: 'Ceramist',
      bio: 'Creating beautiful and functional ceramics for over a decade.',
      location: '789 Art Avenue',
      contact: 'alice.johnson@example.com',
      rating: 4.5,
      specialties: ['Handmade Pottery', 'Ceramic Sculptures'],
      appointments: [
        {
          id: 301,
          title: 'Ceramics Workshop',
          description: 'Hands-on workshop to create ceramic sculptures.',
          date: '2023-06-05',
          time: '2:00 PM',
          location: '789 Art Avenue',
          professional: 'Alice Johnson (Ceramist)',
        },
        {
          id: 302,
          title: 'Pottery Class',
          description: 'Learn the art of creating handmade pottery.',
          date: '2023-07-12',
          time: '10:30 AM',
          location: '789 Art Avenue',
          professional: 'Alice Johnson (Ceramist)',
        },
        {
          id: 303,
          title: 'Sculpture Exhibition',
          description: 'Showcasing ceramic sculptures by Alice Johnson.',
          date: '2023-08-18',
          time: '4:00 PM',
          location: '789 Art Avenue',
          professional: 'Alice Johnson (Ceramist)',
        },
        // Add more appointments as needed
      ],
    },
    {
      id: 4,
      name: 'Bob Thompson',
      profession: 'Craft Teacher',
      bio: 'Inspiring creativity in students through engaging and hands-on craft classes.',
      location: '101 Craft Street',
      contact: 'bob.thompson@example.com',
      rating: 4.7,
      specialties: ['DIY Crafts', 'Paper Crafting'],
      appointments: [
        {
          id: 401,
          title: 'Paper Craft Workshop',
          description: 'Create unique paper crafts with Bob Thompson.',
          date: '2023-09-10',
          time: '3:30 PM',
          location: '101 Craft Street',
          professional: 'Bob Thompson (Craft Teacher)',
        },
        {
          id: 402,
          title: 'DIY Card Making',
          description: 'Learn the art of making personalized cards.',
          date: '2023-10-15',
          time: '1:15 PM',
          location: '101 Craft Street',
          professional: 'Bob Thompson (Craft Teacher)',
        },
      ],
    },
    // Add more professional entries as needed
  ];


