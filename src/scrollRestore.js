import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const { pathname } = useLocation();
  const [prevPathname, setPrevPathname] = useState("");

  useEffect(() => {
    if (prevPathname !== "/") {
      window.scrollTo(0, 0);
      setPrevPathname("post"); 
    }
  }, [pathname, prevPathname]);

  return null;
}; 

export default ScrollRestoration;
