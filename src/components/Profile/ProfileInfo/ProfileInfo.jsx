import React from "react";
import style from "./ProfileInfo.module.scss";
import preloader from "../../../assets/images/preloader.svg";
import lookingImg from "../../../assets/images/looking-job.jpg";
import photoNull from "../../../assets/images/user-icon.png";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <img className={style.preloader} src={preloader} alt="preloader"/>
  }

  return (
    <div className={style.profileInfo}>
      <div className={style.bg}>
        <img
          src="https://images.unsplash.com/photo-1541442510208-33bf9a34886f?ixlib=rb-1.2.1&w=1000&q=80"
          alt="preloader"
        />
      </div>
      <div className={style.info}>
        <div className={style.info__img}>
          {props.profile.photos.large
            ?
            <img src={props.profile.photos.large} alt="user-icon"/>
            :
            <img src={photoNull} alt="no-icon"/>
          }
        </div>
        <div className={style.info__content}>
          <div className={style.info__holder}>
            <div className={style.info__inner}>
              <h3>{props.profile.fullName}</h3>
              <span className={style.info__status}>{props.profile.aboutMe}</span>
              {props.profile.lookingForAJob
                ?
                <div className={style.info__looking}>
                  <div className={style.info__looking_img}>
                    <img src={lookingImg} alt="looking-job"/>
                  </div>
                  <span className={style.info__looking_txt}>{props.profile.lookingForAJobDescription}</span>
                </div>
                : null
              }
            </div>
            <div className={style.info__inner}>
              <h3>Contacts</h3>
              <ul>
                {props.profile.contacts.facebook
                  ?
                <li>
                  <a href={props.profile.contacts.facebook}>
                    <svg viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg">
                      <path d="m483.738281 0h-455.5c-15.597656.0078125-28.24218725 12.660156-28.238281 28.261719v455.5c.0078125 15.597656 12.660156 28.242187 28.261719 28.238281h455.476562c15.605469.003906 28.257813-12.644531 28.261719-28.25 0-.003906 0-.007812 0-.011719v-455.5c-.007812-15.597656-12.660156-28.24218725-28.261719-28.238281zm0 0" fill="#4267b2"/>
                      <path d="m353.5 512v-198h66.75l10-77.5h-76.75v-49.359375c0-22.386719 6.214844-37.640625 38.316406-37.640625h40.683594v-69.128906c-7.078125-.941406-31.363281-3.046875-59.621094-3.046875-59 0-99.378906 36-99.378906 102.140625v57.035156h-66.5v77.5h66.5v198zm0 0" fill="#fff"/>
                    </svg>
                  </a>
                </li>
                  : null
                }
                {props.profile.contacts.vk
                  ?
                  <li>
                    <a href={props.profile.contacts.vk}>
                      <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739v-5.105c0-.656-.187-.949-.74-.949h-4.126c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001h-2.625c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553 2.17 3.058 5.226 4.715 8.006 4.715 1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667 1.783 1.749 2.076 2.532 3.074 2.532h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z" fill="#4b729f"/>
                      </svg>
                    </a>
                  </li>
                  : null
                }
                {props.profile.contacts.github
                  ?
                  <li>
                    <a href={props.profile.contacts.github}>
                      <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="#212121"/>
                      </svg>
                    </a>
                  </li>
                  : null
                }
                {props.profile.contacts.youtube
                  ?
                  <li>
                    <a href={props.profile.contacts.youtube}>
                      <svg viewBox="0 -77 512.00213 512" xmlns="http://www.w3.org/2000/svg"><path d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0" fill="#f00"/><path d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0" fill="#fff"/></svg>
                    </a>
                  </li>
                  : null
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
