import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import s from "./Networks.module.scss";
import LinkComponent from "../Link/Link";

export default function Networks() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)


  const controlNavBar = () => {
    if(typeof window !== 'undefined'){
      if(window.scrollY > lastScrollY){
        setShow(false)
      }else{
        setShow(true)
      }

      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if(typeof window !== 'undefined'){
      window.addEventListener('scroll', controlNavBar)

      return () => {
        window.removeEventListener('scroll', controlNavBar)
      }
    }
  },[lastScrollY])


  return (
    <div className={show ? s.container : s.hidden}>
      <div>
        <p className={s.mail}>facundopellicer4@gmail.com</p>
        <p>-</p>
        <LinkComponent href="https://www.instagram.com/facu_pellicer/" color="celeste">
          <FontAwesomeIcon icon={faInstagram} />
        </LinkComponent>
        <p>-</p>
        <LinkComponent href="https://twitter.com/Pelliscame" color="celeste">
          <FontAwesomeIcon icon={faTwitter} />
        </LinkComponent>
        <p>-</p>
        <LinkComponent href="https://www.linkedin.com/in/facundo-pellicer-full-stack-developer/" color="celeste">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </LinkComponent>
        <p>-</p>
        <LinkComponent href="https://github.com/Facupelli" color="celeste">
          <FontAwesomeIcon icon={faGithub} />
        </LinkComponent>
      </div>
    </div>
  );
}
