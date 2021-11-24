import NetworkApi from "./Network";
import DataReq from "./Network2";
import { useEffect, useState } from "react";
import "../public/css/index.css";

const MovieList = () => {
  const [movieName, setMovieName] = useState("");
  const [response1, setResponse1] = useState<any>([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState("0");

  const _handleMovieName = (e: any) => {
    setMovieName(e.target.value);
  };

  const _handlePage = async () => {
    const result = await DataReq(movieName, pageNum);
    console.log(result.outTotal);

    setResponse1(result.outData);
    setTotalPages(result.outTotal);
  };
  console.log(response1);
  useEffect(() => {
    console.log("inside use effect", pageNum, movieName);
    if (response1.length === 0) {
      return;
    }

    _handlePage();
  }, [pageNum]);

  //   const _Req = async (num:any) => {
  //     //   console.log("movie:",{movieName,pageNum})
  //       if(num>0){
  //         const response1 = await DataReq(movieName, num);
  //         setResponse1(response1);
  //       }
  //     else{
  //         const response1 = await DataReq(movieName, 1);
  //         setResponse1(response1);
  //     }
  //   };
  // console.log("response1",response1)
  //   const movieListItems = response1.map((item:any, index:any) => (
  //   ));

  const _handlePagePrevious = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };
  const _handlePageNext = () => {
    setPageNum(pageNum + 1);
  };

  const funSlice = (data:any) => {
    const text = data;
    const len = text.length;
    if (len > 20) {
      const textOut = text.slice(0, 19);
      return <p>{textOut + "..."}</p>;
    } else {
      return <p>{text}</p>;
    }
  };

  return (
    <>
      <div className="header">
        <h1>Movie list</h1>
      </div>

      <div className="header">
        <input
          className="input"
          type="text"
          placeholder="Enter the movie name"
          onChange={_handleMovieName}
        />
        <button className="click-btn" onClick={_handlePage}>
          search
        </button>
      </div>
      <br />
      <div className="header">
        <button className="click-pre" onClick={_handlePagePrevious}>
          previous
        </button>
        <button className="click-next" onClick={_handlePageNext}>
          next
        </button>
      </div>
      {/* <div className="list-align">
        <ol>{movieListItems}</ol>
      </div> */}
      <h4>About {totalPages} search results</h4>

      <h4>Now you're in {pageNum}th page</h4>

      <div className="img-box">
        {response1.map((item: any, index: any) => {
          return (
            <div key={index}>
              <div>
                <div className="img-style">
                  <div className="title-align">
                    <div>
                        { funSlice(item.Title)}
                    </div>
                 
                    
                  </div>
                  <div>
                    <img
                      className="img-sty"
                      width={200}
                      height={200}
                      src={item.Poster}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;
