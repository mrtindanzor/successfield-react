export default class icons{
  static chevronDown(classname, title){
    return (
      <svg  viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title>
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
      </svg>
    )
  }

  static menu(classname, title){
    return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title>
    <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"/>
    </svg>
    )
  }

  static arrowRight(classname, title){
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"/></svg>
    )
  }

  static arrowLeft(classname, title){
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"/></svg>
    )
  }

  static fillDown(classname, title){
    return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M12 14L8 10H16L12 14Z"/></svg>
    )
  }

  static close(classname, title){
    return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"/></svg>
    )
  }

  static userLine(classname, title){
    return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M11.9999 17C15.6623 17 18.8649 18.5751 20.607 20.9247L18.765 21.796C17.3473 20.1157 14.8473 19 11.9999 19C9.15248 19 6.65252 20.1157 5.23479 21.796L3.39355 20.9238C5.13576 18.5747 8.33796 17 11.9999 17ZM11.9999 2C14.7613 2 16.9999 4.23858 16.9999 7V10C16.9999 12.6888 14.8776 14.8818 12.2168 14.9954L11.9999 15C9.23847 15 6.9999 12.7614 6.9999 10V7C6.9999 4.31125 9.1222 2.11818 11.783 2.00462L11.9999 2ZM11.9999 4C10.4022 4 9.09623 5.24892 9.00499 6.82373L8.9999 7V10C8.9999 11.6569 10.343 13 11.9999 13C13.5976 13 14.9036 11.7511 14.9948 10.1763L14.9999 10V7C14.9999 5.34315 13.6567 4 11.9999 4Z"/></svg>
    )
  }

  static mail(classname, title){
    return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"/></svg>
    )
  }

  static whatsapp(classname, title){
    return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z"/></svg>
  )
  }

  static eyeOpen(classname, title){
    return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"/></svg>
    )
  }

  static eyeClose(classname, title){
    return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z"/></svg>
    )
  }

  static cartLine(classname, title){
    return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title>
    <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"/>
    </svg>
    )
  }

  static twitter(classname, title){
    return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"/></svg>
    )
  }

  static alert(classname, title){
    return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"/></svg>
    )
  }

  static pencilFill(classname, title){
    return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"/></svg>
    )
  }

  static chevronLeft(classname, title){
    return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M8.36853 12L13.1162 3.03212L14.8838 3.9679L10.6315 12L14.8838 20.0321L13.1162 20.9679L8.36853 12Z"/></svg>
    )
  }

  static chevronRight(classname, title){
    return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M15.6315 12L10.8838 3.03212L9.11622 3.9679L13.3685 12L9.11622 20.0321L10.8838 20.9679L15.6315 12Z"/></svg>
    )
  }
  

  static login(classname, title){
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z"/></svg>
    )
  }

  static signUp(classname, title){
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <title>{title}</title><path d="M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"/></svg>
    )
  }

  static logo(classname, title){
    return (
     <svg  version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900.000000 1002.000000" className={classname}>
     <title>{title}</title>
       <g transform="translate(0.000000,1002.000000) scale(0.100000,-0.100000)" fill="#058f07" stroke="none"> <path d="M4330 8354 c-19 -2 -87 -8 -150 -14 -218 -20 -520 -82 -695 -142 -16 -5 -43 -13 -60 -18 -16 -5 -55 -18 -85 -30 -30 -12 -66 -25 -80 -30 -76 -25 -360 -162 -435 -210 -16 -11 -39 -24 -50 -29 -11 -5 -37 -21 -58 -35 -21 -14 -40 -26 -44 -26 -3 0 -22 -13 -42 -29 -20 -15 -65 -48 -101 -72 -36 -25 -76 -54 -90 -66 -14 -11 -65 -54 -115 -96 -244 -202 -512 -518 -707 -832 -76 -122 -218 -408 -218 -438 0 -7 -4 -17 -9 -23 -10 -10 -29 -61 -62 -164 -11 -36 -27 -80 -35 -98 -8 -18 -14 -40 -14 -48 0 -9 -7 -37 -15 -63 -72 -230 -124 -607 -125 -896 0 -244 41 -574 96 -771 8 -28 14 -59 14 -70 0 -10 6 -36 14 -59 8 -22 22 -67 31 -100 20 -67 36 -112 91 -257 36 -93 127 -283 179 -373 19 -33 39 -69 45 -80 46 -85 242 -368 289 -416 9 -9 41 -45 71 -80 153 -178 316 -329 525 -485 136 -101 212 -153 270 -184 11 -6 34 -19 50 -29 85 -55 208 -116 390 -195 17 -7 47 -21 68 -30 21 -9 42 -16 48 -16 6 0 25 -6 42 -13 50 -21 99 -38 137 -47 71 -18 126 -33 163 -46 20 -8 47 -14 59 -14 12 0 44 -6 72 -14 65 -18 207 -42 364 -61 294 -36 786 -6 1028 61 28 8 59 14 69 14 10 0 43 7 74 16 31 9 79 22 106 30 74 21 163 50 225 74 30 12 66 25 80 30 131 43 483 230 625 332 169 121 223 162 315 242 159 136 251 232 419 432 67 79 233 318 271 389 6 11 26 47 45 80 51 88 165 322 165 339 0 8 4 17 10 21 5 3 14 20 19 38 5 18 19 57 31 87 12 30 27 75 35 100 7 25 20 70 29 100 10 30 21 75 27 99 5 25 13 59 18 75 42 140 81 417 97 691 7 130 -18 491 -45 630 -66 340 -115 511 -226 780 -34 82 -112 247 -135 285 -5 8 -30 51 -56 95 -269 457 -613 818 -1072 1123 -51 34 -95 62 -97 62 -2 0 -36 19 -77 43 -99 58 -267 139 -433 207 -35 14 -218 74 -290 94 -138 40 -163 46 -183 46 -12 0 -41 6 -64 14 -42 13 -185 36 -358 56 -90 11 -421 21 -480 14z m529 -138 c172 -22 218 -30 406 -76 28 -7 66 -16 85 -21 81 -19 189 -54 323 -105 164 -63 396 -183 592 -307 10 -6 89 -64 175 -127 325 -240 645 -602 861 -975 101 -174 247 -512 279 -645 5 -19 18 -66 29 -105 12 -38 24 -83 27 -100 3 -16 12 -57 19 -90 48 -209 70 -412 70 -660 0 -256 -27 -516 -71 -671 -8 -28 -14 -63 -14 -78 0 -15 -5 -36 -10 -47 -6 -10 -15 -38 -20 -61 -14 -68 -40 -151 -78 -253 -45 -124 -43 -118 -87 -220 -47 -108 -154 -314 -180 -345 -6 -8 -15 -22 -19 -30 -23 -50 -142 -219 -242 -344 -93 -115 -281 -310 -399 -412 -250 -216 -550 -403 -855 -532 -19 -8 -47 -21 -62 -29 -14 -7 -34 -13 -43 -13 -9 0 -29 -6 -43 -14 -24 -12 -97 -36 -281 -90 -29 -9 -60 -16 -69 -16 -8 0 -38 -6 -66 -14 -28 -8 -91 -22 -141 -30 -406 -71 -866 -61 -1225 26 -25 6 -65 14 -90 19 -25 5 -76 18 -115 29 -38 12 -83 25 -100 30 -29 8 -59 18 -135 45 -135 49 -340 143 -455 210 -33 19 -69 39 -80 45 -43 23 -170 107 -275 182 -188 134 -476 416 -626 613 -87 115 -184 252 -184 260 0 2 -12 21 -26 42 -14 21 -30 47 -35 58 -5 11 -19 36 -30 55 -28 45 -90 168 -124 245 -55 124 -57 128 -99 243 -23 63 -64 204 -90 307 -13 55 -28 126 -56 265 -18 92 -40 367 -40 515 0 208 26 481 62 625 6 25 14 68 18 96 4 28 13 61 19 72 6 11 11 31 11 44 0 21 7 45 40 138 6 19 15 49 20 65 5 17 18 55 30 85 12 30 25 66 29 80 20 62 141 310 204 420 48 82 184 290 196 300 3 3 19 23 36 45 110 150 345 397 488 514 133 108 256 198 335 246 9 6 35 22 57 36 22 14 47 29 55 32 8 4 31 17 50 28 76 46 350 179 370 179 5 0 26 7 47 16 67 29 77 33 143 54 154 49 231 69 350 94 158 32 239 45 365 56 72 7 135 14 140 16 24 9 420 -6 534 -20z"/> <path d="M4170 8098 c-188 -19 -439 -70 -565 -114 -23 -8 -47 -14 -54 -14 -7 0 -27 -6 -44 -14 -18 -8 -59 -23 -92 -34 -122 -41 -356 -152 -500 -237 -92 -54 -290 -189 -336 -229 -20 -17 -54 -44 -75 -61 -80 -62 -344 -331 -420 -427 -44 -55 -84 -106 -89 -112 -20 -22 -132 -192 -182 -276 -44 -75 -154 -292 -189 -375 -7 -16 -19 -46 -27 -65 -15 -34 -63 -177 -91 -270 -8 -25 -22 -76 -31 -115 -9 -38 -23 -95 -31 -126 -8 -30 -14 -69 -14 -87 0 -17 -6 -59 -14 -94 -28 -124 -40 -433 -26 -642 7 -105 18 -219 26 -254 8 -35 14 -77 14 -93 0 -90 122 -503 206 -694 81 -186 226 -450 296 -540 5 -5 40 -53 78 -105 220 -297 547 -593 868 -785 9 -6 35 -22 57 -36 48 -31 246 -130 330 -166 283 -121 590 -202 890 -235 153 -17 515 -17 670 0 452 49 886 196 1287 438 313 188 626 473 866 789 87 115 111 152 215 328 56 94 139 266 187 387 12 30 26 66 32 80 9 23 31 90 63 190 74 234 130 619 130 890 0 616 -198 1251 -550 1765 -339 495 -860 912 -1410 1127 -22 9 -58 23 -80 32 -22 9 -85 29 -140 46 -55 17 -113 35 -130 40 -100 30 -345 74 -505 90 -123 12 -497 11 -620 -2z m170 -149 c6 -11 10 -30 8 -42 -3 -20 -12 -23 -91 -33 -101 -12 -116 -23 -98 -69 7 -18 17 -20 97 -20 l89 0 3 -28 c5 -45 -13 -57 -83 -57 -88 0 -95 -4 -95 -55 0 -63 13 -70 110 -55 86 13 103 9 113 -31 9 -33 -17 -46 -123 -57 -145 -17 -159 -16 -169 11 -11 25 -27 171 -37 324 l-6 101 58 7 c33 3 79 10 104 14 80 15 108 13 120 -10z m190 6 c10 -12 12 -55 7 -181 -4 -123 -3 -166 6 -169 7 -2 48 -7 92 -12 79 -8 80 -9 83 -37 2 -16 -2 -32 -10 -37 -7 -5 -63 -9 -125 -9 -90 0 -115 3 -128 16 -14 15 -15 39 -9 213 4 108 11 204 16 214 11 21 51 22 68 2z m459 -30 c64 -16 93 -42 116 -102 13 -34 16 -61 12 -107 -17 -175 -104 -265 -227 -237 -25 6 -58 11 -75 11 -49 1 -58 12 -56 72 1 29 6 67 12 85 5 17 14 62 18 100 12 97 33 187 45 195 13 8 82 1 155 -17z m-1035 -20 c8 -9 18 -30 20 -48 9 -51 26 -146 43 -227 25 -123 26 -139 13 -155 -15 -18 -54 -20 -67 -2 -6 6 -18 57 -28 112 -9 55 -23 123 -30 150 -8 28 -17 76 -20 107 -7 54 -6 58 16 67 33 13 35 13 53 -4z m-150 -49 c10 -41 -3 -54 -74 -75 -38 -12 -72 -26 -75 -31 -11 -18 6 -69 25 -75 10 -3 35 1 55 10 54 22 84 19 94 -7 14 -39 -2 -62 -50 -71 -24 -5 -52 -17 -62 -26 -18 -17 -18 -20 2 -79 28 -83 27 -97 -10 -112 -43 -18 -49 -8 -94 145 -20 72 -44 150 -51 175 -8 25 -16 58 -17 74 -2 26 3 30 48 46 157 57 200 63 209 26z m1774 -85 c60 -31 84 -64 90 -121 4 -40 1 -51 -12 -56 -32 -12 -61 5 -81 48 -13 28 -29 46 -47 52 -62 21 -138 -79 -142 -187 -1 -42 3 -52 27 -73 35 -30 36 -30 81 1 45 30 66 31 89 5 24 -28 22 -33 -21 -72 -46 -42 -96 -54 -153 -37 -50 16 -108 79 -111 123 -4 64 4 138 18 164 8 15 14 31 14 36 0 19 73 97 108 116 47 25 93 25 140 1z m-2141 -67 c23 -18 33 -33 31 -47 -4 -28 -51 -46 -78 -29 -28 17 -70 15 -92 -5 -22 -20 -22 -27 -3 -47 12 -12 32 -14 98 -9 75 5 85 3 117 -19 59 -40 83 -117 57 -180 -23 -55 -87 -92 -159 -92 -52 -1 -61 3 -93 34 -41 39 -43 68 -6 87 21 10 28 9 49 -8 37 -28 95 -26 116 6 38 57 9 78 -96 69 -85 -8 -122 6 -159 57 -65 91 7 207 130 208 44 1 61 -4 88 -25z m2529 -124 c55 -31 87 -74 98 -129 20 -106 -87 -274 -190 -300 -95 -24 -204 41 -219 130 -19 113 43 239 148 299 65 37 99 37 163 0z m-2869 -53 c47 -47 7 -90 -63 -67 -29 10 -39 9 -60 -5 -33 -21 -40 -43 -21 -62 15 -15 23 -15 91 1 98 24 147 11 188 -49 57 -82 25 -175 -75 -224 -52 -25 -78 -26 -120 -5 -54 28 -78 54 -66 75 17 33 41 39 83 19 43 -20 65 -17 95 11 29 28 27 67 -4 81 -20 9 -36 8 -79 -5 -81 -26 -116 -22 -160 16 -56 48 -65 137 -19 189 53 60 163 73 210 25z m3155 -144 c10 -9 18 -22 18 -29 0 -6 -39 -61 -86 -121 -136 -170 -133 -158 -49 -219 60 -43 71 -76 37 -107 -17 -16 -21 -15 -63 16 -106 77 -159 123 -159 138 0 9 10 29 22 45 13 16 26 34 30 39 4 6 24 30 44 55 20 25 63 80 96 123 61 79 78 89 110 60z m-3498 -34 c20 -29 15 -38 -60 -99 -35 -30 -64 -59 -64 -64 1 -6 9 -21 20 -34 25 -30 41 -24 105 34 55 50 78 53 103 12 16 -26 15 -28 -13 -50 -52 -40 -105 -90 -105 -98 0 -14 51 -70 63 -70 7 0 41 25 77 55 35 30 71 55 80 55 24 0 40 -21 39 -49 0 -20 -22 -43 -98 -103 -54 -43 -106 -78 -114 -78 -9 0 -22 8 -29 18 -14 21 -52 66 -170 209 -80 96 -91 120 -60 139 25 16 156 128 160 137 7 15 52 6 66 -14z m1996 -50 c25 -6 77 -14 115 -19 83 -9 184 -29 206 -40 9 -5 34 -12 55 -15 22 -4 53 -13 69 -20 17 -7 57 -21 90 -31 33 -10 69 -24 80 -31 11 -7 26 -13 33 -13 19 0 225 -105 297 -151 17 -10 37 -22 45 -26 8 -4 20 -11 25 -15 6 -5 42 -31 80 -58 83 -58 70 -48 175 -137 252 -211 488 -535 620 -848 11 -27 25 -58 30 -67 6 -10 10 -22 10 -27 0 -5 5 -22 12 -38 70 -168 137 -547 138 -778 0 -123 -22 -341 -46 -455 -31 -150 -45 -206 -60 -237 -8 -17 -14 -37 -14 -45 0 -26 -63 -182 -120 -298 -59 -121 -165 -295 -219 -360 -11 -14 -24 -29 -28 -35 -70 -88 -106 -128 -208 -231 -66 -66 -151 -145 -190 -174 -38 -29 -72 -55 -75 -59 -11 -14 -153 -104 -265 -168 -62 -35 -230 -113 -244 -113 -7 0 -22 -5 -34 -12 -27 -15 -118 -47 -134 -48 -6 0 -24 -5 -40 -12 -39 -16 -126 -37 -202 -48 -35 -5 -77 -14 -95 -19 -65 -21 -360 -33 -529 -21 -89 6 -176 15 -193 21 -18 5 -60 14 -95 19 -79 11 -181 33 -194 41 -5 3 -44 17 -85 30 -41 12 -84 29 -95 36 -11 7 -28 13 -37 13 -10 0 -26 4 -36 9 -9 5 -57 29 -107 54 -49 24 -110 55 -135 68 -52 29 -243 154 -262 172 -7 7 -44 37 -83 68 -91 72 -233 215 -304 304 -30 39 -58 72 -62 75 -11 8 -159 231 -159 240 0 5 -6 15 -12 22 -24 24 -116 220 -158 333 -12 33 -26 68 -31 77 -5 10 -9 24 -9 32 0 8 -5 27 -12 43 -13 31 -34 120 -47 200 -5 29 -14 67 -19 85 -10 31 -35 305 -35 373 0 58 25 359 30 368 2 4 11 43 18 85 20 112 40 194 53 219 7 12 12 30 12 41 0 11 7 33 15 48 8 16 15 38 15 49 0 11 7 29 15 39 8 11 15 26 15 33 0 12 50 127 71 163 5 8 20 38 34 65 30 58 35 66 95 160 135 211 328 424 519 573 47 36 88 70 89 74 2 4 8 8 14 8 6 0 27 13 47 28 20 16 43 32 51 35 8 4 29 16 45 26 51 33 197 109 265 138 19 8 49 21 65 28 17 7 55 21 85 30 30 10 69 23 85 30 17 8 49 17 72 20 24 4 45 11 49 16 3 5 23 9 45 9 22 0 56 7 76 15 19 8 56 15 82 16 25 0 73 6 106 14 74 16 459 19 525 4z m1790 -151 c11 -12 20 -24 20 -28 0 -3 -54 -59 -120 -125 -66 -66 -120 -126 -120 -133 0 -8 25 -39 55 -69 30 -30 55 -60 55 -67 -1 -20 -27 -46 -46 -46 -23 0 -184 159 -184 182 0 20 286 308 306 308 7 0 22 -10 34 -22z m-4050 -98 c24 -19 25 -20 8 -47 -14 -24 -23 -28 -62 -28 -57 0 -81 -21 -81 -74 0 -49 56 -120 118 -150 54 -26 68 -26 101 0 28 22 33 50 15 96 -9 24 -7 30 11 45 12 10 30 18 39 18 26 0 51 -56 51 -115 0 -47 -4 -57 -37 -94 -64 -72 -155 -76 -251 -13 -98 64 -151 159 -137 246 6 31 19 52 56 89 45 43 53 47 96 47 32 0 57 -7 73 -20z m4370 -260 c73 -98 77 -115 30 -140 -24 -13 -39 1 -110 98 -27 36 -45 40 -72 15 -26 -23 -23 -31 28 -96 25 -32 44 -66 42 -75 -2 -9 -16 -23 -31 -32 -27 -14 -29 -14 -50 15 -35 47 -88 105 -98 105 -5 0 -23 -13 -41 -29 l-32 -29 27 -38 c14 -22 41 -58 58 -81 l33 -43 -24 -25 c-13 -14 -29 -25 -36 -25 -13 0 -174 210 -174 228 0 6 66 61 148 123 81 62 149 116 152 119 3 4 14 12 25 17 27 16 44 2 125 -107z m-4640 -66 c20 -23 1 -68 -30 -72 -14 -1 -34 -5 -45 -7 -28 -6 -58 -60 -51 -90 14 -54 132 -137 193 -137 30 0 73 42 73 71 0 9 -7 26 -15 37 -20 26 -19 54 3 70 29 22 50 16 77 -23 37 -55 35 -117 -6 -172 -73 -102 -218 -92 -338 22 -45 44 -81 111 -81 152 0 27 28 92 49 115 46 48 144 68 171 34z m4801 -214 c44 -23 95 -93 105 -145 9 -51 -33 -135 -69 -135 -8 0 -22 9 -32 20 -16 18 -17 25 -7 54 7 18 12 43 12 55 0 31 -52 81 -84 81 -67 0 -162 -62 -187 -121 -21 -52 23 -119 78 -119 25 0 31 26 13 59 -12 24 14 61 44 61 17 0 30 -13 52 -52 49 -89 49 -85 -9 -121 -94 -60 -110 -63 -161 -33 -86 50 -131 145 -108 224 27 91 166 192 265 192 29 0 64 -8 88 -20z m-4977 -169 c155 -76 188 -100 205 -152 18 -54 -15 -145 -67 -184 -57 -42 -135 -21 -372 98 -47 24 -62 55 -40 83 20 24 47 17 175 -47 138 -68 178 -74 204 -28 29 51 11 74 -102 128 -56 27 -121 58 -144 68 -24 10 -45 26 -48 35 -7 19 21 68 38 68 6 0 74 -31 151 -69z m5180 -193 c8 -13 27 -57 42 -98 15 -41 31 -79 36 -84 4 -6 8 -24 8 -41 0 -24 -7 -35 -25 -45 -22 -12 -28 -12 -42 3 -16 15 -33 56 -54 125 -12 39 -31 49 -65 34 -29 -14 -31 -42 -4 -97 11 -22 19 -55 20 -72 0 -27 -5 -34 -25 -39 -39 -10 -49 -1 -74 69 -12 37 -29 71 -36 77 -16 14 -59 4 -78 -18 -14 -15 -14 -22 0 -57 48 -130 49 -136 28 -151 -23 -17 -49 -18 -62 -1 -12 15 -93 228 -93 245 0 13 51 38 150 72 36 13 69 27 75 32 5 4 15 8 23 8 14 0 39 10 112 43 46 21 47 21 64 -5z m-5398 -182 c7 -30 -11 -66 -33 -66 -22 0 -63 -39 -63 -61 0 -69 43 -65 95 7 55 78 78 94 134 94 83 0 146 -48 157 -121 5 -27 -1 -50 -20 -92 -34 -70 -76 -100 -138 -95 -43 3 -43 3 -43 43 0 32 4 40 20 43 53 8 64 14 79 47 19 40 10 69 -26 81 -22 7 -41 -10 -108 -94 -59 -76 -171 -70 -220 11 -38 61 -15 148 52 201 45 35 105 36 114 2z m1056 -2923 c10 -9 18 -20 18 -25 0 -5 -40 -62 -90 -128 -49 -66 -90 -126 -90 -134 0 -8 27 -34 60 -58 62 -45 75 -73 44 -98 -10 -10 -22 -11 -39 -4 -37 14 -185 135 -185 151 0 14 204 291 224 305 18 12 38 9 58 -9z m3246 -181 c5 -15 18 -56 27 -92 38 -143 47 -176 56 -198 27 -68 -13 -152 -72 -152 -23 0 -30 5 -35 26 -5 19 -2 29 10 36 9 5 16 21 16 37 0 24 -16 40 -120 117 -66 49 -120 93 -120 98 0 16 32 46 48 46 9 0 42 -20 73 -45 32 -25 63 -45 69 -45 13 0 6 45 -16 99 -20 47 -17 70 8 91 27 22 43 17 56 -18z m-3005 14 c40 -31 3 -85 -49 -72 -44 11 -25 85 21 85 6 0 18 -6 28 -13z m-62 -96 c10 -6 19 -17 19 -26 0 -14 -98 -174 -138 -224 -18 -23 -22 -24 -46 -11 -43 24 -39 37 71 204 45 67 58 76 94 57z m2563 -68 c3 -5 12 -58 21 -118 9 -60 23 -147 30 -194 l13 -85 -26 -23 c-15 -12 -36 -21 -47 -20 -12 2 -44 38 -82 93 -34 49 -68 92 -74 94 -9 3 -10 -28 -5 -121 l7 -124 -26 -12 c-15 -7 -36 -10 -46 -7 -15 5 -103 124 -118 160 -2 5 -24 38 -47 73 -67 96 -68 101 -48 123 19 22 59 25 68 7 3 -7 14 -25 24 -39 9 -15 30 -47 45 -73 16 -25 34 -46 39 -46 7 0 8 36 3 110 l-7 110 27 10 c55 21 67 14 123 -70 30 -44 58 -80 63 -80 14 0 11 78 -6 140 -8 30 -15 56 -15 58 0 4 64 42 72 42 4 0 9 -4 12 -8z m236 -7 c18 -9 43 -40 66 -83 21 -37 49 -82 63 -100 28 -39 21 -65 -20 -70 -13 -2 -38 -17 -55 -33 -82 -79 -187 -36 -170 70 3 22 20 47 51 77 26 24 44 48 40 54 -12 20 -40 9 -77 -31 -43 -47 -62 -47 -66 0 -5 45 18 74 79 105 62 31 53 30 89 11z m-2606 -44 c17 -16 42 -31 55 -33 13 -2 29 -11 35 -20 10 -17 6 -28 -98 -223 -40 -76 -82 -115 -123 -115 -72 0 -163 71 -163 127 0 20 6 36 14 39 23 9 73 -23 80 -50 7 -27 43 -43 71 -32 28 10 15 33 -28 50 -74 28 -97 102 -57 182 57 114 142 144 214 75z m230 23 c20 -8 20 -41 1 -87 -17 -41 -11 -49 39 -54 87 -9 103 -64 56 -194 -18 -50 -41 -100 -50 -112 -15 -19 -21 -20 -44 -9 -34 15 -33 36 4 125 17 39 30 83 28 97 -3 21 -8 25 -37 25 -37 0 -50 -18 -92 -127 -24 -62 -45 -73 -84 -45 -17 13 -17 15 1 63 10 27 24 60 31 74 7 14 13 29 13 34 0 14 71 190 82 204 11 13 28 15 52 6z m306 -137 c0 -1 -4 -18 -10 -37 -8 -28 -7 -37 10 -55 26 -27 17 -61 -18 -68 -23 -5 -30 -15 -45 -64 -21 -72 -21 -77 -2 -93 35 -29 6 -88 -38 -77 -63 16 -82 73 -52 157 14 40 16 62 14 131 -2 40 67 108 109 109 17 0 32 -1 32 -3z m253 -39 c9 -7 26 -40 38 -73 12 -33 25 -64 29 -69 5 -4 30 19 56 53 45 58 49 61 91 61 29 0 43 -4 43 -13 0 -8 -36 -60 -79 -117 -74 -96 -80 -108 -86 -164 -4 -34 -9 -68 -11 -77 -5 -19 -35 -29 -64 -22 -19 5 -20 12 -18 112 2 84 0 112 -14 136 -31 57 -70 163 -64 174 10 15 58 14 79 -1z m1043 -103 c10 -26 -5 -65 -25 -65 -10 0 -26 -9 -36 -20 -17 -19 -18 -26 -7 -79 7 -31 12 -76 12 -99 0 -36 -3 -42 -25 -48 -35 -9 -53 10 -60 64 -3 26 -12 75 -20 109 -21 87 -20 120 5 128 11 3 28 4 39 0 10 -3 24 1 31 10 16 20 79 20 86 0z m-237 -39 c15 -18 29 -103 32 -200 4 -90 -6 -106 -51 -89 -23 8 -33 8 -47 -3 -10 -7 -39 -14 -64 -14 -80 0 -108 57 -109 218 l0 83 37 -3 c44 -4 50 -18 52 -130 1 -89 34 -123 76 -81 14 13 17 34 15 112 -2 53 -2 102 -1 109 2 16 46 15 60 -2z m-335 -22 c31 -22 66 -92 66 -134 0 -42 -35 -112 -66 -134 -38 -27 -111 -31 -154 -9 -42 21 -78 83 -79 134 -2 66 43 139 99 162 28 12 107 0 134 -19z"/> <path d="M4903 7843 c-6 -5 -15 -33 -19 -63 -4 -30 -13 -84 -20 -120 -15 -75 -10 -87 47 -96 51 -9 84 24 104 101 21 84 19 110 -12 145 -28 31 -78 47 -100 33z"/> <path d="M5822 7484 c-45 -35 -72 -93 -72 -151 0 -57 5 -65 48 -87 30 -15 34 -15 65 0 60 31 106 108 107 177 0 78 -82 112 -148 61z"/> <path d="M4335 7270 c-33 -4 -106 -13 -162 -19 -57 -5 -111 -15 -122 -21 -11 -5 -35 -10 -53 -10 -18 0 -46 -7 -62 -15 -15 -8 -43 -15 -60 -15 -17 0 -40 -6 -51 -14 -11 -7 -31 -16 -45 -19 -30 -6 -82 -24 -130 -44 -19 -8 -48 -21 -65 -28 -95 -39 -288 -143 -293 -157 -2 -4 -8 -8 -12 -8 -25 0 -198 -129 -314 -234 -120 -109 -184 -177 -264 -281 -25 -33 -49 -62 -52 -65 -13 -12 -110 -161 -110 -170 0 -6 -4 -10 -8 -10 -4 0 -15 -15 -23 -32 -9 -18 -30 -60 -47 -93 -46 -88 -102 -213 -102 -228 0 -7 -4 -17 -8 -22 -22 -24 -94 -288 -113 -410 -23 -146 -28 -212 -28 -400 0 -239 14 -368 59 -540 12 -44 25 -96 30 -115 8 -30 30 -92 85 -241 24 -62 135 -271 193 -359 102 -157 264 -344 408 -471 125 -112 369 -275 492 -330 26 -11 70 -32 99 -45 28 -13 55 -24 60 -24 4 -1 26 -9 48 -20 22 -11 47 -19 56 -20 9 0 30 -7 45 -15 16 -8 39 -15 51 -15 12 0 24 -4 27 -9 4 -5 30 -12 59 -16 28 -4 61 -12 72 -18 10 -5 46 -14 80 -18 33 -4 83 -13 110 -19 65 -15 542 -15 610 0 28 6 80 14 116 19 36 5 75 13 86 20 12 6 37 11 55 11 18 0 46 7 62 15 15 8 36 15 45 15 9 0 29 7 45 15 15 8 37 15 48 15 11 0 32 6 46 14 15 8 47 22 72 31 25 9 52 21 60 26 8 5 26 14 40 20 78 33 100 44 100 51 0 4 5 8 11 8 14 0 183 101 187 112 2 4 8 8 14 8 9 0 107 72 158 116 14 12 48 41 75 65 242 210 467 526 590 824 9 22 20 47 24 55 4 8 18 49 30 90 12 41 27 84 32 95 9 21 21 69 45 193 7 40 16 77 19 82 10 16 29 270 28 385 0 189 -23 385 -59 507 -8 26 -14 55 -14 64 0 19 -36 138 -50 164 -4 9 -11 30 -14 48 -4 17 -12 34 -17 37 -5 4 -9 13 -9 22 0 34 -180 382 -202 391 -4 2 -8 8 -8 13 0 8 -42 70 -78 114 -4 6 -19 26 -32 45 -108 151 -396 415 -563 516 -27 16 -61 37 -75 46 -15 9 -44 26 -64 37 -20 11 -45 24 -55 30 -15 8 -106 50 -198 92 -25 11 -104 39 -130 46 -11 3 -34 11 -52 19 -17 8 -45 14 -61 14 -17 0 -33 4 -37 9 -3 6 -27 13 -53 16 -26 3 -69 12 -96 20 -26 8 -75 15 -108 15 -33 0 -68 4 -78 10 -24 13 -318 21 -395 10z m-441 -353 c26 -19 2 -35 -59 -39 -42 -3 -50 -6 -50 -23 0 -17 8 -20 53 -23 51 -3 53 -4 50 -30 -3 -25 -7 -27 -55 -30 -48 -3 -53 -5 -53 -26 0 -22 5 -24 65 -28 71 -4 78 -8 70 -31 -8 -19 -36 -27 -106 -27 -83 0 -91 10 -91 111 0 142 1 147 20 152 39 10 139 6 156 -6z m214 -15 c27 -27 28 -38 2 -54 -25 -16 -26 -34 -1 -47 22 -12 32 -56 20 -88 -10 -27 -58 -53 -97 -53 -42 0 -97 40 -97 70 0 35 32 38 62 6 28 -31 49 -33 62 -7 12 22 1 35 -40 44 -77 19 -106 94 -51 137 35 28 108 24 140 -8z m232 13 c16 -19 5 -32 -30 -37 -24 -3 -25 -5 -30 -103 -5 -99 -5 -100 -30 -100 -24 0 -25 3 -27 70 -5 116 -9 132 -43 139 -30 6 -41 30 -17 39 6 3 46 6 88 6 58 1 80 -3 89 -14z m342 -17 c35 -44 34 -66 -6 -107 -43 -44 -45 -57 -11 -65 31 -8 42 -31 25 -51 -22 -26 -152 -13 -158 16 -1 9 22 44 53 78 58 65 60 68 46 90 -7 11 -14 10 -40 -5 -23 -14 -34 -15 -42 -7 -17 17 -2 62 24 73 34 15 89 3 109 -22z m175 4 c27 -34 35 -67 28 -129 -6 -53 -11 -66 -37 -88 -33 -28 -46 -30 -82 -14 -29 13 -44 48 -47 104 -4 78 1 96 31 127 26 25 36 29 62 24 17 -3 37 -14 45 -24z m189 7 c23 -19 17 -88 -11 -125 -31 -40 -31 -52 -2 -56 17 -2 22 -10 22 -33 0 -30 -1 -30 -60 -33 -68 -3 -101 12 -91 44 3 10 26 41 51 67 43 47 56 79 35 92 -5 3 -20 -1 -32 -9 -28 -20 -44 -20 -52 0 -8 21 10 53 37 64 27 12 83 5 103 -11z m182 -61 c2 -43 8 -71 17 -78 20 -17 19 -37 -6 -71 -24 -34 -55 -38 -64 -9 -5 15 -15 20 -40 20 -43 0 -67 23 -56 53 8 20 69 115 94 145 5 7 20 12 31 10 19 -3 21 -11 24 -70z m-811 -144 c4 -11 -1 -22 -13 -31 -16 -12 -20 -12 -31 3 -6 9 -9 22 -6 30 7 19 42 18 50 -2z m1508 -228 c18 -8 42 -27 52 -42 17 -27 18 -79 18 -1119 0 -1210 4 -1125 -67 -1310 -25 -64 -94 -191 -130 -240 -40 -55 -158 -182 -209 -225 -35 -30 -66 -57 -69 -61 -9 -10 -165 -124 -220 -161 -63 -42 -239 -148 -245 -148 -2 0 -30 -15 -62 -34 -57 -33 -154 -84 -385 -205 -65 -33 -124 -61 -132 -61 -16 0 -180 84 -461 235 -121 65 -158 86 -228 129 -37 22 -76 46 -85 51 -125 75 -344 247 -428 338 -121 131 -221 288 -262 412 -61 184 -57 86 -57 1280 0 871 3 1095 13 1113 7 13 28 32 45 42 31 19 64 20 1455 20 1205 0 1428 -2 1457 -14z"/> <path d="M4013 6864 c-6 -17 12 -34 39 -34 27 0 30 17 6 34 -28 20 -37 20 -45 0z"/> <path d="M4790 6855 c-12 -15 -10 -118 3 -131 16 -16 27 13 27 71 0 67 -9 85 -30 60z"/> <path d="M3176 6264 c-3 -9 -6 -462 -6 -1007 0 -939 1 -996 19 -1067 42 -166 115 -291 250 -427 157 -159 385 -318 691 -481 220 -117 330 -172 344 -172 21 0 384 188 503 261 35 22 66 39 69 39 3 0 58 34 122 76 203 133 337 249 431 374 64 86 77 106 91 137 5 13 19 42 30 65 11 23 28 71 38 107 16 61 17 146 17 1086 l0 1020 -1296 3 c-1176 2 -1297 1 -1303 -14z m2532 -994 c2 -634 -1 -949 -8 -1003 -35 -243 -204 -467 -515 -679 -86 -58 -217 -138 -305 -186 -30 -16 -75 -41 -100 -54 -97 -54 -261 -139 -284 -148 -21 -8 -45 1 -148 54 -68 34 -150 77 -183 96 -33 18 -80 44 -105 57 -437 239 -694 483 -783 743 -9 25 -21 80 -26 123 -15 107 -15 1881 -1 1908 11 19 33 19 1233 17 l1222 -3 3 -925z"/> <path d="M4437 6074 c-53 -53 -59 -140 -16 -223 25 -48 19 -96 -13 -106 -41 -14 -84 4 -113 45 -15 22 -32 40 -36 40 -5 0 -22 -19 -39 -42 -50 -69 -36 -154 36 -218 40 -35 74 -39 81 -10 7 28 20 25 49 -9 32 -38 83 -55 139 -46 35 5 51 14 75 43 16 20 33 51 36 69 3 18 10 36 15 38 11 7 29 -28 29 -56 0 -22 0 -22 21 -3 49 45 63 146 30 219 -10 24 -50 68 -95 109 -46 41 -90 92 -108 123 -34 60 -52 66 -91 27z"/> <path d="M3882 5732 c-16 -11 -29 -92 -16 -92 6 0 15 14 21 31 l12 31 107 -7 c88 -6 106 -5 102 6 -3 9 -26 16 -59 20 -30 3 -76 9 -104 13 -27 4 -56 3 -63 -2z"/> <path d="M4985 5734 c-5 -2 -41 -7 -79 -11 -45 -5 -71 -13 -74 -22 -4 -12 13 -13 99 -7 57 3 109 3 115 -1 6 -5 14 -25 18 -45 4 -21 12 -38 18 -38 17 0 3 88 -17 110 -16 18 -54 25 -80 14z"/> <path d="M3962 5609 c5 -15 163 -47 175 -36 12 12 -7 21 -60 28 -29 3 -67 10 -86 14 -27 6 -33 5 -29 -6z"/> <path d="M4916 5613 c-4 -4 -30 -10 -58 -13 -58 -6 -81 -31 -26 -29 52 1 131 23 136 37 4 13 -39 17 -52 5z"/> <path d="M3775 5598 c-9 -27 -33 -126 -50 -203 -9 -44 -23 -102 -30 -130 -7 -27 -21 -86 -30 -130 -10 -44 -22 -93 -26 -109 -17 -56 -12 -74 24 -81 68 -13 173 -36 202 -44 17 -5 64 -19 105 -31 90 -26 161 -51 175 -60 6 -4 21 -11 35 -15 14 -4 58 -24 99 -43 59 -28 75 -32 82 -21 8 13 -25 59 -42 59 -5 0 -32 11 -61 24 -96 45 -133 60 -157 65 -35 8 -39 31 -6 31 37 0 143 -35 217 -71 26 -13 30 -11 26 12 -2 14 -16 26 -43 36 -180 67 -304 101 -445 123 -41 6 -83 14 -92 16 -22 6 -23 38 -4 102 7 26 21 81 31 122 9 41 23 103 32 137 14 57 14 64 -1 87 -9 15 -16 46 -16 75 0 47 -15 77 -25 49z"/> <path d="M3837 5603 c-10 -10 -8 -81 2 -87 10 -7 21 27 21 67 0 26 -9 34 -23 20z"/> <path d="M5150 5540 c0 -35 -7 -74 -15 -90 -16 -31 -12 -60 30 -225 52 -202 54 -186 -25 -207 -36 -9 -80 -16 -99 -17 -19 -1 -57 -7 -85 -15 -28 -8 -87 -25 -131 -37 -44 -12 -87 -26 -95 -30 -8 -4 -41 -18 -74 -31 -55 -21 -77 -41 -62 -55 3 -4 16 -2 29 4 20 10 41 18 137 53 55 20 123 25 118 9 -3 -8 -18 -15 -36 -17 -17 -2 -36 -10 -42 -18 -7 -8 -20 -14 -29 -14 -9 0 -54 -19 -101 -43 -64 -32 -86 -47 -88 -64 -5 -31 8 -29 97 13 105 51 167 76 249 103 101 32 294 81 321 81 11 0 31 4 44 9 l25 10 -24 103 c-13 57 -33 146 -45 198 -12 52 -25 109 -29 125 -4 17 -15 66 -25 110 -23 107 -23 105 -35 105 -6 0 -10 -26 -10 -60z"/> <path d="M5095 5570 c-9 -15 5 -91 16 -84 12 7 12 81 0 89 -5 3 -13 1 -16 -5z"/> <path d="M3930 5495 c0 -11 12 -15 51 -15 27 0 72 -7 100 -16 49 -16 86 -13 74 6 -3 5 -18 10 -33 10 -15 0 -45 7 -67 15 -55 20 -125 20 -125 0z"/> <path d="M4910 5503 c-14 -3 -29 -9 -34 -14 -6 -5 -27 -9 -47 -9 -21 0 -41 -5 -44 -10 -12 -19 25 -22 77 -6 29 9 71 17 92 18 49 4 63 29 14 27 -18 -1 -44 -4 -58 -6z"/> <path d="M4251 5416 c-19 -23 -2 -64 40 -98 21 -17 43 -46 50 -65 l11 -34 121 3 122 3 0 33 c0 28 5 36 31 47 59 24 97 104 58 119 -9 3 -107 6 -219 6 -162 0 -205 -3 -214 -14z"/> <path d="M3912 5379 c3 -8 26 -17 59 -21 30 -3 87 -13 127 -21 59 -12 72 -12 72 -1 0 7 -16 15 -37 19 -21 3 -51 10 -68 16 -16 5 -59 13 -94 16 -52 5 -63 4 -59 -8z"/> <path d="M4895 5375 c-27 -8 -67 -17 -87 -20 -24 -4 -38 -11 -38 -20 0 -15 31 -13 100 7 19 6 62 13 95 17 33 3 60 11 60 16 0 15 -74 15 -130 0z"/> <path d="M3892 5258 c3 -7 24 -16 49 -19 68 -10 161 -29 194 -41 17 -5 41 -12 55 -15 14 -3 39 -11 57 -19 36 -16 53 -18 53 -4 0 13 -87 50 -119 50 -14 0 -35 7 -45 15 -11 8 -34 15 -52 15 -18 0 -59 7 -91 15 -71 18 -106 19 -101 3z"/> <path d="M4955 5259 c-22 -6 -64 -13 -93 -18 -28 -4 -57 -12 -64 -19 -7 -7 -25 -12 -41 -12 -40 0 -122 -39 -109 -52 6 -6 20 -4 40 6 17 9 41 16 54 16 13 0 36 7 52 15 15 8 40 15 55 15 14 0 42 5 61 11 19 6 60 14 90 17 30 4 55 12 55 17 0 14 -51 15 -100 4z"/> <path d="M4396 5162 c-2 -4 2 -66 10 -137 8 -72 19 -177 24 -234 6 -73 14 -109 25 -120 15 -15 17 -14 29 2 12 16 36 162 36 218 0 13 -7 42 -15 64 -8 22 -14 65 -15 96 0 31 -3 71 -6 88 -6 28 -10 31 -45 31 -21 0 -40 -3 -43 -8z"/> <path d="M4526 5154 c-9 -23 -7 -77 3 -92 9 -14 21 28 21 74 0 28 -16 40 -24 18z"/> <path d="M3867 5143 c-14 -14 -6 -23 21 -23 15 0 52 -7 82 -15 30 -8 69 -15 87 -15 17 0 34 -4 38 -9 3 -5 20 -12 38 -16 40 -8 126 -35 149 -46 22 -11 48 -12 48 -1 -1 9 -66 42 -84 42 -8 0 -27 7 -42 15 -16 8 -42 15 -59 15 -16 1 -41 7 -55 15 -14 8 -41 15 -60 15 -19 0 -53 7 -75 15 -44 15 -78 19 -88 8z"/> <path d="M4980 5135 c-25 -8 -58 -15 -75 -15 -16 0 -43 -7 -59 -15 -15 -8 -38 -15 -49 -15 -32 0 -139 -39 -167 -60 -20 -16 -22 -20 -7 -20 9 0 25 4 35 9 26 13 83 32 122 41 19 4 49 13 65 18 32 11 124 31 193 41 23 3 44 11 45 16 3 16 -54 16 -103 0z"/> <path d="M3354 4726 c-3 -8 -4 -124 -2 -258 4 -241 5 -244 33 -313 78 -189 239 -351 559 -560 115 -75 506 -285 531 -285 7 0 41 15 76 33 151 80 265 140 274 147 6 4 42 24 80 45 92 50 222 135 315 206 203 156 320 309 364 479 14 54 16 104 14 290 l-3 225 -140 0 c-135 0 -140 -1 -136 -20 18 -104 11 -134 -44 -200 -23 -28 -29 -30 -95 -30 -63 0 -72 3 -97 28 -22 22 -28 37 -28 71 0 78 70 125 134 91 39 -20 50 -58 27 -96 -14 -24 -15 -29 -3 -29 21 0 47 44 47 79 0 33 -43 76 -87 87 -57 15 -143 -42 -143 -94 0 -11 -9 -31 -20 -45 l-21 -26 -513 -1 c-570 0 -535 -5 -550 67 -14 64 -91 114 -151 99 -40 -10 -85 -62 -85 -97 0 -16 4 -29 9 -29 5 0 11 -9 14 -20 3 -11 10 -20 16 -20 14 0 14 27 1 35 -31 19 7 89 55 101 92 23 151 -109 79 -177 -21 -20 -36 -24 -89 -24 -70 0 -89 11 -131 77 -26 41 -33 115 -13 135 7 7 9 19 6 27 -9 23 -275 24 -283 2z m1697 -222 c58 -55 69 -54 -577 -54 -580 0 -594 0 -594 19 0 11 12 29 26 40 26 21 35 21 572 21 l546 0 27 -26z m-62 -108 c8 -9 11 -116 9 -372 l-3 -359 -49 -33 c-78 -52 -76 -58 -76 300 0 194 -4 317 -10 329 -12 22 -59 26 -78 7 -9 -9 -12 -103 -12 -363 0 -382 2 -367 -60 -404 -74 -44 -70 -67 -70 367 0 288 -3 391 -12 400 -7 7 -25 12 -40 12 -22 0 -31 -6 -39 -27 -6 -17 -9 -172 -8 -427 l2 -400 -29 -23 c-36 -29 -46 -29 -79 0 l-26 22 1 401 c0 246 -3 411 -9 428 -8 20 -17 26 -39 26 -15 0 -33 -5 -40 -12 -9 -9 -12 -111 -12 -399 0 -216 -4 -390 -9 -393 -12 -8 -99 42 -111 63 -5 11 -8 159 -7 355 2 224 -1 345 -8 359 -13 27 -57 34 -79 12 -14 -14 -16 -54 -16 -328 0 -172 -4 -318 -9 -326 -7 -12 -17 -9 -55 13 -25 15 -50 35 -56 46 -11 20 -15 696 -4 724 5 14 60 16 514 16 417 0 510 -2 519 -14z"/> <path d="M3804 4565 c-4 -8 -12 -15 -20 -15 -8 0 -14 -4 -14 -10 0 -5 2 -10 5 -10 12 0 55 33 55 41 0 15 -20 10 -26 -6z"/> <path d="M5120 4570 c0 -15 58 -42 65 -30 3 6 -3 10 -13 10 -11 0 -22 7 -26 15 -6 17 -26 21 -26 5z"/> <path d="M5841 2521 c-25 -22 -27 -56 -5 -65 22 -8 54 21 54 49 0 31 -24 38 -49 16z"/> <path d="M3160 2607 c-50 -39 -64 -101 -31 -131 39 -35 101 19 101 88 0 48 -36 70 -70 43z"/> <path d="M4387 2261 c-35 -59 -11 -131 43 -131 36 0 60 32 60 80 0 76 -68 110 -103 51z"/> </g> </svg> 
    )
  }
}