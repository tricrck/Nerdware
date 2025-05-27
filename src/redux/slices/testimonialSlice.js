import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testimonials: [
    {
      id: 1,
      name: 'Timothy Talam',
      role: 'Client',
      feedback: 'Nerdware developed an e-commerce site that increased customer conversion by 75%.',
      image: '../../assets/placeholder.jpg',
    },
    {
      id: 2,
      name: 'Susan Chepkemoi',
      role: 'Landlady',
      feedback: 'Developed a mobile app to streamline tenant-landlord connections for rental units.',
      image: '../../assets/placeholder.jpg',
    },
    {
      id: 3,
      name: 'Elijah Khajira',
      role: 'CEO, EllyHill',
      feedback: 'Improved SEO rankings led to increased business orders.',
      image: '../../assets/placeholder.jpg',
    },
    {
      id: 4,
      name: 'Jescinta C',
      role: 'Entrepreneur',
      feedback: 'Created an app for online shoe sales with order and delivery features.',
      image: '../../assets/placeholder.jpg',
    },
  ],
};

export const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    // We could add actions here like addTestimonial if needed
  },
});

export default testimonialSlice.reducer;