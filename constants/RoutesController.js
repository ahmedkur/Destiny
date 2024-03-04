// RoutesController.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const RoutesController = (WrappedComponent, allowedUserTypes = []) => {
  return (props) => {
    // return <WrappedComponent {...props} />;
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Example authentication check:
      const isAuthenticated = localStorage.getItem("adminInfo");
      if (
        isAuthenticated == null ||
        isAuthenticated == undefined ||
        isAuthenticated == ""
      ) {
        router.push("/");
        return;
      }

      // Example authorization check:
      // const userType = localStorage.getItem("userType");
      // if (!allowedUserTypes.includes(userType)) {
      //   router.push("/404");
      //   return;
      // }

      // Set loading to false when the checks are complete
      setIsLoading(false);
    }, []);

    // Render nothing until loading is complete
    if (isLoading) {
      return null; // or you can return a loading indicator
    }

    // Render the wrapped component when loading is complete
    return <WrappedComponent {...props} />;
  };
};

export default RoutesController;
