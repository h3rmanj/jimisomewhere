import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import { BarLoader } from 'react-spinners'
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const Booklet = () => {
  const [maxPages, setMaxPages] = useState(0);
  const [page, setPage] = useState(1);
  const [firstPageRendered, setFirstPageRendered] = useState(false);
  const [firstPageLoaded, setFirstPageLoaded] = useState(false);
  const [lastPageLoaded, setLastPageLoaded] = useState(false);

  const [width, setWidth] = useState(window.innerWidth / 2);

  useEffect(() => {
    const listener = ({ target: { innerWidth }}) => {
      const newWidth = innerWidth / 2;
      setWidth(newWidth < 650 ? 650 : newWidth)
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [setWidth])

  const onLoadSuccess = useCallback(({numPages}) => setMaxPages(numPages), []);
  const nextPage = useCallback(() => setPage(p => p >= maxPages ? maxPages : p+1), [maxPages]);
  const prevPage = useCallback(() => setPage(p => p <= 1 ? 1 : p-1), []);

  return (
    <>
      <Document
        file='/booklet.pdf'
        options={{
          cMapUrl: 'cmaps/',
          cMapPacked: true
        }}
        loading={<BarLoader color='#89A000' width={200} height={8} css={{width: '100%', margin: '30% auto'}}/>}
        onLoadSuccess={onLoadSuccess}
      >
        <div style={{display: firstPageRendered ? 'inherit' : 'none'}}>
          <Page
            width={width}
            pageNumber={page}
            loading={<BarLoader color='#FFFFFF' width={200} height={8} css={{width: '100%', margin: '30% auto'}}/>}
            onLoadSuccess={page === 1 ? () => setFirstPageLoaded(true) : null}
            onRenderSuccess={page === 1 ? () => setFirstPageRendered(true) : null}/>

          {firstPageLoaded && !lastPageLoaded &&
            <div style={{display: 'none'}}>
              <Page
                pageNumber={page >= maxPages ? maxPages : page + 1}
                onLoadSuccess={page + 1 === maxPages ? () => setLastPageLoaded(true) : null} />
            </div>
          }
        </div>
      </Document>
      {firstPageRendered &&
        <div className="MusicLinks">
          <span onClick={prevPage}>PREV</span>
          <span onClick={nextPage}>NEXT</span>
        </div>
      }


      <div className="mBack">
        <Link to="/music">BACK</Link>
      </div>
    </>
  );
}

export default Booklet;
