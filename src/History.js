import { useContext, useEffect, useState } from "react";
const History = ({ToggleHistory, history}) => {
  return (
    <>
      {history && (
        <div className="history-panel">
          <div className="history-header">
            <button
              type="button"
              onClick={ToggleHistory}
              className="close-panel-btn"
            >
              <span className="fa fa-times"></span>
            </button>
            <h4 className="history-title"> تاریخچه محاسبات </h4>
          </div>

          <div className="history-item-container">
            <ul>
              <li></li>
            </ul>
            {/* {!props && (
          <div className="empty-img-container">
            
            <img
              className="empty-icon"
              alt="empty-history-icon"
              src="wired-outline-243-glasses-eye-blink.gif"
              srcSet=""
            />
            <h3> هیچ محاسباتی صورت نگرفته است </h3>
          </div>
        )} */}
          </div>
        </div>
      )}
    </>
  );
};

export default History;
