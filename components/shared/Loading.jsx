import React from "react";
// Import Scoped Style
import styles from "@/styles/components/shared/modal.module.css";
// Others
import { useLoadingStateContext } from "@/context/loadingCtx";
import { useLoadingApiContext } from "@/context/loadingCtx";

const Loading = () => {
  const { setContent } = useLoadingApiContext();
  const { content } = useLoadingStateContext();
  // Handle Closing Loading
  const handleCloseLoading = () => {
    setContent(false);
  };

  // Handle click inside modal content
  const handleContentClick = (e) => {
    e.stopPropagation(); // Stop propagation to outer div
  };

  return (
    <div className={!content ? "hidden" : `${styles.loading} fadeIn`}>
      <div onClick={handleContentClick} className="flex justify-center items-center w-fit">
        {content}
      </div>
    </div>
  );
};

export default Loading;
