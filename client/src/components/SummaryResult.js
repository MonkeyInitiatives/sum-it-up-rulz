import React, { useState, useReducer } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_SUMMARY } from "../utils/queries";

const SummaryResult = (attr) => {
  const { loading, error, data } = useQuery(QUERY_GET_SUMMARY, {
    variables: { text: attr.text, sentnum: attr.sentnum },
  });

  if (!attr.text) {
    return <span>No text to summarize.</span>;
  }

  if (data && data.getSummary)
  {
    let summary = data.getSummary.sentences;
    if (summary) {
      return (
        <textarea name="" id="" cols="100" rows="10">
          { summary }
        </textarea>
      );
    } else {
      <span>no summary</span>;
    }
  }
  return(
    <span>Summary is being compiled</span>

  )
};

export default SummaryResult;
