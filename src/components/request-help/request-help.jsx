import React from "react";
import RequestHelpDownload from "../request-help-download";

import "./request-help.scss";

const RequestHelp = () => (
  <div className="request-help">
    <div className="request-help__title">Need Assistance?</div>
    <RequestHelpDownload />
  </div>
);

export default RequestHelp;
