import React, { useState, useEffect } from "react";
import Navbar from "../navbar/index";
import "../assets/css/comicHome.css";
import axios from "axios";
import Swal from 'sweetalert2'
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
const {
  REACT_APP_SERVER,
} = process.env;


const Comic = () => {
  const [comic, setComic] = useState({
    comics: [],
    comicToday: [],
  });
  const [numComic, setNumComic] = useState({
    numComic: "",
  });

  useEffect(() => {
    getComicToday();
  }, []);

  const getComicToday = async () => {
    const { data } = await axios.get(`${REACT_APP_SERVER}/ComicToday`);
    setComic({
      comics: data,
      comicToday: data,
    });
  };
  const ComicSpecific = async (number) => {
    const { data } = await axios.get(`${REACT_APP_SERVER}/ComicSpecific?number=${number}`);
    setComic({
      ...comic,
      comics: data,
    });
    document.getElementById("clean").value = "";
  };

  const onChangeData = (e) => {
    
    setNumComic({
      numComic: e.target.value,
    });
   
  };

  return (
    <>
      <Navbar />
      <div className=" containerCard">
        <div className="card containerCard-structured">
          {comic.comics.img ?
          <img
            src={comic.comics.img}
            className="card-img-top"
            alt="Not found"
          />:  <Stack sx={{ color: 'grey.500' }} spacing={6} direction="row">
          <CircularProgress color="secondary" />
          <CircularProgress color="success" />
          <CircularProgress color="inherit" />
        </Stack>
           }
          <div className="card-body">
            <h5 className="card-title">{comic.comics.title}</h5>
          </div>
        </div>
        <nav className="navBtn ">
          <ul class="pagination">
            <li class="page-item">
              <button
                disabled={comic.comics.num <= 1}
                className={comic.comics.num <= 1 ?"btn-grad": "btnOptionsPage"}
                onClick={() => {
                  if (comic.comics.num > 1) {
                    ComicSpecific(comic.comics.num - 1);
                    if (comic.comics.num === 405) {
                      ComicSpecific(comic.comics.num - 2);
                      console.log(comic.comics.num);
                    }
                  }
                }}
              >
                Previous
              </button>
            </li>
            <li class="page-item">
              <button
                class="btnOptionsPage "
                onClick={() => {
                  const fin = comic.comicToday.num;
                  const random = Math.floor(Math.random() * (fin - 1) + 1);
                  console.log(random);
                  ComicSpecific(random);
                }}
              >
                random
              </button>
            </li>
            <li class="page-item">
              <button
                disabled={comic.comics.num >= comic.comicToday.num}
                className={comic.comics.num >= comic.comicToday.num ?"btn-grad": "btnOptionsPage"}
                onClick={() => {
                  if (comic.comics.num < comic.comicToday.num) {
                    ComicSpecific(comic.comics.num + 1);
                    if (comic.comics.num === 403) {
                      ComicSpecific(comic.comics.num + 2);
                      console.log(comic.comics.num);
                    }
                  }
                }}
              >
                Next
              </button>
            </li>
          </ul>
            <div class="input-group btnSearch">
              <input
              id="clean"
                type="number"
                className="inputSearchComic"
                placeholder="# de comic"
                style={{ width: 125 }}
                onChange={onChangeData}
              />
              <button
                onClick={() => {
                  numComic.numComic >= 1 &&
                  numComic.numComic <= comic.comicToday.num
                    ? ComicSpecific(numComic.numComic)
                    : Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'se encuentra fuera del rango',
                      footer: `El rango es de 1 a ${comic.comicToday.num}`
                    })
                    document.getElementById("clean").value = "";
                }}
                className="input-group-text btnSearch"
                id="addon-wrapping"
              ><SearchIcon /></button>
            </div>
        </nav>
      </div>
    </>
  );
};

export default Comic;
