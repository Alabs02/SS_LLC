import { Fragment } from "react";
import { SpinnerRoundFilled } from "spinners-react";
import { Tracing } from "trace_events";

export type ILoadingBtn = {
  btnCopy: string;
  btnType: "submit" | "button" | "reset";
  btnClasses: string;
  loadingCopy: string;
  isLoading: boolean;
  loaderColor: string;
  onClick: () => void;
}

const LoadingBtn = ({
  btnCopy,
  btnType,
  btnClasses,
  isLoading,
  loadingCopy,
  loaderColor,
  onClick
}: ILoadingBtn) => {
  return (
    <Fragment>
      <button
        type={btnType}
        disabled={isLoading}
        className={"btn " + btnClasses}
      >
        {!isLoading && btnCopy}
        {isLoading &&
          <div className="d-flex align-items-center w-100 justify-content-center">
            <SpinnerRoundFilled
              size={30}
              color={loaderColor}
              thickness={100}
              speed={180}
            />
            <span className="msl-10">{loadingCopy}</span>
          </div>
        }
      </button>
    </Fragment>
  );
}

export default LoadingBtn;