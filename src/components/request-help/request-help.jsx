import React from "react";
import RequestHelpDownload from "../request-help-download";

import styles from "./request-help.module.scss";

const RequestHelp = () => (
  <div className={styles.requestHelp}>
    <div className={styles.requestHelp__title}>Need Assistance?</div>
    <RequestHelpDownload />
  </div>
);

export default RequestHelp;
