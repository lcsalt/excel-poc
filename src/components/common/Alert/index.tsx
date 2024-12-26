import { useState, useEffect, CSSProperties } from "react";
import styles from "./alert.module.css";
import { AlertTypes, getAlertSvg } from "./alertTypes";

type AlertComponentPropTypes = {
  children?: any;
  title?: string;
  message?: string;
  dismiss?: string;
  type?: AlertTypes;
  customStyles?: CSSProperties;
  customTitleStyles?: CSSProperties;
  customMessageStyles?: CSSProperties;
  customDismissStyles?: CSSProperties;
  customColor?: string;
  isErrorVisible?: boolean;
  onDismiss?: () => any;
};

const Alert = ({
  children,
  title,
  message,
  dismiss = "Dismiss",
  type = "success",
  customStyles,
  customTitleStyles,
  customMessageStyles,
  customDismissStyles,
  customColor,
  isErrorVisible,
  onDismiss,
}: AlertComponentPropTypes) => {
  //types: success, warn, error, info
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!isErrorVisible) return;
    setVisible(true);
  }, [isErrorVisible]);
  const dismissAlert = () => {
    setVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <>
      {visible && (
        <div className={styles.container}>
          <div
            id="alert"
            style={{ ...customStyles }}
            className={
              visible ? styles[`base_alert_${type}`] : styles.invisible
            }
          >
            <div className={styles.innerContainer}>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                {getAlertSvg({ type, customColor, children })}
                <p
                  style={{ ...customTitleStyles }}
                  className={styles.base_alert_title}
                >
                  {title}
                </p>
              </div>
              <div className={styles.dot} />
              {/*TODO: esto es dot? que es */}
              <p
                style={{ ...customMessageStyles }}
                className={styles.base_alert_message}
              >
                {message}
              </p>
            </div>
            <div className={styles.dismissContainer}>
              <span
                onClick={dismissAlert}
                style={{ ...customDismissStyles }}
                className={styles.base_alert_dismiss}
              >
                {dismiss}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
