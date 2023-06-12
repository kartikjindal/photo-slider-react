import React, { useState, useEffect } from 'react';
import './App.css';

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
  const [n, setN] = useState(0);
  const siz = data.length;
  const x = [0, 1, 2, 3];
  const [selectedOption, setSelectedOption] = useState(data[seq(m, n, siz, 0)]);
  const [dataindexoptions, setdataindexOptions] = useState([0, 1, 2, 3]);
  const [buttonText, setButtonText] = useState(1);
  const [currentIndex, setcurrentIndex] = useState(0);

  function seq(m, n, siz, x) {
    return (m * (n) + x) % siz;
  }


  const handleOptionClick = (index, currentIndex1) => {
    setSelectedOption(data[index]);
    setcurrentIndex(currentIndex1);

    console.log('handleoptionclick is running');
  };



  const plusDivs = (grade) => {
    if (grade == -1) {
      if (n < 3)
        return;
      else
        setN(n - 3);
    }
    else {
      if (n > 11)
        return;
      else
        setN(n + 3);
    }
    setcurrentIndex(0);
    setButtonText((prevButtonText) => prevButtonText + grade * 3);
    setdataindexOptions(x.map(
      index => {
        return seq(m, n, siz, index);
      }
    ));
    setSelectedOption(data[seq(m, n, siz, 0)]);
    console.log('plusdivs is running');
  };


  const handlebuttonclick = (i) => {
    setN(i);
    console.log('it is ', i);
    console.log('it is ', n);
    setdataindexOptions(x.map(
      index => {
        return seq(m, n, siz, index);
      }
    ));
    setSelectedOption(data[seq(m, n, siz, 0)]);
    console.log('handlebuttonclick is running');
    setcurrentIndex(0);
  }


  function scroll(i) {
    if (i === 1) {
      if (currentIndex >= m) {
        setcurrentIndex(0);
        setSelectedOption(0);
      } else {
        setcurrentIndex(currentIndex + 1);
        setSelectedOption(currentIndex + 1);
      }
    }
    else {
      if (currentIndex === 0) {
        setcurrentIndex(m - 1);
        setSelectedOption(m - 1);
      }
      else {
        setcurrentIndex(currentIndex - 1);
        setSelectedOption(currentIndex - 1);
      }
    }
    console.log('scroll is running');

  }

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === 'ArrowLeft') {
  //       plusDivs(-1);
  //     } else if (event.key === 'ArrowRight') {
  //       plusDivs(1);
  //     }
  //     else if(event.key === 'ArrowUp')
  //     {
  //       scroll(-1);
  //     }
  //     else if(event.key === 'ArrowDown')
  //     {
  //       scroll(1);
  //     }
  //   };
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);


  const funcdataindexoptions = () => {
    console.log('funcdataindexoptions is running');

    return dataindexoptions.map((index, currentIndex1) => { // Add the "currentIndex" parameter
      console.log(index);
      
      return (
        <li key={index} onClick={() => handleOptionClick(index, currentIndex1)}>
          <img src={data[index]?.previewImage} alt="Preview" />
          <label>{data[index]?.title}</label>
          {/* setcurrentIndex(currentIndex1); */}
          <span>Current Index: {currentIndex1}</span> {/* Display the current index */}
        </li>
      );
    });
  };

  // index database bss

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
            <button className="w3-button demo" onClick={() => { console.log(buttonText, 'is pressed'); handlebuttonclick(buttonText - 1) }}>{buttonText}</button>
            <button className="w3-button demo" onClick={() => { console.log(buttonText + 1, 'is pressed'); handlebuttonclick(buttonText) }}>{buttonText + 1}</button>
            <button className="w3-button demo" onClick={() => { console.log(buttonText + 2, 'is pressed'); handlebuttonclick(buttonText + 1) }}>{buttonText + 2}</button>
            <button className="w3-button" onClick={() => plusDivs(1)}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="space"></div>
        <div id="rightpane">
          <div id="imgframe">
            <img className="mainpic" alt="" src={selectedOption.previewImage} />
          </div>
          <div id="imgname" >{selectedOption.title}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
