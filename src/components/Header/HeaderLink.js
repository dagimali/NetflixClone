/** @format */

import React from "react";

function HeaderLink({ Title, url }) {
  // const [Title, setTitle] = useState(Titles);
  // useEffect(() => {
  //   setTitle(Title);
  // }, [Title]);

  // console.log(Title);
  return (
    <li>
      <a href={url}>{Title}</a>
    </li>
  );
}

export default HeaderLink;
