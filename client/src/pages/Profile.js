import React from "react";
import './Style.css'
import TextSummarySubmit from '../components/SummarySubmitandSave'

function Profile() {

  return <div className="app-container">
    <div className="left-area">


    <a href="/profile" className="item-link active" id="pageLink">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-grid" viewBox="0 0 24 24">
          <defs />
          <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
        </svg>
      </a>
      <a href="/summary" className="item-link" id="pageLink">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-folder" viewBox="0 0 24 24">
          <defs />
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
        </svg>
      </a>
      
      
    </div>
    <div className="main-area">
      <button className="btn-show-right-area">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button className="btn-show-left-area">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
      </button>

      <section className="content-section">
        <h1 className="section-header">Quick Access</h1>
        <div className="access-links" >
          <div className="access-link-wrapper">
            

            <a className="access-text" href="/summary">
            <div className="access-icon" >
              <i class="fa-regular fa-comment-dots"></i>
            </div>
              Summaries</a>
          </div>
          
          
        </div>
      </section>
     <TextSummarySubmit/>

      
    </div>
    <div className="right-area">
      <button className="btn-close-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-x-circle" viewBox="0 0 24 24">
          <defs />
          <circle cx="12" cy="12" r="10" />
          <path d="M15 9l-6 6M9 9l6 6" />
        </svg>
      </button>
      <div className="right-area-header-wrapper">
        <p className="right-area-header">History</p>
      </div>
      <div className="download-item-line">
        <ul>
          <li>
            <div className="line-header">Date Created</div>
            <div className="download-area">
              <div className="download-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="">
                  <defs></defs>
                  <circle cx="256" cy="256" r="256" fill="#4b50dd"></circle>
                  <path fill="#f5f5f5" d="M192 64h176c4.4 0 8 3.6 8 8v328c0 4.4-3.6 8-8 8H120c-4.4 0-8-3.6-8-8V148l80-84z"></path>
                  <path fill="#e6e6e6" d="M184 148c4.4 0 8-3.6 8-8V64l-80 84h72z"></path>
                  <circle cx="352" cy="384" r="52" fill="#2179a6"></circle>
                  <g fill="#f5f5f5" className="g">
                    <path d="M352 416c-2.208 0-4-1.788-4-4v-56c0-2.212 1.792-4 4-4s4 1.788 4 4v56c0 2.212-1.792 4-4 4z"></path>
                    <path d="M352 416a3.989 3.989 0 01-2.828-1.172l-20-20c-1.564-1.564-1.564-4.092 0-5.656s4.092-1.564 5.656 0L352 406.344l17.172-17.172c1.564-1.564 4.092-1.564 5.656 0s1.564 4.092 0 5.656l-20 20A3.989 3.989 0 01352 416z"></path>
                  </g>
                </svg>
              </div>
              <div className="download-item-texts">
                <p className="download-text-header">Project name</p>
                <p className="download-text-info">Project catagory</p>
              </div>
            </div>
          </li>
        </ul>
      </div>


    </div>
  </div>

}
export default Profile