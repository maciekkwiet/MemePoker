import img0 from 'Assets/memes/easy.gif';
import img1 from 'Assets/memes/calculating.gif';
import img2 from 'Assets/memes/dog.gif';
import img3 from 'Assets/memes/fire.gif';
import img4 from 'Assets/memes/spiderman.jpg';
import img5 from 'Assets/memes/confused-math.gif';

// vote to meme value
// 0 - 2 -> easy
// 3 - 8 -> medium
// 13 - ... -> hard

export const memeSchema = [
  {
    id: 0,
    value: 'easy',
    img: img0,
  },
  {
    id: 1,
    value: 'medium',
    img: img1,
  },
  {
    id: 2,
    value: 'medium',
    img: img2,
  },
  {
    id: 3,
    value: 'hard',
    img: img3,
  },
  {
    id: 4,
    value: 'deviation',
    img: img4,
  },
  {
    id: 5,
    value: 'deviation',
    img: img5,
  },
];
