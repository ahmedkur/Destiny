import moment from "moment";

// Handle Formate Date for example (2024-02-24 => Feb 24)
export const formatDate = (inputDate) => {
  const formattedDate = moment(inputDate).format("MMM D");
  return formattedDate;
};
// Handle Truncate Text
export function truncateText(text, limit) {
  if (text?.length > limit) {
    return text.slice(0, limit) + "...";
  } else {
    return text;
  }
}
// Handle Fix Url Of Image
export function getImage(urlPath) {
  if (urlPath != null && urlPath != undefined && urlPath != "") {
    // if (urlPath.startsWith("http://") || urlPath.startsWith("https://")) {
    //   return `${urlPath}`;
    // } else {
    return `${process.env.NEXT_PUBLIC_APP_URL}${urlPath}`;
    // }
  } else {
    return "https://placehold.co/600x600/5c0831/FFF?text=YEM";
  }
}
// Check for Email Validation
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
// Is Valid Password
export const isValidPassword = password => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/.test(password);

