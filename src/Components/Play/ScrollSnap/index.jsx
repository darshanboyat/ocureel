import React from 'react';
import img1 from '../../../assets/iPhone_14_Pro_Max_-_9.jpg'
import img2 from '../../../assets/iPhone_14_Pro_Max_-_10.jpg'
import img3 from '../../../assets/iPhone_14_Pro_Max_-_8.jpg'
import img4 from '../../../assets/iPhone_14_Pro_Max_-_1.jpg'
import img5 from '../../../assets/iPhone_14_Pro_Max_-_2.jpg'
import img6 from '../../../assets/iPhone_14_Pro_Max_-_6.jpg'
import img7 from '../../../assets/iPhone_14_Pro_Max_-_3.jpg'
// import './style.css';
import img8 from '../../../assets/iPhone_14_Pro_Max_-_5.jpg'
import img9 from '../../../assets/iPhone_14_Pro_Max_-_4.jpg'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.css';

const images = [
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
];

const SnapScroll = () => {
  return (
    <div className="scroll-container">
      {images.map(ele => <div className="scroll-item"><img src={ele.src} alt="" /></div>)}
    </div>
  );
};

export default SnapScroll;

