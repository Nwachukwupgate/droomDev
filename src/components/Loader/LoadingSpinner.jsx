import { Oval } from "react-loader-spinner";

const LoadingSpinner = () => (
  <div className="text-center grid place-content-center">
    <Oval
      height={80}
      width={80}
      color="#734792"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#ab91be"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);

export default LoadingSpinner;
