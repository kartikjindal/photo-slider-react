import React, { useState, useEffect } from 'react';
import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
const data = [
  {
    "previewImage": "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "title": "cat.jpeg"
  },
  {
    "previewImage": "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "title": "cooking couple shoot portofilio(1).jpg"
  },
  {
    "previewImage": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "title": "bali-kelingking-beach-plastic-removal-drive.key"
  },
  {
    "previewImage": "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "title": "NextByk Investor Pitch 2021.ppt"
  },
  {
    "previewImage": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "title": "interns-performance-report-june-2021.key"
  }
];
function App() {
  const m = 4;
  const [itemno, setitemno] = useState(0);
  const [curr, setcurr] = useState(0);
  const siz = data.length;
  let x = [];
  const makearr = () => {
    let init = Math.floor(itemno / m) * 4;
    // addingDesignToOptions();
    for (let i = 0; i < 4; i++) {
      x.push((init));
      init++;
    }
    // console.log(x);
  }
  let buttonarray = [];

  const getslideno = () => {
    let curr = Math.floor(itemno / (3 * m)) * 3;
    for (let i = 0; i < 3; i++) {
      buttonarray.push(curr);
      curr++;
    }
  }
  let l1 = 0;
  const funcdataindexoptions = () => {
    console.log('funcdataindexoptions is running');
    makearr();
    return x.map((item) => { 
      console.log(item);
      if (item == itemno) {
        return (
          <li key={item} className='active' onClick={() => {
            setitemno(item)
          }}>
            <img src={data[item % siz]?.previewImage} alt="Preview" />
            <label>{data[item % siz]?.title}</label>
          </li>
        );
      }
      return (
        <li key={item} onClick={() => {
          setitemno(item)
        }}>
          <img src={data[item % siz]?.previewImage} alt="Preview" />
          <label>{data[item % siz]?.title}</label>
        </li>
      );
    });
  };

  const makeoptions = () => {
    console.log('makeoptions is running');
    getslideno();
    return buttonarray.map((pageno) => { 
      // console.log(pageno);
      if(pageno==Math.floor(itemno/m)*m)
      {
        return (
          <button className="w3-button demo active"
            key={pageno}
            onClick={() => { setitemno(pageno * m) }}>
            {pageno+1}</button>
        
        );
      }
      return (
        <button className="w3-button demo"
          key={pageno}
          onClick={() => { setitemno(pageno * m) }}>
          {pageno+1}</button>
      
      );
    });
  };

//   function Popup1() {
//     return (
//         <div>
//             <h4>Popup - GeeksforGeeks</h4>
//             <Popup trigger={<button> Trigger</button>} position="right center">
//     <div>Popup content here !!</div>
//   </Popup>
//         </div>
//     )
// };

  const plusDivs = (flag) => {
    console.log('plus Divs', itemno)
    if (flag == -1) {
      if (itemno <= 3)
        return;
      setitemno((itemno) => { return Math.floor((itemno / (m)) - 1) * m });
    }
    else {
      if (itemno >= 14 * m)
        return;
      setitemno((itemno) => { return Math.floor((itemno / (m)) + 1) * m });
    }
  }
  const scroll = (flag) => {
    console.log(itemno ,"herieir");
    if (flag == 1) {
      if (itemno % m === m - 1) {
        console.log('this is happening')
        setitemno(itemno => Math.floor(itemno / m) * m);
      }
      else
        setitemno(itemno => itemno + 1);

    }
    else if (flag == -1) {
      if (itemno % m == 0)
        setitemno(itemno => itemno + m - 1);
      else
        setitemno(itemno => itemno - 1);

    }
  }
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        plusDivs(-1);
      } else if (event.key === 'ArrowRight') {
        plusDivs(1);
      } else if (event.key === 'ArrowUp') {
        scroll(-1);
      } else if (event.key === 'ArrowDown') {
        scroll(1);
      }
      // else if(event.key==='Enter')
      // {
      //   Popup1();
      // }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [itemno]);

  return (
    <div className="App">
      <h1 className="heading">JavaScript Photo Slider</h1>
      <div id="maincontent">
        <div id="leftpane">
          <ul id="optionsdiv">
            {funcdataindexoptions()}
          </ul>
          <div id="empty"></div>
          <div className="w3-center">
            <button className="w3-button" onClick={() => plusDivs(-1)}>
              &#10094;
            </button>
            {makeoptions()}
            <button className="w3-button" onClick={() => plusDivs(1)}>
              &#10095;
            </button>
          </div>
        </div>
        
        <div className="space"></div>
        <div id="rightpane">
          <div id="imgframe">
            <img className="mainpic" alt="" src={data[itemno % siz].previewImage} />
          </div>
          <div id="imgname" >{data[itemno % siz].title}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
