import {
  IoLogoTwitter,
  IoBagHandle,
  IoCameraSharp,
  IoCardSharp,
  IoCartSharp,
  IoChatbox,
  IoCodeSlashSharp,
  IoGameController,
  IoHeadsetSharp,
  IoLogoFacebook,
  IoLogoFigma,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoGoogle,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoPaypal,
  IoLogoReddit,
  IoLogoSnapchat,
  IoLogoTiktok,
  IoLogoTumblr,
  IoLogoTwitch,
  IoLogoUsd,
  IoLogoVenmo,
  IoLogoVimeo,
  IoLogoWechat,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoMusicalNotesSharp,
  IoStorefrontSharp,
  IoVideocamSharp,
  IoWalkSharp,
  IoWalletSharp,
} from "react-icons/io5";

type Props = {
  name: string;
};
const Icon = ({ name }: Props) => {
  switch (name) {
    case "twitter":
      return <IoLogoTwitter size={32} className="text-neutral-950"/>;
      break;
    case "shop":
      return <IoBagHandle size={32} className="text-neutral-950"/>;
      break;
    case "camera":
      return <IoCameraSharp size={32} className="text-neutral-950"/>;
      break;
    case "card":
      return <IoCardSharp size={32} className="text-neutral-950"/>;
      break;
    case "cart":
      return <IoCartSharp size={32} className="text-neutral-950"/>;
      break;
    case "chat":
      return <IoChatbox size={32} className="text-neutral-950"/>;
      break;
    case "code":
      return <IoCodeSlashSharp size={32} className="text-neutral-950"/>;
      break;
    case "game":
      return <IoGameController size={32} className="text-neutral-950"/>;
      break;
    case "audio":
      return <IoHeadsetSharp size={32} className="text-neutral-950"/>;
      break;
    case "facebook":
      return <IoLogoFacebook size={32} className="text-neutral-950"/>;
      break;
    case "figma":
      return <IoLogoFigma size={32} className="text-neutral-950"/>;
      break;
    case "github":
      return <IoLogoGithub size={32} className="text-neutral-950"/>;
      break;
    case "gitlab":
      return <IoLogoGitlab size={32} className="text-neutral-950"/>;
      break;
    case "google":
      return <IoLogoGoogle size={32} className="text-neutral-950"/>;
      break;
    case "instagram":
      return <IoLogoInstagram size={32} className="text-neutral-950"/>;
      break;
    case "linkedin":
      return <IoLogoLinkedin size={32} className="text-neutral-950"/>;
      break;
    case "paypal":
      return <IoLogoPaypal size={32} className="text-neutral-950"/>;
      break;
    case "reddit":
      return <IoLogoReddit size={32} className="text-neutral-950"/>;
      break;
    case "snapchat":
      return <IoLogoSnapchat size={32} className="text-neutral-950"/>;
      break;
    case "tiktok":
      return <IoLogoTiktok size={32} className="text-neutral-950"/>;
      break;
    case "tumblr":
      return <IoLogoTumblr size={32} className="text-neutral-950"/>;
      break;
    case "twitch":
      return <IoLogoTwitch size={32} className="text-neutral-950"/>;
      break;
    case "money":
      return <IoLogoUsd size={32} className="text-neutral-950"/>;
      break;
    case "venmo":
      return <IoLogoVenmo size={32} className="text-neutral-950"/>;
      break;
    case "vimeo":
      return <IoLogoVimeo size={32} className="text-neutral-950"/>;
      break;
    case "wechat":
      return <IoLogoWechat size={32} className="text-neutral-950"/>;
      break;
    case "whatsapp":
      return <IoLogoWhatsapp size={32} className="text-neutral-950"/>;
      break;
    case "youtube":
      return <IoLogoYoutube size={32} className="text-neutral-950"/>;
      break;
    case "music":
      return <IoMusicalNotesSharp size={32} className="text-neutral-950"/>;
      break;
    case "store":
      return <IoStorefrontSharp size={32} className="text-neutral-950"/>;
      break;
    case "video":
      return <IoVideocamSharp size={32} className="text-neutral-950"/>;
      break;
    case "user":
      return <IoWalkSharp size={32} className="text-neutral-950"/>;
      break;
    case "wallet":
      return <IoWalletSharp size={32} className="text-neutral-950"/>;
      break;
  }

  return <div className="text-lg text-neutral-950">No Icon</div>;
};

export default Icon;
