import React from "react";
import { REQUEST_ASSISTANCE_PDF_FILENAME, CDN_URL } from "../../config";

import styles from "./request-help-download.module.scss";

const RequestHelpDownload = () => (
  <div className={styles.requestHelpDownload}>
    <a
      href={`${CDN_URL}/documents/${REQUEST_ASSISTANCE_PDF_FILENAME}`}
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      Request Assistance
    </a>
  </div>
);

export default RequestHelpDownload;
