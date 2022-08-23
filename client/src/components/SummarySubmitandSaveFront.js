import React, { useState, useReducer } from "react";
import SummaryResults from "./SummaryResult"

import summation from './summationsymble.png'
const axios = require('axios').default;
require('dotenv').config()

// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../../utils/mutations";
// import Auth from "../../utils/auth";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "../../context/UserContext";
// import reducer from "../../context/reducers";

const TextSummarySubmitFront= () => {
  // const [login, { error, data }] = useMutation(LOGIN_USER);
  // let navigate = useNavigate();
  // const initialState = useUser();
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [formState, setFormState] = useState("");
  const [summarizedState, setsummarizedState] = useState();
  const [sentenceNum, setsentenceNum] = useState(1)
  const [sumarizeMe, setSumarizeMe] = useState(null)
  // const { loading, error, data } = useQuery(QUERY_GET_SUMMARY, {
  //   variables: {"text": formState , "sentnum":sentenceNum}
  // });

  const handleChange = (event) => {
    const value = event.target.value;
    setFormState(value);
    
  };
  const handleInputChange = (event) => {
    const value = event.target.value;
    setsentenceNum(parseInt(value));
  };

  let results = null;
  const onFormSubmit = async (event) => {
    setSumarizeMe(formState)
  };

  // const result = await login({
  //   variables: { ...formState },
  // });
  // console.log(result);
  // Auth.login(dispatch, result.data.login.token, result.data, navigate);
  return (
    


    <section className="content-section">
      <div className="section-header-wrapper">
        <h1 className="section-header">Add text to Summarize</h1>
        <h1 className="section-header">Summary</h1>
        
      </div>
      <div className="content-section-line">
        <div className="section-part left">
          <div className="image-wrapper">
            <div className="image-overlay">
              <div className="video-info">
                <div className="video-info-text">
                  <form className="section-part left" onSubmit={onFormSubmit}>
                    Add Discription Of The Summary
                    <div className="search-wrapper mt-3 file-name" id="summary-input-area">
                      <textarea rows="20" cols="50" className="input" type="text" name="text" value={formState.text} onChange={handleChange} placeholder="Paste Text to Summarize here" />
                    </div>

                    <div class="search-wrapper mt-1 file-catagory" id="summary-sentance-num">
                      <input class="input" type="number" name="sentenceNum" value={sentenceNum.sentenceNum} onChange={handleInputChange} placeholder="Number of sentences e.g. 3 or 5. Default is 1" min="1" />
                    </div>

                    <button type="button" onClick={onFormSubmit} class="btn btn-secondary btn-main m-2 submit_for_summery">Summarize!</button>


                  </form>-m 
                </div>

              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80" />

          </div>

        </div>

        <div className="section-header-wrapper">


        </div>

        <div className="files-table w-50 ">

          <div className="files-table-header">

            <ol>
              <li className="files-table-row"> { (sumarizeMe) ? <SummaryResults  text={sumarizeMe} sentnum={sentenceNum} /> : null}</li>
              
            </ol>
           
          </div>
          

          
          
      </div>
    </div>

    </section >



  );
};

export default TextSummarySubmitFront;
