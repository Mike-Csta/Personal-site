import "./MediaBar.scss";
import github from "../img/github.png";
// import MediaElem from "./MediaElem";
import MbElem from "./MbElem";
const MediaBar = () => {
  const media = [
    {
      link: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      nick: "mike-csta",
    },
    {
      link: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      nick: "mike csta",
    },
    {
      link: "https://cdn.pixabay.com/photo/2021/06/15/12/17/instagram-6338401__340.png",
      nick: "mike_csta",
    },
    {
      link: "https://cdn.icon-icons.com/icons2/2699/PNG/512/youtube_logo_icon_168737.png",
      nick: "mike csta",
    },

    {
      link: "https://www.freeiconspng.com/thumbs/logo-twitter-png/logo-twitter-icon-symbol-0.png",
      nick: "mike_csta",
    },
    {
      link: "https://cliply.co/wp-content/uploads/2021/02/372102690_TIKTOK_LOGO_1080.png",
      nick: "mike csta",
    },
    {
      link: "https://cliply.co/wp-content/uploads/2021/02/372102690_TIKTOK_LOGO_1080.png",
      nick: "- - -",
    },
  ];

  return (
    <div className="mb-container">
      <div className="mb-anim1">
        {media.map((e) => (
          <MbElem link={e.link} nick={e.nick} />
        ))}
      </div>
      <div className="mb-anim2">
        {media.map((e) => (
          <MbElem link={e.link} nick={e.nick} />
        ))}
      </div>
    </div>
  );
};

export default MediaBar;
