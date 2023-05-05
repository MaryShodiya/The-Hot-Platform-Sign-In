import * as React from "react";
import Image from 'next/image'
import logo from '../icons/logo.png'

function Logo() {
  return (
 <Image src={logo} height={100} width={100} alt="logo" />
  );
}

export default Logo;