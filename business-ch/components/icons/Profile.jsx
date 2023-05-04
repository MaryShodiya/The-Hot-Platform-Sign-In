import * as React from "react";
import Image from 'next/image'
import picture from '../icons/picture.jpeg'

function Profile() {
  return (
 <Image className="w-10 h-10 rounded-full  ml-9 mr-6 mt-4" src={picture} />
  );
}

export default Profile;